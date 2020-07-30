import React, { useState } from 'react';
import './Home.scss';
import { Button } from '../../components/button/button';
import { Input } from '../../components/input/Input';
import { useHistory } from 'react-router-dom';
import { UserInfo } from '../../types/interfaces';

interface FormError {
  isEmpty?: boolean;
  isInvalid?: boolean;
}

interface UserFormError {
  firstname: FormError;
  lastname: FormError;
}

export const Home: React.FunctionComponent = () => {

  const[userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const history = useHistory();
  
  const changeHandler = (field: 'firstname' | 'lastname', value: string) => {
    console.log(field, value)
    const newVal = {
      ...userInfo,
      [field]: value
    };

    setUserInfo(newVal as any);
  }
  
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    console.log(userInfo);
    if(userInfo?.firstname){
      history.push({
        pathname: `/chat`,
        state: userInfo
    })
    }

  }

    return(
        <div className="Home">
          <form onSubmit={submitHandler}>
            <div className="formGroup">
              <Input
                className="formControl"
                name = 'firstname'
                required={true}
                validity={true}
                placeholder = 'Enter your first name'
                onChange = {(value) => changeHandler('firstname', value)}
              />
            </div>
            <div className="formGroup">
              <Input
                className="formControl"
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