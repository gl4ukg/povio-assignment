import * as constants from "./constants"

export const loadLoading = (payload: boolean) => {
    return {
        type: constants.LOAD_LOADING,
        payload
    }
}

export const setLoginModal = (payload: boolean) => {
    return {
        type: constants.SET_LOGIN_MODAL,
        payload
    }
}

export const setSignupModal = (payload: boolean) => {
    return {
        type: constants.SET_SIGN_UP_MODAL,
        payload
    }
}

export const setProfileModal = (payload: boolean) => {
    return {
        type: constants.SET_PROFILE_MODAL,
        payload
    }
}