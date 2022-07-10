import React, {CSSProperties, useEffect, useState} from 'react';
import {ErrorMessage, Field} from 'formik';
import './TextInput.scss'
import classNames from "classnames";
import {formatDate} from "../../../utils/utils";


interface Props{
    style?: CSSProperties;
    labelKey?: string;
    name?: string;
    type?: string;
    value?: any;
    placeholder?: string;
    disabled?: boolean,
    className?: string,
    children?: JSX.Element | JSX.Element[];
    onChange?: (value: string) => void;
    isBirthdayLimit?: boolean;
    onClick?: () => void,
    autocomplete?:string
    errors?: string
    touched?: boolean
    validate?: (value: string) => string | undefined
}

const TextInput: React.FC<Props> = (props: Props) => {

  const returnErrorMessage = (errorMessage: string) => {
    return <p className='errorMessage'>{errorMessage}</p>
  }

  const onChangeEvent = (textValue: string) => {
    if(props?.onChange){
      props?.onChange(textValue)
    }
  }

  return <div className={classNames("formikTextInputWrapper", {
    [props.className as string]: props.className
  })}>
    { props.children && <span>{props.children}</span> }
    { props.labelKey && <label> {props.labelKey}</label> }
    { props.value !== undefined ?
        <input 
            onClick={props.onClick}
            value={(props.type == "date" ? formatDate(props?.value) : props?.value) || ''}
            onChange={(e: React.ChangeEvent<HTMLInputElement>)=> onChangeEvent(e.target.value)} 
            placeholder={props.placeholder} 
            name={props.name} 
            type={props.type ? props.type : "text"}
            disabled={props.disabled}  />
    :
        <>
          <Field 
            autoComplete={props.autocomplete}
            onClick={props.onClick}
            placeholder={props.placeholder} 
            name={props.name} 
            type={props.type ? props.type : "text"}
            disabled={props.disabled}
            validate={props.validate} />
           {props.errors && props.touched && returnErrorMessage(props.errors)}
        </>
    }
  </div>
}


export default TextInput;
