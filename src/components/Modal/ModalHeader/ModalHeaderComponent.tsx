import React from 'react';
import XIcon  from '../../assets/icons/close-icon.svg'
import styles from './Modal.module.scss'

interface Props {
    title?: string;
    close: () => void;
}

const ModalHeaderComponent:React.FC<Props> = (props:Props) => {
    return (
        <div className={styles.modalHeaderComponent}>
            <p>{props.title}</p>
            <button onClick={props.close}>
                <img src={XIcon} alt="x icon" />
            </button>
        </div>
    )
}
export default ModalHeaderComponent;
