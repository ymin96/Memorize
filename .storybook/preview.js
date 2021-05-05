import React from 'react';
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../src/modules";
import theme from '../src/components/common/Theme'
import { MuiThemeProvider } from '@material-ui/core';

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
};

const store = createStore(rootReducer);

export const decorators = [
    (Story) => (
        <Provider store={store}>
            <MuiThemeProvider theme={theme}>
                <Story/>
            </MuiThemeProvider>
        </Provider>
    ),
];
