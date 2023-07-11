import prismaClient from "../../prisma/prismaClient";

class ServicoListagemCliente{
    async execute(){
        const clientes = await prismaClient.cliente.findMany({
            select:{
                cod: true,
                nome: true,
                email: true,
                venda: true
            },
            
        })
        return clientes
    }
}
export { ServicoListagemCliente}