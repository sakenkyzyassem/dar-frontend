import React, { useState, useEffect, useReducer } from 'react';
import './Chat.scss';
import { Input } from '../../components/input/Input';
import { UserInfo } from '../../types/interfaces';
import { Button } from '../../components/button/button';
import { MessageBubble } from '../../components/message/Message';
import { useWebSocket, chatStateReducer, ChatActions } from '../../services/chat';

type Props = {
    user?: UserInfo | null
}

export const Chat: React.FunctionComponent<Props> = ({user}) => {

    const[state, dispatch] = useReducer(chatStateReducer, {messages: []});

    const [message, setMessage] = useState<string>('');

    const socketClient = useWebSocket({
        userId:user?.firstname
    })

    const changeHandler = (mssg: string) => {
        setMessage(mssg);
    }

    const sendMessage = (event: React.FormEvent) => {
        event.preventDefault();
        setMessage('');
        socketClient.sendMessage(message);
    }

    const onMessage = ({data}: {data: string}) => {
        console.log(data)
        dispatch({
            type: ChatActions.ADD_MESSAGE,
            payload: data,
        })
    }

    useEffect(() => {
        socketClient.eventEmitter.on('message', onMessage);

        return () => {
            socketClient.eventEmitter.off('message', onMessage);
            socketClient.close();
        }
    }, [socketClient]);

    return(
        <div className="Chat">
            <div className="messageField">
                {
                    state.messages && state.messages.map(
                        (mssg, i) => {
                            const date = new Date(mssg.time);

                            return (
                                <MessageBubble
                                    key={i}
                                    userId = {mssg.userId.split('-')[0]}
                                    text = {mssg.text}
                                    time = {`${date.getHours()}:${date.getMinutes()}`}
                                    room = {mssg.room}
                                />
                            )
                        }
                    )
                }
            </div>
            <div className="sendMessage">
                <form onSubmit={sendMessage}>
                        <Input
                            value={message}
                            className="chatInput"
                            name="message"
                            placeholder="Enter message"
                            required={true}
                            onChange = {(value) => changeHandler(value)}
                        />
                    <div className="buttonWrapper">
                        <Button type="submit" className="SendMssg" text="Send" />
                    </div>
                </form>
            </div>
        </div>
    )
}