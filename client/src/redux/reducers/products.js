import { createSlice } from "@reduxjs/toolkit";



const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        categoriesProducts: [],
        currentCategory: {},
        currentProduct: {},
        isMessage: false,
        messageInfo: { status: "", msg: "", errors: [] },


    },
    reducers: {
        getCategories(state, action) {
            state.categoriesProducts = action.payload
        },
        getCat(state, action) {
            state.currentCategory = action.payload
        },
        addCat(state, action) {
            state.currentCategory.push(action.payload)
        },
        addProd(state, action) {
            state.products.push(action.payload)

        },
        getProd(state, action) {
            state.products = action.payload
        },
        deleteProduct(state, action) {
            state.products = state.products.filter(el => el._id !== action.payload)
        },
        deleteManyProducts(state, action) {
            state.products = state.products.filter(el => !action.payload.includes(el._id))
        },
        deleteCategory(state, action) {
            state.categoriesProducts = state.categoriesProducts.filter(el => el._id !== action.payload)
        },
        setMessage(state, action) {
            state.messageInfo = { status: action.payload.status, msg: action.payload.msg, errors: action.payload.errors }
            state.isMessage = true
        },
        getOneProd(state, action) {
            state.currentProduct = action.payload
        },
        closeMessage(state) {
            state.isMessage = false
            state.messageInfo = { status: '', msg: '', errors: [] }
        }


    }
})

export default productSlice.reducer
export const { getCategories, addProd, getOneProd, deleteProduct, deleteManyProducts, getProd, getCat, closeMessage, deleteCategory, setMessage } = productSlice.actions