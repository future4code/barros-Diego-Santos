import { Request, Response } from "express";
import { MovieBusiness } from "../business/MovieBusiness";

export class MovieController {
  private static movieBusiness = new MovieBusiness();

  create = async(req: Request, res: Response):Promise<void> => {
    try{
      const movie = {
        title: req.body.title,
        description: req.body.description,
        duration_in_minutes: req.body.duration_in_minutes, 
        year_of_release: req.body.year_of_release
      };

      await MovieController.movieBusiness.create(movie)
      res.status(201).send({ message: "Movie criado com sucesso" })

    }catch(error:any){
      res.status(400).send(error.message);
    }
  };
  getMovies = async (req: Request, res: Response):Promise<void> => {
    try{
      const result = await MovieController.movieBusiness.getMovies()
      
      res.status(200).send(result)
    }catch(error:any){
      throw new Error(error.message)
    }
  };
}