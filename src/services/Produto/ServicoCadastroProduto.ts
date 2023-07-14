import prismaClient from "../../prisma/prismaClient";

type CriacaoProdutoRequest = {
    cod_categoria: string
    nome: string
    cod_marca : string
}

class ServicoCadastroProduto{
    async execute({cod_categoria, nome, cod_marca}: CriacaoProdutoRequest){
        if(!cod_categoria || !nome || !cod_marca){
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
            cod_marca: cod_marca

        }
      })

      return produto
    }
}

export { ServicoCadastroProduto}