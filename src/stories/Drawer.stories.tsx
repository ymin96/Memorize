import React from 'react';
import { Story, Meta } from "@storybook/react";
import Drawer from "../components/navigation/Drawer";

export default {
    title: 'Project/Drawer',
    component: Drawer,
} as Meta;

export const Primary: React.SFC<{}> = () => <Drawer/>;