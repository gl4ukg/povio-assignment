import { IAction } from "../../types/action.types";
import { IFlowers, IFlowersFavoriteResponse, IFlowersResponse } from "../../types/flowers.types";
import * as constants from "./constants"
import produce from "immer"
import { ICard } from "../../types/card.types";
import { IPagination } from "../../types/app.types";


export interface IFlowersReducer {
    isLoading: boolean,
    flowers: IFlowersResponse,
    favoriteFlowers: IFlowersFavoriteResponse,
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
                draft.flowers = action.payload
                break;
            case constants.SET_FAVORITE_FLOWERS:
                draft.favoriteFlowers = action.payload
                break;
        }
    })


