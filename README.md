# Dev Sync

A full-stack monorepo project built with modern technologies including Next.js, Hono, Prisma, and Clerk authentication.

## Project Structure

This repository is organized as a monorepo using pnpm workspaces, allowing multiple applications and packages to be managed within a single repository.

### Apps

-   **web**: A Next.js web application with Clerk authentication, React Query, and Tailwind CSS
-   **api**: A Hono-based REST API with Prisma database integration and Clerk webhook support

### Packages

-   **db**: Shared Prisma database client and schema for type-safe database operations

## Key Features

-   ✅ **Clerk Authentication**: Complete SSO integration with GitHub OAuth for seamless user authentication
-   ✅ **OAuth Integration**: GitHub OAuth provider configured for secure social login
-   ✅ **Prisma ORM**: PostgreSQL database with migrations and type-safe queries
-   ✅ **API Integration**: Hono backend with webhook support for Clerk events
-   ✅ **React Query**: Data fetching and caching library for the frontend
-   ✅ **Docker Support**: Docker Compose setup for local development with PostgreSQL

## Setup

### Prerequisites

-   [Node.js](https://nodejs.org/) (v18 or higher)
-   [pnpm](https://pnpm.io/) package manager
-   [Docker](https://www.docker.com/) (for running PostgreSQL)

### Installation

Install dependencies across all workspaces:

```bash
pnpm install
```

### Environment Variables

Copy the example environment file and update with your values:

```bash
cp env-example .env.local
```

Required environment variables:

-   `DATABASE_URL`: PostgreSQL connection string
-   `CLERK_WEBHOOK_SIGNING_SECRET`: Webhook signing secret from Clerk dashboard

## Development

### Running the Development Stack

Start all services (web, api, and PostgreSQL):

```bash
pnpm run dev:up
```

This will start:

-   **Web App**: http://localhost:3000
-   **API Server**: http://localhost:8000
-   **PostgreSQL Database**: localhost:5432

### Running Individual Services

**Web Application:**

```bash
pnpm --filter web dev
```

**API Server:**

```bash
pnpm --filter api dev
```

**Database Migrations:**

```bash
pnpm --filter db db:migrate
```

**Prisma Studio (Database UI):**

```bash
pnpm --filter db db:studio
```

## Architecture

### Frontend (Next.js)

-   Clerk authentication with GitHub OAuth provider
-   Secure user session management
-   React Query for server state management
-   Tailwind CSS for styling
-   Type-safe API integration with Axios

### Backend (Hono)

-   RESTful API endpoints
-   Clerk webhook handling for user creation
-   Prisma database operations
-   Zod validation for request payloads

### Database (PostgreSQL + Prisma)

-   User model with auth integration
-   Automated migrations
-   Type-safe queries through Prisma Client

## Contributing

When working with this monorepo:

-   Use `pnpm --filter <workspace-name>` to run commands in specific workspaces
-   Use `pnpm` without filters to run commands across all workspaces
-   Always commit your `pnpm-lock.yaml` file to maintain dependency consistency
-   Run database migrations after schema changes: `pnpm --filter db db:migrate`
