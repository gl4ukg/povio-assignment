import produce from "immer";
import { IAction } from "../../types/action.types";
import * as constants from "./constants";


export interface IAppReducer {
    isLoading: boolean,
    isLoginModal: boolean,
    isSignUpModal: boolean,
}


const initialState = {
    isLoading: false,
    isLoginModal: false,
    isSignUpModal: false,
} as IAppReducer

export const appReducer = (state = initialState, action: IAction) => 
    produce(state, (draft: any) => {
        switch(action.type) {
            case constants.LOAD_LOADING:
                draft.isLoading = action.payload;
                break;
            case constants.SET_LOGIN_MODAL:
                draft.isLoginModal = action.payload;
                break;
            case constants.SET_SIGN_UP_MODAL:
                draft.isSignUpModal = action.payload;
                break;
        }
    })
