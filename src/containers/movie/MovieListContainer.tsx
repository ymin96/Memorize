import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps } from "react-router";
import PaginationLink from "../../components/common/PaginationLink";
import MovieList from "../../components/movie/MovieList";
import { MoviePageProps } from "../../components/page/MoviePage";
import { RootState } from "../../modules";
import { getMoviesThunk } from "../../modules/movies";

export type MovieListContainerProps = {
    page: string
}

const MovieListContainer = ({page} : MovieListContainerProps) => {
    const {data, loading, error} = useSelector((state:RootState) => state.movies.moviesFile);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMoviesThunk(1, null, 16));
    }, [page]);

    return (
        <>
            {data && 
            <>
            <MovieList movies={data.movie_list} />
            <PaginationLink limit={data.last_page} page={parseInt(page)} prefix_url="/movies/"/>
            </>
            }
            
        </>
    );
};

export default MovieListContainer;
