import { LoginType, ProfileType } from "../../types/user.types"
import * as constants from "./constants"

export const setLoading = (payload: boolean) => {
    return {
        type: constants.SET_LOADING,
        payload
    }
}

export const loadLogin = (payload: LoginType) => {
    return {
        type: constants.LOAD_LOGIN,
        payload
    }
}

export const loadSignUp = (payload: ProfileType) => {
    return {
        type: constants.LOAD_SIGNUP,
        payload
    }
}

export const setLogin = (payload: boolean) => {
    return {
        type: constants.IS_LOGIN,
        payload
    }
}

export const loadUser = () => {
    return {
        type: constants.LOAD_USER
    }
}

export const setUser = (payload: ProfileType) => {
    return {
        type: constants.SET_USER,
        payload
    }
}