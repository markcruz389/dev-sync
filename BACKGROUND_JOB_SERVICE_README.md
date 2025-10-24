# Background Job Service

Type-safe background job processing with BullMQ and Redis. Fully typed job definitions, payloads, and handlers with compile-time validation.

**Stack:** BullMQ 5.61.2 | ioredis 5.8.2 | TypeScript | Redis

---

## Architecture

### Components

| Component        | Role                                 |
| ---------------- | ------------------------------------ |
| `packages/queue` | Type-safe queue API (enqueue/worker) |
| `apps/worker`    | Standalone job processor             |
| Redis            | Message broker & job store           |
| `apps/api`       | Enqueues jobs via queue package      |

### Flow

```
┌────────────────────────────────────────────────────────────────────┐
│                         Request Flow                               │
└────────────────────────────────────────────────────────────────────┘

Client Request
    │
    ▼
┌──────────────┐
│   API Service│
│  (apps/api)  │
└──────┬───────┘
       │ enqueue job
       ▼
┌──────────────────────┐      Type Checked
│  Queue Package       │      ✓ Job name valid
│ (packages/queue)     │      ✓ Payload matches
│                      │      ✓ Handler exists
└──────┬───────────────┘
       │ job + metadata
       ▼
   ┌────────────────────────────────┐
   │         Redis                  │
   │  (Message Broker & Job Store)  │
   │                                │
   │  Queue: github, email, etc.    │
   │  Persists job state            │
   │  Handles retries               │
   └────────────┬───────────────────┘
                │ pick up job
                ▼
    ┌───────────────────────┐
    │  Worker Service       │
    │  (apps/worker)        │
    │  (Scalable: N copies) │
    └───────────┬───────────┘
                │ execute handler
                ▼
    ┌───────────────────────┐
    │  Handler             │
    │  (Job Logic)         │
    │                      │
    │  • Fetch data        │
    │  • Transform         │
    │  • Save/Persist      │
    └───────────┬───────────┘
                │ result/error
                ▼
            Success ─────► Redis stores completion status
               │
            Failure ─────► Retry logic
               │              │
               ├─ Retries left: requeue
               │
               └─ No retries: Dead-letter queue

Benefits: API responsive, parallel processing, retry resilience, audit trail
```

## Type Safety

Compile-time validation of job names, payloads, and handlers. Mapped types link job names to payload types. Generic type inference validates payloads at enqueue-time. Handlers required per job.

**Validation layers:**

-   Definition: Enum + payload type + type mapping
-   Enqueue: Job name exists, payload shape matches
-   Processing: All jobs have handlers, signatures correct

**TypeScript prevents:**
✅ Job name typos  
✅ Missing payload properties  
✅ Wrong handler signatures  
✅ Unimplemented handlers  
✅ Property typos in handlers

## Implementation

### Package Structure

**`packages/queue/{domain}/`**

-   `types.ts` — Job enum, payload types, type mapping
-   `queue.ts` — Queue instance, `addJob()` function
-   `worker.ts` — `createWorker()` factory function

**`apps/worker/`**

-   `src/index.ts` — Initialize workers, register handlers
-   `src/{domain}/` — Handler implementations
-   `src/_lib/bullmq.ts` — Worker utilities
-   `src/_utils/logger.ts` — Logging

### Add a Job

1. Define in `packages/queue/{domain}/types.ts`:

    ```typescript
    enum JobName { NewJob = "newJob" }
    type NewJobPayload = { ... }
    type JobPayloads = { [JobName.NewJob]: NewJobPayload }
    ```

2. Implement handler in `apps/worker/src/{domain}/handler.ts`:

    ```typescript
    export const handler = async (data: NewJobPayload) => { ... }
    ```

3. Register in `apps/worker/src/index.ts`:
    ```typescript
    createWorker({ [JobName.NewJob]: handler });
    ```

TypeScript enforces all three steps.

### Enqueue a Job

```typescript
import { addJob, JobName } from "@devsync/queue"

await addJob(JobName.NewJob, { ... }, { retries: 3, delay: 1000 })
```

Available options: `retries`, `delay`, `attempts`, `timeout`, `repeat`, `backoff`, `priority`.

## Configuration

| Var          | Purpose        | Dev         | Prod                |
| ------------ | -------------- | ----------- | ------------------- |
| `NODE_ENV`   | Environment    | development | production          |
| `REDIS_HOST` | Redis hostname | redis       | managed service URL |
| `REDIS_PORT` | Redis port     | 6379        | 6379                |

**Docker setup:** `docker-compose.dev.yml` runs Redis + worker + API

**Production:** Use managed Redis (ElastiCache, Azure Cache). Enable persistence, auth, encryption. Run multiple worker instances.

## Patterns

### Enqueue from API

```typescript
import { addJob, JobName } from "@devsync/queue";

// In API handler
await addJob(JobName.SyncData, {
    userId: req.user.id,
    dataSource: "external-api",
});
// Return immediately, job processes async
```

### Handler Implementation

-   Keep focused: fetch → transform → save
-   Idempotent: safe to retry multiple times
-   Use database transactions for consistency
-   Log with user/resource IDs for debugging
-   Throw on retriable errors, log on non-retriable

### Error Handling

-   BullMQ auto-retries on handler throw
-   Configure: `{ retries: 5, backoff: { type: "exponential", delay: 1000 } }`
-   Dead-letter queue captures failed jobs after retries
-   Monitor logs: worker logs completion/failure to stdout

---

## Type Safety Benefits

**Compile-time guarantees:** Job name typos, missing properties, wrong signatures, unimplemented handlers all caught before deployment.

**DX:** IDE autocomplete for job names. Hover to see payload shape. Refactoring safe—rename in enum and TypeScript finds all references.

**Production safety:** Silent failures in background jobs go unnoticed for days. Type system prevents entire bug categories.

## Scaling

| Need              | Solution                                               |
| ----------------- | ------------------------------------------------------ |
| Handle more jobs  | Run multiple worker instances (BullMQ handles locking) |
| Prioritize jobs   | Set `priority` option (higher = earlier)               |
| Long-running jobs | Increase `timeout` option                              |
| Failed jobs       | Review dead-letter queue, fix, manually retry          |
| Rate limiting     | Use `delay` option or throttle in handler              |
| Job monitoring    | Aggregate logs, alert on failures, track queue depth   |

## New Jobs

1. Add enum + payload type to `packages/queue/{domain}/types.ts`
2. Implement handler in `apps/worker/src/{domain}/`
3. Register in `apps/worker/src/index.ts`

TypeScript enforces all three. Takes ~2 minutes.

## Testing

**Unit:** Call handlers directly with mock payloads. Mock database/API calls.

**Integration:** Spin up Redis in test container. Enqueue real jobs, verify processing.

**Types:** Use `tsd` to test TypeScript—define cases that should/shouldn't compile.

## Troubleshooting

| Issue                   | Check                                                |
| ----------------------- | ---------------------------------------------------- |
| Worker not processing   | Redis connection, worker logs, queue depth           |
| Jobs failing repeatedly | Handler logs, logic errors, payload validation       |
| High memory             | Redis memory, queue depth, `removeOnComplete` option |
| Missing handler errors  | Ensure handler registered in `src/index.ts`          |
| Type errors at compile  | Verify payload type matches job definition           |

## Best Practices

-   **One job = one handler** — Keep focused
-   **Idempotent** — Safe to retry. Use upserts, not inserts
-   **Validate** — Runtime validation with Zod even with TS types
-   **Log** — Include user/resource IDs, not just error messages
-   **Timeouts** — Configure for job duration, not just use defaults
-   **Monitor** — Alerts for failures, queue growth, worker availability
-   **Document** — What it does, typical duration, when it runs

---

## Summary

Type-safe, scalable background job processing. Compile-time validation prevents job name typos, missing properties, wrong handlers, and unimplemented jobs. Production-ready with retry logic, error handling, horizontal scaling.

**See also:** `TYPESCRIPT_TYPE_SAFETY_EXPLAINED.md` (type mechanics), `WORKER_SERVICE_SETUP_REVIEW.md` (file structure)
