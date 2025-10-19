# Dev-Sync Web App

A modern [Next.js](https://nextjs.org) web application with authentication powered by [Clerk](https://clerk.com) and a beautiful UI built with [Shadcn/ui](https://ui.shadcn.com).

## Overview

This is a Next.js 15 application featuring:

-   **Authentication**: OAuth-based authentication with GitHub via Clerk
-   **Protected Routes**: Dashboard protected with Clerk middleware
-   **Modern UI**: Component library built with Radix UI and Tailwind CSS
-   **Type Safety**: Full TypeScript support
-   **Development Tools**: Biome for linting and formatting

## Getting Started

### Prerequisites

-   Node.js 18+ and pnpm
-   Clerk account (create one at [clerk.com](https://clerk.com))

### Environment Setup

Create a `.env.local` file in the `apps/web` directory with your Clerk credentials:

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
CLERK_SECRET_KEY=your_secret_key
```

You can find these keys in your [Clerk Dashboard](https://dashboard.clerk.com).

### Installation and Development

1. Install dependencies:

```bash
pnpm install
```

2. Run the development server:

```bash
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) to see the application.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout with ClerkProvider
│   ├── page.tsx                # Home page
│   ├── dashboard/              # Protected dashboard route
│   ├── login/                  # Login page with GitHub OAuth
│   └── globals.css             # Global styles
├── _components/
│   ├── login-form.tsx          # GitHub OAuth login component
│   ├── app-sidebar.tsx         # Sidebar navigation
│   ├── site-header.tsx         # Header component
│   ├── ui/                     # Shadcn UI components
│   └── ...                     # Other reusable components
├── _hooks/
│   └── use-mobile.ts           # Custom hooks
├── _lib/
│   └── utils.ts                # Utility functions
└── middleware.ts               # Clerk middleware for route protection
```

## Authentication Flow

### Clerk Integration

The app uses Clerk for authentication with the following features:

-   **OAuth Providers**: GitHub authentication configured
-   **Protected Routes**: Dashboard and admin routes are protected
-   **Middleware**: `middleware.ts` uses `clerkMiddleware` to protect routes
-   **Login Form**: Custom GitHub OAuth login with toast notifications

### Key Files

#### `src/middleware.ts`

Protects the `/dashboard` route using Clerk middleware:

```typescript
const isProtectedRoute = createRouteMatcher(["/dashboard(.*)"]);
export default clerkMiddleware(async (auth, req) => {
    if (isProtectedRoute(req)) await auth.protect();
});
```

#### `src/_components/login-form.tsx`

Implements GitHub OAuth sign-in with redirect flow and error handling.

#### `src/app/layout.tsx`

Wraps the entire app with `ClerkProvider` to enable Clerk features throughout the application.

### Login Flow

1. User visits `/login`
2. Clicks "Login with Github" button
3. Redirected to GitHub authorization
4. After authorization, redirected to `/login/sso-callback`
5. User is then redirected to `/dashboard`

## Key Dependencies

-   **@clerk/nextjs** (v6.33.7) - Authentication and user management
-   **next** (15.5.6) - React framework
-   **react** (19.1.0) - UI library
-   **@radix-ui/** - Headless UI components
-   **recharts** - Charting library for dashboard
-   **sonner** - Toast notifications
-   **tailwindcss** - Utility-first CSS framework
-   **zod** - TypeScript-first schema validation

## Available Scripts

-   `pnpm dev` - Start development server with Turbopack
-   `pnpm build` - Build for production with Turbopack
-   `pnpm start` - Start production server
-   `pnpm lint` - Run Biome linter
-   `pnpm format` - Format code with Biome

## Configuration Files

-   `next.config.ts` - Next.js configuration
-   `tsconfig.json` - TypeScript configuration
-   `tailwind.config.ts` - Tailwind CSS configuration
-   `biome.json` - Biome linter and formatter configuration
-   `postcss.config.mjs` - PostCSS configuration

## Learn More

### Clerk Documentation

-   [Clerk JavaScript SDK](https://clerk.com/docs/sdk/javascript)
-   [Clerk Next.js Documentation](https://clerk.com/docs/quickstarts/nextjs)
-   [Clerk Custom Flows](https://clerk.com/docs/guides/development/custom-flows)

### Next.js Resources

-   [Next.js Documentation](https://nextjs.org/docs)
-   [Learn Next.js](https://nextjs.org/learn)

### UI & Styling

-   [Shadcn/ui Documentation](https://ui.shadcn.com)
-   [Tailwind CSS](https://tailwindcss.com)
-   [Radix UI](https://www.radix-ui.com)

## Deployment

The app is ready to be deployed on [Vercel](https://vercel.com):

1. Push your code to a Git repository
2. Import the project in Vercel
3. Set environment variables for Clerk credentials
4. Deploy

See [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
