import { Request, Response } from "express";
import { ServicoCadastrarProdutoFornecedor } from "../../services/Fornecedor/ServicoCadastrarProdutoFornecedor";

class ControleCadastroProdutosFornecedor{
    async handle(req: Request, res: Response){
        const {cod_produto, vl_produto_compra} = req.body
        const cod_fornecedor = req.query.cod_fornecedor as string
        const servicoCadastrarProdutoFornecedor = new ServicoCadastrarProdutoFornecedor()
        const produtosFornecidos = await servicoCadastrarProdutoFornecedor.execute(
            {cod_fornecedor, cod_produto , vl_produto_compra: Number(vl_produto_compra)}
            )

            return res.json(produtosFornecidos)
    }
}

export { ControleCadastroProdutosFornecedor}