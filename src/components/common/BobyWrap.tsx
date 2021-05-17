import { Container, createStyles, makeStyles, Theme } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: "#f8f8f8",
        },
    })
);

export type BodyWrapProps = {
    children: React.ReactChild;
};

const BobyWrap = ({ children }: BodyWrapProps) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container>{children}</Container>
        </div>
    );
};

export default BobyWrap;
