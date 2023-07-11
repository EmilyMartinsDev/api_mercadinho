import { Request, Response } from "express";
import { ServicoListagemCliente } from "../../services/Cliente/ServicoListagemCliente";

class ControleListagemCliente {
    async handle(req: Request, res: Response){

        const servicoListagemCliente = new ServicoListagemCliente()
        const clientes = await servicoListagemCliente.execute()

        return res.json(clientes)
    }
}

export { ControleListagemCliente }