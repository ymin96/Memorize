import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { Grid } from "@material-ui/core";

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
        container: {
            height:70,
        }
    })
);

export type SearchInputProps = {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    searchRef: React.Ref<HTMLInputElement>;
};

const SearchInput = ({ onClick, searchRef }: SearchInputProps) => {
    const classes = useStyles();

    return (
        <Grid container justify="flex-end" alignItems="center" className={classes.container}>
            <Grid item>
                <Paper component="form" className={classes.root}>
                    <InputBase
                        className={classes.input}
                        inputRef={searchRef}
                    />
                    <IconButton
                        type="submit"
                        className={classes.iconButton}
                        aria-label="search"
                        onClick={onClick}
                    >
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default React.memo(SearchInput);
