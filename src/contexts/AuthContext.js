import {createContext, useContext} from "react";
import {useLocalStorage} from "../hook/useLocalStorage";

export const AuthContext = createContext();

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    return context;
};
export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useLocalStorage('auth', {});

    const userLogin = (authData) => {
        setAuth(authData);
    };

    const userLogout = () => {
        setAuth({});
    };

    return (
        <AuthContext.Provider value={{
            user: auth,
            userLogin,
            userLogout,
            isAuthenticated: !!auth.accessToken
        }}>
            {children}
        </AuthContext.Provider>
    );
};

