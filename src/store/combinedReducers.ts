import { combineReducers } from "redux";
import { appReducer, IAppReducer } from "./app/reducer";
import { flowersReducer, IFlowersReducer } from "./flowers/reducer";

export interface CombinedReducersState {
    app: IAppReducer,
    flowers: IFlowersReducer,
}

const combinedReducers = combineReducers({
    app: appReducer,
    flowers: flowersReducer
})

const rootReducer = (state: CombinedReducersState, action: any) => {
    return combinedReducers(state, action)
}

export default rootReducer;