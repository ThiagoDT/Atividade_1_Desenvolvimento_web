//pega o pacote dotenv
const dotenv = require("dotenv");
//abilita e ativa as configurações do dotenv
dotenv.config();

//pega o pacote path
const path = require("path");
//pega o pacote express
const express = require("express");
// cria a variavel com os parametros do express
const app = express();
//pega as informação da porta para o servidor

const port = process.env.PORT;

//pega o caminho todo do arquivo ou pasta
const publicPath = path.join(__dirname, "public");
const pagesPath = path.join(publicPath, "pages");

//abre o servidor local e faz a escuta com o servidor para o usuarios.
app.listen(port, function(){
    console.log(`rodando em http://localhost:${port}`);
});
app.use("/assets", express.static(path.join(publicPath,"assets")))
//direciona a pagina index para inicio do caminho
app.get("/", function(req, res){
    res.sendFile(path.join(pagesPath, "index.html"));
});
//direciona para a pagina login
app.get("/login", function(req, res){
    res.sendFile(path.join(pagesPath,"login.html"))
});
//direciona para a pagina cadastro
app.get("/cadastro", function(req, res){
    res.sendFile(path.join(pagesPath,"cadastro.html"))
});

//direciona para a 404
app.use(function(req, res){
    res.status(404).sendFile(path.join(pagesPath,"404.html"))
});
