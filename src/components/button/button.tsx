import React from 'react';
import './Button.scss';

type Props = {
    text: string,
    className: string,
    clickHandler: () => void
}

export const Button: React.FunctionComponent<Props> = ({ text, className, clickHandler}) => {

    return (
        <button className={'Button ' + className} onClick={clickHandler}>{text}</button> 
    )
}