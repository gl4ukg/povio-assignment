import { AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { call, put, takeLatest } from "redux-saga/effects";
import { 
    getSightings as getSightingsService, 
    getUserSightings as getUserSightingsService
 } from "../../services/sighting.service";
import { IAction } from "../../types/action.types";
import { ISightingsResponse } from "../../types/sigting.type";
import { setAllSightings, setLoading, setUserSightings } from "./actions";
import * as constants from "./constants"

function* loadUserSightings(action: IAction) {
    yield put(setLoading(true))
    try {
        const response: AxiosResponse<ISightingsResponse> = yield call(getUserSightingsService, action.payload)
        if(response.data) {
            yield put(setUserSightings(response.data))
            yield put(setLoading(false))
        }
    } catch {
        toast.error("Something went wrong!")
        yield put(setLoading(false))
    }
}

function* loadAllSightings() {
    yield put(setLoading(true))
    try {
        const response: AxiosResponse<ISightingsResponse> = yield call(getSightingsService)
        if(response.data) {
            yield put(setAllSightings(response.data))
            yield put(setLoading(false))
        }
    } catch {
        toast.error("Something went wrong!")
        yield put(setLoading(false))
    }
}

export default function* sightingSaga() {
    yield takeLatest(constants.LOAD_USER_SIGHTINGS, loadUserSightings)
    yield takeLatest(constants.LOAD_ALL_SIGHTINGS, loadAllSightings)
}