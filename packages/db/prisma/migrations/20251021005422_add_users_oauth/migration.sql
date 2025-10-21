-- CreateEnum
CREATE TYPE "oauth_provider" AS ENUM ('GITHUB', 'GOOGLE', 'FACEBOOK');

-- CreateTable
CREATE TABLE "users_oauth" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "provider" "oauth_provider" NOT NULL,
    "access_token" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_oauth_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_oauth_user_id_provider_key" ON "users_oauth"("user_id", "provider");

-- AddForeignKey
ALTER TABLE "users_oauth" ADD CONSTRAINT "users_oauth_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
