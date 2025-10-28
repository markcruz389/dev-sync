/*
  Warnings:

  - A unique constraint covering the columns `[installation_id]` on the table `github_auth` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "installation_repo_owner_type" AS ENUM ('USER', 'ORGANIZATION');

-- CreateEnum
CREATE TYPE "installation_repo_visibility" AS ENUM ('PUBLIC', 'PRIVATE', 'INTERNAL');

-- CreateTable
CREATE TABLE "github_installation_repos" (
    "installation_id" TEXT NOT NULL,
    "repo_id" BIGINT NOT NULL,
    "full_name" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "owner_username" TEXT NOT NULL,
    "owner_type" "installation_repo_owner_type" NOT NULL,
    "visibility" "installation_repo_visibility" NOT NULL,
    "archived" BOOLEAN NOT NULL DEFAULT false,
    "disabled" BOOLEAN NOT NULL DEFAULT false,
    "default_branch" TEXT,
    "html_url" TEXT NOT NULL,
    "language" TEXT,
    "fetched_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMPTZ(3),
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(3) NOT NULL,

    CONSTRAINT "github_installation_repos_pkey" PRIMARY KEY ("installation_id","repo_id")
);

-- CreateIndex
CREATE INDEX "github_installation_repos_installation_id_full_name_idx" ON "github_installation_repos"("installation_id", "full_name");

-- CreateIndex
CREATE INDEX "github_installation_repos_installation_id_owner_username_idx" ON "github_installation_repos"("installation_id", "owner_username");

-- CreateIndex
CREATE UNIQUE INDEX "github_auth_installation_id_key" ON "github_auth"("installation_id");

-- AddForeignKey
ALTER TABLE "github_installation_repos" ADD CONSTRAINT "github_installation_repos_installation_id_fkey" FOREIGN KEY ("installation_id") REFERENCES "github_auth"("installation_id") ON DELETE CASCADE ON UPDATE CASCADE;
