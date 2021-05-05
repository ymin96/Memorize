import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieList from "../../components/movie/MovieList";
import { RootState } from "../../modules";
import { getMovies } from "../../modules/Movies";

const MovieListContainer = () => {
    const movies = useSelector((state: RootState) => state.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovies(1));
    }, []);

    return (
        <>
            <MovieList movies={movies} />
        </>
    );
};

export default MovieListContainer;
