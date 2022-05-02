// 1 - iniciando projeto
//console.log("Express com TS");

// 2 - init express
import express from 'express';
const app = express();

//3 - rota com POST
//middleware para trabalhar com json
app.use(express.json());

app.get("/", (req, res) => {
    return res.json("Hello express");
});

//3 - rota com POST
app.post("/api/product", (req, res) => {
    console.log(req.body);

    return res.send("Produto adicionado");
});

//4 - rota para todos os verbos
app.all("/api/product/check", (req, res) => {
    if(req.method === "POST"){
        return res.send("Adicionou algo.")
    }else if(req.method === "GET"){
        return res.send("Leu algum resgistro.");
    }else{
        return res.status(405).send("Não realiza operacao.")
    }
});

app.listen(3000, () => {
    console.log("Aplicação rodando na 3000")
})