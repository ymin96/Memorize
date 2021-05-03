import { Meta } from "@storybook/react";
import React from "react";
import MovieList from "../../components/movie/MovieList";


export default {
    title: "Project/MovieList",
    component: MovieList,
} as Meta;

export const movieList = () => <MovieList/>