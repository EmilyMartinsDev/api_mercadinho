import { ServicoExcluirVenda } from "../../services/Venda/ServicoExcluirVenda";
import { Request, Response } from "express";


class ControleExcluirVenda{
    async handle(req:Request, res:Response){
        const cod_venda = req.query.cod_venda as string
        const servicoExcluirVenda = new ServicoExcluirVenda()
        const vendaDeletada = await servicoExcluirVenda.execute({cod_venda})
    
    return res.json(vendaDeletada)
    }
}

export { ControleExcluirVenda }