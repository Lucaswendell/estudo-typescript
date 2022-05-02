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

app.listen(3000, () => {
    console.log("Aplicação rodando na 3000")
})