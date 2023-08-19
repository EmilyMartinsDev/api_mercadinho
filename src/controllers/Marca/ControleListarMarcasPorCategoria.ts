import { Request, Response } from "express";
import { ServicoListarMarcasPorCategoria } from "../../services/Marca/ServicoListarMarcasPorCategoria";

class ControleListarMarcaCategoria {
    async handle(req: Request, res: Response){
        const cod_categoria = req.query.cod_categoria as string
        const servicoListarMarcaPorCategoria = new ServicoListarMarcasPorCategoria()
        const marcas = await servicoListarMarcaPorCategoria.execute({cod_categoria})

        return res.json(marcas)
    }
}

export { ControleListarMarcaCategoria }