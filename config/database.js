const mongoose = require('mongoose')
const conexao = ()=>{
    //conexão com o MongoAtlas
    mongoose.connect('mongodb+srv://userAdmin:tom110606@fiaptecnico.4xniq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    //conexão local
    //ongoose.connect('mongodb://localhost/fiap')
} 
module.exports = conexao
