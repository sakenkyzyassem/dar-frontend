import React from 'react';
import './Button.scss';

type Props = {
    text: string,
    className?: string,
    clickHandler?: () => void,
    type?: 'button' | 'submit' | 'reset'
}

export const Button: React.FunctionComponent<Props> = ({ text, type, className, clickHandler}) => {

    return (
        <button type={type ? type : 'submit'} className={'Button ' + className} onClick={clickHandler}>{text}</button> 
    )
}