import { Request, Response } from "express";
import { ServicoInstanciarCompra } from "../../services/Compra/ServicoInstanciarCompra";


class ControleRealizarCompra{
    async handle(req:Request, res:Response){
        const cod_fornecedor = req.query.cod_fornecedor as string
        const servicoRealizarCompra = new ServicoInstanciarCompra()
        const compra = await servicoRealizarCompra.execute(cod_fornecedor)
    
    return res.json(compra)
    }
}

export { ControleRealizarCompra }