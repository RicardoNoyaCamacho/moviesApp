import { movieApi } from "@/core/api/movie-api";
import { MovieDBMoviesResponse } from "@/infrastructure/interfaces/moviedb.response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

export const upcomingAction = async () => {
    try {

        const { data } = await movieApi.get<MovieDBMoviesResponse>('/upcoming');

        // console.log(data.results);

        const movies = data.results.map(MovieMapper.fromMovieDBToMovie)

        return movies;

    } catch (error) {
        console.log(error);
        throw 'Cannot load upcoming movies';
    }
}