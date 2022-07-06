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
    flat?: boolean,
    bordered?: boolean,
    className?: string
    onChange?: () => void;
    validate?: any
}

const PasswordInput: React.FC<Props> = (props: Props) => {
    const [ visiblePassword, setVisiblePassword ] = useState<boolean>(false)

    function returnErrorMessage(errorMessage: string){
        return <p className='errorMessage'>{errorMessage}</p>
    }

    return <div className={classNames({
        ['passwordInputWrapper']: true,
        ['flat']: props.flat,
        ['bordered']: props.bordered,
        [props.className as string]: props.className
    })}>
        { props.labelKey && <label> {props.labelKey}</label> }
        <Field placeholder={props.placeholder} name={props.name} validate={props.validate} type={visiblePassword ? "text" : "password"}/>
        <img src={EyeIcon} alt="" onClick={()=> setVisiblePassword(!visiblePassword) } className={`togglePasswordIcon ${visiblePassword && "notHidden"}`} />
        <ErrorMessage name={props.name as string}>{(message: string) => returnErrorMessage(message)}</ErrorMessage>
    </div>
}


export default PasswordInput;
