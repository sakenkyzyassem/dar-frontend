import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getPost } from '../../services/api';
import { Post, BreadcrumbElements } from '../../types/interfaces';
 
import './PostPage.scss';
import { Breadcrumb } from '../../components/breadcrumb/Breadcrumb';

export const PostPage: React.FunctionComponent = () => {
    
    let { postId } = useParams();
    const[breadcrumb, setBreadcrumb] = useState<BreadcrumbElements | null>(null);
    const[post, setPost] = useState<Post>();

    useEffect(() => {
        getPost(postId)
            .then(data => setPost(data))

        setBreadcrumb({
            currentPathTitle: postId,
            navigation: [
                {title: 'HOME', path: '/'},
                {title: 'POSTS', path: '/posts'}
            ]
        })
    }, [ postId ]); 

    return ( 
        <div>
            { post
                ?
                    <div className="PostPage">
                        <div className="PostContent AppContainer">
                            {breadcrumb ? <Breadcrumb
                                currentPathTitle = {breadcrumb.currentPathTitle}
                                navigation = {breadcrumb.navigation}
                            /> : null }
                            <article className = "IndividualPost">
                                <h2 className = "PostTitle">
                                    { post.title.toUpperCase() }
                                </h2>
                                <h3 className="PostAuthor">
                                    Author ID: { post.userId }
                                </h3>
                                <p className = "PostText">
                                    { post.body.charAt(0).toUpperCase() + post.body.slice(1) }
                                </p>
                            </article>
                        </div>
                    </div>
                :
                    null
            }    
        </div>
    );
}
 
export default PostPage;