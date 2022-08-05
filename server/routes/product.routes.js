import express from "express";
import { addCategoryItem, addOneProduct, changeCategory, changeProduct, deleteCategory, deleteProduct, getCategories, getCategory, getProduct, getProducts } from "../controllers/product.controllers.js";
import multer from 'multer'
import validateProduct from "../validators/productValidator.js";
import validateCategory from "../validators/categoryValidator.js";

const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, 'static/products/')
        },
        filename: (req, file, cb) => {
            cb(null, Date.now() + '.' + file.originalname.split('.')[1])
        }
    })
})

const router = express.Router()
//product
router.post('/:id', getProduct)
router.get('/', getProducts)
router.post('/product/add', upload.single("image"), validateProduct, addOneProduct)
router.put('/changeProduct', upload.single("image"), validateProduct, changeProduct)
router.delete('/deleteProduct', deleteProduct)

//categories
router.post('/category/get', getCategory)
router.get('/categories', getCategories)
router.put('/changeCategory', validateCategory, changeCategory)
router.post('/category/addCategory', validateCategory, addCategoryItem)
router.delete('/deleteCategory', deleteCategory)


export default router