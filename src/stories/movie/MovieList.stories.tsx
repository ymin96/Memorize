import { Meta, Story } from "@storybook/react";
import React from "react";
import MovieListContainer from "../../containers/movie/MovieListContainer";

export default {
    title: "Project/MovieList",
    component: MovieListContainer,
} as Meta;

export const movies = () => <MovieListContainer />;
