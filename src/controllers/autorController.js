//centralizar toda logica
import {autor} from "../models/Autor.js"

class AutorController{

    static async listarLivros (req, res){
       try{
        const listaAutores = await autor.find({}); 
        res.status(200).json(listaAutores);

       }catch (erro){
        res.status(500).json({message:`${erro.message} falha na requisição` })

       }
       
        
    };
    static async listarAutorPorId (req, res){
        try{
         const id= req.params.id;
         const autorEncontrado = await livro.findById(id); 
         res.status(200).json(autorEncontrado);
 
        }catch (erro){
         res.status(500).json({message:`${erro.message} - falha na requisição do livro` })
 
        }
        
         
     };
    static async cadastrarAutor (req,res){
         
        try{
            const novoAutor = await autor.create(req.body);     // livro e o que ta chamando o modelo do mongoose, create e o metodo que mongoose usa para criar registro no banco
            res.status(201).json({message: "criado com sucesso", livro: novoLivro})

        }catch (erro){
            res.status(500).json({message:`${erro.message} - falha ao cadastrar livro ` })
        }
    };
    
    static async atualizarAutor (req, res){
        try{
         const id= req.params.id;
          await livro.findByIdAndUpdate(id, req.body); 
         res.status(200).json({message: "livro atualizado"});
 
        }catch (erro){
         res.status(500).json({message:`${erro.message} - falha na atalização` })
 
        }
        
         
     };
     static async excluirAutor (req,res){
        try{
           const nome = req.params.nome;
           const autorDeletado = await autor.findOneAndDelete({titulo:nome})
           if (!livroDeletado){
            return res.status(404).json({message: "livro não encontrado"})
           }
           res.status(200).json({message: "livro deletado"}); 
        }catch (erro){
            res.status(500).json({message:`${erro.message}- erro ao deletar livro`})
        }
     }




};
export default AutorController;