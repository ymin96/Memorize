import React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import Header from "./components/common/Header";
import theme from './components/common/Theme';
import {MuiThemeProvider } from "@material-ui/core/styles";

function App() {
    return (
        <MuiThemeProvider theme={theme}>
            <Header />
            <Button variant="contained" color="primary">
                Hello World
            </Button>
        </MuiThemeProvider>
    );
}

export default App;
