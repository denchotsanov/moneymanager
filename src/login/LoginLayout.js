import React from 'react';
import {Paper} from '@mui/material';
import styles from './LoginLayout.module.css';

export const LoginLayout = ({ children }) => {
    return (
        <main className={styles.root}>
            <div className={styles.slidebar}>

            </div>
            <Paper className={styles.paper}>
                <form className={styles.form}>
                    {children}
                </form>
            </Paper>
        </main>
    );
}
