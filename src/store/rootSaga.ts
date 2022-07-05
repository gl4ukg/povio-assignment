import {all, fork} from 'redux-saga/effects';
import appSaga from './app/saga';
import flowersSaga from './flowers/saga';
import sightingSaga from './sighting/saga';
import userSage from './user/saga';



export default function* rootSaga(){
    yield all([
        fork(appSaga),
        fork(userSage),
        fork(flowersSaga),
        fork(sightingSaga),
    ])
}