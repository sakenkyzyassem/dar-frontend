import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';

export interface PostProps {
    title: string,
    id: number
}
 
export const Card: React.FunctionComponent<PostProps> = ({title, id}) => {

    return (
        <article className="Card">
            <div className="CardContent">
                <h3>{ title }</h3>
                <Link to={ `/posts/${id}`}>READ POST...</Link>
            </div>
        </article>
    );
}
 
export default Card;