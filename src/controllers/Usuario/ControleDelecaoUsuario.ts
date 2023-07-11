import { ServicoDelecaoUsuario } from "../../services/Usuario/ServicoDelecaoUsuario";
import { Request, Response } from "express";

class ControleDelecaoUsuario{
    async handle(req: Request, res: Response){
        const cod = req.query.cod as string

        const servicoDelecaoUsuario = new ServicoDelecaoUsuario();
        const usuarioDeletado = await servicoDelecaoUsuario.execute({cod});

        return res.json(usuarioDeletado);
    }
}

export { ControleDelecaoUsuario }