import { Movie } from '@/infrastructure/interfaces/movie.interface';
import React, { useEffect, useRef } from 'react';
import { FlatList, NativeScrollEvent, NativeSyntheticEvent, Text, View } from 'react-native';
import MoviePoster from './MoviePoster';

interface Props {
    movies: Movie[];
    title?: string;
    className?: string;

    loadNextPage?: () => void;
}

const MovieHorizontalList = ({ movies, title, className, loadNextPage }: Props) => {

    const isLoading = useRef(false);

    useEffect(() => {
        setTimeout(() => {
            isLoading.current = false;
        }, 200);
    }, [movies]);

    const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        if (isLoading.current) return;

        const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;

        const isEndRearch = (contentOffset.x + layoutMeasurement.width + 600) >= contentSize.width;

        if (!isEndRearch) return;

        isLoading.current = true;

        //TODO
        console.log('Load more movies...');
        loadNextPage && loadNextPage();
    }

    return (
        <View className={`${className}`}>
            {title &&
                <Text className='text-3xl font-bold px-4 mb-2'>{title}</Text>
            }
            <FlatList
                horizontal
                data={movies}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, i) => `${item.id}-${i}`}
                renderItem={({ item }) => <MoviePoster id={item.id} poster={item.poster} smallPoster />}
                onScroll={onScroll}
            />

        </View>
    )
}

export default MovieHorizontalList