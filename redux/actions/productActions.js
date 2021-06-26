export const SET_PRICE = "SET_PRICE";
export const SET_QUANTITY = "SET_QUANTITY";

//Action Creator
export const setPrice = (price) => ({
    type: SET_PRICE,
    price: price
});

export const setQuantity = (quantity) => ({
    type: SET_QUANTITY,
    quantity: quantity

});