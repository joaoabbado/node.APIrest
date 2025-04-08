import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) =>{    // error, evento mongoose
    console.error("erro de conexão", erro);
})
conexao.once("open", () =>{
    console.log("Conexao com banco feita com sucesso")
})  //metodo que espera por um evento

const app = express();
routes(app) //pasando servidor express como parametro
// app.use(express.json()); // middleware, precisamos dele pos sempre chega dados via body ele chega convertido como string e para usar como json, precisamos converter

// app.get("/", (req, res) => {
//     res.status(200).send("Curso de node.js"); //send usado para dados mais simples
// });
// app.get("/livros", async (req, res) =>{ //app.get cria uma rota que responde a requisições GET (usada para buscar informações) 
//     const listaLivros = await livro.find({}); //const onde vai guradar os  livros que retornar do banco/ o.find e um metodo do mongoose que se conecta com banco e busca tuo que encontra na coloecao livros
//     res.status(200).json(listaLivros); //re..status(200) define o código de status HTTP como 200, que significa requisição bem-sucedida. essa parte depois de separada pode ser excluida
// });
app.get("/livros/:id",(req, res) =>{
    const index = buscaLivro(req.params.id); //params e uma propriedade de req, e o id e um parametro da rota
    res.status(200).json(livros[index])
}) // esses dois pontos avisa ao express que esta vai ser uma informação variavel

// app.post("/livros", (req, res) =>{
//     livros.push(req.body);  
//     res.status(201).send("livro cadastrado com sucesso")
// });
// app.put("/livros/:id", (req,res) =>{
//     const index = buscaLivro(req.params.id); 
//     livros[index].titulo = req.body.titulo; // vai substituir o valor atual no indice que esta sendo passado pelo valor de titulo que a gnt vai receber no corpo da requisição
//     res.status(200).json(livros)
// })
app.delete("/livros/:id", (req, res) =>{
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("livro removido com sucesso");
});
export default app;
