import mongoose from "mongoose";
import { autorSchema } from "./Autor.js";

const livroSchema = new mongoose.Schema({ // schema e um objeto de configuração que define a estrutura e as propriedades de um documento, no caso vamos passar a propriedades que um livro pode ter
    id:{type: mongoose.Schema.Types.ObjectId},
    titulo: {type: String, required: true}, // required true para propriedade ser obrigatoria
    editora: {type: String},
    preco: {type: Number},
    paginas: {type: Number},
    autor: autorSchema
}, {versionKey: false});

const livro = mongoose.model("livros", livroSchema)     //primeiro parametro se refere a colecao la no banco, e o segundo o livrosSchema sua propriedades;
export default livro