import { IFlower, IFlowers, IFlowersFavoriteResponse } from "../../types/flowers.types"
import * as constants from "./constants"


export const setLoading = (payload: boolean) => {
    return {
        type: constants.SET_LOADING,
        payload
    }
}

export const loadFlowers = () => {
    return {
        type: constants.LOAD_FLOWERS
    }
}

export const setFlowers = (payload: IFlowers) => {
    return {
        type: constants.SET_FLOWERS,
        payload
    }
}

export const searchFlowers = (payload: string) => {
    return {
        type: constants.LOAD_SEARCH_FLOWERS,
        payload
    }
}

export const loadFavoriteFlowers = () => {
    return {
        type: constants.LOAD_FAVORITE_FLOWERS
    }
}

export const setFavoriteFlowers = (payload: IFlowersFavoriteResponse) => {
    return {
        type: constants.SET_FAVORITE_FLOWERS,
        payload
    }
}

export const loadFlowerDetail = (payload: number) => {
    return  {
        type: constants.LOAD_FLOWER_DETAIL,
        payload
    }
}

export const setFlowerDetail = (payload: IFlower) => {
    return  {
        type: constants.SET_FLOWER_DETAIL,
        payload
    }
}