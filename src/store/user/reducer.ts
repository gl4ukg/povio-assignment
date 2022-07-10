import { IAction } from "../../types/action.types"
import produce from "immer"
import * as constants from "./constants"
import { ProfileType } from "../../types/user.types"

export interface IUserReducer {
    isLoading: boolean,
    isLoggedIn: boolean,
    userAboutMe: ProfileType,
    user: ProfileType,
}

const initialState = {
    isLoading: false,
    isLoggedIn: false,
    userAboutMe: {},
    user: {},

} as IUserReducer

export const userReducer = (state = initialState, action: IAction) => 
    produce(state, draft => {
        switch(action.type) {
            case constants.SET_LOADING:
                draft.isLoading = action.payload
                break;
            case constants.IS_LOGIN:
                draft.isLoggedIn = action.payload
                break;
            case constants.SET_ABOUT_ME_INFO:
                draft.userAboutMe = action.payload.user
                break;
            case constants.SET_USER_INFO:
                draft.user = action.payload
                break;
        }
    })