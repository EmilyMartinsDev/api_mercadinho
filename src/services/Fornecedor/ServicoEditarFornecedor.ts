import prismaClient from "../../prisma/prismaClient";


type EditarFornecedorRequest ={
    cod_fornecedor: string
    nome: string
    fone: string
    email: string
}

class ServicoEdicaoFornecedor{
    async execute({nome, cod_fornecedor, fone, email }: EditarFornecedorRequest){
        
        const fornecedorEditado = await prismaClient.fornecedor.update({
            where:{
                cod: cod_fornecedor
            },
            data:{
                nome: nome,
                email: email,
                fone: fone,
                
            }
        })
        return fornecedorEditado
    }
}

export { ServicoEdicaoFornecedor }