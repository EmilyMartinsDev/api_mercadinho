import prismaClient from "../../prisma/prismaClient";

type ItemVenda = {
  cod_itemVenda: string,
    
}

class ServicoExcluirItemVenda{
    async execute({cod_itemVenda}: ItemVenda){
      
        const itemVenda = await prismaClient.itemVenda.delete({
          where:{
           cod: cod_itemVenda
          }
        })

        return itemVenda
    }
}

export { ServicoExcluirItemVenda }