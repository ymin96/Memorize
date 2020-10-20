import React from "react";
import AuthTemplate from "./AuthTemplate";
import { makeStyles, createStyles, TextField, Theme, Container, Grid, Button } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            flexWrap: "wrap",
        },
        paddingVertical: {
            padding: "0 2ch",
        },
        submit:{
            width: 100,
            height: 100,
        }
    })
);
function AuthForm() {
    const classes = useStyles();

    return (
        <AuthTemplate>
            <div className={classes.root}>
                <Grid container>
                    <Grid item container direction="column" justify="center" alignItems="stretch" md={9} xs={12} className={classes.paddingVertical}>
                        <TextField label="ID" id="outlined-margin-dense" margin="dense" variant="outlined" fullWidth />
                        <TextField label="PassWord" id="outlined-margin-dense" margin="dense" variant="outlined" fullWidth />
                    </Grid>
                    <Grid item container alignItems="center" justify="center" md={3} xs={12}>
                        <Button variant="contained" color="primary" disableElevation className={classes.submit}>Submit</Button>
                    </Grid>
                </Grid>
            </div>
        </AuthTemplate>
    );
}

export default AuthForm;
