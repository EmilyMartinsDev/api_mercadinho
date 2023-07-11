import prismaClient from "../../prisma/prismaClient";


class ServicoListagemProdutoEstoque{
    async execute(){
        const produtos = await prismaClient.produto.findMany({        
            select:{
                cod: true,
                nome: true,
                qt_estoque: true, 
                categoria: true               
            },
            
        })
        return produtos
    }
}
export { ServicoListagemProdutoEstoque}