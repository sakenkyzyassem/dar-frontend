import React from 'react';
import './Chat.scss';
import { Input } from '../../components/input/Input';

type Props = {
}

export const Chat: React.FunctionComponent<Props> = () => {

    const messageHandler = () => {

    }

    return(
        <div className="Chat">
            <Input name="message" placeholder="Enter message" onChange = {messageHandler} />
        </div>
    )
}