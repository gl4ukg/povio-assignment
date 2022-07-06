import React from 'react';
import styles from './Modal.module.scss'
import ModalFooterComponent from './ModalFooterComponent';
import ModalHeaderComponent from './ModalHeaderComponent';
import classNames from "classnames";

interface Props {
    isModalHeader?: boolean;
    isModalFooter?: boolean;
    isOpen: boolean;
    children: JSX.Element;
    close: (state: boolean) => void;
    classNames?: string,
}

const ModalComponent:React.FC<Props> = (props:Props) => {

    const showHideClassName = props.isOpen ? styles.displayBlock : styles.displayNone;

    function closeModal () {
        props.close(false)
    }

    return (
        <div className={`modal ${styles.modalComponent} ${showHideClassName}`}>
            <div className={classNames(styles.modalBody, {
                [props?.classNames as string]: props.classNames
            })}>
                {props.isModalHeader && 
                    <ModalHeaderComponent 
                        close={closeModal} />
                }
                <div className={styles.modalChildren}>
                    {props?.children}
                </div>
                {props.isModalHeader && 
                    <ModalFooterComponent />
                }
            </div>
        </div>
    )
}
export default ModalComponent;
