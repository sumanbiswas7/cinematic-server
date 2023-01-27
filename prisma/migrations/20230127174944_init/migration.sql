/*
  Warnings:

  - The `suggestion` column on the `notifications` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "notifications" DROP COLUMN "suggestion",
ADD COLUMN     "suggestion" BOOLEAN;
