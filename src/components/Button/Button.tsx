import styles from "./Button.module.scss"
import classNames from "classnames"

interface Props {
    text: string,
    isRounded?: boolean,
    isColored?: boolean,
    isSmall?: boolean,
    isBllack?: boolean,
    isDisabled?: boolean,
    isSubmit?: boolean,
    onClick?: () => void,
    className?: string,
    isIcon?: string
}

const Button:React.FC<Props> = (props: Props) => {
    const { isRounded, isColored, isSmall, text, isBllack, isSubmit, isDisabled, onClick, className, isIcon } = props;
    return (
        <button 
            disabled={isDisabled}
            type={isSubmit ? 'submit': 'button'}
            className={classNames(styles.button, {
                [styles.button__isColored]: isColored,
                [styles.button__isRounded]: isRounded,
                [styles.button__isSmall]: isSmall,
                [styles.button__isBllack]: isBllack,
                [props.className as string]: className,
                [styles.button__isIcon]: isIcon
            })}
            onClick={onClick}
            >
            <img src={isIcon} alt={isIcon} />
            {text}
        </button>
    )
}

export default Button