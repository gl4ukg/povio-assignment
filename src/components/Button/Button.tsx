import styles from "./Button.module.scss"
import classNames from "classnames"

interface Props {
    text: string,
    isRounded?: boolean,
    isColored?: boolean,
    isSmall?: boolean,
    isBlack?: boolean,
    isDisabled?: boolean,
    isSubmit?: boolean,
    onClick?: () => void,
    className?: string,
    isIcon?: string
}

const Button:React.FC<Props> = (props: Props) => {
    return (
        <button 
            disabled={props.isDisabled}
            type={props.isSubmit ? 'submit': 'button'}
            className={classNames(styles.button, {
                [styles.button__isColored]: props.isColored,
                [styles.button__isRounded]: props.isRounded,
                [styles.button__isSmall]: props.isSmall,
                [styles.button__isBlack]: props.isBlack,
                [props.className as string]: props.className,
                [styles.button__isIcon]: props.isIcon
            })}
            onClick={props.onClick}
            >
            {props.isIcon && <img src={props.isIcon} alt={props.isIcon} />}
            {props.text}
        </button>
    )
}

export default Button