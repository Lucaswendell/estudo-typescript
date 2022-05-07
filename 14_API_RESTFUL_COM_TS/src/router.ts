import { Router, Request, Response } from "express";
import {
  createMovie,
  findMovieById,
  getAllMovies,
  removeMovie,
  updateMovie,
} from "./controllers/MovieControllers";

//validations
import { validate } from "./middleware/handleValidation";
import { movieCreateValidation } from "./middleware/movieValidation";

const router = Router();

export default router
  .get("/test", (req: Request, res: Response) => {
    return res.status(200).send("API WORKING");
  })
  .post("/movie", movieCreateValidation(), validate, createMovie)
  .get("/movie/:id", findMovieById)
  .get("/movie", getAllMovies)
  .delete("/movie/:id", removeMovie)
  .patch("/movie/:id", movieCreateValidation(), validate, updateMovie);
