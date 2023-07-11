import { Request, Response } from "express";
import { ServicoFinalizarVenda } from "../../services/Venda/ServicoFinalizarVenda";


class ControleFinalizarVenda{
    async handle(req:Request, res:Response){
        const cod_venda = req.query.cod_venda as string
        const servicoFinalizarVenda = new ServicoFinalizarVenda()
        const venda = await servicoFinalizarVenda.execute({ cod_venda})
    
    return res.json(venda)
    }
}

export { ControleFinalizarVenda}