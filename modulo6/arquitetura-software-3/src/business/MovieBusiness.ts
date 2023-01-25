import { MovieDatabase } from "../data/MovieDataBase";
import { MovieDTO, MovieInputDTO } from "../model/MovieDTO";
import { generateId } from "../services/generateId";
import { CustomError } from "../error/CustomError";
import { InvalidDataMovie, InvalidTypeNumber } from "../error/MovieErro";

export class MovieBusiness {
  private static movieDatabase = new MovieDatabase();

  create = async (input:MovieInputDTO) => {
    try{
      const movie:MovieDTO = {
        id: generateId(),
        title: input.title,
        description: input.description,
        duration_in_minutes: input.duration_in_minutes,
        year_of_release: input.year_of_release
      };

      if(!movie.title || !movie.description ||
       !movie.duration_in_minutes || !movie.year_of_release){
        throw new InvalidDataMovie
      };
      
      if(typeof(movie.year_of_release) !== "number" ||
       typeof(movie.duration_in_minutes) !== "number" ){
        throw new InvalidTypeNumber
      };

      await MovieBusiness.movieDatabase.create(movie)

    }catch(error:any){
      throw new CustomError(error.statusCode, error.message) 
    }
  };
  getMovies = async ():Promise<MovieDTO[]> => {
    try{
      const result = await MovieBusiness.movieDatabase.getMovies()
      return result;

    }catch(error:any){
      throw new CustomError(error.statusCode, error.message) 
    }
  };
  
}