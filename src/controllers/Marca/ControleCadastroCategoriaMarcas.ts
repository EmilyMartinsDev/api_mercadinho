import { Request, Response } from "express";
import { ServicoCadastroCategoriaMarcas } from "../../services/Marca/ServicoCadastroCategoriaMarcas";

class ControleCadastroCategoriaMarca {
    async handle(req: Request, res: Response){
        const cod_categoria = req.query.cod_categoria as string
        const {cod_marcas} = req.body

        const servicoCadastroCategoriaMarca = new ServicoCadastroCategoriaMarcas()
        const resultado = await servicoCadastroCategoriaMarca.execute({cod_categoria, cod_marcas})

        return res.json(resultado)
    }
}

export { ControleCadastroCategoriaMarca }