import prismaClient from "../../prisma/prismaClient";

type CadastroFornecedor = {
    nome: string
    email: string
    fone: string
}

class ServicoCadastroFornecedor{
    async execute({ nome, email, fone}: CadastroFornecedor){
        if(!email || !nome ||!fone){
            throw new Error("campos invalidos")
        }

      const  fornecedorJaCadastrado = await prismaClient.fornecedor.findFirst({
        where: {
            nome: nome
        }
      })

      if(fornecedorJaCadastrado){
        throw new Error("produto ja cadastradp")
      }

      const fornecedor = await prismaClient.fornecedor.create({
        data:{
            nome,
            email: email,
            fone: fone
        }
      })

      return fornecedor
    }
}

export { ServicoCadastroFornecedor}