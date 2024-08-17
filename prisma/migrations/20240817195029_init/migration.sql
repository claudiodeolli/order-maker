/*
  Warnings:

  - The `identifier` column on the `Product` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "identifier",
ADD COLUMN     "identifier" SERIAL NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Product_identifier_key" ON "Product"("identifier");
