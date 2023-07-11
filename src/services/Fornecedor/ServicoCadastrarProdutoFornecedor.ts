import prismaClient from "../../prisma/prismaClient";

type CadastroProdutoFornecedor = {
    cod_produto: string
    cod_fornecedor: string
    vl_produto_compra: number
}

 class ServicoCadastrarProdutoFornecedor{
    async execute({cod_fornecedor, cod_produto, vl_produto_compra}){
        const jaCadastrado = await prismaClient.fornecedorProduto.findFirst({
            where:{
                cod_produto:cod_produto,
                cod_fornecedor: cod_fornecedor 
                
            }
        })

        if(jaCadastrado){
            return new Error("nao pode cadastrar o mesmo fornecedor para o mesmo produto")
        }
        
        const produtosFornecidos = await prismaClient.fornecedorProduto.create({
            data:{
                vl_produto_compra: vl_produto_compra,
                cod_fornecedor: cod_fornecedor,
                cod_produto: cod_produto
            }
        })

        return produtosFornecidos
    }
 }

 export { ServicoCadastrarProdutoFornecedor}