import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router";
import PaginationLink from "../../components/common/PaginationLink";
import SearchInput from "../../components/common/SearchInput";
import { ScriptPageParams } from "../../components/page/ScriptPage";
import ScriptList  from "../../components/script/ScriptList";
import { RootState } from "../../modules";
import { getScriptsThunk } from "../../modules/scripts";

export type ScriptListContainerProps = {
    movie_id: string;
    page: string;
};

const ScriptListContainer = ({ movie_id, page , history}: ScriptListContainerProps & RouteComponentProps<ScriptPageParams>) => {
    const { data, loading, error } = useSelector(
        (state: RootState) => state.scripts.scriptsFile
    );
    const dispatch = useDispatch();

    const [input, setInput] = useState<string | undefined>(undefined);
    const searchRef = useRef<HTMLInputElement>(null);

    
    const onClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        setInput(searchRef.current?.value);
        history.push("/scripts/"+ movie_id + "/1")
        console.log(input);
    },[input]);

    useLayoutEffect(() => {
        dispatch(
            getScriptsThunk(parseInt(movie_id), input, parseInt(page), 16)
        );
        console.log("ScriptContainer useEffect");
    }, [dispatch, page, input]);

    return (
        <div>
            <SearchInput onClick={onClick} searchRef={searchRef} />
            {data && (
                <>
                    <ScriptList scripts={data.script_list} />
                    <PaginationLink
                        page={parseInt(page)}
                        limit={data.last_page}
                        prefix_url={"/scripts/" + movie_id + "/"}
                    />
                </>
            )}
        </div>
    );
};

export default withRouter(ScriptListContainer);
