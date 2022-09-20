import livros from "../models/Livro.js";

class LivroController{

    static listarLivros = (req, res) => {
        livros.find()
        .populate('autor')
        .exec((err, livros) => {
            res.status(200).json(livros);
        });
    }

    static cadastrarLivro = (req, res) => {
        let livro = new livros(req.body);

        livro.save((err) => {

            if(err){
                res.status(500).send({message: `${err.message} - Falha no cadastro de livro!`});
            } else{
                res.status(201).send(livro.toJSON());
            };
        });
    };

    static editarLivro = (req, res) => {

        const {id} = req.params

        livros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200).send({message: 'Livro atualizado com sucesso!!!'})
            }else{
                res.status(500).send({message: `${err.message}`})
            };
        });
    };

    static listarLivroPorId = (req, res) => {
        const {id} = req.params;

        livros.findById(id) 
        .populate('autor', 'nome')
        .exec((err, livros) => {
            if(err) {
                res.status(400).send({message: `${err.message}`})
            }else{
                res.status(200).send(livros);
            };
        });
    };

    static deletarLivro = (req, res) => {
        const {id} = req.params

        livros.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(200).send({message: 'Livro deletado com sucesso!!!'})
            } else{
                res.status(500).send({message: `${err} - Falha ao deletar livro!`})
            }
        })
    };

    static listarLivroPorEditora = (req, res) => {
        const {editora} = req.query

        livros.find({'editora': editora}, {}, (err, livros) => {
            res.status(200).send(livros);
        })
    }
};

export default LivroController;
