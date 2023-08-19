import prismaClient from "../../prisma/prismaClient";

type ConcluirCompra = {
    vl_produto: number, cod_compra: string, cod_fornecedor: string
}

class ServicoFinalizarCompra{
    async execute({vl_produto, cod_compra, cod_fornecedor}: ConcluirCompra){
       
        const produtosComprados =  await prismaClient.itemCompra.findMany({
            where: {
                cod_compra: cod_compra
            }
        })
       
        const vl_total = produtosComprados.reduce((acc, p )=>{
            return acc + p.vl_total_item
        }, 0)

        
          await prismaClient.compra.update({
            where: {
                cod: cod_compra

            },
            data:{
                vl_total: vl_total,
                cod_fornecedor: cod_fornecedor
            },
            include:{
                itemCompra: true,
                fornecedor: {
                    select:{
                        cod: true,
                        nome: true
                    }
                }
            }
        })

        produtosComprados.map( async (p)=>{
           const produto = await prismaClient.produto.findFirst({
                where:{
                    cod: p.cod_produto
                }
            })

            await prismaClient.produto.update({
                where:{
                    cod: produto.cod
                },
                data: {
                    qt_estoque: p.qt_produto + produto.qt_estoque,
                    vl_produto: vl_produto
                }
            })
        })

        const compra = await prismaClient.compra.findFirst({
            where:{
                cod: cod_compra
            },
            select:{
                vl_total: true,
                cod_fornecedor: true,
                itemCompra: true
            }
        })
        
        return compra
    }
     
}

export { ServicoFinalizarCompra }