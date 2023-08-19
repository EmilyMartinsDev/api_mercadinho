/*
  Warnings:

  - You are about to drop the `FornecedorProduto` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Compra" DROP CONSTRAINT "Compra_cod_fornecedor_fkey";

-- DropForeignKey
ALTER TABLE "FornecedorProduto" DROP CONSTRAINT "FornecedorProduto_cod_fornecedor_fkey";

-- DropForeignKey
ALTER TABLE "FornecedorProduto" DROP CONSTRAINT "FornecedorProduto_cod_produto_fkey";

-- AlterTable
ALTER TABLE "Compra" ALTER COLUMN "cod_fornecedor" DROP NOT NULL;

-- DropTable
DROP TABLE "FornecedorProduto";

-- AddForeignKey
ALTER TABLE "Compra" ADD CONSTRAINT "Compra_cod_fornecedor_fkey" FOREIGN KEY ("cod_fornecedor") REFERENCES "Fornecedor"("cod") ON DELETE SET NULL ON UPDATE CASCADE;
