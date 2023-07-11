import prismaClient from "../../prisma/prismaClient";


class ServicoListagemProdutoCategoria{
    async execute(cod_categoria: string){
        const produtos = await prismaClient.produto.findMany({
            where:{
                cod_categoria: cod_categoria
            },          
            select:{
                cod: true,
                nome: true,
                qt_estoque: true,                
            },
            
        })
        return produtos
    }
}
export { ServicoListagemProdutoCategoria}