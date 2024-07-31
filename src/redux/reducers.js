
import { ADD_TO_CART, REMOVE_FROM_CART, LIST_PRODUCTS } from './actions';


const initialState = {
  products: [
    { id: 1, name: ' SmartPhone', price: 10000 ,image:"./images/product1.png"},
    { id: 2, name: 'Hp Laptop', price: 50000,image:"./images/product2.jpg" },
    { id: 3, name: 'Vivo SmartPhone', price: 40000 ,image:"./images/product3.png"},
    { id: 4, name:'Dell Laptop' ,price:60000,image:"./images/product4.avif"}
  ],
  cart: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
      };
    case LIST_PRODUCTS:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default rootReducer;