import { createStyles, Grid, makeStyles, Theme, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Script } from "../../api/memorize";
import ScriptDialog from "../dialog/ScriptDialog";

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
        default_link: {
            textDecoration: "none !important",
            color: "black",
        },
    })
);

export type ScriptItemProps = {
    script: Script;
};

const ScriptItem = ({ script }: ScriptItemProps) => {
    const classes = useStyles();

    const [open, setOpen] = useState(false);

    const itemClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setOpen(true);
    };

    const dialogOpen = () => {
        setOpen(true);
    };

    const dialogClose = () => {
        setOpen(false);
    };

    return (
        <Grid item className={classes.root}>
            <Link to="#" onClick={itemClick} className={classes.default_link}>
                <Grid className={classes.image}>
                    <img className={classes.img} src={"http://127.0.0.1:8080/script/thumbnail/" + script.id} alt={"이미지 에러"} />
                </Grid>
                <Typography className={classes.script}>{script.caption}</Typography>
            </Link>
            <ScriptDialog open={open} script={script} dialogOpen={dialogOpen} dialogClose={dialogClose}/>
        </Grid>
    );
};

export default ScriptItem;
