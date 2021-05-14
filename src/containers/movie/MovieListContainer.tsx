import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieList from "../../components/movie/MovieList";
import { RootState } from "../../modules";
import { getMoviesThunk } from "../../modules/movies";

const MovieListContainer = () => {
    const {data, loading, error} = useSelector((state:RootState) => state.movies.moviesFile);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMoviesThunk(1, null, 16));
    }, []);

    return (
        <>
            {data && <MovieList movies={data.movie_list} />}
        </>
    );
};

export default MovieListContainer;
