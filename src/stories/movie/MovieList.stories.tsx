import { Meta, Story } from "@storybook/react";
import React from "react";
import MovieListContainer, { MovieListContainerProps } from "../../containers/movie/MovieListContainer";

export default {
    title: "Project/MovieList",
    component: MovieListContainer,
} as Meta;

const Template:Story<MovieListContainerProps> = (args) => <MovieListContainer {...args}/>

export const movies = Template.bind({});
movies.args={
    page: "1"
}
