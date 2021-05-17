import React from "react";
import theme from './components/common/Theme';
import {MuiThemeProvider } from "@material-ui/core/styles";
import MoviePage from "./components/page/MoviePage";
import ScriptPage from "./components/page/ScriptPage";
import { Route } from "react-router-dom";

function App() {
    return (
        <MuiThemeProvider theme={theme}>
            <Route path="/movies/:page" component={MoviePage}/>
            <Route path="/scripts/:movie_id/:page" component={ScriptPage}/>
        </MuiThemeProvider>
    );
}

export default App;
