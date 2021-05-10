//액션 타입 선언
const GET_SCRIPTS = "scripts/GET_SCRIPTS" as const;

//액선 생성 함수
export const getScripts = (movie_id: number) => ({
    type: GET_SCRIPTS,
    payload: [],
});

type ScriptsAction = ReturnType<typeof getScripts>;

export type Script = {
    id: number,
    movie_id: number,
    image_url: string,
    contents: string,
};

export type ScriptsState = Script[];

const initialState:ScriptsState = [];

function scripts(
    state: ScriptsState = initialState,
    action: ScriptsAction
) : ScriptsState {
    switch(action.type){
        case GET_SCRIPTS:
            return state;
        default:
            return state;
    }
}

export default scripts;