import { AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { call, put, takeLatest } from "redux-saga/effects";
import { 
    getFavoriteFlowers as getFavoriteFlowersService,
    getFlowers as getFlowersService, 
    searchFlowers as searchFlowersService
} from "../../services/flowers.service";
import { IAction } from "../../types/action.types";
import { IFlowers, IFlowersFavoriteResponse, IFlowersResponse } from "../../types/flowers.types";
import { setFavoriteFlowers, setFlowers, setLoading } from "./actions";
import * as constants from "./constants"

function* loadFlowers() {
    yield put(setLoading(true))
    try {
        const response: AxiosResponse<IFlowers> = yield call(getFlowersService)
        console.log(response)
        yield put(setFlowers(response.data))
        yield put(setLoading(false))
    } catch {
        toast.error("Something went wrong!")
        yield put(setLoading(false))
    }
}

function* loadSearchFlower(action: IAction) {
    yield put(setLoading(true))
    try {
        const response: AxiosResponse<IFlowersResponse> = yield call(searchFlowersService, action.payload)
        yield put(setFlowers(response.data))
        yield put(setLoading(false))
    } catch {
        toast.error("Something went wrong!")
        yield put(setLoading(false))
    }
}

function* loadFavoriteFlowers() {
    yield put(setLoading(true))
    try {
        const response: AxiosResponse<IFlowersFavoriteResponse> = yield call(getFavoriteFlowersService)
        yield put(setFavoriteFlowers(response.data))
        yield put(setLoading(false))
    } catch{
        yield put(setLoading(false))
    }
}

export default function* flowersSaga() {
    yield takeLatest(constants.LOAD_FLOWERS, loadFlowers)
    yield takeLatest(constants.LOAD_SEARCH_FLOWERS, loadSearchFlower)
    yield takeLatest(constants.LOAD_FAVORITE_FLOWERS, loadFavoriteFlowers)
}