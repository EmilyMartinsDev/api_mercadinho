import { ServicoEdicaoUsuario } from "../../services/Usuario/ServicoEdicaoUsuario";
import { Request, Response } from "express";

class ControleEdicaoUsuario{
    async handle(req: Request, res: Response){
        const cod = req.query.cod as string
        const { email, nome, cargo} = req.body

        const servicoEdicaoUsuario = new ServicoEdicaoUsuario();
        const usuarioEditado = await servicoEdicaoUsuario.execute({ email, cargo, nome, cod});

        return res.json(usuarioEditado);
    }
}

export { ControleEdicaoUsuario }