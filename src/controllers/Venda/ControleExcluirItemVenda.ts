import { ServicoExcluirItemVenda } from "../../services/Venda/ServicoExcluirItemVenda";
import { Request, Response } from "express";


class ControleExcluirItemVenda{
    async handle(req:Request, res:Response){
        const {cod_produto} = req.body
        const cod_venda = req.query.cod_venda as string
        const servicoExcluirItem = new ServicoExcluirItemVenda()
        const itemVenda = await servicoExcluirItem.execute({cod_venda,cod_produto})
    
    return res.json(itemVenda)
    }
}

export { ControleExcluirItemVenda }