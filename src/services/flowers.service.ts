import axios from "axios";
import { IFavorite, IFlower, IFlowerPayload, IFlowerResponse, IFlowers, IFlowersFavoriteResponse, IFlowersResponse } from "../types/flowers.types";
import { ISightingsResponse } from "../types/sigting.type";
import { getBearerToken } from "../utils/auth";

const token = getBearerToken();

export const getFlowers = (): Promise<IFlowers> => {
    return axios.get('/api/v1/flowers')
}

export const createFlower = (payload: IFlowerPayload): Promise<IFlower> => {
    return axios.post('/api/v1/flowers', payload, {
        headers: {
            "Authorization": "Bearer " + JSON.parse(token as string)
        }
    })
}

export const getRandomFlowers = (): Promise<IFlowersResponse> => {
    return axios.get('/api/v1/flowers/random')
}

export const searchFlowers = (query: string): Promise<IFlowersResponse> => {
    return axios.get('/api/v1/flowers/search', {
        params: {
            query
        } 
    })
}

export const getFlowerDetail = (id: number): Promise<IFlowerResponse> => {
    return axios.get(`/api/v1/flowers/${id}`, {
        headers: {
            "Authorization": "Bearer " + JSON.parse(token as string)
        }
    })
}

export const getFlowerSettings = (id: number): Promise<ISightingsResponse> => {
    return axios.get(`​/api​/v1​/flowers​/${id}​/sightings`, {
        headers: {
            "Authorization": "Bearer " + JSON.parse(token as string)
        }
    })
}

export const getFavoriteFlowers = ():Promise<IFlowersFavoriteResponse> => {
    return axios.get('/api/v1/flowers/favorites', {
        headers: {
            "Authorization": "Bearer " + JSON.parse(token as string)
        }
    })
}

export const makeFlowerAsMyFavorite = (flower_id: number):Promise<IFavorite> => {
    return axios.post(`/api/v1/flowers/${flower_id}/favorites`, null, {
        headers: {
            "Authorization": "Bearer " + JSON.parse(token as string)
        }
    })
}

export const deleteFlowerAsMyFavorite = (flower_id: number, id:number):Promise<IFavorite> => {
    return axios.delete(`/api​/v1​/flowers​/${flower_id}​/favorites/${id}`, {
        headers: {
            "Authorization": "Bearer " + JSON.parse(token as string)
        }
    })
}

export const getFlowersPerSighnigs = (id: number):Promise<ISightingsResponse> => {
    return axios.get(`/api/v1/flowers/${id}/sightings`, {
        headers: {
            "Authorization": "Bearer " + JSON.parse(token as string)
        }
    })
}