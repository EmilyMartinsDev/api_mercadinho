import { ServicoListarFornecedor } from "../../services/Fornecedor/ServicoListarFornecedor";
import { Request, Response } from "express";

class ControleListarFornecedor{
    async handle(req: Request, res: Response){

        const servicoListarFornecedor = new ServicoListarFornecedor();
        const fornecedores = await servicoListarFornecedor.execute();

        return res.json(fornecedores);
    }
}

export { ControleListarFornecedor }