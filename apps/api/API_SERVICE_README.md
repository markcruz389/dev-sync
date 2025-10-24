# API Service

RESTful API with type-safe request validation, OAuth integration, and webhook handling. Built on Hono framework with Zod schema validation and Prisma database access.

**Stack:** Hono 4.10.1 | TypeScript | Zod 4.1.12 | Prisma | Clerk | JWT

---

## Architecture

### Components

| Component         | Role                            |
| ----------------- | ------------------------------- |
| `apps/api`        | REST API server                 |
| `packages/db`     | Prisma client & database access |
| `packages/queue`  | Background job enqueuing        |
| Clerk             | Authentication provider         |
| GitHub OAuth      | Third-party OAuth flow          |
| External Services | Webhooks, integrations          |

### Flow

```
┌────────────────────────────────────────────────────────────────────┐
│                         Request Flow                               │
└────────────────────────────────────────────────────────────────────┘

Client (Web/Mobile)
    │
    ▼
┌──────────────────────┐
│  HTTP Request        │
│  GET/POST /api/*     │
└──────┬───────────────┘
       │
       ▼
┌──────────────────────────────────┐
│  Hono Router                     │
│  Route matching & middleware     │
└──────┬───────────────────────────┘
       │
       ▼
┌──────────────────────────────────┐
│  Feature Handler                 │
│  • auth: OAuth flows             │
│  • users: User CRUD              │
│  • webhooks: Event processing    │
└──────┬───────────────────────────┘
       │
       ├─────────────┬──────────────┬─────────────┐
       │             │              │             │
       ▼             ▼              ▼             ▼
   Validate      Authenticate   Query/Mutate  Enqueue Job
   (Zod)        (JWT/Clerk)     (Prisma)      (BullMQ)
       │             │              │             │
       └─────────────┴──────────────┴─────────────┘
                     │
                     ▼
            ┌─────────────────────┐
            │  Database           │
            │  (Prisma ORM)       │
            └──────┬──────────────┘
                   │ read/write
                   ▼
            ┌─────────────────────┐
            │  PostgreSQL         │
            └─────────────────────┘

HTTP Response
    │
    ▼
Client

Benefits: Type-safe validation, scalable routing, background processing, centralized auth
```

## Type Safety

Request/response validation at compile-time and runtime. Zod schemas validate HTTP payloads. TypeScript enforces type contracts for handlers and middleware.

**Validation layers:**

-   Request: Zod schema with `zValidator` middleware
-   Response: TypeScript type inference on Hono context
-   Database: Prisma type-safe queries
-   Job Enqueue: Type-safe job names and payloads from `@devsync/queue`

**TypeScript prevents:**
✅ Invalid request properties  
✅ Missing required fields  
✅ Type mismatches in handlers  
✅ Database query errors  
✅ Wrong job payloads

## Implementation

### Package Structure

**`apps/api/src/`**

-   `index.ts` — Server setup, route registration, graceful shutdown
-   `features/` — Feature modules (auth, users, webhooks)
-   `features/{feature}.ts` — Route handlers for each feature

**Feature modules:**

-   `auth.ts` — OAuth flows (GitHub), token exchanges, redirects
-   `users.ts` — User CRUD operations (create, read, update, delete)
-   `webhooks.ts` — Webhook handlers (Clerk events, external services)

### Add a Route

1. Create feature file in `apps/api/src/features/{feature}.ts`:

    ```typescript
    const payload = z.object({ field: z.string() });
    const app = new Hono();

    app.post("/", zValidator("json", payload), async (c) => {
        const data = c.req.valid("json");
        const result = await prisma.model.create({ data });
        return c.json(result);
    });

    export default app;
    ```

2. Register in `apps/api/src/index.ts`: `app.route("/api/feature", feature);`

### Enqueue a Background Job

```typescript
await addJob(JobName.YourJob, { userId, data }, { retries: 3 });
return c.json({ queued: true });
```

## Configuration

| Var                            | Purpose              | Dev              | Prod                      |
| ------------------------------ | -------------------- | ---------------- | ------------------------- |
| `API_PORT`                     | Server port          | 8888             | 8080 or via load balancer |
| `GITHUB_CLIENT_ID`             | GitHub OAuth client  | development id   | production id             |
| `GITHUB_CLIENT_SECRET`         | GitHub OAuth secret  | development key  | production key            |
| `GITHUB_STATE_SECRET`          | JWT secret for state | dev secret       | strong random secret      |
| `CLERK_WEBHOOK_SIGNING_SECRET` | Clerk webhook secret | dev secret       | production secret         |
| `WEB_APP_BASE_URL`             | Frontend app URL     | http://localhost | https://app.example.com   |
| `DATABASE_URL`                 | Prisma database URL  | local dev db     | managed service URL       |
| `REDIS_HOST`                   | Redis hostname       | redis            | managed service URL       |
| `REDIS_PORT`                   | Redis port           | 6379             | 6379                      |

**Docker setup:** `docker-compose.dev.yml` runs API + Redis + database + worker

**Production:** Use managed services for database (RDS, Azure DB) and Redis (ElastiCache, Redis Cloud). Enable TLS, auth, backups.

## Features

### Authentication (`/api/auth`)

OAuth flow with GitHub. Exchanges authorization code for access token. Links OAuth provider to user account.

**Endpoints:**

-   `GET /api/auth/github` — Redirect to GitHub login
    -   Query: `state` (JWT-encoded user ID)
    -   Returns: 302 redirect to GitHub
-   `GET /api/auth/github/callback` — Handle OAuth callback
    -   Query: `code` (GitHub auth code), `state` (JWT-encoded user ID)
    -   Returns: 302 redirect to dashboard with query param

**Flow:**

1. Frontend generates JWT state token with user ID
2. Initiates auth flow to `GET /api/auth/github?state={token}`
3. Redirects to GitHub login screen
4. GitHub redirects back to `/api/auth/github/callback?code={code}&state={state}`
5. API verifies state, exchanges code for access token
6. Saves token to `UsersOauth` table
7. Redirects to dashboard

### Users (`/api/users`)

Create and manage user accounts. Accepts user data and persists to database.

**Endpoints:**

-   `POST /api/users` — Create user
    -   Body: `{ authId: string, email: string, firstName?: string, lastName?: string }`
    -   Returns: `{ success: true }`
    -   Validation: Zod schema ensures email is valid, authId is non-empty string

### Webhooks (`/api/webhooks`)

Receive and process events from external services. Verifies webhook signatures. Routes events to handlers.

**Endpoints:**

-   `POST /api/webhooks/clerk` — Handle Clerk user events
    -   Body: Clerk webhook payload (signed)
    -   Validates: `CLERK_WEBHOOK_SIGNING_SECRET`
    -   Processing: `user.created` → creates user in database
    -   Returns: User object or error

**Webhook types:**

-   `user.created` — New user signed up via Clerk, create database record
-   Other events return 200 OK without processing

## Patterns

### Request Validation

```typescript
const schema = z.object({ email: z.email(), name: z.string().min(1) });
app.post("/", zValidator("json", schema), async (c) => {
    const data = c.req.valid("json"); // Type-safe, validated
    return c.json({ ok: true });
});
```

### Database Queries

```typescript
const user = await prisma.user.create({ data: { email, name } });
const found = await prisma.user.findUnique({ where: { id } });
const updated = await prisma.user.update({ where: { id }, data: { email } });
```

### Error Handling

```typescript
try {
    const user = await prisma.user.findUniqueOrThrow({ where: { id } });
} catch (error) {
    return c.json({ error: "Not found" }, 404);
}
if (!token) return c.json({ error: "Invalid credentials" }, 401);
```

## Scaling

| Need                  | Solution                                             |
| --------------------- | ---------------------------------------------------- |
| Handle more requests  | Run multiple API instances behind load balancer      |
| Improve response time | Move long operations to background jobs (BullMQ)     |
| Database performance  | Add read replicas, caching layer (Redis)             |
| Rate limiting         | Implement rate limiter middleware                    |
| Authentication        | Use OAuth providers (Clerk, Auth0) instead of custom |
| Webhook reliability   | Implement retries, dead-letter queue, monitoring     |
| Logging/monitoring    | Aggregate logs (ELK, Datadog), set up alerts         |

## New Routes

1. Create feature file or add to existing in `apps/api/src/features/{feature}.ts`
2. Define Zod schema for request validation
3. Implement route handlers with validation middleware
4. Register in `apps/api/src/index.ts`

TypeScript enforces types throughout. Takes ~5 minutes per simple endpoint.

## Testing

**Unit:** Mock requests, Prisma calls, external services.

**Integration:** Real HTTP requests, verify database state.

**Types:** Use TypeScript compiler to verify schema/handler type safety.

**Example:**

```typescript
const res = await fetch("http://localhost:8888/api/users", {
    method: "POST",
    body: JSON.stringify({ authId: "123", email: "test@example.com" }),
});
expect(res.status).toBe(200 | 400); // Expected status
```

## Troubleshooting

| Issue                  | Check                                            |
| ---------------------- | ------------------------------------------------ |
| Route not found (404)  | Registered in index.ts, path matches             |
| Validation fails       | Zod schema matches request body structure        |
| Database error         | Database URL valid, migrations applied           |
| OAuth fails            | Credentials set, redirect URI matches GitHub app |
| Webhook not received   | Webhook URL public, signing secret matches       |
| Slow responses         | Move to background job, add caching, optimize DB |
| Type errors at compile | Zod schema matches TypeScript types              |

## Best Practices

-   **Validate early** — Use Zod for all user input
-   **Type everything** — Leverage TypeScript for compile-time safety
-   **Error handling** — Return appropriate HTTP status codes (400, 404, 500, etc.)
-   **Logging** — Log requests, errors, and important events
-   **Authentication** — Use OAuth providers (Clerk), validate tokens
-   **Database** — Use transactions for consistency, handle unique constraints
-   **Background jobs** — Move long-running operations to BullMQ worker
-   **CORS** — Configure for frontend domain
-   **Rate limiting** — Prevent abuse
-   **Documentation** — Document API endpoints, payloads, error codes
-   **Testing** — Test routes, error cases, edge conditions
-   **Security** — Validate inputs, sanitize outputs, use HTTPS in production

---

## Summary

Type-safe REST API with Hono, Zod validation, Prisma ORM, and OAuth integration. Supports background job enqueuing for long-running operations. Webhook processing for external service events. Production-ready with error handling, logging, and graceful shutdown.

**See also:** `BACKGROUND_JOB_SERVICE_README.md` (background jobs)
