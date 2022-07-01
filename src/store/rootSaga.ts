import {all, fork} from 'redux-saga/effects';
import appSaga from './app/saga';
import flowersSaga from './flowers/saga';
import userSage from './user/saga';



export default function* rootSaga(){
    yield all([
        fork(appSaga),
        fork(userSage),
        fork(flowersSaga),
    ])
}