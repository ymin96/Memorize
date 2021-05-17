import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PaginationLink from "../../components/common/PaginationLink";
import ScriptList, { ScriptListProps } from "../../components/script/ScriptList";
import { RootState } from "../../modules";
import { getScriptsThunk } from "../../modules/scripts";

export type ScriptListContainerProps = {
    movie_id: string
    page: string
}

const ScriptListContainer = ({movie_id, page}:ScriptListContainerProps) => {

    const { data, loading, error } = useSelector((state: RootState) => state.scripts.scriptsFile);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getScriptsThunk(parseInt(movie_id), null, parseInt(page), 16));
    }, [page]);

    return (
        <div>
            {data && (
                <>
                    <ScriptList scripts={data.script_list} />
                    <PaginationLink page={parseInt(page)} limit={data.last_page} prefix_url={"/scripts/"+ movie_id +"/"} />
                </>
            )}
        </div>
    );
};

export default ScriptListContainer;
