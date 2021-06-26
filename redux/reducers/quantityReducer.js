import {SET_QUANTITY} from '../actions/productActions';
const quantityReducer = (state = {value: 0}, action) => {
    let value = state.value;
    if (action.type === SET_QUANTITY) {
        if(action.quantity >= 0) {
            value = action.quantity;
        }
        return {...state, value: value };
    } else {
        return {...state};
    }
};

export default quantityReducer;