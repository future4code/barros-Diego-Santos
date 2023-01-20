import { BaseDatabase } from "./BaseDatabase";


export class MovieDatabase extends BaseDatabase {
  private static TABLE_NAME = "LABEFLIX_MOVIE"

  create = async (input:any) => {
    try{
      const movie = {
        id: input.id,
        title: input.title,
        description: input.description,
        duration_in_minutes: input.duration_in_minutes,
        year_of_release: input.year_of_release
      };
      await MovieDatabase.connection.insert(movie)
      .into(MovieDatabase.TABLE_NAME)

    }catch(error:any){
      throw new Error(error.message)
    }
  };

  getMovies = async () => {
    try{
      return await MovieDatabase.connection(MovieDatabase.TABLE_NAME)
    }catch(error:any){
      throw new Error(error.message)
    }
  }
}