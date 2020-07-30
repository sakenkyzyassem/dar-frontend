import React from 'react';
import { Message } from '../../types/interfaces';
import './Message.scss';

export const MessageBubble: React.FunctionComponent<Message> = ({fromUser, message}) => {

    return(
        <div className="MssgBubble">
            { fromUser
            ?
                <div className="user">
                    {fromUser.lastname 
                        ? fromUser.firstname + ' ' + fromUser.lastname
                        : fromUser.firstname}
                </div>
            : 
                null}
            <div className="message">
                <p>
                    {message}
                </p>
            </div>
        </div>
    )
}