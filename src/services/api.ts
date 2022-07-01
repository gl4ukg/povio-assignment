import axios from "axios"

export const initializeAxiosInstance = (): void => {
    axios.defaults.baseURL = process.env.REACT_APP_BASE_URL_API;
    axios.defaults.withCredentials = false;
}