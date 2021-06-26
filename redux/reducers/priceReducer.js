import {SET_PRICE} from '../actions/productActions';

const priceReducer = (state = {value: 0}, action) => {
    let value = state.value;
    if (action.type === SET_PRICE) {
        if(action.price >= 0) {
             value = action.price;
        }
        return {...state, value: value };
    } else {
        return {...state};
    }
};

export default priceReducer;