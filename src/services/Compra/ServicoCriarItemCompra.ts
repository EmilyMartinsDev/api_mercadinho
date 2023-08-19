import prismaClient from "../../prisma/prismaClient";

type Item = {
    cod_produto: string,
     cod_compra: string,
     qt_produto: number,
     vl_produto_compra: number
}

class ServicoCriarItemCompra{
    async execute({cod_produto, cod_compra, qt_produto, vl_produto_compra}: Item){

       
        const vl_total_item = vl_produto_compra * qt_produto

        const itemCompra = await prismaClient.itemCompra.create({
            data:{
            
                qt_produto: qt_produto,
                cod_compra: cod_compra,
                cod_produto: cod_produto,
                vl_total_item: vl_total_item,
                
            },select:{
                produto:{
                    select:{
                        nome: true
                    }
                },
                vl_total_item: true,
                cod: true,
                qt_produto: true
            },
        })

        return itemCompra
    }
}

export { ServicoCriarItemCompra }