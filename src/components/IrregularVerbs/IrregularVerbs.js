import React from 'react';
import {IRREGULAR_VERBS} from "../../utils/data";
import {IrregularCard} from "../IrregularCard";
import styles from './IrregularVerbs.module.css'

const IrregularVerbs = () => {
    return (
        <div className={styles.irregularVerbs}>
            {IRREGULAR_VERBS.map(element => <IrregularCard dictionary={element} key={element.id}/>)}
        </div>
    );
};

export {IrregularVerbs};