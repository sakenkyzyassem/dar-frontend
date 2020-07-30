import React, { useState, useEffect } from 'react';
import './Chat.scss';
import { Input } from '../../components/input/Input';
import { UserInfo, Message } from '../../types/interfaces';
import { Button } from '../../components/button/button';
import { useHistory } from 'react-router-dom';
import { MessageBubble } from '../../components/message/Message';

export const Chat: React.FunctionComponent<UserInfo> = ({firstname, lastname}) => {

    const history = useHistory();

    const[chatMessages, setChatMessages] = useState<Message[]>([]);
    const[thisUser, setThisUser] = useState<UserInfo | null>(null);
    const[newMessage, setNewMessage] = useState<Message | null>(null);

    useEffect( () => {

        setThisUser({firstname, lastname});
        
        setChatMessages([
            { 
                fromUser: {firstname: 'User1'},
                message: 'Hello, guys!'
            },
            { 
                fromUser: {firstname: 'User2'},
                message: 'Hi'
            },
            { 
                fromUser: {firstname: 'User3'},
                message: 'Yo'
            },
            { 
                fromUser: {firstname: 'User4'},
                message: 'Wassup?'
            },
            { 
                fromUser: {firstname: 'User1'},
                message: 'I am User1, ntmy'
            },
            { 
                fromUser: {firstname: 'Assem'},
                message: 'me 2'
            }
        ]);
    
    }, [firstname, lastname, history])

    const changeHandler = (mssg: string) => {
        console.log(mssg);

        const newMssg = {
            ...newMessage,
            message: mssg,
            fromUser: thisUser
        };

        setNewMessage(newMssg as any)
    }

    const sendMessage = (event: React.FormEvent) => {
        console.log(chatMessages);

        if(newMessage){
            chatMessages.push(newMessage);
        }
    }

    return(
        <div className="Chat">
            <div className="messageField">
                {
                    chatMessages.map(
                        mssg => (
                            <MessageBubble fromUser={mssg.fromUser} message={mssg.message} />
                        )
                    )
                }
            </div>
            <div className="sendMessage">
                <form onSubmit={sendMessage}>
                    <div className="formGroup">
                        <Input
                            className="chatInput"
                            name="message"
                            placeholder="Enter message"
                            required={true}
                            onChange = {(value) => changeHandler(value)}
                        />
                    </div>
                    <div className="ButtonWrapper">
                        <Button type="submit" className="SendMssg" text="Send" />
                    </div>
                </form>
            </div>
        </div>
    )
}