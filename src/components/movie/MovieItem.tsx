import { Card, CardActionArea, createStyles, Grid, makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            maxWidth: 285,
            maxHeight: 188,
            margin: "auto",
        },
        cardAction: {
            margin: "auto",
        },
        img: {
            margin: "auto",
            display: "block",
            width: 100,
            height: 141,
            objectFit: "cover",
        },
        image: {
            width: 100,
            height: 141,
            WebkitPerspective: 1,
        },
        title: {
            fontSize: 22,
        },
        script_count: {
            fontSize: 16,
            color: "#646464",
        },
        default_link:{
            textDecoration: "none !important"
        }
    })
);

export type MovieItemProps = {
    image_url: string;
    title: string;
    script_count: Number;
    movie_id: number;
};

const MovieItem = ({ image_url, title, script_count, movie_id }: MovieItemProps) => {
    const classes = useStyles();

    return (
        <Grid className={classes.root} item>
            <Link className={classes.default_link} to={"/scripts/"+ movie_id + "/1"}>
                <Card>
                    <CardActionArea className={classes.cardAction}>
                        <Grid container spacing={2} direction="row">
                            <Grid item>
                                <img className={classes.img} src={image_url} alt={"이미지 에러"} />
                            </Grid>
                            <Grid item xs sm md container>
                                <Grid item sm container direction="column">
                                    <Grid item xs>
                                        <Typography className={classes.title}>{title}</Typography>
                                        <Typography className={classes.script_count}>contents:{script_count}</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </CardActionArea>
                </Card>
            </Link>
        </Grid>
    );
};

export default MovieItem;
