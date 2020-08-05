import React, { useState, useEffect } from 'react';
import Youtube from 'react-youtube';
import { Chat } from '../chat/Chat';

import './Room.scss';
import { RoomHeader } from '../../components/roomHeader/RoomHeader';
import { UserContext } from '../../services/context';
import { useParams } from 'react-router-dom';
import { Button } from '../../components/button/button';

enum PlayerStates {
    PLAYING ='PLAYING',
    PAUSES = 'PAUSES' 
}

export const Room: React.FunctionComponent = () => {

    const { id } = useParams();
    const[player, setPlayer] = useState<any>(null);
    const[playerState, setPlayerState] = useState<PlayerStates>();

    const onVideoInit = (event: {target: any}) => {
        setPlayer(event.target);
    }

    const toggleVideo = () => {

        if( playerState !== PlayerStates.PLAYING){
            player?.playVideo();
            setPlayerState(PlayerStates.PLAYING);
        }

        if( playerState === PlayerStates.PLAYING){
            player?.pauseVideo();
            setPlayerState(PlayerStates.PAUSES);
        }
    }

    return (
        <div className="Room">
            <RoomHeader />
            <div className="roomWrapper">
                <div className="videoWrapper">
                    <Youtube videoId = { id } containerClassName="Video" onReady={onVideoInit} />
                    <div className="videoControls">
                        <Button text={!player || playerState === 'PLAYING' ? "PAUSE" : "PLAY"} type="button" clickHandler={toggleVideo}/>
                    </div>
                </div>
                <UserContext.Consumer>
                    {
                        (value) =>(
                            <Chat user={value?.user}/>
                        )
                    }
                </UserContext.Consumer>
            </div>
        </div>
    )
}