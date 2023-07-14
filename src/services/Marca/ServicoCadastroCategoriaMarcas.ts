import prismaClient from "../../prisma/prismaClient"



type CadastroMarcasParaCategoria ={
    cod_categoria: string
    cod_marcas: string[]
}


class ServicoCadastroCategoriaMarcas{
    async execute({cod_categoria, cod_marcas}: CadastroMarcasParaCategoria){
        const marcasCategorias = cod_marcas.map(async m=>{
            await prismaClient.marcaCategoria.create({
                data:{
                    cod_categoria: cod_categoria,
                    cod_marca: m
                  },
                  include:{
                    categoria: true,
                    marca: true
                  }

        
                
            })
        })
        const categoria = await prismaClient.categoria.findFirst({
            where: {cod: cod_categoria},
            include: { marcaCategoria: true}
        })
        return categoria
    }
    
}

export { ServicoCadastroCategoriaMarcas}