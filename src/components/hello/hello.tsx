import React from 'react';

export const Hello = (props: {name: string, pic: string}) => {

    return (
        <div className="profile">
            {props.pic ? <img className="profilePic" src={props.pic} alt={props.name}></img> : null}
            <h1>Hello, {props.name ? props.name : "World"}!</h1>
        </div>
    )
}