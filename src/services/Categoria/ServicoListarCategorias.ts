import prismaClient from "../../prisma/prismaClient";

class ServicoListagemCategoria{
    async execute(){
        const categorias = await prismaClient.categoria.findMany({
            select:{
                cod: true,
                nome: true,
                
            },
            
        })
        return categorias
    }
}
export { ServicoListagemCategoria}