import { combineReducers, createStore, applyMiddleware } from "redux";
import priceReducer from './reducers/priceReducer';
import quantityReducer from './reducers/quantityReducer';

export default (preloadState, options) => {

    return createStore(
        combineReducers({
            price:priceReducer,
            quantity:quantityReducer,
        }),
        preloadState
    )
}
