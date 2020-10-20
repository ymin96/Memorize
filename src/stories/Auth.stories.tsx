import React from 'react';
import AuthForm from '../components/auth/AuthForm';
import {Meta, Story} from '@storybook/react';

export default {
    title: 'Project/Auth',
    component: AuthForm, 
} as Meta

export const Form = () => <AuthForm/>;