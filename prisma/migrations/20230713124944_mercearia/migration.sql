/*
  Warnings:

  - Added the required column `cod_marca` to the `Produto` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Produto_nome_key";

-- AlterTable
ALTER TABLE "Produto" ADD COLUMN     "cod_marca" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Marca" (
    "cod" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Marca_pkey" PRIMARY KEY ("cod")
);

-- CreateIndex
CREATE UNIQUE INDEX "Marca_nome_key" ON "Marca"("nome");

-- AddForeignKey
ALTER TABLE "Produto" ADD CONSTRAINT "Produto_cod_marca_fkey" FOREIGN KEY ("cod_marca") REFERENCES "Marca"("cod") ON DELETE RESTRICT ON UPDATE CASCADE;
