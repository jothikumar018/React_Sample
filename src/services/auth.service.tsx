import { useNavigate, useLocation } from 'react-router-dom';
import { useFetchData } from "../hooks/fetch/useFetch"
import useAuth from "../hooks/authentication/useAuth";

const AuthService = () => {

    const { auth, setAuth }: any = useAuth();
    const fetch = useFetchData();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    return {
        login: loginApi()
    };

    function loginApi() {
        return (data: any) => {
            return fetch.post("Authentication/Login", data)
                .then((response: any) => {
                    let res = response?.Authentication;

                    const user = data.UserName;
                    const token = res.Token;
                    const roles = res?.UserRoles;

                    localStorage.setItem("user", JSON.stringify(user));
                    localStorage.setItem("token", JSON.stringify(token));
                    localStorage.setItem("roles", JSON.stringify(roles));

                    setAuth({ user, roles, token });
                    navigate(from, { replace: true });
                });
        }
    };

};

export default AuthService;
