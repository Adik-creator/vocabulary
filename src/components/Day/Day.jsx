import React from 'react';
import {useParams} from "react-router-dom";

import styles from './Day.module.css'
import {DICTIONARY} from "../../utils/data";
import {ActionAreaCard} from '../ActionAreaCard'


const Day = () => {

    const {day} = useParams()

    return (
        <div className={styles.day}>
            {DICTIONARY[day].map(element => <ActionAreaCard dictionary={element} key={element.id}/>)}
        </div>
    );
};

export {Day};