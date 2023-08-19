import { Request, Response } from "express";
import { ServicoCriarItemCompra } from "../../services/Compra/ServicoCriarItemCompra";


class ControleAdicionarItemCompra{
    async handle(req:Request, res:Response){
        const {cod_produto, qt_produto, vl_produto_compra,cod_compra } = req.body
       
        const servicoAddItem = new ServicoCriarItemCompra()
        const itemCompra = await servicoAddItem.execute({cod_compra,cod_produto,qt_produto, vl_produto_compra})
    
    return res.json(itemCompra)
    }
}

export { ControleAdicionarItemCompra }