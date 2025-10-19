# Dev Sync

A monorepo project configured with pnpm workspaces.

## Project Structure

This repository is organized as a monorepo using pnpm workspaces, allowing multiple applications and packages to be managed within a single repository.

### Apps

-   **web**: A Next.js web application

### Packages

Shared packages and utilities can be added to the `packages/` directory.

## Setup

### Prerequisites

-   [Node.js](https://nodejs.org/) (v18 or higher)
-   [pnpm](https://pnpm.io/) package manager

### Installation

Install dependencies across all workspaces:

```bash
pnpm install
```

## Development

### Running the Web App

To start the Next.js web application in development mode:

```bash
pnpm --filter web dev
```

The web app will be available at `http://localhost:3000`.

## Contributing

When working with this monorepo:

-   Use `pnpm --filter <workspace-name>` to run commands in specific workspaces
-   Use `pnpm` without filters to run commands across all workspaces
-   Always commit your `pnpm-lock.yaml` file to maintain dependency consistency
