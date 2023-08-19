import { Request, Response } from "express";
import { ServicoFinalizarCompra } from "../../services/Compra/ServicoFinalizarCompra";


class ControleFinalizarCompra{
    async handle(req:Request, res:Response){
        const {vl_produto, vl_total, cod_fornecedor} = req.body
        const cod_compra = req.query.cod_compra as string
        const servicoFinalizarCompra = new ServicoFinalizarCompra()
        const compra = await servicoFinalizarCompra.execute({vl_produto: Number(vl_produto), 
            cod_compra, cod_fornecedor})
    
    return res.json(compra)
    }
}

export { ControleFinalizarCompra}