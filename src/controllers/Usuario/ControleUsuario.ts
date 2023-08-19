import { ServicoUsuario } from "../../services/Usuario/ServicoUsuario";
import { Request, Response } from "express";

class ControleUsuario{
    async handle(req: Request, res: Response){
        const cod_usuario = req.cod_usuario

        const servicoDetailUser = new ServicoUsuario();
        const usuarioEditado = await servicoDetailUser.execute({cod_usuario});

        return res.json(usuarioEditado);
    }
}

export { ControleUsuario }