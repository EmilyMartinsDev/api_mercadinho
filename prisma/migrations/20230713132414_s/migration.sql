-- CreateTable
CREATE TABLE "MarcaCategoria" (
    "cod_marca" TEXT NOT NULL,
    "cod_categoria" TEXT NOT NULL,

    CONSTRAINT "MarcaCategoria_pkey" PRIMARY KEY ("cod_marca","cod_categoria")
);

-- AddForeignKey
ALTER TABLE "MarcaCategoria" ADD CONSTRAINT "MarcaCategoria_cod_categoria_fkey" FOREIGN KEY ("cod_categoria") REFERENCES "Categoria"("cod") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MarcaCategoria" ADD CONSTRAINT "MarcaCategoria_cod_marca_fkey" FOREIGN KEY ("cod_marca") REFERENCES "Marca"("cod") ON DELETE RESTRICT ON UPDATE CASCADE;
