import { Box, Container, createStyles, GridList, makeStyles, Theme } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            paddingTop: 30,
            minHeight: 650,
            backgroundColor: "#f8f8f8",
        },
    })
);

export type ItemListProps = {
    children : React.ReactNode,
}

const ItemList = ({children} : ItemListProps) => {

    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Container>
                <GridList cols={4}>
                    {children}
                </GridList>
            </Container>
        </Box>
    );
};

export default ItemList;