import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';

export interface PostProps {
    id?: number,
    title: string,
    body?: string,
    image?: string
}
 
export const Card: React.FunctionComponent<PostProps> = ({title, id, body, image}) => {

    return (
        <article className="Card">
            {image ? <img src={image} alt="title" /> : null}
            <div className="CardContent">
                <h3>{ title }</h3>
                { id ? <Link to={ `/posts/${id}`}>READ POST...</Link> : ''}
                {body ? <p>{body}</p> : null}
            </div>
        </article>
    );
}
 
export default Card;