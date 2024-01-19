import { fetchApi } from "../../lib/fetch";
import useAuth from "../authentication/useAuth";

const BASE_URL = process.env.REACT_APP_API_URL ?? "";

export function useFetchData() {

    const { auth, setAuth }: any = useAuth();

    return {
        get: request('GET'),
        post: request('POST'),
        put: request('PUT'),
        delete: request('DELETE')
    };

    function request(method: any) {
        return (url: string, body: any) => {
            const requestOptions: any = {
                method,
                headers: authHeader(url)
            };
            if (body) {
                requestOptions.headers['Content-Type'] = 'application/json';
                requestOptions.body = JSON.stringify(body);
            }           
            return fetchApi({ url, requestOptions }).then(handleResponse);
        }
    };

    function authHeader(url: string) {
        // return auth header with jwt if user is logged in and request is to the api url
        const token = auth?.token;
        const isLoggedIn = !!token;
        const isApiUrl = url.startsWith(BASE_URL);
        if (isLoggedIn && isApiUrl) {
            return { Authorization: `Bearer ${token}` };
        } else {
            return {};
        }
    };

    function handleResponse(response: any) {
     
        if (!response.Success) {
            console.log(response.ErrorMessage);
        }

        return response.Response;        
    }
};