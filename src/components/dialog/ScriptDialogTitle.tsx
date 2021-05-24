import { createStyles, DialogTitle, IconButton, makeStyles, Theme, Typography } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import React, { useState } from "react";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            margin: 0,
            padding: theme.spacing(2),
        },
        closeButton: {
            position: "absolute",
            right: theme.spacing(1),
            top: theme.spacing(1),
            color: theme.palette.grey[500],
        },
    })
);

export type ScriptDialogTitleProps = {
    children: React.ReactChild;
    onClose: () => void;
};

const ScriptDialogTitle = ({ children, onClose }: ScriptDialogTitleProps) => {
    const classes = useStyles();

    return (
        <DialogTitle disableTypography className={classes.root}>
            <Typography variant="h5">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" onClick={onClose} className={classes.closeButton}>
                    <Close />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

export default ScriptDialogTitle;
