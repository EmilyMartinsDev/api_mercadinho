import prismaClient from "../../prisma/prismaClient";

type ConcluirVenda = {
 cod_venda: string
}

class ServicoFinalizarVenda{
    async execute({ cod_venda}: ConcluirVenda){
       
        const produtosComprados =  await prismaClient.itemVenda.findMany({
            where: {
                cod_venda: cod_venda
            }
        })
        
        const vl_total = produtosComprados.reduce((acc, p)=>{
            return acc + p.vl_total_item
        }, 0)
        
          await prismaClient.venda.update({
            where: {
                cod: cod_venda

            },
            data:{
                vl_total: vl_total,
            },
            include:{
                itemVenda: true
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
                    qt_estoque:produto.qt_estoque - p.qt_produto ,
                }
            })
        })

        const venda = await prismaClient.venda.findFirst({
            where:{
                cod: cod_venda
            },
            select:{
                vl_total: true,
                cod_cliente: true,
                itemVenda: true
            }
        })
        
        return venda
    }
     
}

export { ServicoFinalizarVenda }