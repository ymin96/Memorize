import React from "react";
import AuthTemplate from "./AuthTemplate";
import {
    makeStyles,
    createStyles,
    TextField,
    Theme,
    Container,
    Grid,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            flexWrap: "wrap",
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: "25ch",
        },
    })
);
function AuthForm() {
    const classes = useStyles();

    return (
        <AuthTemplate>
            <div className={classes.root}>
                <Grid container>
                    <Grid
                        item
                        container
                        direction="column"
                        alignItems="stretch"
                        md={9}
                        xs={12}
                    >
                        <TextField
                            label="ID"
                            id="outlined-margin-dense"
                            className={classes.textField}
                            margin="dense"
                            variant="outlined"
                            fullWidth
                        />
                        <TextField
                            label="PassWord"
                            id="outlined-margin-dense"
                            className={classes.textField}
                            margin="dense"
                            variant="outlined"
                            fullWidth
                        />
                    </Grid>
                    <Grid md={3}>확인</Grid>
                </Grid>
            </div>
        </AuthTemplate>
    );
}

export default AuthForm;
