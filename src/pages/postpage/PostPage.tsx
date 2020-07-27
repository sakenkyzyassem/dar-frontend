import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Post } from '../../types/interfaces';
import axios from 'axios';
 
import './PostPage.scss';

export const PostPage: React.FunctionComponent = () => {
    
    let { postId } = useParams();
    const[post, setPost] = useState<Post>();

    useEffect(() => {
        axios.get<Post>(`https://jsonplaceholder.typicode.com/posts/${postId}`)
                .then(res => res.data)
                .then(data => setPost(data))
    }, [ postId ]); 

    return ( 
        <div>
            { post
                ?
                    <div className="PostPage">
                        <div className="PostContent AppContainer">
                            <p className="Breadcrumb">
                                <Link to="/">HOME&#32;</Link>
                                &#47;
                                <Link to="/posts">&#32;POSTS&#32;</Link>
                                &#47;
                                { ' ' + postId }
                            </p>
                            <article className = "IndividualPost">
                                <h2 className = "PostTitle">
                                    { post.title.toUpperCase() }
                                </h2>
                                <p className = "PostText">
                                    { post.body.charAt(0).toUpperCase() + post.body.slice(1) }
                                </p>
                            </article>
                        </div>
                    </div>
                :
                    <h2>Post not found</h2>
            }    
        </div>
    );
}
 
export default PostPage;