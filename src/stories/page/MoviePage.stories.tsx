import React from 'react';
import { Story, Meta } from "@storybook/react";
import MoviePage from "../../components/page/Moviepage";

export default {
    title: "Project/MoviePage",
    component: MoviePage,
} as Meta;

export const Page = () => <MoviePage/>;