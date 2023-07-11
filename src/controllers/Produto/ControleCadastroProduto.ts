import { Request, Response } from "express";
import { ServicoCadastroProduto } from "../../services/Produto/ServicoCadastroProduto";


class ControleCadastroProduto{
    async handle(req:Request, res:Response){
        const {cod_categoria, nome} = req.body
        const servicoCadastroProduto = new ServicoCadastroProduto()
        const produto = await servicoCadastroProduto.execute({
            cod_categoria, nome 
          
        })
    
    return res.json(produto)
    }
}

export { ControleCadastroProduto }