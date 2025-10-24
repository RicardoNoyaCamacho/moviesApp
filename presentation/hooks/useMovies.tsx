import { nowPlayingAction } from "@/core/actions/movies/now-playing.action";
import { popularAction } from "@/core/actions/movies/popular.action";
import { useQuery } from "@tanstack/react-query";

export const useMovies = () => {

    const nowPlayingQuery = useQuery({
        queryKey: ['movies', 'now-playing'],
        queryFn: nowPlayingAction,
        staleTime: 1000 * 60 * 60 * 24, // 24 hours
    });

    const popularQuery = useQuery({
        queryKey: ['movies', 'popular'],
        queryFn: popularAction,
        staleTime: 1000 * 60 * 60 * 24, // 24 hours
    });

    return {
        nowPlayingQuery,
        popularQuery
    }

}