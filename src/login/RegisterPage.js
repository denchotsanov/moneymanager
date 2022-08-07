import {LoginLayout} from "./LoginLayout";
import classes from "./LoginLayout.module.css";
import {Button, IconButton, TextField, Typography} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useState} from "react";


export const RegisterPage = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setEmail('');
        setName('');
        setPassword('');
    };

    return (
        <LoginLayout>
            <div className={classes.container}>
                <div className={classes.header}>
                    <IconButton color="primary">
                        <ArrowBackIcon />
                    </IconButton>
                    <Typography className={classes.title} color="primary">
                        Register
                    </Typography>
                </div>
                <TextField
                    required
                    label="Name"
                    name="name"
                    value={name}
                    autoComplete="name"
                    autoFocus
                    onChange={(event) => setName(event.target.value)}
                />
                <TextField
                    required
                    type="email"
                    label="E-Mail"
                    name="email"
                    value={email}
                    autoComplete="email"
                    onChange={(event) => setEmail(event.target.value)}
                />
                <TextField
                    required
                    label="Password"
                    name="password"
                    value={password}
                    type="password"
                    autoComplete="current-password"
                    onChange={(event) => setPassword(event.target.value)}
                />
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleSubmit}
                    disabled={!name || !/(.+)@(.+)\.(.{2,})/.test(email) || !password}
                    fullWidth
                >
                    Register
                </Button>
            </div>
        </LoginLayout>
    );
}
