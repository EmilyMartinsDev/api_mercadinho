import prismaClient from "../../prisma/prismaClient";

type EdicaoProdutoRequest = {
    cod_categoria: string
    nome: string
    cod_produto : string
   
}

class ServicoEdicaoProduto{
    async execute({cod_categoria, nome, cod_produto}: EdicaoProdutoRequest){
      
      const produto = await prismaClient.produto.update({
        where:{
            cod: cod_produto
        },
        data:{
            nome,
            cod_categoria: cod_categoria,
            

        }
      })

      return produto
    }
}

export { ServicoEdicaoProduto}