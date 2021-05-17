import React from "react";
import { RouteComponentProps } from "react-router";
import MovieListContainer from "../../containers/movie/MovieListContainer";
import Header from "../common/Header";
import BodyWrap from "../common/BobyWrap";

export type MoviePageProps = {
    page: string;
};

const Moviepage = ({ match }: RouteComponentProps<MoviePageProps>) => {

    const {page} = match.params

    return (
        <div>
            <Header/>
            <BodyWrap>
                <MovieListContainer page={page}/>
            </BodyWrap>
        </div>
    );
};

export default Moviepage;
