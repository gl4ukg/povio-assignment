import { IAction } from "../../types/action.types";
import { IFlower, IFlowers, IFlowersFavoriteResponse, IFlowersResponse } from "../../types/flowers.types";
import * as constants from "./constants"
import produce from "immer"
import { ICard } from "../../types/card.types";
import { IPagination } from "../../types/app.types";
import FlowerDetail from "../../containers/Flowers/FlowerDetail/FlowerDetail";


export interface IFlowersReducer {
    isLoading: boolean,
    flowers: IFlowersResponse,
    favoriteFlowers: IFlowersFavoriteResponse,
    flowerDetail: IFlower
}

const initialState = {
    isLoading: false,
    flowers: {},
    favoriteFlowers: {},
    flowerDetail: {}
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
            case constants.SET_FLOWER_DETAIL:
                draft.flowerDetail = action.payload
                break;
        }
    })


