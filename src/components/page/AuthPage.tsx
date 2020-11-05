import React from 'react';
import Header, { HeaderProps } from "../common/Header";
import AuthForm from "../auth/AuthForm";



const AuthPage = () => {
    return (
        <div>
            <Header/>
            <AuthForm/>
        </div>
    );
};

export default AuthPage;