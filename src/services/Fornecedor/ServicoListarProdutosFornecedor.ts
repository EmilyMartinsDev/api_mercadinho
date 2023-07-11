import prismaClient from "../../prisma/prismaClient";


class ServicoListarProdutosDeFornecedor{
    async execute(cod_fornecedor: string){
        const fornecedores = await prismaClient.fornecedorProduto.findMany({
            where:{
                cod_fornecedor: cod_fornecedor
            },
            include:{
                produto: true
            }
        })
        return fornecedores
    }
}
export { ServicoListarProdutosDeFornecedor}