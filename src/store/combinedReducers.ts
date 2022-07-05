import { combineReducers } from "redux";
import { appReducer, IAppReducer } from "./app/reducer";
import { IUserReducer, userReducer } from "./user/reducer";
import { flowersReducer, IFlowersReducer } from "./flowers/reducer";
import { ISightingReducer, sightingReducer } from "./sighting/reducer";

export interface CombinedReducersState {
    app: IAppReducer,
    user: IUserReducer,
    flowers: IFlowersReducer,
    sightings: ISightingReducer
}

const combinedReducers = combineReducers({
    app: appReducer,
    user: userReducer,
    flowers: flowersReducer,
    sightings: sightingReducer
})

const rootReducer = (state: CombinedReducersState, action: any) => {
    return combinedReducers(state, action)
}

export default rootReducer;