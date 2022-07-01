import { AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { call, put, takeLatest } from "redux-saga/effects";
import { getFlowers as getFlowersService } from "../../services/flowers.service";
import { IFlowers } from "../../types/flowers.types";
import { setFlowers, setLoading } from "./actions";
import * as constants from "./constants"

function* loadFlowers() {
    yield put(setLoading(true))
    try {
        const response: AxiosResponse<IFlowers> = yield call(getFlowersService)
        yield put(setFlowers(response.data))
        yield put(setLoading(false))
    } catch {
        toast.error("Something went wrong!")
        yield put(setLoading(false))
    }
}

export default function* flowersSaga() {
    yield takeLatest(constants.LOAD_FLOWERS, loadFlowers)
}