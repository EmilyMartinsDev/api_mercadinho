import { ServicoExclusaoProduto } from "../../services/Produto/ServicoExcluirProduto";
import { Request, Response } from "express";

class ControleExcluirProduto{
    async handle(req: Request, res: Response){
        const cod_produto = req.query.cod_produto as string

        const servicoExcluirProduto = new ServicoExclusaoProduto();
        const produto = await servicoExcluirProduto.execute({cod_produto});

        return res.json(produto);
    }
}

export { ControleExcluirProduto }