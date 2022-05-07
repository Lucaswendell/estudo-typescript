import { Request, Response } from "express";

//Model
import { MovieModel } from "../models/Movie";

//Logger
import Logger from "../../config/logger";

export async function createMovie(req: Request, res: Response) {
  try {
    const data = req.body;
    const movie = await MovieModel.create(data);
    return res.status(201).json(movie);
  } catch (error: any) {
    Logger.error(`Erro no sistema: ${error.message}`);
    return res.status(422).json({ message: error.message, errorCode: -1 });
  }
}

export async function findMovieById(req: Request, res: Response) {
  try {
    const id = req.params.id;

    const movie = await MovieModel.findById(id);

    if (!movie) {
      return res.status(404).json({ error: "Filme não existe." });
    }

    return res.status(200).json(movie);
  } catch (error: any) {
    Logger.error(`Erro no sistema: ${error.message}`);
    return res.status(422).json({ message: error.message, errorCode: -1 });
  }
}

export async function getAllMovies(req: Request, res: Response) {
  try {
    const movies = await MovieModel.find();

    return res.status(200).json(movies);
  } catch (error: any) {
    Logger.error(`Erro no sistema: ${error.message}`);
    return res.status(422).json({ message: error.message, errorCode: -1 });
  }
}
