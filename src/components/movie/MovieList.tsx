import { GridListTile } from "@material-ui/core";
import MovieItem from "./MovieItem";
import React from "react";
import ItemList from "../common/ItemList";
import { Movie } from "../../api/memorize";

export type MovieListProps = {
    movies: Movie[];
};

const MovieList = ({ movies }: MovieListProps) => {

    return (
        <ItemList>
            {movies.map((movie, index) => (
                <GridListTile key={index} cols={1}>
                    <MovieItem title={movie.e_title} script_count={100} image_url={movie.thumbnail} />
                </GridListTile>
            ))}
        </ItemList>
    );

};

export default MovieList;
