import { ServicoEdicaoFornecedor } from "../../services/Fornecedor/ServicoEditarFornecedor";
import { Request, Response } from "express";

class ControleEdicaoFornecedor{
    async handle(req: Request, res: Response){
        const cod_fornecedor = req.query.cod_fornecedor as string
        const {nome, email, fone} = req.body
        const servicoEditarFornecedor = new ServicoEdicaoFornecedor();
        const fornecedorEditado = await servicoEditarFornecedor.execute({ cod_fornecedor, nome, email, fone});

        return res.json(fornecedorEditado)
    }
}

export { ControleEdicaoFornecedor}