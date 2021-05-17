import { createStyles, Grid, makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: 228,
            height: 156,
            flexGrow: 1,
            margin: "auto",
        },
        img: {
            margin: "auto",
            display: "block",
            maxWidth: "100%",
            maxHeight: "100%",
            borderRadius: 7,
        },
        image: {
            width: 228,
            height: 128,
            WebkitPerspective: 1,
        },
        script: {
            fontSize: 20,
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
            width: 228,
        },
    })
);

export type ScriptItemProps = {
    id: number;
    image_url: string;
    script: string;
};

const ScriptItem = ({ id, image_url, script }: ScriptItemProps) => {
    const classes = useStyles();

    return (
        <Grid item className={classes.root}>
            <Grid className={classes.image}>
                <img className={classes.img} src={"http://127.0.0.1:8080/script/thumbnail/" + id} alt={"이미지 에러"} />
            </Grid>
            <Typography className={classes.script}>{script}</Typography>
        </Grid>
    );
};

export default ScriptItem;
