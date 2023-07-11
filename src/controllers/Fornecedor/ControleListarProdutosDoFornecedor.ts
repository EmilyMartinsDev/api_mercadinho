import { ServicoListarProdutosDeFornecedor } from "../../services/Fornecedor/ServicoListarProdutosFornecedor";
import { Request, Response } from "express";

class ControleListarProdutoFornecedor{
    async handle(req: Request, res: Response){
        const cod_fornecedor = req.query.cod_fornecedor as string
        const servicoListarProdutosFornecedor = new ServicoListarProdutosDeFornecedor();
        const produtosDoFornecedor = await servicoListarProdutosFornecedor.execute(cod_fornecedor);

        return res.json(produtosDoFornecedor);
    }
}

export { ControleListarProdutoFornecedor }