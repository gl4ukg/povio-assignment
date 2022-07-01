import { LoginType, SignUpType } from "../../types/auth.types"
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

export const loadSignUp = (payload: SignUpType) => {
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
