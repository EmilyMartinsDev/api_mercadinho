import { ServicoListagemProdutoCategoria } from "../../services/Produto/ServicoListagemProdutoCategoria";
import { Request, Response } from "express";

class ControleListagemProdutoCategoria{
    async handle(req: Request, res: Response){
        const {cod_categoria} = req.params 

        const servicoListarProdutoCategoria = new ServicoListagemProdutoCategoria();
        const produtos = await servicoListarProdutoCategoria.execute(cod_categoria);

        return res.json(produtos);
    }
}

export { ControleListagemProdutoCategoria }