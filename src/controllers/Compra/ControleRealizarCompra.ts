import { Request, Response } from "express";
import { ServicoInstanciarCompra } from "../../services/Compra/ServicoInstanciarCompra";


class ControleRealizarCompra{
    async handle( req: Request, res:Response){
        const servicoRealizarCompra = new ServicoInstanciarCompra()
        const {cod_fornecedor}  = req.body
        const compra = await servicoRealizarCompra.execute()
    
    return res.json(compra)
    }
}

export { ControleRealizarCompra }