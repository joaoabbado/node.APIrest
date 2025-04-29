import express from "express"
import LivroCOntroller  from "../controllers/livroController.js"

const routes = express.Router();

routes.get("/livros", LivroCOntroller.listarLivros);
routes.get("/livros/:id", LivroCOntroller.listarLivrosPorId);
routes.post("/livros", LivroCOntroller.cadastrarLivro);
routes.put("/livros/:id", LivroCOntroller.atualizarLivro);
routes.delete("/livros/:nome", LivroCOntroller.deletarLivro)
export default routes;