import prismaClient from "../../prisma/prismaClient";

type DelecaoUsuarioRequest={
    cod_usuario: string
}

class ServicoUsuario{
    async execute({cod_usuario }: DelecaoUsuarioRequest){
        if(!cod_usuario){
            throw new Error("campos invalidos")
        }
        const usuario = await prismaClient.funcionario.findFirst({
            where:{
                cod: cod_usuario
            }, select:{
                cargo: true,
                nome: true,
                cod: true,
                email: true 
            } 
        })

        return usuario
    }
}

export { ServicoUsuario }  