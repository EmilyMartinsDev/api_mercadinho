import { Request, Response } from "express";
import { ServicoCadastroCliente } from "../../services/Cliente/ServicoCadastroCliente";

class ControleCadastroCliente {
    async handle(req: Request, res: Response){
        const {nome, email} = req.body

        const servicoCadastroCliente = new ServicoCadastroCliente()
        const cliente = await servicoCadastroCliente.execute({
            nome,
            email         
        })

        return res.json(cliente)
    }
}

export { ControleCadastroCliente }