import produce from "immer";
import { IAction } from "../../types/action.types";
import * as constants from "./constants";


export interface IAppReducer {
    isLoading: boolean,
    isLoggedInModal: boolean,
    isSignUpModal: boolean,
    isProfileModal: boolean,
    isSuccessSignUpModal: boolean,
    isSuccessLoginModal: boolean,
}


const initialState = {
    isLoading: false,
    isLoggedInModal: false,
    isSignUpModal: false,
    isProfileModal: false,
} as IAppReducer

export const appReducer = (state = initialState, action: IAction) => 
    produce(state, (draft: any) => {
        switch(action.type) {
            case constants.LOAD_LOADING:
                draft.isLoading = action.payload;
                break;
            case constants.SET_LOGIN_MODAL:
                draft.isLoggedInModal = action.payload;
                break;
            case constants.SET_SIGN_UP_MODAL:
                draft.isSignUpModal = action.payload;
                break;
            case constants.SET_PROFILE_MODAL:
                draft.isProfileModal = action.payload;
                break;
            case constants.SET_SUCCESS_LOGIN_MODAL:
                draft.isSuccessLoginModal = action.payload;
                break;
            case constants.SET_SUCCESS_SIGN_UP_MODAL:
                draft.isSuccessSignUpModal = action.payload;
                break;
        }
    })
