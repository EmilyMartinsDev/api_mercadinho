import { Request, Response } from "express";
import { ServicoReportarLucro } from "../../services/Relatorios/ServicoReportarLucro";

class ControleReportarRelatorioLucro{
    async handle(req: Request, res: Response){
        const {data_final, data_inicial} = req.body
        const servicoReportarLucro = new ServicoReportarLucro()
        const vendas_periodo = await servicoReportarLucro.execute({data_final, data_inicial})

        return res.json(vendas_periodo)
    }
}

export { ControleReportarRelatorioLucro }