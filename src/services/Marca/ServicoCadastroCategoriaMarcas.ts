import prismaClient from "../../prisma/prismaClient"



type CadastroMarcasParaCategoria ={
    cod_categoria: string
    cod_marca: string
}


class ServicoCadastroCategoriaMarcas{
    async execute({cod_categoria, cod_marca}: CadastroMarcasParaCategoria){
      
           const marcaCategoria = await prismaClient.marcaCategoria.create({
                data:{
                    cod_categoria: cod_categoria,
                    cod_marca: cod_marca
                  },
                  include:{
                    categoria: true,
                    marca: true
                  }

        
                
            })
            return marcaCategoria
     
    }
    
}

export { ServicoCadastroCategoriaMarcas}