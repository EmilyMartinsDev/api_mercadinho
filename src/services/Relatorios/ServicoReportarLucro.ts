import prismaClient from "../../prisma/prismaClient";

type RelatorioLucro ={
    data_inicial: string
    data_final: string

}



class ServicoReportarLucro{
    async execute({data_final, data_inicial}: RelatorioLucro){

        const vendas_periodo = await prismaClient.venda.findMany({
           where:{
            data_criacao: {
                gte: new Date(data_inicial),
                lte: new Date(data_final)
            }
           },
           select:{
            cliente: true,
            itemVenda: true
           }
        })

        const items = await prismaClient.itemVenda.groupBy({
            by: ['cod_produto'],
            where:{
                data_criacao:{
                    gte: new Date(data_inicial),
                    lte: new Date(data_final)
                },
                
            },
           _sum:{
            qt_produto: true,
            vl_total_item: true
           },
           
        })
        
     

        
        const valor_total_data = await prismaClient.venda.aggregate({

            where:{
                data_criacao:{
                    gte: new Date(data_inicial),
                    lte: new Date(data_final)
                },
            },

            _sum: {
                vl_total: true
            }
        })

        const numeroVendas = await prismaClient.venda.count({
            where:{
                data_criacao:{
                    gte: new Date(data_inicial),
                    lte: new Date(data_final)
                },
            }
        }) 

        const ticket_medio  = valor_total_data._sum.vl_total / numeroVendas

        const venda_clientes = await prismaClient.venda.groupBy({
            by: ['cod_cliente'],
            where:{
             data_criacao: {
                 gte: new Date(data_inicial),
                 lte: new Date(data_final)
             },            
         },
         _sum: {
            vl_total: true
         },
         _count: {
            cod_cliente: true
         }
        
        })
 


       return {
        relatorio_vendas: items,
        relatorio_clientes: venda_clientes,
        ticket_medio: ticket_medio,
        valor_total : valor_total_data
       }
    }

}

export { ServicoReportarLucro}