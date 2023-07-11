import prismaClient from "../../prisma/prismaClient";


class ServicoListarFornecedor{
    async execute(){
        const fornecedores = await prismaClient.fornecedor.findMany({
            select:{
                cod: true,
                nome: true,
                email: true,
                fone: true,                
            }
        })
        return fornecedores
    }
}
export { ServicoListarFornecedor}