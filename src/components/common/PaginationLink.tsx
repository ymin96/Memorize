import { Grid } from "@material-ui/core";
import { Pagination, PaginationItem } from "@material-ui/lab";
import React from "react";
import { Link } from "react-router-dom";

export type PaginationLinkProps = {
    page: number;
    limit: number;
    prefix_url: string;
};

const PaginationLink = ({ page, limit, prefix_url }: PaginationLinkProps) => {
    return (
        <Grid container justify="flex-end">
            <Grid>
                <Pagination
                    color="primary"
                    page={page}
                    count={limit}
                    renderItem={(item) => <PaginationItem component={Link} to={prefix_url + `${item.page}`} {...item} />}
                />
            </Grid>
        </Grid>
    );
};

export default PaginationLink;
