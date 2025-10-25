/*
  Warnings:

  - You are about to drop the `users_oauth` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."users_oauth" DROP CONSTRAINT "users_oauth_user_id_fkey";

-- DropTable
DROP TABLE "public"."users_oauth";

-- DropEnum
DROP TYPE "public"."oauth_provider";
