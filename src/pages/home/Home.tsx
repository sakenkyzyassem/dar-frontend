import React, { useRef, useState } from 'react';
import './Home.scss';
import { Button } from '../../components/button/button';
import { Input } from '../../components/input/Input';
import { useHistory } from 'react-router-dom';

interface FormError {
  isEmpty?: boolean;
  isInvalid?: boolean;
}

interface UserFormError {
  firstname: FormError;
  lastname: FormError;
}

export const Home: React.FunctionComponent = () => {

  const[userInfo, setUserInfo] = useState<{firstname: string, lastname: string } | null>(null);
  const history = useHistory();
  
  const changeHandler = (field: 'firstname' | 'lastname', value: string) => {
    console.log(field, value)
    const newVal = {
      ...userInfo,
      [field]: value
    };

    setUserInfo(newVal as any);
  }
  
  const emailInputRef = useRef<HTMLInputElement>(null);
  const userNameInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    if(emailInputRef && emailInputRef.current){
      console.log(emailInputRef.current.value);
    }

    if(userNameInputRef && userNameInputRef.current){
      console.log(userNameInputRef.current.value);
    }

    console.log(userInfo);
    if(userInfo?.firstname){
      history.push('/chat')
    }

  }

    return(
        <div className="Home">
          <form onSubmit={submitHandler}>
            <div className="formGroup">
              <input
                type = "email"
                className = "formControl"
                ref={emailInputRef}
                name="email"
                placeholder="Enter your email" />
            </div>
            <div className="formGroup">
              <input
                type="username"
                className = "formControl"
                ref={userNameInputRef}
                name="username"
                placeholder="Enter your user name" />
            </div>
            <div className="formGroup">
              <Input
                name = 'firstname'
                required={true}
                placeholder = 'Enter your first name'
                onChange = {(value) => changeHandler('firstname', value)}
              />
            </div>
            <div className="formGroup">
              <Input
                name = 'lastname'
                placeholder = 'Enter your last name'
                onChange = {(value) => changeHandler('lastname', value)}
              />
            </div>
            <div className="ButtonWrapper">
              <Button type="submit" className="AppLoginBtn" text="Log In" />
            </div>
          </form>
        </div>
    )
}

export default Home;