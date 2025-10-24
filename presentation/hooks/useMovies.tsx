import { nowPlayingAction } from "@/core/actions/movies/now-playing.action";
import { popularAction } from "@/core/actions/movies/popular.action";
import { topRatedAction } from "@/core/actions/movies/top-rated.action";
import { upcomingAction } from "@/core/actions/movies/upcoming.action";
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

    const topRatedQuery = useQuery({
        queryKey: ['movies', 'top-rated'],
        queryFn: topRatedAction,
        staleTime: 1000 * 60 * 60 * 24, // 24 hours
    });

    const upcomingQuery = useQuery({
        queryKey: ['movies', 'upcoming'],
        queryFn: upcomingAction,
        staleTime: 1000 * 60 * 60 * 24, // 24 hours
    });

    return {
        nowPlayingQuery,
        popularQuery,
        topRatedQuery,
        upcomingQuery,
    }

}