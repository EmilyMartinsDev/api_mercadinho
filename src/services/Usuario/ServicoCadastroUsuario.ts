import prismaClient from "../../prisma/prismaClient";
import { hash } from "bcryptjs";
import * as enums from '../../utils/enums/cargo';

type Usuario ={
    nome: string
    email: string
    senha: string
    cargo: enums.cargo.admin | enums.cargo.caixa
}

class ServicoCadastroUsuario{
    async execute({nome, email, senha, cargo}: Usuario){
        if(!nome || !email || !senha || !cargo){
            throw new Error("campos invalidos")
        }
        const usuarioJaExiste = await prismaClient.funcionario.findFirst({
            where: {
                email: email
            }
        });

        if(usuarioJaExiste){
            throw new Error("usuario ja cadastrado")
        }

        const senhaCriptografada = await hash(senha, 8)
        const usuario = await prismaClient.funcionario.create({
            data:{
                cargo: cargo,
                email: email,
                nome: nome,
                senha: senhaCriptografada
            }
        });

        return usuario
    }
}

export { ServicoCadastroUsuario }