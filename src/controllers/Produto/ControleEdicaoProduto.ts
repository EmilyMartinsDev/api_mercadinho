import { Request, Response } from "express";
import { ServicoEdicaoProduto } from "../../services/Produto/ServicoEdicaoProduto";


class ControleEdicaoProduto{
    async handle(req:Request, res:Response){
        const {vl_produto, nome } = req.body
        const  cod_produto = req.query.cod_produto as string
        const servicoEdicaoProduto = new ServicoEdicaoProduto()
        const produto = await servicoEdicaoProduto.execute({vl_produto: Number(vl_produto), nome, cod_produto})
    
    return res.json(produto)
    }
}

export { ControleEdicaoProduto }