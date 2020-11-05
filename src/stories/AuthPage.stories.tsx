import React from 'react';
import { Story, Meta } from "@storybook/react";
import AuthPage from "../components/page/AuthPage";

export default {
    title: "Project/Page",
    component: AuthPage,
} as Meta;

export const Page = () => <AuthPage/>;