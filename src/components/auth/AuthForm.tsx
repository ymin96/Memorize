import React from "react";
import AuthTemplate from "./AuthTemplate";
import {
    makeStyles,
    createStyles,
    TextField,
    Theme,
    Container,
    Grid,
    Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            flexWrap: "wrap",
        },
        marginVertical: {
            margin: "4px 0",
        },
        paddingVertical: {
            [theme.breakpoints.up("sm")]: {
                padding: "0 2ch",
            },
        },
        submit: {
            [theme.breakpoints.up("sm")]: {
                width: "100px",
                height: "100px",
            },
            [theme.breakpoints.down("sm")]: {
                width: "100%",
            },
        },
        textField: {
            [theme.breakpoints.down("sm")]: {
                marginBottom: "8px",
                marginTop: "0",
            },
        },
        button: {
            width: "100%",
        },
    })
);
function AuthForm() {
    const classes = useStyles();

    return (
        <AuthTemplate>
            <div className={classes.root}>
                <Grid container className={classes.paddingVertical}>
                    <Grid
                        item
                        container
                        direction="column"
                        justify="center"
                        alignItems="stretch"
                        md={9}
                        sm={12}
                    >
                        <TextField
                            label="ID"
                            id="outlined-margin-dense"
                            margin="dense"
                            variant="outlined"
                            className={classes.textField}
                            fullWidth
                        />
                        <TextField
                            label="PassWord"
                            id="outlined-margin-dense"
                            margin="dense"
                            variant="outlined"
                            className={classes.textField}
                            fullWidth
                        />
                    </Grid>
                    <Grid
                        item
                        container
                        alignItems="center"
                        justify="center"
                        md={3}
                        sm={12}
                    >
                        <Button
                            variant="contained"
                            color="primary"
                            disableElevation
                            className={`${classes.submit} ${classes.marginVertical}`}
                        >
                            Submit
                        </Button>
                    </Grid>
                    <Grid item container sm={12} md={12}>
                        <Button
                            variant="contained"
                            color="secondary"
                            disableElevation
                            className={`${classes.button} ${classes.marginVertical}`}
                        >
                            Naver
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </AuthTemplate>
    );
}

export default AuthForm;
