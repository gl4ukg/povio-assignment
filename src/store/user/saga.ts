import { AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { call, put, takeLatest } from "redux-saga/effects";
import { 
    getUserProfile as getUserProfileService, 
    login as loginService, 
    register as registerService 
} from "../../services/user.service";
import { IAction } from "../../types/action.types";
import { AuthResponse, IUserInfoResponse } from "../../types/user.types";
import { setAboutMeInfo, setLoading, setLogin } from "./actions";
import * as constants from "./constants";

function* loadLogin(action: IAction){
    yield put(setLoading(true))
    try {
        const response: AxiosResponse<AuthResponse> = yield call(loginService, action.payload)
        if(response.data.auth_token !== null) {
            localStorage.setItem('bearerToken', JSON.stringify(response.data.auth_token))
            toast.info("Congratulations! You have successfully logged into FlowrSpot!")
            yield put(setLogin(true))
        } else {
            toast.error(response.data.error)
            yield put(setLogin(false))
            localStorage.removeItem('bearerToken');
        }
        yield put(setLoading(false))
    } catch {
        yield put(setLoading(false))
        yield put(setLogin(false))
        toast.error("Invalid email/password");
        localStorage.removeItem('bearerToken');
    }
}

function* loadSignUp(action: IAction){
    yield put(setLoading(true))
    try {
        const response: AxiosResponse<AuthResponse> = yield call(registerService, action.payload)
        if(response.data.auth_token !== null) {
            toast.info("Congratulations! You have successfully signed up for FlowrSpot!")
        } else {
            toast.error(response.data.error)
        }
        yield put(setLoading(false))
    } catch {
        yield put(setLoading(false))
    }
}


function* loadAboutMeInfo(){
    yield put(setLoading(true))
    try {
        const response: AxiosResponse<IUserInfoResponse> = yield call(getUserProfileService)
        if(response.data.user) {
            yield put(setAboutMeInfo(response.data))
        } else {
            toast.error(response.data?.error)
        }
        yield put(setLoading(false))
    } catch {
        yield put(setLoading(false))
    }
}

export default function* userSage() {
    yield takeLatest(constants.LOAD_LOGIN, loadLogin);
    yield takeLatest(constants.LOAD_SIGNUP, loadSignUp);
    yield takeLatest(constants.LOAD_ABOUT_ME_INFO, loadAboutMeInfo);
}