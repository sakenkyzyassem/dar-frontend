import { Post } from "../../types/interfaces";
import { PostsActionTypes } from "./actions";

export interface PostsState{
    items: Post[];
}

const initialState: PostsState = {
    items: []
}

export default function(state = initialState,
    action: {type: PostsActionTypes, payload: any}){
        switch(action.type){
            case PostsActionTypes.FETCH_POSTS_SUCCESS:
                return {
                    ...state,
                    items: action.payload
                }
            default:
                return state;
        }
    }