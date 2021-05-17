import React from "react";
import ScriptListContainer from "../../containers/script/ScriptListContainer";
import Header from "../common/Header";
import BodyWrap from "../common/BobyWrap";
import { RouteComponentProps } from "react-router";

export type ScriptPageParams = {
    movie_id: string;
    page: string;
};

const ScriptPage = ({ match }: RouteComponentProps<ScriptPageParams>) => {
    const { movie_id, page } = match.params;

    return (
        <div>
            <Header />
            <BodyWrap>
                <ScriptListContainer movie_id={movie_id} page={page}/>
            </BodyWrap>
        </div>
    );
};

export default ScriptPage;
