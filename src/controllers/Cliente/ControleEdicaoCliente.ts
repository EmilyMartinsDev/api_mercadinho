import { ServicoEdicaoCliente } from "../../services/Cliente/ServicoEdicaoCliente";
import { Request, Response } from "express";

class ControleEdicaoCliente{
    async handle(req: Request, res: Response){
        const cod = req.query.cod as string
        const { email, nome} = req.body

        const servicoClienteEditado = new ServicoEdicaoCliente();
        const clienteEditado = await servicoClienteEditado.execute({ email,  nome, cod});

        return res.json(clienteEditado);
    }
}

export { ControleEdicaoCliente }