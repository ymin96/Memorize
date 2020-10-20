import classes from "*.module.css";
import { Container, makeStyles, createStyles, Theme, Grid, Typography, Paper } from "@material-ui/core";
import React from "react";
import AccountIcon from "@material-ui/icons/AccountCircleOutlined";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginTop: "20px",
            flexGrow: 1,
            color: "#1b1642",
        },
        form: {
            padding: "2rem",
        },
    })
);

type AuthTemplateProps = {
    children: React.ReactChild | React.ReactChild;
};

function AuthTemplate({ children }: AuthTemplateProps) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container>
                <Grid container justify="center">
                    <Grid item xs={12} sm={8} md={6}>
                        <Grid item style={{textAlign: "center"}}>
                            <AccountIcon style={{ fontSize: 40 }} />
                        </Grid>
                        <Typography variant="h6" align="center" paragraph>
                            Sign In
                        </Typography>
                        <Paper className={classes.form}>{children}</Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default AuthTemplate;
