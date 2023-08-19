import prismaClient from "../../prisma/prismaClient"


class ServicoListarMarcasPorCategoria{
    async execute({cod_categoria}){
        const marcas = await prismaClient.marcaCategoria.findMany({
            where:{
                cod_categoria: cod_categoria
            }, 
            select:{

                marca: true
            }
        })
       
       
        return marcas
    }
}

export { ServicoListarMarcasPorCategoria}