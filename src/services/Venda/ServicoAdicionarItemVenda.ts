import prismaClient from "../../prisma/prismaClient";

type Item = {
    cod_produto: string,
    cod_venda: string,
     qt_produto: number
}

class ServicoAdicionarItemVenda{
    async execute({cod_produto, cod_venda, qt_produto}: Item){

        const produto = await prismaClient.produto.findFirst({
            where: {
                cod: cod_produto
            }
        })
        const vl_total_item = produto.vl_produto * qt_produto

        if(produto.qt_estoque < qt_produto){
            return new Error("quantidade insuficiente para realizar a venda")
        }

        const itemVenda = await prismaClient.itemVenda.create({
            data:{
                qt_produto: qt_produto,
                cod_venda: cod_venda,
                cod_produto: cod_produto,
                vl_total_item: vl_total_item
            },
            include:{
                produto: true
            }
        })
        
        return itemVenda
    }
}

export { ServicoAdicionarItemVenda }