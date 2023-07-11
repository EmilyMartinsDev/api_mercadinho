import { Request, Response } from "express";
import { ServicoAdicionarItemVenda } from "../../services/Venda/ServicoAdicionarItemVenda";


class ControleAdicionarItemVenda{
    async handle(req:Request, res:Response){
        const {cod_produto, qt_produto} = req.body
        const cod_venda = req.query.cod_venda as string
        const servicoAddItem = new ServicoAdicionarItemVenda()
        const itemVenda = await servicoAddItem.execute({cod_venda,cod_produto,qt_produto:parseInt(qt_produto)})
    
    return res.json(itemVenda)
    }
}

export { ControleAdicionarItemVenda }