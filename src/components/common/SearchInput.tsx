import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { VoidExpression } from "typescript";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 200,
            height: 35,
        },
        input: {
            marginLeft: theme.spacing(1),
            flex: 1,
        },
        iconButton: {
            padding: 10,
        },
    })
);

export type SearchInputProps = {
    onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
    onSubmit: React.FormEventHandler<HTMLButtonElement>;
};

const SearchInput = ({ onChange, onSubmit }: SearchInputProps) => {
    const classes = useStyles();

    return (
        <Paper component="form" className={classes.root}>
            <InputBase className={classes.input} onChange={onChange} />
            <IconButton type="submit" className={classes.iconButton} aria-label="search" onSubmit={onSubmit}>
                <SearchIcon />
            </IconButton>
        </Paper>
    );
};

export default SearchInput;
