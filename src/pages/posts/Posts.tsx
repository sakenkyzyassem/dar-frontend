import React, { useState, useEffect } from 'react';
import { Post } from '../../types/interfaces';
import { getPost } from '../../services/api';
import { Card } from '../../components/card/Card';

import './Posts.scss';

export const Posts: React.FunctionComponent = () => {

    const[posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        getPost()
            .then(data => setPosts(data))
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

export default Posts;