import prismaClient from "../../prisma/prismaClient";

type EdicaoProdutoRequest = {
    vl_produto: number
    nome: string
    cod_produto : string
   
}

class ServicoEdicaoProduto{
    async execute({vl_produto, nome, cod_produto}: EdicaoProdutoRequest){
      
      const produto = await prismaClient.produto.update({
        where:{
            cod: cod_produto
        },
        data:{
            nome,
            vl_produto: vl_produto
            

        }
      })

      return produto
    }
}

export { ServicoEdicaoProduto}