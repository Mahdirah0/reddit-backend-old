/*
  Warnings:

  - You are about to drop the column `authorId` on the `post` table. All the data in the column will be lost.
  - Added the required column `author_id` to the `post` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "post" DROP CONSTRAINT "post_authorId_fkey";

-- AlterTable
ALTER TABLE "post" DROP COLUMN "authorId",
ADD COLUMN     "author_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "post" ADD CONSTRAINT "post_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
