import { IAction } from "../../types/action.types";
import { IFlowers } from "../../types/flowers.types";
import * as constants from "./constants"
import produce from "immer"
import { ICard } from "../../types/card.types";
import { IPagination } from "../../types/app.types";


export interface IFlowersReducer {
    isLoading: boolean,
    flowers: ICard[],
    meta: IPagination,
}

const initialState = {
    isLoading: false,
    flowers: {}
} as IFlowersReducer;

export const flowersReducer = (state = initialState, action: IAction) => 
    produce(state, draft => {
        switch(action.type) {
            case constants.SET_LOADING:
                draft.isLoading = action.payload
                break;
            case constants.SET_FLOWERS:
                draft.flowers = action.payload.flowers
                draft.meta = action.payload.meta
                break;
        }
    })


