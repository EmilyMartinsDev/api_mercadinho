import { Request, Response } from "express";
import { ServicoListagemCategoria } from "../../services/Categoria/ServicoListarCategorias";

class ControleListagemCategorias {
    async handle(req: Request, res: Response){

        const servicoListagemCategoria = new ServicoListagemCategoria()
        const categorias = await servicoListagemCategoria.execute()

        return res.json(categorias)
    }
}

export { ControleListagemCategorias }