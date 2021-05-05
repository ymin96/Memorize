import { Container, createStyles, Grid, GridList, GridListTile, Theme } from "@material-ui/core";
import { Box, makeStyles } from "@material-ui/core";
import MovieItem from "./MovieItem";
import React from "react";
import { Movie } from "../../modules/Movies";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            paddingTop: 30,
            minHeight: 650,
            backgroundColor: "#f8f8f8",
        },
    })
);

export type MovieListProps = {
    movies: Movie [];
};

const MovieList = ({movies}:MovieListProps) => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Container>
                <GridList cols={4}>
                    {movies.map((user, index) => (
                        <GridListTile key={index} cols={1}>
                            <MovieItem title={user.title} script_count={user.script_count} image_url={user.image_url} />
                        </GridListTile>
                    ))}
                </GridList>
            </Container>
        </Box>
    );
};

export default MovieList;