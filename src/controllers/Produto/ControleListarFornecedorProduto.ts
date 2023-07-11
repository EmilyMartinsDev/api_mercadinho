import { ServicoListarFornecedorProduto } from "../../services/Produto/ServicoListarFornecedoresProduto";
import { Request, Response } from "express";

class ControleListarFornecedorProduto{
    async handle(req: Request, res: Response){
        const {cod} = req.params 
        const servicoListarFornecedorProduto = new ServicoListarFornecedorProduto();
        const fornecedoresProduto = await servicoListarFornecedorProduto.execute({cod_produto: cod});

        return res.json(fornecedoresProduto);
    }
}

export { ControleListarFornecedorProduto }