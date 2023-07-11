import prismaClient from "../../prisma/prismaClient";
import * as enums from '../../utils/enums/cargo';

type Usuario ={
    cod: string
    nome: string
    email: string
    cargo: enums.cargo.admin | enums.cargo.caixa
}

class ServicoEdicaoUsuario{
    async execute({nome, email,cargo, cod}: Usuario){
        if(!nome || !email  || !cargo){
            throw new Error("campos invalidos")
        }

        const usuarioExiste = await prismaClient.funcionario.findFirst({
            where:{
                email: email
            }
        });
   
        if(!usuarioExiste){
            throw new Error("usuario nao encontrado")
        }

        const usuarioEditado = await prismaClient.funcionario.update({
            where:{
                cod: cod
            },
            data:{
                cargo: cargo,
                email: email,
                nome: nome
            }
        });

        return usuarioEditado
    }
}

export { ServicoEdicaoUsuario }