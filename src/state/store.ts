import { createStore, combineReducers, applyMiddleware } from "redux";
import postsReducer, { PostsState } from './posts/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import postsSaga from "./posts/saga";


const reducers = combineReducers({
    posts: postsReducer
});

const sagaMiddleware = createSagaMiddleware();

export default createStore(reducers, composeWithDevTools(
    applyMiddleware(sagaMiddleware),
));

export interface AppState {
    posts: PostsState;
}

sagaMiddleware.run(postsSaga);