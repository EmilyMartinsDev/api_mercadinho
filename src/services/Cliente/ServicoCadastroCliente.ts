import prismaClient from "../../prisma/prismaClient";


type Cliente ={
    nome: string
    email: string
}

class ServicoCadastroCliente{
    async execute({nome, email}: Cliente){
        if(!nome || !email){
            throw new Error("campos invalidos")
        }
        const clienteJaExiste = await prismaClient.cliente.findFirst({
            where: {
                email: email
            }
        });

        if(clienteJaExiste){
            throw new Error("cliente ja cadastrado")
        }


        const cliente = await prismaClient.cliente.create({
            data:{
                email: email,
                nome: nome,
            }
        });

        return cliente
    }
}

export { ServicoCadastroCliente }