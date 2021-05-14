import React from 'react';
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "../src/modules";
import theme from '../src/components/common/Theme'
import { MuiThemeProvider } from '@material-ui/core';
import thunk from 'redux-thunk';

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
};

const store = createStore(rootReducer, applyMiddleware(thunk));

export const decorators = [
    (Story) => (
        <Provider store={store}>
            <MuiThemeProvider theme={theme}>
                <Story/>
            </MuiThemeProvider>
        </Provider>
    ),
];
