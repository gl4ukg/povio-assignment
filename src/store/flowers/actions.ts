import { IFlowers } from "../../types/flowers.types"
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