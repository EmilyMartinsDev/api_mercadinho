import prismaClient from "../../prisma/prismaClient";

type Item = {
    cod_produto: string,
     cod_compra: string,
     qt_produto: number
}

class ServicoCriarItemCompra{
    async execute({cod_produto, cod_compra, qt_produto}: Item){

        const compra = await prismaClient.compra.findFirst({
            where: {
                cod: cod_compra
            }
        })

        const produto = await prismaClient.fornecedorProduto.findFirst({
            where: {
                cod_produto: cod_produto,
                cod_fornecedor: compra.cod_fornecedor
            }
        })

        const vl_total_item = produto.vl_produto_compra * qt_produto

        const itemCompra = await prismaClient.itemCompra.create({
            data:{
                qt_produto: qt_produto,
                cod_compra: cod_compra,
                cod_produto: cod_produto,
                vl_total_item: vl_total_item
            }
        })

        return itemCompra
    }
}

export { ServicoCriarItemCompra }