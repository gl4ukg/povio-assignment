import { IMeta, IPagination } from "./app.types";
import { ICard } from "./card.types";

export interface IFlowers {
    flowers: ICard[],
    meta: IPagination
}

export interface IFlower {
    id:	number
    name: string
    latin_name:	string
    sightings:number
    profile_picture: string
    favorite: boolean
}

export interface IFlowerPayload {
    name: string
    latin_name:	string
    description: string
    features: string
    profile_picture: boolean
}

export interface IFlowerResponse {
    flower: IFlower,
}

export interface IFlowersResponse {
    flowers: IFlower[],
    meta: IPagination
}

export interface IFavorite {
    id:	number
    user_id:number
    flower: IFlower[]
}

export interface IFlowersFavoriteResponse {
    sightings: IFavorite[]
    meta: IPagination
}