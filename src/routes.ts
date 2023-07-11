import { Router, Request, Response } from "express";
import { estaAutenticado, usuarioAdministrador } from "./middleware/Seguranca";

import { ControleCadastroUsuario } from "./controllers/Usuario/ControleCadastroUsuario";
import { ControleLoginUsuario } from "./controllers/Usuario/ControleLoginUsuario";
import { ControleEdicaoUsuario } from "./controllers/Usuario/ControleEdicaoUsuario";
import { ControleDelecaoUsuario } from "./controllers/Usuario/ControleDelecaoUsuario";

import { ControleCadastroCliente } from "./controllers/Cliente/ControleCadastroCliente";
import { ControleListagemCliente } from "./controllers/Cliente/ControleListagemCliente";
import { ControleDelecaoCliente } from "./controllers/Cliente/ControleDelecaoCliente";
import { ControleEdicaoCliente } from "./controllers/Cliente/ControleEdicaoCliente";

import { ControleCriarCategoria } from "./controllers/categoria/ControleCriarCategoria";
import { ControleEdicaoCategoria } from "./controllers/categoria/ControleEditarCategoria";
import { ControleListagemCategorias } from "./controllers/categoria/ControleListarCategorias";

import { ControleCadastroProduto } from "./controllers/Produto/ControleCadastroProduto";
import { ControleExcluirProduto } from "./controllers/Produto/ControleExcluirProduto";
import { ControleEdicaoProduto } from "./controllers/Produto/ControleEdicaoProduto";

import { ControleCadastroFornecedor } from "./controllers/Fornecedor/ControleCadastroFornecedor";
import { ControleListarFornecedor } from "./controllers/Fornecedor/ControleListarFornecedor";
import { ControleEdicaoFornecedor } from "./controllers/Fornecedor/ControleEdicaoFornecedor";
import { ControleCadastroProdutosFornecedor } from "./controllers/Fornecedor/ControleCadastroProdutosFornecedor";
import { ControleListarProdutoFornecedor } from "./controllers/Fornecedor/ControleListarProdutosDoFornecedor";
import { ControleListarFornecedorProduto } from "./controllers/Produto/ControleListarFornecedorProduto";
import { ControleRealizarCompra } from "./controllers/Compra/ControleRealizarCompra";
import { ControleAdicionarItemCompra } from "./controllers/Compra/ControleAdicionarItemCompra";
import { ControleFinalizarCompra } from "./controllers/Compra/ControleFinalizarCompra";
import { ControleListagemProdutoCategoria } from "./controllers/Produto/ControleListagemProdutoCategoria";
import { ControleInstanciarVenda } from "./controllers/Venda/ControleInstanciarVenda";
import { ControleAdicionarItemVenda } from "./controllers/Venda/ControleAdicionarItemVenda";
import { ControleFinalizarVenda } from "./controllers/Venda/ControleFinalizarVenda";
import { ControleListagemProdutoEstoque } from "./controllers/Produto/ControleListarProdutosEstoque";
import { ControleExcluirItemVenda } from "./controllers/Venda/ControleExcluirItemVenda";
import { ControleExcluirVenda } from "./controllers/Venda/ControleExcluirVenda";
import { ControleReportarRelatorioLucro } from "./controllers/Relatorios/ControleReportarRelatorioLucro";



const router = Router();
/*rotas do usuario */
router.post('/usuario',estaAutenticado, usuarioAdministrador, new ControleCadastroUsuario().handle)
router.post("/login", new ControleLoginUsuario().handle) 
router.put("/usuario", estaAutenticado, usuarioAdministrador, new ControleEdicaoUsuario().handle)
router.delete("/usuario", estaAutenticado, usuarioAdministrador, new ControleDelecaoUsuario().handle)

/*rotas do cliente */
router.post("/cliente", estaAutenticado, new ControleCadastroCliente().handle)
router.get("/cliente", estaAutenticado, new ControleListagemCliente().handle)
router.delete("/cliente", estaAutenticado, new ControleDelecaoCliente().handle)
router.put("/cliente", estaAutenticado, new ControleEdicaoCliente().handle)

/*rotas categoria */
router.post("/categoria", estaAutenticado, usuarioAdministrador, new ControleCriarCategoria().handle)
router.get("/categoria", estaAutenticado, usuarioAdministrador, new ControleListagemCategorias().handle)
router.put("/categoria", estaAutenticado, usuarioAdministrador, new ControleEdicaoCategoria().handle)

/*rotas produto*/
router.post("/produto", estaAutenticado, usuarioAdministrador, new ControleCadastroProduto().handle)
router.get("/produto/:cod_categoria", estaAutenticado, new ControleListagemProdutoCategoria().handle)
router.put("/produto", estaAutenticado, usuarioAdministrador, new ControleEdicaoProduto().handle)
router.delete("/produto", estaAutenticado, usuarioAdministrador, new ControleExcluirProduto().handle)
router.get("/estoque", estaAutenticado, new ControleListagemProdutoEstoque().handle)

/*rotas fornecedor*/
router.post("/fornecedor", estaAutenticado, usuarioAdministrador, new ControleCadastroFornecedor().handle)
router.get("/fornecedor", estaAutenticado, new ControleListarFornecedor().handle)
router.put("/fornecedor", estaAutenticado, usuarioAdministrador, new ControleEdicaoFornecedor().handle)
router.post("/fornecedor/produto", estaAutenticado, usuarioAdministrador, new ControleCadastroProdutosFornecedor().handle)
router.get("/fornecedor/produtos", estaAutenticado, new ControleListarProdutoFornecedor().handle)
router.get('/produto/fornecedores/:cod_produto', estaAutenticado, new ControleListarFornecedorProduto().handle)

/*rotas compra*/
router.post("/compra", estaAutenticado, new ControleRealizarCompra().handle)
router.post("/compra/add", estaAutenticado, new ControleAdicionarItemCompra().handle)
router.put("/compra/concluir", estaAutenticado, new ControleFinalizarCompra().handle)

/*rotas venda*/

router.post("/venda", estaAutenticado, new ControleInstanciarVenda().handle)
router.post("/venda/add", estaAutenticado, new ControleAdicionarItemVenda().handle)
router.put("/venda/concluir", estaAutenticado, new ControleFinalizarVenda().handle)
router.delete("/venda/deleteItem",estaAutenticado, new ControleExcluirItemVenda().handle)
router.delete("/venda", estaAutenticado, new ControleExcluirVenda().handle)

/*Rotas para exibir relatorios */

router.get("/relatorio/vendas", estaAutenticado, new ControleReportarRelatorioLucro().handle)
export  {router}