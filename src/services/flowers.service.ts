import axios from "axios";
import { IFlowers } from "../types/flowers.types";


export const getFlowers = (): Promise<IFlowers> => {
    return axios.get('/api/v1/flowers')
}