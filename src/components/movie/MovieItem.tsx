import { Box, Card, CardActionArea, createStyles, Grid, makeStyles, Paper, Theme, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            maxWidth: 300,
            maxHeight: 188,
        },
        cardAction: {
            padding: theme.spacing(1),
            margin: "auto",
        },
        img: {
            margin: "auto",
            display: "block",
            maxWidth: "100%",
            maxHeight: "100%",
        },
        image: {
            width: 105,
            height: 149,
            WebkitPerspective: 1,
        },
        title: {
            fontSize: 24,
        },
        script_count: {
            fontSize: 18,
            color: "#646464",
        },
    })
);

export type MovieItemProps = {
    image_url: string;
    title: string;
    script_count: Number;
};

const MovieItem = ({ image_url, title, script_count }: MovieItemProps) => {
    const classes = useStyles();

    return (
        <Grid className={classes.root} item>
            <Card>
                <CardActionArea className={classes.cardAction}>
                    <Grid container spacing={2} direction="row">
                        <Grid item>
                            <Box className={classes.image}>
                                <img className={classes.img} src={image_url} alt={"이미지 에러"} />
                            </Box>
                        </Grid>
                        <Grid item xs sm md container>
                            <Grid item sm container direction="column">
                                <Grid item xs>
                                    <Typography className={classes.title}>{title}</Typography>
                                    <Typography className={classes.script_count}>자막 수:{script_count}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </CardActionArea>
            </Card>
        </Grid>
    );
};

export default MovieItem;
