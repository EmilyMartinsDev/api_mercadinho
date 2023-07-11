import prismaClient from "../../prisma/prismaClient";
import * as enums from '../../utils/enums/cargo';

type ClienteEditRequest ={
    cod: string
    nome: string
    email: string
}

class ServicoEdicaoCliente{
    async execute({nome, email, cod}: ClienteEditRequest){
    
        const cliente = await prismaClient.cliente.findFirst({
            where:{
                email: email
            }
        });
   
        if(!cliente){
            throw new Error("usuario nao encontrado")
        }

        const clienteEditado = await prismaClient.cliente.update({
            where:{
                cod: cod
            },
            data:{
                email: email,
                nome: nome
            }
        });

        return clienteEditado
    }
}

export { ServicoEdicaoCliente }