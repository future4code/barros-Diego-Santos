import { MovieDatabase } from "../data/MovieDataBase";
import { v4 as generateId } from 'uuid';

export class MovieBusiness {
  private static movieDatabase = new MovieDatabase();

  create = async (input:any) => {
    try{
      const id = generateId();

      const {
        title,
        description,
        duration_in_minutes,
        year_of_release
      } = input
      if(!title || !description ||
       !duration_in_minutes || !year_of_release){
        throw new Error("Dados inválidos")
      };
      if(typeof(year_of_release) !== "number" ||
       typeof(duration_in_minutes) !== "number" ){
        throw new Error(`Dados inválidos: digite numeros em year_of_release e duration_in_minutes`)
      };

      await MovieBusiness.movieDatabase.create({
        id, 
        title,
        description,
        duration_in_minutes,
        year_of_release
      })

    }catch(error:any){
      throw new Error(error.message)
    }
  };
  getMovies = async () => {
    try{
      const result = await MovieBusiness.movieDatabase.getMovies()
      return result;

    }catch(error:any){
      throw new Error(error.message)
    }
  };
  
}