import React, { useState } from 'react';
import './Home.scss';
import { Hello } from '../../components/hello/hello';
import { Button } from '../../components/button/button';

export const Home: React.FunctionComponent = () => {

  const [clicked, setClicked] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [pic, setPic] = useState<string>('');


  const btnClickLogin = () => {
    console.log('Button Clicked');
    setClicked(true);
  }

  const btnClickUser = () => {
    setName("Assem");
    setPic(require('./profile.jpg'));
  }

  const btnClickLogout = () => {
    setClicked(false);
    setName('');
    setPic('');
  }

    return(
        <div className="Home">
            { clicked
              ? 
                <div>
                  <Hello name = {name} pic = {pic} /> 
                  <div className = "ButtonWrapper">
                    <Button className="AppLoginBtn" clickHandler={btnClickLogout} text = "Log Out"/> 
                    <Button className="AppLoginBtn" clickHandler={btnClickUser} text="Change User"/>
                  </div>
                </div>
              : 
                <div className = "ButtonWrapper">
                  <Button className="AppLoginBtn" clickHandler={btnClickLogin} text="Log In" />
                </div>
            }
        </div>
    )
}

export default Home;