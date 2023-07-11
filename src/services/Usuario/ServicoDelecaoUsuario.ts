import prismaClient from "../../prisma/prismaClient";

type DelecaoUsuarioRequest={
    cod: string
}

class ServicoDelecaoUsuario{
    async execute({cod }: DelecaoUsuarioRequest){
        if(!cod){
            throw new Error("campos invalidos")
        }
        const usuarioExiste = await prismaClient.funcionario.findFirst({
            where:{
                cod: cod
            }
        });
   
        if(!usuarioExiste){
            throw new Error("usuario nao encontrado")
        }

        const usuarioDeletado = await prismaClient.funcionario.delete({
            where:{
                cod: cod
            },
        });

        return usuarioDeletado
    }
}

export { ServicoDelecaoUsuario }