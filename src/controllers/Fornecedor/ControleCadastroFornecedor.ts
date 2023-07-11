import { Request, Response } from "express";
import { ServicoCadastroFornecedor } from "../../services/Fornecedor/ServicoCadastrarFornecedor";


class ControleCadastroFornecedor{
    async handle(req:Request, res:Response){
        const {nome, email, fone} = req.body
        const servicoCadastroFornecedor = new ServicoCadastroFornecedor()
        const fornecedor = await servicoCadastroFornecedor.execute({nome, email, fone})
    
    return res.json(fornecedor)
    }
}

export { ControleCadastroFornecedor }