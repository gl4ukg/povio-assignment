import { ReactElement } from "react";
import styles from "./SuccessMessage.module.scss"

interface Props {
    text: string,
    buttons: ReactElement
}

const SuccessMessage: React.FC<Props> = (props: Props) => {
    return (
        <div className={styles.successMessage}>
            <p className={styles.successMessage__text_succes}>{props.text}</p>
            {props.buttons}
        </div>
    )
}

export default SuccessMessage