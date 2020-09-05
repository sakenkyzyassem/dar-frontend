import React, { useEffect } from 'react';
import { Post } from '../../types/interfaces';
import { Card } from '../../components/card/Card';

import './Posts.scss';
import { connect } from 'react-redux';
import { AppState } from '../../state/store';
import { fetchPosts } from '../../state/posts/actions';

type Props = {
    posts: Post[],
    fetchPosts: () => void;
}

const Posts: React.FunctionComponent<Props>  = ({posts, fetchPosts}) => {
    
    useEffect(() => {
        fetchPosts();
    }, []); 

    return (
        <div className="AppContainer Posts">
            <div className="PostsList">
                {
                    posts.map(
                        post => (
                            <Card title = {post.title} id = {post.id} />
                        )
                    )
                }
            </div>
        </div>
    )
}

export default connect(
    (state: AppState) => ({
        posts: state.posts.items
    }),  
    {
        fetchPosts
    }
)(Posts);