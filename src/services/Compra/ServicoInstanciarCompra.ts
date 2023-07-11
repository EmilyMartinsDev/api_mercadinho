import prismaClient from "../../prisma/prismaClient";

class ServicoInstanciarCompra{
    async execute(cod_fornecedor: string){
        const compra = await prismaClient.compra.create({
            data:{
                cod_fornecedor: cod_fornecedor
            }
        })

        return compra
    }
}

export { ServicoInstanciarCompra }