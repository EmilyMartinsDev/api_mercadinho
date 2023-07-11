import { Request, Response } from "express";
import { ServicoInstanciarVenda } from "../../services/Venda/ServicoInstanciarVenda";


class ControleInstanciarVenda{
    async handle(req:Request, res:Response){
        const {cod_cliente} = req.body
        const servicoInstanciarVenda = new ServicoInstanciarVenda()
        const venda = await servicoInstanciarVenda.execute({cod_cliente})
    
    return res.json(venda)
    }
}

export { ControleInstanciarVenda }