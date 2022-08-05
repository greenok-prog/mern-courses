import Category from "../models/Category.model.js"
import Product from "../models/Product.model.js"
import validator from 'express-validator'

const { validationResult } = validator

//categories
export const addCategoryItem = async (req, res) => {
    try {
        const { name, inMainPage, chars } = req.body

        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array(),
            });
        }
        const categoriesInMain = await Category.find({ inMainPage: true })
        if (categoriesInMain.length === 5) {
            return res.status(400).json({
                success: false,

                message: "Количество категорий на главной странице не должно превышать 3"
            });
        }
        const category = new Category({
            name, chars, inMainPage: inMainPage, products: []
        })
        await category.save()
        return res.json({
            'category': category
        })
    } catch (e) {
        return res.status(400).json({
            success: false,
            message: "Не удалось сохранить категорию"

        });
    }
}
export const getCategory = async (req, res) => {
    try {
        const { id } = req.body
        const category = await Category.findOne({
            _id: id
        }).populate({ path: 'products' })

        return res.json(category)
    } catch (e) {

        return res.json({ message: "Не удалось загрузить категорию" })
    }
}
export const getCategories = async (req, res) => {
    try {
        const categories = await Category.find({}).populate({ path: 'products' })
        return res.json(categories)
    } catch (e) {
        return res.json({ "message": "Не удалось загрузить категории" })
    }
}
export const changeCategory = async (req, res) => {
    try {
        const { catId, name, chars, inMainPage } = req.body
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array(),
            });
        }
        await Category.findByIdAndUpdate(catId, {
            name, chars, inMainPage
        })
        const category = await Category.findById(catId)
        return res.json(category)
    } catch (e) {
        return res.status(400).json({
            success: false,
            message: "Не удалось сохранить категорию"

        });
    }
}
export const deleteCategory = async (req, res) => {
    const { categoryId } = req.body
    await Category.findByIdAndDelete(categoryId)
    return res.status(200).json({ message: "Категория удалена" })
}

//products
export const getProducts = async (req, res) => {
    const products = await Product.find({}).populate({ path: 'category', select: ['name'] })
    return res.json(products)
}
export const getProduct = async (req, res) => {
    try {
        const { id } = req.body
        console.log();
        const product = await Product.findOne({
            _id: id
        }).populate({ path: "category", select: '_id name' })
        return res.json({ _id: product._id, name: product.name, description: product.description, price: product.price, discount: product.discount, image: product.image, count: product.count, category: product.category, chars: product.chars })
    } catch (e) {
        console.log(e);
        return res.json({ "message": "Не удалось загрузить продукт" })
    }
}
export const addOneProduct = async (req, res) => {

    try {
        const { name, category, price, count, discount, description, chars } = req.body
        const image = req.file

        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array(),
            });
        }
        if (!image) {
            return res.status(400).json({
                success: false, message: "Не добавлено фото карточки"
            })
        }


        let checkProduct = await Product.findOne({ name: name })
        if (checkProduct) {
            checkProduct = await Product.findOneAndUpdate({ name: name }, { $inc: { count: 1 } })
            return res.json({ "message": "Продукт уже существует. Добавлено количество" })
        }
        const product = new Product({
            name, price, discount, category: category, description, count: count > 1 ? count : 1, image: image.filename, chars: JSON.parse(chars)
        })

        await Category.findByIdAndUpdate(category, { $push: { products: product._id } })
        await product.save()
        return res.status(200).json({
            product: product,
            success: true,
            message: "Товар добавлен"
        })
    } catch (e) {

        return res.status(400).json({
            success: false, message: "Не удалось добавить товар"
        })
    }
}
export const changeProduct = async (req, res) => {
    try {

        const { productId, name, category, description, price, discount, chars, count } = req.body
        const file = req.file
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array(),
            });
        }
        await Product.findByIdAndUpdate(productId, {
            name, category, chars: JSON.parse(chars), price, count, discount, description
        })
        if (file !== undefined) {
            await Product.findByIdAndUpdate(productId, {
                image: file.filename
            })
        }
        const product = await Product.findById(productId)
        return res.json({ product: product, message: "Продукт изменен" })
    } catch (e) {
        console.log(e);
        return res.status(400).json({
            success: false, message: "Не удалось изменить товар"
        })
    }
}

export const deleteProduct = async (req, res) => {
    const { productId } = req.body
    try {
        if (Array.isArray(productId)) {
            await Product.deleteMany({ _id: { $in: productId } })
            return res.status(200).json({ message: "Продукты удалены" })
        } else {
            await Product.findByIdAndDelete(productId)
            return res.status(200).json({ message: "Продукт удален" })
        }
    } catch (error) {
        return res.status(401).json({ message: "При удалении произошла ошибка" })
    }


}