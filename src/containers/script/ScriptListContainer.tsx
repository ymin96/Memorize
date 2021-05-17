import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PaginationLink from "../../components/common/PaginationLink";
import SearchInput from "../../components/common/SearchInput";
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

    const [input,setInput] = useState<string | null>(null);

    const onChange = (e:  React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setInput(e.target.value)
        console.log(input);
    }

    const onSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        dispatch(getScriptsThunk(parseInt(movie_id), input, parseInt(page), 16));
    }


    useEffect(() => {
        dispatch(getScriptsThunk(parseInt(movie_id), input, parseInt(page), 16));
    }, [dispatch, page]);

    return (
        <div>
            {data && (
                <>
                    <SearchInput onChange={onChange} onSubmit={onSubmit}/>
                    <ScriptList scripts={data.script_list} />
                    <PaginationLink page={parseInt(page)} limit={data.last_page} prefix_url={"/scripts/"+ movie_id +"/"} />
                </>
            )}
        </div>
    );
};

export default ScriptListContainer;
