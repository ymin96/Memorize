import React from 'react';
import { Story, Meta } from "@storybook/react";
import Appbar from "../components/common/Header";

export default {
    title: 'Project/Navbar',
    component: Appbar,
} as Meta;

export const Primary = () => <Appbar/>;