import { MovieDTO } from "../model/MovieDTO";
import { BaseDatabase } from "./BaseDatabase";
import { CustomError } from "../error/CustomError";

export class MovieDatabase extends BaseDatabase {
  private static TABLE_NAME = "LABEFLIX_MOVIE"

  create = async (input:MovieDTO) => {
    try{
      const movie: MovieDTO = {
        id: input.id,
        title: input.title,
        description: input.description,
        duration_in_minutes: input.duration_in_minutes,
        year_of_release: input.year_of_release
      };
      await MovieDatabase.connection.insert(movie)
      .into(MovieDatabase.TABLE_NAME)

    }catch(error:any){
      throw new CustomError(error.statusCode, error.message) 
    }
  };

  getMovies = async ():Promise<MovieDTO[]> => {
    try{
      return await MovieDatabase.connection(MovieDatabase.TABLE_NAME)
    }catch(error:any){
      throw new CustomError(error.statusCode, error.message) 
    }
  }
}