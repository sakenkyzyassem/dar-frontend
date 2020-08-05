import React, { useContext } from 'react';
import { UserContext } from '../../services/context';   

export const RoomHeader: React.FunctionComponent = () => {

    const userState = useContext(UserContext);

    return (
        userState && userState.user ? <h2>Welcome, {userState.user.firstname}</h2> : null
    )

}