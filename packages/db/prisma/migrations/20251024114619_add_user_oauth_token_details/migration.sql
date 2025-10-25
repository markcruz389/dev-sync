-- AlterTable
ALTER TABLE "users_oauth" ADD COLUMN     "expires_at" TIMESTAMP(3),
ADD COLUMN     "token_scope" TEXT,
ADD COLUMN     "token_type" TEXT;
