import prismaClient from "../../prisma/prismaClient";

type InstanciaVenda ={
    cod_cliente: string,
}

class ServicoInstanciarVenda{
    async execute({cod_cliente}: InstanciaVenda){
        const venda = await prismaClient.venda.create({
            data:{
                cod_cliente: cod_cliente ? cod_cliente : "anonimo",
                vl_total: 0,

            }
        })

        return venda
    }
}

export { ServicoInstanciarVenda }