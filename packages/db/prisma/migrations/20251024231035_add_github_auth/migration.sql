-- CreateEnum
CREATE TYPE "github_auth_repo_selection" AS ENUM ('ALL', 'SELECTED');

-- CreateTable
CREATE TABLE "github_auth" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "github_user_id" INTEGER,
    "github_username" TEXT,
    "github_avatar_url" TEXT,
    "access_token" TEXT NOT NULL,
    "refresh_token" TEXT NOT NULL,
    "token_type" TEXT NOT NULL,
    "expires_at" TIMESTAMPTZ(3) NOT NULL,
    "refresh_expires_at" TIMESTAMPTZ(3) NOT NULL,
    "scope" TEXT NOT NULL,
    "installation_id" BIGINT NOT NULL,
    "installation_token" TEXT NOT NULL,
    "installation_expires_at" TIMESTAMP(3) NOT NULL,
    "permissions" JSONB NOT NULL,
    "repository_selection" "github_auth_repo_selection" NOT NULL,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(3) NOT NULL,

    CONSTRAINT "github_auth_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "github_auth_user_id_key" ON "github_auth"("user_id");

-- AddForeignKey
ALTER TABLE "github_auth" ADD CONSTRAINT "github_auth_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
