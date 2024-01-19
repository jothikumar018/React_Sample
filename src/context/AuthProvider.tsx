import { createContext, useState, useMemo } from "react";
import { useLocalStorage } from "../hooks/common/useLocalStorage";

const AuthContext = createContext<AuthContextType | {}>({});

type AuthContextType = {
    auth: {};
    setAuth: (value: {}) => void;
    persist: boolean;
    setPersist: (value: boolean) => void;
};

export const AuthProvider = ({ children }: any) => {
    const user = useLocalStorage("user", "");
    const token = useLocalStorage("token", "");

    let roles = "";
    if (localStorage.getItem("roles")) {
        roles = JSON.parse(localStorage.getItem("roles") ?? "");
    }
    const authValue = roles == "" ? {} : { user, roles, token }

    const [auth, setAuth] = useState(authValue);

    const persistValue = useLocalStorage("persist", false);
    const [persist, setPersist] = useState(persistValue || false);

    return (
        <AuthContext.Provider value={{ auth, setAuth, persist, setPersist }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;