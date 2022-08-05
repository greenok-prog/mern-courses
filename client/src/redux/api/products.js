import axios from 'axios'

import { addProd, deleteCategory, deleteManyProducts, deleteProduct, getCat, getCategories, getOneProd, getProd, setMessage } from '../reducers/products'

export const getCategoriesProducts = () => {
    return async dispatch => {
        const res = await axios.get('http://localhost:5000/api/v1/products/categories')
        dispatch(getCategories(res.data))
    }
}
export const getCategory = (id) => {
    return async dispatch => {
        const res = await axios.post('http://localhost:5000/api/v1/products/category/get', {
            id: id
        })
        dispatch(getCat(res.data))
        return res.data
    }
}
export const getProduct = (id) => {
    return async dispatch => {

        try {
            const res = await axios.post('http://localhost:5000/api/v1/products/' + id, {
                id: id
            })
            dispatch(getOneProd(res.data))
        } catch (e) {
            console.log(e);
        }
    }
}
export const addCategory = (name, inMainPage, chars) => {
    return async dispatch => {
        try {
            const res = await axios.post('http://localhost:5000/api/v1/products/category/addCategory', {
                name, inMainPage, chars
            })
            dispatch(getCat(res.data))
            dispatch(setMessage({ status: "success", msg: "Категория добавлена" }))
        } catch (e) {
            dispatch(setMessage({ status: "error", msg: e.response.data.message, errors: e.response.data.errors }))
        }
    }
}
export const changeProduct = (productId, name, description, category, price, discount, image, count, chars) => {
    return async dispatch => {
        try {

            const formData = new FormData()
            formData.append("productId", productId)
            formData.append("name", name)
            formData.append("description", description)
            formData.append("category", category)
            formData.append("price", price)
            formData.append("discount", discount)
            formData.append("image", image)
            formData.append("count", count)
            formData.append("chars", JSON.stringify(chars))

            const res = await axios.put('http://localhost:5000/api/v1/products/changeProduct', formData, {
                headers: {
                    "Content-Type": "multipart/form-data;"
                }
            })
            dispatch(addProd(res.data.product))
            dispatch(setMessage({ status: "success", msg: res.data.message }))
        } catch (e) {
            dispatch(setMessage({ status: "error", msg: e.response.data.message, errors: e.response.data.errors }))
        }
    }
}
export const addProduct = (name, description, category, price, discount, image, count, chars) => {
    return async dispatch => {
        try {
            const formData = new FormData()
            formData.append("name", name)
            formData.append("description", description)
            formData.append("category", category)
            formData.append("price", price)
            formData.append("discount", discount)
            formData.append("image", image)
            formData.append("count", count)
            formData.append("chars", JSON.stringify(chars))

            const res = await axios.post('http://localhost:5000/api/v1/products/product/add', formData, {
                headers: {
                    "Content-Type": "multipart/form-data;"
                }
            })
            dispatch(addProd(res.data.product))
            dispatch(setMessage({ status: "success", msg: res.data.message }))
        } catch (e) {
            dispatch(setMessage({ status: "error", msg: e.response.data.message, errors: e.response.data.errors }))
        }
    }
}
export const changeCategory = (catId, name, chars, inMainPage) => {
    return async dispatch => {
        try {
            const res = await axios.put('http://localhost:5000/api/v1/products/changeCategory', {
                catId, name, chars, inMainPage
            })
            dispatch(setMessage({ status: "success", msg: "Категория изменена" }))
            return res
        } catch (e) {
            dispatch(setMessage({ status: "error", msg: "Не удалось изменить категорию", errors: e.response.data.errors }))
        }


    }
}
export const getProducts = () => {
    return async dispatch => {
        const res = await axios.get('http://localhost:5000/api/v1/products/')
        dispatch(getProd(res.data))
    }
}
export const deletePr = (id) => {
    return async dispatch => {
        try {
            const res = await axios.delete('http://localhost:5000/api/v1/products/deleteProduct', { data: { productId: id } })
            dispatch(deleteProduct(id))
            dispatch(setMessage({ status: "success", msg: res.data.message }))
        } catch (e) {
            dispatch(setMessage({ status: "error", msg: "Не удалось удалить продукт", errors: e.response.data.errors }))
        }

    }
}
export const deleteManyPr = (ids) => {
    return async dispatch => {
        try {
            const res = await axios.delete('http://localhost:5000/api/v1/products/deleteProduct', { data: { productId: ids } })
            dispatch(deleteManyProducts(ids))
            dispatch(setMessage({ status: "success", msg: res.data.message }))
        } catch (e) {
            dispatch(setMessage({ status: "error", msg: e.response.data.message, errors: e.response.data.errors }))
        }

    }
}
export const deleteCat = (id) => {
    return async dispatch => {
        try {
            const res = await axios.delete('http://localhost:5000/api/v1/products/deleteCategory', { data: { categoryId: id } })
            dispatch(deleteCategory(id))
            dispatch(setMessage({ status: "success", msg: res.data.message }))
        } catch (e) {
            dispatch(setMessage({ status: "error", msg: e.response.data.message, errors: e.response.data.errors }))
        }

    }
}