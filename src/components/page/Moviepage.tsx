import React from "react";
import { RouteComponentProps } from "react-router";
import MovieListContainer from "../../containers/movie/MovieListContainer";
import Header from "../common/Header";
import BodyWrap from "../common/BobyWrap";

export type MoviePageProps = {
    page: string;
};

const MoviePage = ({ match }: RouteComponentProps<MoviePageProps>) => {
    const { page } = match.params;

    return (
        <div>
            <MovieListContainer page={page} />
        </div>
    );
};

export default MoviePage;
