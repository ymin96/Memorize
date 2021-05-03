import React from "react";
import Tabs from "../navigation/Tabs";
import Drawer from "../navigation/Drawer";
import { Button, Hidden, Grid, Toolbar, AppBar, createStyles, makeStyles, Theme, Typography, Container } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            marginBottom: 30,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
            color: "black",
        },
        header: {
            backgroundColor: "white",
            borderBottom: "2px solid #eeeeee",
            boxShadow: "none",
        },
    })
);

export type HeaderProps = {
    isLogIn: boolean;
};

export default function Header({ isLogIn }: HeaderProps) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.header}>
                <Toolbar>
                    <Container>
                        <Grid container spacing={1} justify="flex-end">
                            <Grid item sm xs>
                                <Typography variant="h6" className={classes.title}>
                                    Logo
                                </Typography>
                            </Grid>
                            <Hidden smDown>
                                <Grid container justify="flex-end" item sm={10} xs={10}>
                                    <Tabs />
                                </Grid>
                            </Hidden>
                            <Grid container justify="flex-end" item sm xs>
                                {isLogIn ? (
                                    <Drawer />
                                ) : (
                                    <Button variant="outlined" style={{ color: grey[500] }}>
                                        Sign In
                                    </Button>
                                )}
                            </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
        </div>
    );
}

Header.defaultProps = {
    isLogIn: false,
};
