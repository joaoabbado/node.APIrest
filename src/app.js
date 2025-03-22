import express from "express";

const app = express();
app.use(express.json()); // middlewar, precisamos dele pos sempre chega dados via body ele chega convertido como string e para usar como json, precisamos converter

const livros = [
    {
        id:1,
        titulo:"O senhor dos Anés"
    },
    {
        id:2,
        titulo: "O Hobbit"
    }
]
function buscaLivro(id){
    return livros.findIndex(livro =>{
        return livro.id === Number(id) //como os dados trafegam no formato string precisamos converter para number
    })  //O findIndex é uma função que percorre o array e retorna o índice do primeiro elemento que satisfaz a condição fornecida. Se nenhum elemento for encontrado, ele retorna -1.
}

app.get("/", (req, res) => {
    res.status(200).send("Curso de node.js"); //send usado para dados mais simples
});
app.get("/livros", (req, res) =>{ //app.get cria uma rota que responde a requisições GET (usada para buscar informações) 
    res.status(200).json(livros); //re..status(200) define o código de status HTTP como 200, que significa requisição bem-sucedida.
});
app.get("/livros/:id",(req, res) =>{
    const index = buscaLivro(req.params.id); //params e uma propriedade de req, e o id e um parametro da rota
    res.status(200).json(livros[index])
}) // esses dois pontos avisa ao express que esta vai ser uma informação variavel

app.post("/livros", (req, res) =>{
    livros.push(req.body);  
    res.status(201).send("livro cadastrado com sucesso")
});
app.put("/livros/:id", (req,res) =>{
    const index = buscaLivro(req.params.id); 
    livros[index].titulo = req.body.titulo; // vai substituir o valor atual no indice que esta sendo passado pelo valor de titulo que a gnt vai receber no corpo da requisição
    res.status(200).json(livros)
})
app.delete("/livros/:id", (req, res) =>{
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("livro removido com sucesso");
});
export default app;