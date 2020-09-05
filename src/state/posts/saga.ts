import { getPosts } from "../../services/api";
import { call, put, takeLatest } from 'redux-saga/effects';
import { PostsActionTypes } from "./actions";
import { Post } from "../../types/interfaces";

export function* fetchPosts() {
    try{
        const items = yield call(getPosts);
        yield put({type: PostsActionTypes.FETCH_POSTS_SUCCESS, payload: items})
    }
    catch (e) {
        yield put({type: PostsActionTypes.FETCH_POSTS_ERROR, payload: e.message})
    }
}

export function* setPosts(action: {payload: Post[]}){
    yield put({type: PostsActionTypes.FETCH_POSTS_SUCCESS, payload: action.payload})
}

function* postsSaga() {
    yield takeLatest(PostsActionTypes.FETCH_POSTS, fetchPosts);
}

export default postsSaga;