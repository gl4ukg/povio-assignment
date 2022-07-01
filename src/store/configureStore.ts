import { applyMiddleware, CombinedState, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './combinedReducers';
import rootSaga from './rootSaga';

export const configureStore = (initialStore: {}) => {
    const sagaMiddleware = createSagaMiddleware();
    
    const middlewares = [sagaMiddleware]
    const enhancers = [applyMiddleware(...middlewares)]

    const store = createStore(
        rootReducer as CombinedState<any>,
        { ...initialStore },
        compose(...enhancers)
    );

    sagaMiddleware.run(rootSaga)

    return store
}