import { Request, Response } from "express";
import { ServicoCriarCategoria } from "../../services/Categoria/ServicoCriarCategoria";

class ControleCriarCategoria {
    async handle(req: Request, res: Response){
        const {nome} = req.body

        const servicoCriarCategoria = new ServicoCriarCategoria()
        const categoria = await servicoCriarCategoria.execute({nome})

        return res.json(categoria)
    }
}

export { ControleCriarCategoria }