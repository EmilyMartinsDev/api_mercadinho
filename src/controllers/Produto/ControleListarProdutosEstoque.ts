import { ServicoListagemProdutoEstoque } from "../../services/Produto/ServicoListarProdutosEstoque";
import { Request, Response } from "express";

class ControleListagemProdutoEstoque{
    async handle(req: Request, res: Response){

        const servicoListagemProdutoEstoque = new ServicoListagemProdutoEstoque();
        const produtos = await servicoListagemProdutoEstoque.execute();

        return res.json(produtos);
    }
}

export { ControleListagemProdutoEstoque }