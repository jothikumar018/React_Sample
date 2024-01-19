import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import useAuth from "../../hooks/authentication/useAuth";

const PersistLogin = () => {
    const [isLoading, setIsLoading] = useState(true);
    const { auth, persist }: any = useAuth();

    useEffect((): any => {
        let isMounted = true;

        const verifyRefreshToken = async () => {
            try {
                //await refresh();
            }
            catch (err) {
                console.error(err);
            }
            finally {
                isMounted && setIsLoading(false);
            }
        }

        !auth?.token && persist ? verifyRefreshToken() : setIsLoading(false);

        return () => isMounted = false;

    }, []);


    return (
        <>
            {!persist
                ? <Outlet />
                : isLoading
                    ? <p>Loading...</p>
                    : <Outlet />
            }
        </>
    );

};

export default PersistLogin;