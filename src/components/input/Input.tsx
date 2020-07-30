import React, { useState, useEffect } from 'react';
import './Input.scss';

type Props = {
    name: string,
    placeholder: string,
    required?: boolean,
    validity?: boolean,
    className?: string,
    onChange?: (val: string) => void
}

export const Input: React.FunctionComponent<Props> = ({name, placeholder, required, validity, className, onChange}) => {

    const[inputValue, setInputValue] = useState<string>('');
    const[inputChanged, setInputChanged] = useState<boolean>(false);
    const[inputEmpty, setInputEmpty] = useState<boolean>(false);
    const[inputInvalid, setInputInvalid] = useState<boolean>(false);

    const changeHandler = (value: string) => {
        
        setInputChanged(true);

        setInputValue(value);

        if(onChange){
            onChange(value)
        }
    }
    
    useEffect( () => {
        
        if(!inputChanged){
            return;
        }

        if(required && !inputValue){
            setInputEmpty( true );
            return;
        }
    
        if(validity && inputValue.match(/\s/g)){
            setInputInvalid( true );
          return;
        }
    
        setInputEmpty( false );
        setInputInvalid( false );

    }, [inputChanged, inputValue, required, validity])

      
    return (
        <div className="Input">
            <input
                type="text"
                name={name}
                className = {className}
                placeholder= {placeholder}
                onChange={(event) => changeHandler(event.target.value)} 
            />
            <div className="formError">
                {inputEmpty ? 'This field is required': ''}
                {inputInvalid ? 'Entered value is not valid': ''}
            </div>
        </div>

    )
}