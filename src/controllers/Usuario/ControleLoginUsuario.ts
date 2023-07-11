import { ServicoLoginUsuario  } from "../../services/Usuario/ServicoLoginUsuario";
import { Request, Response } from "express";

class ControleLoginUsuario{
    async handle(req: Request, res: Response){
        const { email, senha} = req.body

        const servicoLoginUsuario = new ServicoLoginUsuario();
        const autenticado = await servicoLoginUsuario.execute({ email , senha});

        return res.json(autenticado);
    }
}

export { ControleLoginUsuario }