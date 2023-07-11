import prismaClient from "../../prisma/prismaClient";

type Categoria = {
    nome: string
}

class ServicoCriarCategoria{
    async execute({nome}: Categoria){
        if(!nome){
            throw new Error("campos invalidos")
        }

      const  categoriaJaExiste = await prismaClient.categoria.findFirst({
        where:{
            nome: nome
        }
      })

      if(categoriaJaExiste){
        throw new Error("categoria ja cadastrada")
      }

      const categoria = await prismaClient.categoria.create({
        data:{
            nome: nome
        }
      });

      return categoria
    }
}

export { ServicoCriarCategoria }