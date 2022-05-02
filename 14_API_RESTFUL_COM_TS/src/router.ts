import { Router, Request, Response } from "express";
import { createMovie } from "./controllers/MovieControllers";

const router = Router();

export default router
  .get("/test", (req: Request, res: Response) => {
    return res.status(200).send("API WORKING");
  })
  .post("/movie", createMovie);
