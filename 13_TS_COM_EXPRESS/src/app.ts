// 1 - iniciando projeto
//console.log("Express com TS");

// 2 - init express
import express, { Request, Response, NextFunction } from "express";
const app = express();

//3 - rota com POST
//middleware para trabalhar com json
app.use(express.json());

// 11 - middleware para todas as rotas
function showPath(req: Request, res: Response, next: NextFunction) {
  console.log(req.path);
  next();
}

app.use(showPath);
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
app.get(
  "/api/product/:productId/review/:reviewId",
  (req: Request, res: Response) => {
    console.log(req.params);

    const { productId, reviewId } = req.params;

    return res.send(`Acessando a review ${reviewId} do produto ${productId}.`);
  }
);

//9 - router handler
app.get("/api/user/:id", getUser);

function getUser(req: Request, res: Response) {
  console.log(`Resgatando o usuario com o id: ${req.params.id}`);
  return res.send("Usuario encontrado");
}

//10 - middleware
function checkUser(req: Request, res: Response, next: NextFunction) {
  if (req.params.id === "1") {
    console.log("Pode seguir");
    next();
  } else {
    console.log("Acesso restrito");
    return res.send("Nope");
  }
}
app.get("/api/user/:id/access", checkUser, (req: Request, res: Response) => {
  return res.json({ msg: "Bem vindo a área administrativa" });
});

//12 - req, res com generics
app.get(
  "/api/user/:id/details/:name",
  (
    req: Request<{ id: string; name: string }>,
    res: Response<{ status: boolean }>
  ) => {
    console.log(`ID: ${req.params.id}`);
    console.log(`Name: ${req.params.name}`);

    return res.json({ status: true });
  }
);

//13 - Tratando erros
app.get("/api/error", (req: Request, res: Response) => {
  try {
    throw new Error("Deu erro oh.");
  } catch (e: any) {
    return res.status(400).json({ message: e.message });
  }
});

app.listen(3000, () => {
  console.log("Aplicação rodando na 3000");
});
