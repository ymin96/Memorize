import React from "react";
import { Story, Meta } from "@storybook/react";
import Header, { HeaderProps } from "../../components/common/Header";

export default {
    title: "Project/Navbar",
    component: Header,
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const LogIn = Template.bind({});
LogIn.args = {
    isLogIn: true,
};

export const LogOut = Template.bind({});
LogOut.args = {
    isLogIn: false,
};
