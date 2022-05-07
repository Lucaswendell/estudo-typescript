import { Router, Request, Response } from "express";
import { createMovie } from "./controllers/MovieControllers";

//validations
import { validate } from "./middleware/handleValidation";
import { movieCreateValidation } from "./middleware/movieValidation";

const router = Router();

export default router
  .get("/test", (req: Request, res: Response) => {
    return res.status(200).send("API WORKING");
  })
  .post("/movie", movieCreateValidation(), validate, createMovie);
