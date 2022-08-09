import {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../contexts/AuthContext";
import * as authService from "../services/authService";

import {Button, TextField} from "@mui/material";

import {LoginLayout} from "./LoginLayout";
import styles from './LoginLayout.module.css';



export const LoginPage = () => {
    const [failed, setFailed] = useState(false);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const { userLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(email,password);
        authService.login(email, password)
            .then(authData => {
                userLogin(authData);
                navigate('/');
            })
            .catch(() => {
                setFailed(true);
                setPassword('');
                navigate('/login');
            });
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
