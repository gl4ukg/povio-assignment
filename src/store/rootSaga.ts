import {all, fork} from 'redux-saga/effects';
import appSaga from './app/saga';
import authSage from './auth/saga';
import flowersSaga from './flowers/saga';



export default function* rootSaga(){
    yield all([
        fork(appSaga),
        fork(authSage),
        fork(flowersSaga),
    ])
}