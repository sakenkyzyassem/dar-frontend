import React from 'react';
import Youtube from 'react-youtube';
import { Chat } from '../chat/Chat';

import './Room.scss';
import { UserContext } from '../../App';

export const Room: React.FunctionComponent = () => {
    return (
        <div className="Room">
            <Youtube videoId={'ZHtyLsyE4sI'} containerClassName="Video" />
            <UserContext.Consumer>
                {
                    ({user}) => <Chat user={user}/>
                }
            </UserContext.Consumer>

        </div>
    )
}