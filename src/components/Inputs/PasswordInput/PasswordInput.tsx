import {CSSProperties, useState} from 'react';
import {Field} from 'formik';
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

    const returnErrorMessage = (errorMessage: string) => {
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
            type={visiblePassword ? "text" : "password"}
        />
        <img 
            src={EyeIcon} 
            alt={EyeIcon} 
            onClick={()=> setVisiblePassword(!visiblePassword) } 
            className={classNames('togglePasswordIcon', {
                "notHidden": visiblePassword
            })} 
        />
        {props.errors && props.touched && returnErrorMessage(props.errors)}
    </div>
}


export default PasswordInput;
