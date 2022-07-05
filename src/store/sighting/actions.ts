import { ISightingsResponse } from "../../types/sigting.type"
import * as constants from "./constants"


export const setLoading = (payload: boolean) => {
    return {
        type: constants.SET_LOADING,
        payload
    }
}

export const loadUserSightings = (payload: number) => {
    return {
        type: constants.LOAD_USER_SIGHTINGS,
        payload
    }
}
export const setUserSightings = (payload: ISightingsResponse) => {
    return {
        type: constants.SET_USER_SIGHTINGS,
        payload
    }
}