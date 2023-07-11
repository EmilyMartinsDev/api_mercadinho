import { Request, Response } from "express";
import { ServicoCadastroUsuario } from "../../services/Usuario/ServicoCadastroUsuario";

class ControleCadastroUsuario {
    async handle(req: Request, res: Response){
        const {nome, senha, email, cargo} = req.body

        const servicoCadastroUsuario = new ServicoCadastroUsuario()
        const usuario = await servicoCadastroUsuario.execute({
            nome,
            email,
            senha,
            cargo
        })

        return res.json(usuario)
    }
}

export { ControleCadastroUsuario }