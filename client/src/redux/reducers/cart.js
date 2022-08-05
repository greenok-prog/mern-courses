import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        cartCount: 0,
        cartPrice: 0,

    },
    reducers: {
        addToCart(state, action) {
            state.cart.push(action.payload)
            state.cartCount = state.cartCount + 1
            state.cartPrice += action.payload.price
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        removeFromCart(state, action) {
            const product = state.cart.find(el => el.id === action.payload)
            state.cart = state.cart.filter(el => el.id !== action.payload)
            state.cartCount = state.cartCount - 1
            state.cartPrice -= product
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        setCart(state) {
            const localCart = localStorage.getItem("cart")
            if (localCart) {
                state.cart = JSON.parse(localCart)
                state.cartCount = JSON.parse(localCart).length
            } else {
                state.cart = []
                state.cartCount = 0
            }
        },
        setCartPrice(state) {
            const localCart = localStorage.getItem("cart")
            if (localCart) {
                state.cartPrice = JSON.parse(localCart).reduce((prev, current) => prev + current.price * current.quantity, 0)
            } else {
                state.cartPrice = state.cart.reduce((prev, current) => prev + current.price * current.quantity, 0)
            }

        },
        addQuantity(state, action) {
            const product = state.cart.find(el => el.id === action.payload)
            product.quantity += 1
            state.cartPrice += product.price
            localStorage.setItem('cart', JSON.stringify(state.cart))


        },
        removeQuantity(state, action) {
            const product = state.cart.find(el => el.id === action.payload)
            product.quantity -= 1
            state.cartPrice -= product.price
            localStorage.setItem('cart', JSON.stringify(state.cart))


        }





    }
})

export default cartSlice.reducer
export const { addToCart, removeFromCart, setCartPrice, setCart, addQuantity, removeQuantity } = cartSlice.actions