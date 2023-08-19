import prismaClient from "../../prisma/prismaClient";
type fornecedor={
    cod_fornecedor?: string
}
class ServicoInstanciarCompra{
    async execute(){
        const vl_total = 0
        const compra = await prismaClient.compra.create({
            data:{
                vl_total: 0
            }
        })

        return compra 
    }
}

export { ServicoInstanciarCompra }