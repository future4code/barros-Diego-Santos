import { Request, Response } from "express";
import { MovieBusiness } from "../business/MovieBusiness";
import { MovieDTO, MovieInputDTO } from "../model/MovieDTO";
import { CustomError } from "../error/CustomError";

export class MovieController {
  private static movieBusiness = new MovieBusiness();

  create = async(req: Request, res: Response):Promise<void> => {
    try{
      const movie: MovieInputDTO = {
        title: req.body.title,
        description: req.body.description,
        duration_in_minutes: req.body.duration_in_minutes, 
        year_of_release: req.body.year_of_release
      };

      await MovieController.movieBusiness.create(movie)
      res.status(201).send({ message: "Movie criado com sucesso" })

    }catch(error:any){
      res.status(error.statusCode || 400).send(error.message || error.sqlMessage);
    }
  };
  getMovies = async (req: Request, res: Response):Promise<void> => {
    try{
      const result:MovieDTO[] = await MovieController.movieBusiness.getMovies()
      
      res.status(200).send(result)
    }catch(error:any){
      res.status(error.statusCode || 400).send(error.message || error.sqlMessage);
    }
  };
}