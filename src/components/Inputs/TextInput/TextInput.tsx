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
  flat?: boolean,
  bordered?: boolean,
  disabled?: boolean,
  className?: string,
  children?: JSX.Element | JSX.Element[];
  onChange?: (value: string) => void;
  isBirthdayLimit?: boolean;
  onClick?: () => void,
}

const TextInput: React.FC<Props> = (props: Props) => {

  let todayDate = new Date();
  let fifteenYearsFromNow = todayDate.setFullYear(todayDate.getFullYear() -  15)

  function returnErrorMessage(errorMessage: string){
    return <p className='errorMessage'>{errorMessage}</p>
  }

  function onChangeEvent(textValue: string) {
    if(props?.onChange){
      props?.onChange(textValue)
    }
  }

  return <div className={classNames({
    ['formikTextInputWrapper']: true,
    ['flat']: props.flat,
    ['bordered']: props.bordered,
    [props.className as string
    ]: props.className
  })}>
    { props.children && <span>{props.children}</span> }
    { props.labelKey && <label> {props.labelKey}</label> }
    { props.value !== undefined ?
        <input 
            onClick={props.onClick}
            value={(props.type == "date" ? formatDate(props?.value) : props?.value) || ''}
            onChange={(inputElement: React.ChangeEvent<HTMLInputElement>)=> onChangeEvent(inputElement.target.value)} placeholder={props.placeholder} 
            name={props.name} 
            type={props.type ? props.type : "text"}
            disabled={props.disabled}  />
    :
        <>
          <Field 
            onClick={props.onClick}
            placeholder={props.placeholder} 
            name={props.name} 
            type={props.type ? props.type : "text"}
            disabled={props.disabled} />
            <ErrorMessage name={props.name as string}>
                {(message: string) => returnErrorMessage(message)}
            </ErrorMessage>
        </>
    }
  </div>
}


export default TextInput;
