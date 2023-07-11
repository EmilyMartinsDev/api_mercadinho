import prismaClient from "../../prisma/prismaClient";

type CriacaoProdutoRequest = {
    cod_categoria: string
    nome: string

}

class ServicoCadastroProduto{
    async execute({cod_categoria, nome}: CriacaoProdutoRequest){
        if(!cod_categoria || !nome){
            throw new Error("campos invalidos")
        }

      const  produtoJacadastrado = await prismaClient.produto.findFirst({
        where: {
            nome: nome
        }
      })

      if(produtoJacadastrado){
        throw new Error("produto ja cadastradp")
      }

      const produto = await prismaClient.produto.create({
        data:{
            nome,
            cod_categoria: cod_categoria,

        }
      })

      return produto
    }
}

export { ServicoCadastroProduto}