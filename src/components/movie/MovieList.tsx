import { Container, createStyles, Grid, GridList, GridListTile, Theme } from "@material-ui/core";
import { Box, makeStyles } from "@material-ui/core";
import MovieItem from "./MovieItem";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            paddingTop: 30,
            minHeight: 650,
            backgroundColor: '#f8f8f8'
        },
    })
);

const movieItems = [
    {
        key: 1,
        image_url: "https://movie-phinf.pstatic.net/20190417_250/1555465284425i6WQE_JPEG/movie_image.jpg?type=m203_290_2",
        title: "Avengers Endgame",
        script_count: 145,
    },
    {
        key: 2,
        image_url: "https://movie-phinf.pstatic.net/20190417_250/1555465284425i6WQE_JPEG/movie_image.jpg?type=m203_290_2",
        title: "Avengers Endgame",
        script_count: 145,
    },
    {
        key: 3,
        image_url: "https://movie-phinf.pstatic.net/20190417_250/1555465284425i6WQE_JPEG/movie_image.jpg?type=m203_290_2",
        title: "Avengers Endgame",
        script_count: 145,
    },
    {
        key: 3,
        image_url: "https://movie-phinf.pstatic.net/20190417_250/1555465284425i6WQE_JPEG/movie_image.jpg?type=m203_290_2",
        title: "Avengers Endgame",
        script_count: 145,
    },
    {
        key: 3,
        image_url: "https://movie-phinf.pstatic.net/20190417_250/1555465284425i6WQE_JPEG/movie_image.jpg?type=m203_290_2",
        title: "Avengers Endgame",
        script_count: 145,
    },
    {
        key: 3,
        image_url: "https://movie-phinf.pstatic.net/20190417_250/1555465284425i6WQE_JPEG/movie_image.jpg?type=m203_290_2",
        title: "Avengers Endgame",
        script_count: 145,
    },
];

const MovieList = () => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Container>
                <GridList cols={4}>
                    {movieItems.map((user, index) => (
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
