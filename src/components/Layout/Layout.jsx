import React from 'react';
import {Header} from "../Header/Header";
import {Outlet} from "react-router-dom";

import styles from './Layout.module.css'
import {Footer} from "../Footer";

const Layout = () => {
    return (
        <div className={styles.wrapper}>
            <Header/>
            <main className={styles.container}>
                <Outlet/>
            </main>
            <footer className={styles.footer}>
                <Footer/>
            </footer>
        </div>
    );
};

export {Layout};