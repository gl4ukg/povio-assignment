import { AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { call, put, takeLatest } from "redux-saga/effects";
import { 
    getUserProfile as getUserProfileService, 
    login as loginService, 
    register as registerService, 
    showUserInfo as showUserInfoService
} from "../../services/user.service";
import { IAction } from "../../types/action.types";
import { AuthResponse, IUserInfoResponse } from "../../types/user.types";
import { setSuccessLoginModal, setSuccessSignUpModal } from "../app/action";
import { setAboutMeInfo, setLoading, setLogin, setUserInfo } from "./actions";
import * as constants from "./constants";

function* loadLogin(action: IAction){
    yield put(setLoading(true))
    try {
        const response: AxiosResponse<AuthResponse> = yield call(loginService, action.payload)
        if(response.data.auth_token !== null) {
            localStorage.setItem('bearerToken', JSON.stringify(response.data.auth_token))
            yield put(setLogin(true))
            yield put(setSuccessLoginModal(true))
        } else {
            toast.error(response.data.error)
            yield put(setLogin(false))
            localStorage.removeItem('bearerToken');
        }
        yield put(setLoading(false))
    } catch {
        yield put(setLoading(false))
        yield put(setLogin(false))
        localStorage.removeItem('bearerToken');
        toast.error("Invalid email/password");
    }
}

function* loadSignUp(action: IAction){
    yield put(setLoading(true))
    try {
        const response: AxiosResponse<AuthResponse> = yield call(registerService, action.payload)
        if(response.data.auth_token !== null) {
            yield put(setSuccessSignUpModal(true))
        } else {
            toast.error(response.data.error)
        }
        yield put(setLoading(false))
    } catch {
        toast.error('Something went wrong!')
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
        toast.error('Something went wrong!')
        yield put(setLoading(false))
    }
}

function* loadUserInfo(action: IAction) {
    yield put(setLoading(true))
    try {
        const response: AxiosResponse<IUserInfoResponse> = yield call(showUserInfoService, action.payload)
        if(response.data.user) {
            yield put(setUserInfo(response.data.user))
        } else {
            toast.error(response.data?.error)
        }
        yield put(setLoading(false))
    } catch {
        toast.error('Something went wrong!')
        yield put(setLoading(false))
    }
}

export default function* userSage() {
    yield takeLatest(constants.LOAD_LOGIN, loadLogin);
    yield takeLatest(constants.LOAD_SIGNUP, loadSignUp);
    yield takeLatest(constants.LOAD_ABOUT_ME_INFO, loadAboutMeInfo);
    yield takeLatest(constants.LOAD_USER_INFO, loadUserInfo);
}