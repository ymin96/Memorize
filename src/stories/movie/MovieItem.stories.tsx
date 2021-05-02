import React from "react";
import { Story, Meta } from "@storybook/react";
import MovieItem, {MovieItemProps} from "../../components/movie/MovieItem";
import { HeaderProps } from "../../components/common/Header";

export default {
    title: "Project/MovieItem",
    component: MovieItem,
} as Meta;

const Template : Story<MovieItemProps> = (args) => <MovieItem {...args}/>

export const Item = Template.bind({});
Item.args = {image_url: 'https://movie-phinf.pstatic.net/20190417_250/1555465284425i6WQE_JPEG/movie_image.jpg?type=m203_290_2',
    title:'Avengers Endgame', script_count:130}