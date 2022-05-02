// 1 - iniciando projeto
//console.log("Express com TS");

// 2 - init express
import express, { Request, Response } from "express";
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
  if (req.method === "POST") {
    return res.send("Adicionou algo.");
  } else if (req.method === "GET") {
    return res.send("Leu algum resgistro.");
  } else {
    return res.status(405).send("Não realiza operacao.");
  }
});

//5 - Interface do express
app.get("/api/interfaces", (req: Request, res: Response) => {
  return res.send("Utilizando interfaces");
});

//6 - enviando json
app.get("/api/json", (req: Request, res: Response) => {
  return res.json({
    name: "Shirt",
    price: 30.0,
    color: "Blue",
    sizes: ["P", "M", "G"],
  });
});

// 7 - router parameters
app.get("/api/product/:id", (req: Request, res: Response) => {
  console.log(req.params);

  const id = Number(req.params.id);

  if (!isNaN(id)) {
    const product = {
      id,
      name: `Boné - ${id}`,
      price: Number((id * 1.9).toFixed(2)),
    };
    return res.json(product);
  } else {
    return res.send("Produto não encontrado");
  }
});

//8 - Rotas complexas
app.get("/api/product/:productId/review/:reviewId", (req: Request,res: Response) => {
    console.log(req.params);

    const { productId, reviewId } = req.params;

    return res.send(`Acessando a review ${reviewId} do produto ${productId}.`);
});

app.listen(3000, () => {
  console.log("Aplicação rodando na 3000");
});
