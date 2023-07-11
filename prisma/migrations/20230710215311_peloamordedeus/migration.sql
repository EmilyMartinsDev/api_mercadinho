-- CreateTable
CREATE TABLE "Cliente" (
    "cod" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "data_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data_uptade" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("cod")
);

-- CreateTable
CREATE TABLE "Produto" (
    "cod" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "qt_estoque" INTEGER NOT NULL DEFAULT 0,
    "vl_produto" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "cod_categoria" TEXT NOT NULL,
    "data_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data_uptade" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Produto_pkey" PRIMARY KEY ("cod")
);

-- CreateTable
CREATE TABLE "Categoria" (
    "cod" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "data_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data_uptade" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Categoria_pkey" PRIMARY KEY ("cod")
);

-- CreateTable
CREATE TABLE "Venda" (
    "cod" TEXT NOT NULL,
    "vl_total" DOUBLE PRECISION NOT NULL,
    "data_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data_uptade" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "cod_cliente" TEXT NOT NULL,

    CONSTRAINT "Venda_pkey" PRIMARY KEY ("cod")
);

-- CreateTable
CREATE TABLE "ItemVenda" (
    "qt_produto" INTEGER NOT NULL,
    "vl_total_item" DOUBLE PRECISION,
    "cod_venda" TEXT NOT NULL,
    "cod_produto" TEXT NOT NULL,
    "data_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data_uptade" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ItemVenda_pkey" PRIMARY KEY ("cod_venda","cod_produto")
);

-- CreateTable
CREATE TABLE "Funcionario" (
    "cod" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "cargo" TEXT NOT NULL,
    "data_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data_uptade" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Funcionario_pkey" PRIMARY KEY ("cod")
);

-- CreateTable
CREATE TABLE "Fornecedor" (
    "cod" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "fone" TEXT NOT NULL,
    "data_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data_uptade" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Fornecedor_pkey" PRIMARY KEY ("cod")
);

-- CreateTable
CREATE TABLE "FornecedorProduto" (
    "cod_fornecedor" TEXT NOT NULL,
    "cod_produto" TEXT NOT NULL,
    "vl_produto_compra" DOUBLE PRECISION NOT NULL,
    "data_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data_uptade" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FornecedorProduto_pkey" PRIMARY KEY ("cod_fornecedor","cod_produto")
);

-- CreateTable
CREATE TABLE "ItemCompra" (
    "qt_produto" INTEGER NOT NULL,
    "vl_total_item" DOUBLE PRECISION,
    "cod_compra" TEXT NOT NULL,
    "cod_produto" TEXT NOT NULL,
    "data_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data_uptade" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ItemCompra_pkey" PRIMARY KEY ("cod_compra","cod_produto")
);

-- CreateTable
CREATE TABLE "Compra" (
    "cod" TEXT NOT NULL,
    "vl_total" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "cod_fornecedor" TEXT NOT NULL,
    "data_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data_uptade" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Compra_pkey" PRIMARY KEY ("cod")
);

-- CreateIndex
CREATE UNIQUE INDEX "Produto_nome_key" ON "Produto"("nome");

-- AddForeignKey
ALTER TABLE "Produto" ADD CONSTRAINT "Produto_cod_categoria_fkey" FOREIGN KEY ("cod_categoria") REFERENCES "Categoria"("cod") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Venda" ADD CONSTRAINT "Venda_cod_cliente_fkey" FOREIGN KEY ("cod_cliente") REFERENCES "Cliente"("cod") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemVenda" ADD CONSTRAINT "ItemVenda_cod_venda_fkey" FOREIGN KEY ("cod_venda") REFERENCES "Venda"("cod") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemVenda" ADD CONSTRAINT "ItemVenda_cod_produto_fkey" FOREIGN KEY ("cod_produto") REFERENCES "Produto"("cod") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FornecedorProduto" ADD CONSTRAINT "FornecedorProduto_cod_fornecedor_fkey" FOREIGN KEY ("cod_fornecedor") REFERENCES "Fornecedor"("cod") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FornecedorProduto" ADD CONSTRAINT "FornecedorProduto_cod_produto_fkey" FOREIGN KEY ("cod_produto") REFERENCES "Produto"("cod") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemCompra" ADD CONSTRAINT "ItemCompra_cod_compra_fkey" FOREIGN KEY ("cod_compra") REFERENCES "Compra"("cod") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemCompra" ADD CONSTRAINT "ItemCompra_cod_produto_fkey" FOREIGN KEY ("cod_produto") REFERENCES "Produto"("cod") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Compra" ADD CONSTRAINT "Compra_cod_fornecedor_fkey" FOREIGN KEY ("cod_fornecedor") REFERENCES "Fornecedor"("cod") ON DELETE RESTRICT ON UPDATE CASCADE;
