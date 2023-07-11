import { sign } from "jsonwebtoken";
import prismaClient from "../../prisma/prismaClient";
import { compare  } from "bcryptjs";
type UsuarioAltenticado ={
    email: string
    senha: string
}

class ServicoLoginUsuario{
    async execute({email, senha}: UsuarioAltenticado){
        
        const usuario= await prismaClient.funcionario.findFirst({
            where:{
                email: email
            }
        });

        if(!usuario){
            throw new Error("usuario nao encontrado")
        }

        const senhaEstaCorreta = compare(senha, usuario.senha);

        if(!senhaEstaCorreta){
            throw new Error("email / senha incorreto(s)")
        }

        const token = sign({
            email: usuario.email,
            nome: usuario.nome,
            cargo: usuario.cargo
        }, process.env.JWT_SECRET,
        {
            subject: usuario.cod,
            expiresIn: '30d'
        })

        return {
            cod: usuario.cod,
            email: usuario.email,
            nome: usuario.nome,
            token: token
        }
    }
}

export { ServicoLoginUsuario }