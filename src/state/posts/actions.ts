import { Post } from "../../types/interfaces"

export enum PostsActionTypes {
    SET_POSTS = 'SET_POSTS',
    FETCH_POSTS = 'FETCH_POSTS',
    FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS',
    FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR'
}

export const setPosts = (posts: Post[]) => { //actions creator
    return { //action
        type: PostsActionTypes.SET_POSTS,
        payload: posts
    }
}

export const fetchPosts = () => {
    return {
        type: PostsActionTypes.FETCH_POSTS,
    }
}