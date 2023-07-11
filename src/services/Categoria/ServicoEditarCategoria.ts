import prismaClient from "../../prisma/prismaClient";
import * as enums from '../../utils/enums/cargo';

type CategoriaEdit ={
    cod: string
    nome: string
}

class ServicoEdicaoCategoria{
    async execute({nome, cod }: CategoriaEdit){
        
        const categoriaEditada = await prismaClient.categoria.update({
            where:{
                cod: cod
            },
            data:{
                nome: nome
            }
        })
        return categoriaEditada
    }
}

export { ServicoEdicaoCategoria }