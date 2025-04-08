//centralizar toda logica
import livro from "../models/Livro.js"

class LivroCOntroller{

    static async listarLivros (req, res){
       try{
        const listaLivros = await livro.find({}); 
        res.status(200).json(listaLivros);

       }catch (erro){
        res.status(500).json({message:`${erro.message}` })

       }
       
        
    };
    static async listarLivrosPorId (req, res){
        try{
         const id= req.params.id;
         const livroEncontrado = await livro.findById(id); 
         res.status(200).json(livroEncontrado);
 
        }catch (erro){
         res.status(500).json({message:`${erro.message} - falha na requisição do livro` })
 
        }
        
         
     };
    static async cadastrarLivro (req,res){
         
        try{
            const novoLivro = await livro.create(req.body);     // livro e o que ta chamando o modelo do mongoose, create e o metodo que mongoose usa para criar registro no banco
            res.status(201).json({message: "criado com sucesso", livro: novoLivro})

        }catch (erro){
            res.status(500).json({message:`${erro.message} - falha ao cadastrar livro ` })
        }
    };
    
    static async atualizarLivro (req, res){
        try{
         const id= req.params.id;
          await livro.findByIdAndUpdate(id, req.body); 
         res.status(200).json({message: "livro atualizado"});
 
        }catch (erro){
         res.status(500).json({message:`${erro.message} - falha na atalização` })
 
        }
        
         
     };




};
export default LivroCOntroller;