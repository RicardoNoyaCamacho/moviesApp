import { movieApi } from "@/core/api/movie-api";
import { MovieDBMoviesResponse } from "@/infrastructure/interfaces/moviedb.response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

export const popularAction = async () => {
    try {

        const { data } = await movieApi.get<MovieDBMoviesResponse>('/popular');

        // console.log(data.results);

        const movies = data.results.map(MovieMapper.fromMovieDBToMovie)

        return movies;

    } catch (error) {
        console.log(error);
        throw 'Cannot load now playing movies';
    }
}