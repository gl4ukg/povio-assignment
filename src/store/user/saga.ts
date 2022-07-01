import { AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { call, put, takeLatest } from "redux-saga/effects";
import { login as loginService, register as registerService } from "../../services/user.service";
import { IAction } from "../../types/action.types";
import { AuthResponse } from "../../types/user.types";
import { setLoading, setLogin } from "./actions";
import * as constants from "./constants";

function* loadLogin(action: IAction){
    yield put(setLoading(true))
    try {
        const response: AxiosResponse<AuthResponse> = yield call(loginService, action.payload)
        if(response.data.auth_token !== null) {
            console.log(response,"response")
            localStorage.setItem('bearerToken', JSON.stringify(response.data.auth_token))
            toast.info("Congratulations! You have successfully logged into FlowrSpot!")
            yield put(setLogin(true))
        } else {
            toast.error(response.data.error)
            yield put(setLogin(false))
        }
        yield put(setLoading(false))
    } catch {
        yield put(setLoading(false))
        yield put(setLogin(false))
    }
}

function* loadSignUp(action: IAction){
    yield put(setLoading(true))
    try {
        const response: AxiosResponse<AuthResponse> = yield call(registerService, action.payload)
        if(response.data.auth_token !== null) {
            toast.info("Congratulations! You have successfully signed up for FlowrSpot!")
        } else {
            console.log(response.data.error)
            toast.error(response.data.error)
        }
        yield put(setLoading(false))
    } catch {
        yield put(setLoading(false))
    }
}

export default function* userSage() {
    yield takeLatest(constants.LOAD_LOGIN, loadLogin);
    yield takeLatest(constants.LOAD_SIGNUP, loadSignUp);
}