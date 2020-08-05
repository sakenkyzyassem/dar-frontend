import React, { useState } from 'react';
import Youtube from 'react-youtube';
import { Chat } from '../chat/Chat';

import './Room.scss';
import { RoomHeader } from '../../components/roomHeader/RoomHeader';
import { UserContext } from '../../services/context';
import { useParams } from 'react-router-dom';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => 
    createStyles({
        root: {
            color: '#4b464b',
            fontSize: 44
        },
      }),
);

enum PlayerStates {
    PLAYING ='PLAYING',
    PAUSES = 'PAUSES' 
}

export const Room: React.FunctionComponent = () => {

    const styles = useStyles();
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

    const playForward = () => {
        player.seekTo(player.getCurrentTime()+10.0, true);
    }

    const playBack = () => {        
        player.seekTo(player.getCurrentTime()-10.0, true);
    }

    return (
        <div className="Room">
            <RoomHeader />
            <div className="roomWrapper">
                <div className="videoWrapper">
                    <Youtube videoId = { id } containerClassName="Video" onReady={onVideoInit} />
                    <div className={"videoControls " + styles.root}>
                        <button type="button" onClick={playBack} >
                            <ArrowBackIosIcon style={{ fontSize: 44, color: '#4b464b' }} />
                        </button>
                        <button type="button" onClick={toggleVideo}>
                            {!player || playerState === 'PLAYING' 
                                ? <PauseCircleFilledIcon style={{ fontSize: 44, color: '#4b464b' }} /> 
                                : <PlayCircleFilledIcon  style={{ fontSize: 44, color: '#4b464b' }} />}
                        </button>
                        <button type="button" onClick={playForward}>
                            <ArrowForwardIosIcon style={{ fontSize: 44, color: '#4b464b' }} />
                        </button>
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