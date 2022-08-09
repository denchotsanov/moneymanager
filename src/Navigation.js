import {Route, Routes} from "react-router-dom";
import {Dashboard} from "./components/Dashboard"
import {AccountsPage} from "./components/AccountsPage";
import {LoginPage} from "./login/LoginPage";
import {RegisterPage} from "./login/RegisterPage";

import { AuthContext } from './contexts/AuthContext';
import {useLocalStorage} from "./hook/useLocalStorage";

import App from "./App";

export const Navigation = () => {
    const [auth, setAuth] = useLocalStorage('auth', {});

    const userLogin = (authData) => {
        setAuth(authData);
    };

    const userLogout = () => {
        setAuth({});
    };
    return (
        <AuthContext.Provider value={{ user: auth, userLogin, userLogout }}>
            <Routes>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/registration" element={<RegisterPage/>}/>
                <Route path="/" element={<App />} >
                    <Route index element={<Dashboard />}/>
                    <Route path="/accounts" element={<AccountsPage />}/>
                </Route>
            </Routes>
        </AuthContext.Provider>
    );
}
