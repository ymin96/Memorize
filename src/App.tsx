import React from "react";
import theme from "./components/common/Theme";
import { MuiThemeProvider } from "@material-ui/core/styles";
import MoviePage from "./components/page/MoviePage";
import ScriptPage from "./components/page/ScriptPage";
import { Route, Switch } from "react-router-dom";
import Header from "./components/common/Header";
import BodyWrap from "./components/common/BobyWrap";

function App() {
    return (
        <MuiThemeProvider theme={theme}>
            <Header />
            <BodyWrap>
                <Switch>
                    <Route path="/movies/:page" component={MoviePage} />
                    <Route path="/scripts/:movie_id/:page" component={ScriptPage} />
                </Switch>
            </BodyWrap>
        </MuiThemeProvider>
    );
}

export default App;
