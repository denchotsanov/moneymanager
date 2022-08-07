import {useState} from "react";
import {LoginLayout} from "./LoginLayout";
import {Button, TextField} from "@mui/material";

import styles from './LoginLayout.module.css';


export const LoginPage = () => {
    const [failed, setFailed] = useState(false);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
            setFailed(true);
            setPassword('');
            setEmail('');
            setFailed(false);
    };

    const handleSpecialKey = (e) => {
        if (e.keyCode === 13 && email && password) {
            handleSubmit(e);
        }
    };

    return (
        <LoginLayout>
            <div className={styles.container}>
                <TextField
                    required
                    error={failed}
                    label="E-Mail"
                    name="email"
                    value={email}
                    autoComplete="email"
                    autoFocus={!email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyUp={handleSpecialKey}
                    helperText={failed && 'Invalid username or password'}
                />
                <TextField
                    required
                    error={failed}
                    label="Password"
                    name="password"
                    value={password}
                    type="password"
                    autoComplete="current-password"
                    autoFocus={!!email}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyUp={handleSpecialKey}
                />
                <Button
                    onClick={handleSubmit}
                    onKeyUp={handleSpecialKey}
                    variant="contained"
                    color="secondary"
                    disabled={!email || !password}
                >
                    Login
                </Button>
            </div>
        </LoginLayout>
    );
}
