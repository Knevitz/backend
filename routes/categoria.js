const express = require("express");
const router = express.Router();
const categoriaController = require("../controllers/categoriaController");
const {
  autenticarToken,
  apenasAdmin,
} = require("../middleware/authMiddleware");

// Listar categorias (público)
router.get("/", categoriaController.listarCategorias);

// Buscar uma categoria específica por ID (só admin)
router.get(
  "/:id",
  autenticarToken,
  apenasAdmin,
  categoriaController.buscarCategoriaPorId
);

// Criar categoria (só admin)
router.post(
  "/",
  autenticarToken,
  apenasAdmin,
  categoriaController.criarCategoria
);

// Atualizar categoria (só admin)
router.put(
  "/:id",
  autenticarToken,
  apenasAdmin,
  categoriaController.atualizarCategoria
);

// Excluir categoria (só admin)
router.delete(
  "/:id",
  autenticarToken,
  apenasAdmin,
  categoriaController.excluirCategoria
);

module.exports = router;
