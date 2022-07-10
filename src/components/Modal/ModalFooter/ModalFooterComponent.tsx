import React from 'react';
import style from './Modal.module.scss'

interface Props {
    title?: string;
}
const ModalFooterComponent:React.FC<Props> = (props:Props) => {
    return (
        <div className={style.modalFooterComponent}>
            <p>{props.title}</p>
        </div>
    )
}
export default ModalFooterComponent;