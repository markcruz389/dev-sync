/*
  Warnings:

  - You are about to drop the column `installation_expires_at` on the `github_auth` table. All the data in the column will be lost.
  - You are about to drop the column `installation_token` on the `github_auth` table. All the data in the column will be lost.
  - Added the required column `installation_token_expires_at` to the `github_auth` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "github_auth" DROP COLUMN "installation_expires_at",
DROP COLUMN "installation_token",
ADD COLUMN     "installation_token_expires_at" TIMESTAMP(3) NOT NULL;
