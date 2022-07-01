import axios from "axios";
import { IFavorite, IFlower, IFlowerPayload, IFlowers, IFlowersFavoriteResponse, IFlowersResponse } from "../types/flowers.types";
import { ISightingsResponse } from "../types/sigting.type";


export const getFlowers = (): Promise<IFlowers> => {
    return axios.get('/api/v1/flowers')
}

export const createFlower = (payload: IFlowerPayload): Promise<IFlower> => {
    return axios.post('/api/v1/flowers', payload)
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

export const getFlowerDetail = (id: number): Promise<IFlower> => {
    return axios.get(`/api/v1/flowers/${id}`)
}

export const getFlowerSettings = (id: number): Promise<ISightingsResponse> => {
    return axios.get(`​/api​/v1​/flowers​/${id}​/sightings`)
}

export const getFavoriteFlowers = ():Promise<IFlowersFavoriteResponse> => {
    return axios.get('/api/v1/flowers/favorites')
}

export const makeFlowerAsMyFavorite = (flower_id: number):Promise<IFavorite> => {
    return axios.post(`/api​/v1​/flowers​/${flower_id}​/favorites`)
}

export const deleteFlowerAsMyFavorite = (flower_id: number, id:number):Promise<IFavorite> => {
    return axios.delete(`/api​/v1​/flowers​/${flower_id}​/favorites/${id}`)
}

export const getFlowersPerSighnigs = (id: number):Promise<ISightingsResponse> => {
    return axios.get(`/api/v1/flowers/${id}/sightings`)
}