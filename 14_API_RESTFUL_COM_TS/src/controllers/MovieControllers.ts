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
    return res
      .status(422)
      .json({ message: "Erro ao tentar criar.", errorCode: -1 });
  }
}

export async function findMovieById(req: Request, res: Response) {
  try {
    const id = req.params.id;

    const movie = await MovieModel.findById(id);

    if (!movie) {
      return res
        .status(404)
        .json({ message: "Filme não existe.", errorCode: -1 });
    }

    return res.status(200).json(movie);
  } catch (error: any) {
    Logger.error(`Erro no sistema: ${error.message}`);
    return res
      .status(422)
      .json({ message: "Erro ao tentar pegar filme.", errorCode: -1 });
  }
}

export async function getAllMovies(req: Request, res: Response) {
  try {
    const movies = await MovieModel.find();

    return res.status(200).json(movies);
  } catch (error: any) {
    Logger.error(`Erro no sistema: ${error.message}`);
    return res
      .status(422)
      .json({ message: "Erro ao tentar pegar filmes.", errorCode: -1 });
  }
}

export async function removeMovie(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const movie = await MovieModel.findById(id);

    if (!movie) {
      return res
        .status(404)
        .json({ message: "Filme não existe.", errorCode: -1 });
    }

    await movie.delete();
    return res.status(200).json({ msg: "Filme deletado com sucesso." });
  } catch (error: any) {
    Logger.error(`Erro no sistema: ${error.message}`);
    return res
      .status(422)
      .json({ message: "Erro ao apagar filme", errorCode: -1 });
  }
}

export async function updateMovie(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const data = req.body;

    const movie = await MovieModel.findById(id);

    if (!movie) {
      return res
        .status(404)
        .json({ message: "Filme não existe.", errorCode: -1 });
    }

    await MovieModel.updateOne({ _id: id }, data);

    return res.status(200).json(data);
  } catch (error: any) {
    Logger.error(`Erro no sistema: ${error.message}`);
    return res
      .status(422)
      .json({ message: "Erro ao atualizar filme", errorCode: -1 });
  }
}
