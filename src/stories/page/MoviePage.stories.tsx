import React from "react";
import { Story, Meta } from "@storybook/react";
import MoviePage, { MoviePageProps } from "../../components/page/MoviePage";
import { RouteComponentProps } from "react-router";
import { pathToFileURL } from "url";

export default {
    title: "Project/MoviePage",
    component: MoviePage,
} as Meta;

const Template: Story<RouteComponentProps<MoviePageProps>> = (args) => <MoviePage {...args} />;

const path = "/movies/:page"

export const moviePage = Template.bind({});
moviePage.args = {
    match: {
        params: {
            page: "1",
        },
        isExact: false,
        path: path,
        url: path.replace(":page", "1")
    },
};
