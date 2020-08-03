import React from 'react';
import { ChatMessage } from '../../types/interfaces';
import './Message.scss';

export const MessageBubble: React.FunctionComponent<ChatMessage> = ({userId, text, time}) => {

    return(
        <div className="MssgBubble">
            <div className="MessageHeader">
                <div className="user">
                    {userId}
                </div>
                <div className="time">
                    {time}
                </div>            
            </div>
                <div className="message">
                <p>
                    {text}
                </p>
            </div>
        </div>
    )
}