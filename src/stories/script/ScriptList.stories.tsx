import { Meta, Story } from "@storybook/react";
import ScriptListContainer, { ScriptListContainerProps } from "../../containers/script/ScriptListContainer";
import React from "react";

export default {
    title: "Project/ScriptList",
    component: ScriptListContainer,
} as Meta;

const Template: Story<ScriptListContainerProps> = (args) => <ScriptListContainer {...args} />;

export const scripts = Template.bind({});
scripts.args = {
    movie_id: "3",
    page: "1",
};
