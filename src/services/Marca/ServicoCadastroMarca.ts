import prismaClient from "../../prisma/prismaClient";

type Marca = {
    nome: string
}

class ServicoCadastroMarca{
    async execute({nome}: Marca){
        if(!nome){
            throw new Error("campos invalidos")
        }

      const  marcaJaExiste = await prismaClient.marca.findFirst({
        where:{
            nome: nome
        }
      })

      if(marcaJaExiste){
        throw new Error("marca ja cadastrada")
      }

      const marca = await prismaClient.marca.create({
        data:{
            nome: nome,
            
            }

        },
      );

      return marca
    }
}

export { ServicoCadastroMarca }