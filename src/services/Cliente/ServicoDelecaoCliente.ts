import prismaClient from "../../prisma/prismaClient";

/*Preço de venda = Preço de compra + (Preço de compra * Margem de lucro*/
type DelecaoClienteRequest={
    cod: string
}

class ServicoDelecaoCliente{
    async execute({cod }: DelecaoClienteRequest){
        if(!cod){
            throw new Error("campos invalidos")
        }
        const cliente = await prismaClient.cliente.findFirst({
            where:{
                cod: cod
            }
        });
   
        if(!cliente){
            throw new Error("usuario nao encontrado")
        }

       
        const clienteDeletado = await prismaClient.cliente.delete({
            where:{
                cod: cod
            },
        });

        return clienteDeletado
    }
}

export { ServicoDelecaoCliente }