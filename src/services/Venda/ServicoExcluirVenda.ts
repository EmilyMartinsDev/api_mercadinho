
import prismaClient from "../../prisma/prismaClient"


type VendaRequest ={
    cod_venda: string
}

class ServicoExcluirVenda{
    async execute({ cod_venda}: VendaRequest){
      
        const venda = await prismaClient.venda.delete({
          where:{
            cod: cod_venda
          }
        })

        return venda
    }
}

export { ServicoExcluirVenda }