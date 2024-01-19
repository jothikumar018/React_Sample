import useAuth from "./useAuth"

const useLogout = () => {
    const { auth, setAuth }: any = useAuth();

    const logout = async () => {

        localStorage.removeItem("user");
        localStorage.removeItem("token");
        localStorage.removeItem("roles");

        setAuth({});
    }

    return logout;
};

export default useLogout;