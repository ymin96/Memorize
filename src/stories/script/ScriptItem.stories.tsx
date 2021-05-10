import { Meta, Story } from '@storybook/react';
import React from 'react';
import ScriptItem, { ScriptItemProps } from '../../components/script/ScriptItem';

export default {
    title: "Project/ScriptItem",
    component: ScriptItem,
} as Meta;

const Template: Story<ScriptItemProps> = (args) => <ScriptItem {...args} />;

export const scriptItem = Template.bind({});
scriptItem.args = {
    key : 1,
    image_url : "http://localhost:8080/script/thumbnail/3",
    script : "contents is asdfasdfasdf",
}