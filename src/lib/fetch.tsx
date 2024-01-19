
const BASE_URL = process.env.REACT_APP_API_URL;

export const fetchApi = ({ url, requestOptions }: { url: string, requestOptions: any }) => {

    return fetch(`${BASE_URL}${url}`, requestOptions)
        .then(async response => {
            // if (!response.ok) {
            //     throw new Error(
            //         `This is an HTTP error: The status is ${response.status}`
            //     );
            // }
            return await response.json();
        })
        .then((data) => {
            return data;
        })
        .catch((error: Error) => {
            console.error('There was an error!', error);
        });
};
