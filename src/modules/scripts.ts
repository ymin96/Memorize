import { AxiosError } from "axios";
import { ThunkAction } from "redux-thunk";
import { createAction, createReducer } from "typesafe-actions";
import { RootState } from ".";
import { getScriptsFile, ScriptListPage } from "../api/memorize";

//액션 타입 선언
const GET_SCRIPTS = "scripts/GET_SCRIPTS" as const;
const GET_SCRIPTS_SUCCESS = "scripts/GET_SCRIPTS_SUCCESS" as const;
const GET_SCRIPTS_ERROR = "scripts/GET_SCRIPTS_ERROR" as const;

//액선 생성 함수
export const getScripts = createAction(GET_SCRIPTS)();
export const getScriptsSuccess = createAction(GET_SCRIPTS_SUCCESS)<ScriptListPage>();
export const getScriptsError = createAction(GET_SCRIPTS_ERROR)<AxiosError>();

export function getScriptsThunk(movie_id:number, word: string|null|undefined = undefined, offset:number = 1, limit: number = 16): ThunkAction<void, RootState, null, ScriptsAction>{
    return async (dispatch) => {
        dispatch(getScripts());
        try{
            const scriptsPage = await getScriptsFile(movie_id, word, offset, limit);
            dispatch(getScriptsSuccess(scriptsPage));
        } catch(e){
            dispatch(getScriptsError(e));
        }
    }
}

type ScriptsAction = ReturnType<typeof getScripts | typeof getScriptsSuccess | typeof getScriptsError>;

export type ScriptPageState = {
    scriptsFile: {
        loading: boolean;
        error: Error | null;
        data: ScriptListPage | null;
    };
};

const initialState: ScriptPageState = {
    scriptsFile: {
        loading: false,
        error: null,
        data: null,
    },
};

const scripts = createReducer<ScriptPageState, ScriptsAction>(initialState, {
    [GET_SCRIPTS]: (state) => ({
        ...state,
        scriptsFile: {
            loading: true,
            error: null,
            data: null,
        },
    }),
    [GET_SCRIPTS_SUCCESS]: (state, action) => ({
        ...state,
        scriptsFile: {
            loading: false,
            error: null,
            data: action.payload,
        },
    }),
    [GET_SCRIPTS_ERROR]: (state, action) => ({
        ...state,
        scriptsFile: {
            loading: false,
            error: action.payload,
            data: null,
        },
    }),
});

export default scripts;
