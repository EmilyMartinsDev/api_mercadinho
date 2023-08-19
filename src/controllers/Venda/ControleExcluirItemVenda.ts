import { ServicoExcluirItemVenda } from "../../services/Venda/ServicoExcluirItemVenda";
import { Request, Response } from "express";


class ControleExcluirItemVenda{
    async handle(req:Request, res:Response){
        const {cod_itemVenda} = req.body

        const servicoExcluirItem = new ServicoExcluirItemVenda()
        const itemVenda = await servicoExcluirItem.execute({cod_itemVenda})
    
    return res.json(itemVenda)
    }
}

export { ControleExcluirItemVenda }