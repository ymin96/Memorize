import { Meta, Story } from "@storybook/react";
import React from "react";
import ScriptItem, { ScriptItemProps } from "../../components/script/ScriptItem";

export default {
    title: "Project/ScriptItem",
    component: ScriptItem,
} as Meta;

const Template: Story<ScriptItemProps> = (args) => <ScriptItem {...args} />;

export const scriptItem = Template.bind({});
scriptItem.args = {
    script: {
        id: 1,
        caption: "contents is asdfasdfasdf",
        movie_id: 1,
        start_second: 1,
        end_second: 1,
        thumbnail: "1",
    },
};
