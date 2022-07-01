import { IAction } from "../../types/action.types"
import produce from "immer"
import * as constants from "./constants"

export interface IUserReducer {
    isLoading: boolean,
    isLogin: boolean,
}

const initialState = {
    isLoading: false,
    isLogin: false,
} as IUserReducer

export const userReducer = (state = initialState, action: IAction) => 
    produce(state, draft => {
        switch(action.type) {
            case constants.SET_LOADING:
                draft.isLoading = action.payload
                break;
            case constants.IS_LOGIN:
                draft.isLogin = action.payload
                break;
        }
    })