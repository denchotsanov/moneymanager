import {Route, Routes} from "react-router-dom";
import {Dashboard} from "./components/Dashboard"
import {AccountsPage} from "./components/AccountsPage";
import {LoginPage} from "./login/LoginPage";
import {RegisterPage} from "./login/RegisterPage";

import {AuthProvider} from './contexts/AuthContext';

import App from "./App";
import {Logout} from "./login/Logout";
import {PrivateRoute} from "./components/PrivateRoute";

export const Navigation = () => {

    return (
        <AuthProvider>
            <Routes>
                <Route path="/login" element={<LoginPage/>}/>
                <Route element={<PrivateRoute />}>
                    <Route path="/logout" element={<Logout />} />
                </Route>
                <Route path="/registration" element={<RegisterPage/>}/>
                <Route path="/" element={
                    <PrivateRoute><App /></PrivateRoute>} >
                    <Route index element={<Dashboard />}/>
                    <Route path="/transaction" element={<AccountsPage />}/>
                    <Route path="/accounts" element={<AccountsPage />}/>
                </Route>
            </Routes>
        </AuthProvider>
    );
}
