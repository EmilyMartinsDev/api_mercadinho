import prismaClient from "../../prisma/prismaClient";

type ExclusaoProdutoRequest = {
   
    cod_produto : string

}

class ServicoExclusaoProduto{
    async execute({cod_produto}: ExclusaoProdutoRequest){
      
      const produto = await prismaClient.produto.findFirst({
        where:{
            cod: cod_produto
        },
      })

      if(produto.qt_estoque > 0){
        throw new Error("ainda produtos no estoque")
    }
       await prismaClient.produto.delete({
        where:{
            cod: cod_produto
        },
      })


      return produto
    }
}

export { ServicoExclusaoProduto}