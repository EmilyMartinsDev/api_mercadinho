import { Request, Response } from "express";
import { ServicoCadastroCategoriaMarcas } from "../../services/Marca/ServicoCadastroCategoriaMarcas";

class ControleCadastroCategoriaMarca {
    async handle(req: Request, res: Response){
     
        const {cod_marca, cod_categoria} = req.body

        const servicoCadastroCategoriaMarca = new ServicoCadastroCategoriaMarcas()
        const resultado = await servicoCadastroCategoriaMarca.execute({cod_categoria, cod_marca})

        return res.json(resultado)
    }
}

export { ControleCadastroCategoriaMarca }