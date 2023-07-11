import {ServicoDelecaoCliente } from '../../services/Cliente/ServicoDelecaoCliente'
import { Request, Response } from "express";

class ControleDelecaoCliente{
    async handle(req: Request, res: Response){
        const cod = req.query.cod as string

        const servicoDelecaoCliente = new ServicoDelecaoCliente();
        const clienteDeletado = await servicoDelecaoCliente.execute({cod});

        return res.json(clienteDeletado);
    }
}

export { ControleDelecaoCliente }