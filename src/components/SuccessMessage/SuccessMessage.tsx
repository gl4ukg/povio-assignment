import { ReactElement } from "react";
import styles from "./SuccessMessage.module.scss"

interface Props {
    text: string,
    buttons: ReactElement

}

const SuccessMessage:React.FC<Props> = (props: Props) => {
    
    const { text, buttons } = props;

    return (
        <div className={styles.successMessage}>
            <p className={styles.successMessage__text_succes}>{text}</p>
            {buttons}
        </div>
    )
}

export default SuccessMessage