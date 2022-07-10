import React, {CSSProperties} from 'react';
import {Field} from 'formik';
import './TextAreaInput.scss'
import classNames from "classnames";

interface Props{
    style?: CSSProperties;
    labelKey?: string;
    name?: string;
    type?: string;
    value?: any;
    placeholder?: string;
    disabled?: boolean,
    className?: string,
    rows: string
    cols: string
    onChange?: (value: string) => void;
    errors?: string
    touched?: boolean
    validate?: (value: string) => string | undefined
}

const TextAreaInput: React.FC<Props> = (props: Props) => {
    const returnErrorMessage = (errorMessage: string) => {
        return <p className='errorMessage'>{errorMessage}</p>
    }

    const onChangeEvent = (textValue: string) => {
        if(props?.onChange){
            props?.onChange(textValue)
        }
    }

    return <div className={classNames("textAreaWrapper", {
        [props.className as string]: props.className
    })}>
        { props.labelKey && <label> {props.labelKey}</label> }
        { props.value ?
            <Field 
                placeholder={props.placeholder} 
                value={props?.value || ""} 
                onChange={(e: React.ChangeEvent<HTMLInputElement>)=> onChangeEvent(e.target.value)} 
                name={props.name} 
                as="textarea" 
                disabled={props.disabled} 
                rows={props.rows} 
                cols={props.cols}  />
            :
            <>
                <Field 
                    placeholder={props.placeholder} 
                    name={props.name} 
                    as="textarea"
                    disabled={props.disabled} 
                    rows={props.rows} 
                    cols={props.cols}
                    validate={props.validate}   />
                {props.errors && props.touched && returnErrorMessage(props.errors)}
            </>
        }

    </div>
}


export default TextAreaInput;
