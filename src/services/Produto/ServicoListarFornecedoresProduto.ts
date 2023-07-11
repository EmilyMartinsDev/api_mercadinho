import prismaClient from "../../prisma/prismaClient";

type Lista = {
    cod_produto: string
  
}
class ServicoListarFornecedorProduto{
    async execute({cod_produto}:Lista){

        const fornecedoresDoproduto = await prismaClient.fornecedorProduto.findMany({
            where:{
                cod_produto: cod_produto
            },
            select:{
                cod_fornecedor: true,
                vl_produto_compra: true
            },
            orderBy:{
                vl_produto_compra: 'asc'
            }         
            
        })
        return fornecedoresDoproduto
    }
}
export { ServicoListarFornecedorProduto}