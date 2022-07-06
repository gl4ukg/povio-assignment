import { IAction } from "../../types/action.types";
import * as constants from "./constants"
import produce from "immer"
import { ISightingsResponse } from "../../types/sigting.type";


export interface ISightingReducer {
    isLoading: boolean,
    userSighting: ISightingsResponse,
    sightings: ISightingsResponse
}

const initialState = {
    isLoading: false,
    userSighting: {},
    sightings: {}
} as ISightingReducer;

export const sightingReducer = (state = initialState, action: IAction) => 
    produce(state, draft => {
        switch(action.type) {
            case constants.SET_LOADING:
                draft.isLoading = action.payload
                break;
            case constants.SET_USER_SIGHTINGS:
                draft.userSighting = action.payload
                break;
            case constants.SET_ALL_SIGHTINGS:
                draft.sightings = action.payload
        }
    })


