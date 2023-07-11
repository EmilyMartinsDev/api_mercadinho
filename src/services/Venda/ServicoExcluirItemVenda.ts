import prismaClient from "../../prisma/prismaClient";

type ItemVenda = {
    cod_venda: string,
    cod_produto: string
}

class ServicoExcluirItemVenda{
    async execute({ cod_venda, cod_produto}: ItemVenda){
      
        const itemVenda = await prismaClient.itemVenda.delete({
          where:{
            cod_venda_cod_produto:{
                cod_produto: cod_produto,
                cod_venda: cod_venda
            }
          }
        })

        return itemVenda
    }
}

export { ServicoExcluirItemVenda }