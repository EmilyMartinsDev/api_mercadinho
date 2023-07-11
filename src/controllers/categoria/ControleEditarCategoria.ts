import { ServicoEdicaoCategoria } from "../../services/Categoria/ServicoEditarCategoria";
import { Request, Response } from "express";

class ControleEdicaoCategoria{
    async handle(req: Request, res: Response){
        const cod = req.query.cod_categoria as string
        const {nome} = req.body

        const servicoEdicaoCategoria = new ServicoEdicaoCategoria();
        const categoriaEditada = await servicoEdicaoCategoria.execute({   nome, cod});

        return res.json(categoriaEditada);
    }
}

export { ControleEdicaoCategoria }