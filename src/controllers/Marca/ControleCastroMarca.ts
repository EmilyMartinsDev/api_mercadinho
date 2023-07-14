import { Request, Response } from "express";
import { ServicoCadastroMarca } from "../../services/Marca/ServicoCadastroMarca";

class ControleCadastroMarca {
    async handle(req: Request, res: Response){
        const {nome} = req.body

        const servicoCadastroMarca = new ServicoCadastroMarca()
        const marca = await servicoCadastroMarca.execute({nome})

        return res.json(marca)
    }
}

export { ControleCadastroMarca }