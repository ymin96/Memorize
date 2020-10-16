import React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import Header from "./components/common/Header";

function App() {
    return (
        <>
            <Header />
            <Button variant="contained" color="primary">
                Hello World
            </Button>
        </>
    );
}

export default App;
