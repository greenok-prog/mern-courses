import { combineReducers, configureStore } from '@reduxjs/toolkit'
import cart from './reducers/cart'
import favorite from './reducers/favorite'
import products from './reducers/products'


const rootReducer = combineReducers({
    products: products,
    favorite: favorite,
    cart: cart
})
export const store = configureStore({
    reducer: rootReducer

}) 