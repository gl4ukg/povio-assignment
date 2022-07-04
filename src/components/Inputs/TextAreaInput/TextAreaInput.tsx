import React, {CSSProperties, useState} from 'react';
import {ErrorMessage, Field} from 'formik';
import './TextAreaInput.scss'
import classNames from "classnames";


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
    rows: string
    cols: string

    onChange?: (value: string) => void;
}

const TextAreaInput: React.FC<Props> = (props: Props) => {
    function returnErrorMessage(errorMessage: string){
        return <p className='errorMessage'>{errorMessage}</p>
    }

    function onChangeEvent(textValue: string) {
        if(props?.onChange){
            props?.onChange(textValue)
        }
    }

    return <div className={classNames("textAreaWrapper", {
        ['flat']: props.flat,
        ['bordered']: props.bordered,
        [props.className as string]: props.className
    })}>
        { props.labelKey && <label> {props.labelKey}</label> }
        { props.value ?
            <Field 
                placeholder={props.placeholder} 
                value={props?.value || ""} 
                onChange={(e: React.ChangeEvent<HTMLInputElement>)=> onChangeEvent(e.target.value)} 
                name={props.name} 
                as={"textarea"}  
                disabled={props.disabled} 
                rows={props.rows} 
                cols={props.cols}  />
            :
            <Field 
                placeholder={props.placeholder} 
                name={props.name} 
                as={"textarea"}  
                disabled={props.disabled} 
                rows={props.rows} 
                cols={props.cols}  />
        }

        <ErrorMessage name={props.name as string}>{(message: string) => returnErrorMessage(message)}</ErrorMessage>
    </div>
}


export default TextAreaInput;
