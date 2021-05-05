import React from "react";
import Header from "./components/common/Header";
import theme from './components/common/Theme';
import {MuiThemeProvider } from "@material-ui/core/styles";
import MovieListContainer from "./containers/movie/MovieListContainer";

function App() {
    return (
        <MuiThemeProvider theme={theme}>
            <Header />
            <MovieListContainer/>
        </MuiThemeProvider>
    );
}

export default App;
