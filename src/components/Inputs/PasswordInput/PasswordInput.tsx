import {CSSProperties, useState} from 'react';
import {ErrorMessage, Field} from 'formik';
import EyeIcon from '../../../assets/icons/view.png'
import './PasswordInput.scss'
import classNames from "classnames";


interface Props{
    style?: CSSProperties;
    labelKey?: string;
    name?: string;
    type?: string;
    value?: any;
    placeholder?: string;
    className?: string
    onChange?: () => void;   
    validate?: (value: string) => string | undefined
    autocomplete?:string
    errors?: string
    touched?: boolean
}

const PasswordInput: React.FC<Props> = (props: Props) => {
    const [ visiblePassword, setVisiblePassword ] = useState<boolean>(false)

    function returnErrorMessage(errorMessage: string){
        return <p className='errorMessage'>{errorMessage}</p>
    }

    return <div className={classNames("passwordInputWrapper", {
        [props.className as string]: props.className
    })}>
        { props.labelKey && <label> {props.labelKey}</label> }
        <Field 
            autoComplete={props.autocomplete}
            placeholder={props.placeholder} 
            name={props.name} 
            validate={props.validate} 
            type={visiblePassword ? "text" : "password"
            }/>
        <img 
            src={EyeIcon} 
            alt={EyeIcon} 
            onClick={()=> setVisiblePassword(!visiblePassword) } 
            className={`togglePasswordIcon ${visiblePassword && "notHidden"}`} 
            />
        {props.errors && props.touched && returnErrorMessage(props.errors)}
    </div>
}


export default PasswordInput;
