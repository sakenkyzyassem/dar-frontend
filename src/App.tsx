import React, {useState} from 'react';
import './App.css';
import { Hello } from './components/hello/hello';

function App() {
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

  return (
    <div className="App">
      <img src="https://source.unsplash.com/1600x900/?nature,world" alt="background" className="AppBackground"></img>
      <div className="AppWrapper">
        { clicked ? 
        <div>
          <Hello name = {name} pic = {pic} /> 
          <button className="AppLoginBtn" onClick={btnClickLogout}>Log Out</button> 
          <button className="AppLoginBtn" onClick={btnClickUser}>Change User</button>
        </div>
          : <button className="AppLoginBtn" onClick={btnClickLogin}>Log In</button>}
      </div>
    </div>
  );
}

export default App;
