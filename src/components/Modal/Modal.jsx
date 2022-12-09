import React from 'react';
import styles from './Modal.module.css'

const Modal = ({active, setActive}) => {


    return (
        <div className={active ? styles.activeModal : styles.modal} onClick={() => setActive(false)}>
            <div className={active ? styles.activeContent : styles.content} onClick={event => event.stopPropagation()}>
                hello world
            </div>
        </div>
    );
};

export {Modal};