import { GridListTile } from "@material-ui/core";
import MovieItem from "./MovieItem";
import React from "react";
import { MoviesState } from "../../modules/movies";
import ItemList from "../common/ItemList";

export type MovieListProps = {
    movies: MoviesState;
};

const MovieList = ({ movies }: MovieListProps) => {

    return (
        <ItemList>
            {movies.map((user, index) => (
                <GridListTile key={index} cols={1}>
                    <MovieItem title={user.title} script_count={user.script_count} image_url={user.image_url} />
                </GridListTile>
            ))}
        </ItemList>
    );

};

export default MovieList;
