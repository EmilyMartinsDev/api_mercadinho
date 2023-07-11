import { Request, Response } from "express";
import { ServicoCriarItemCompra } from "../../services/Compra/ServicoCriarItemCompra";


class ControleAdicionarItemCompra{
    async handle(req:Request, res:Response){
        const {cod_produto, qt_produto} = req.body
        const cod_compra = req.query.cod_compra as string
        const servicoAddItem = new ServicoCriarItemCompra()
        const itemCompra = await servicoAddItem.execute({cod_compra,cod_produto,qt_produto:parseInt(qt_produto)})
    
    return res.json(itemCompra)
    }
}

export { ControleAdicionarItemCompra }