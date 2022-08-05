import validator from 'express-validator'

const { body } = validator

const validateProduct = [
    body('category', 'Отсутствует категория').notEmpty(),
    body('category', 'Отсутствует категория').notEmpty(),
    body('name', 'Отсутствует описание').notEmpty(),
    body('price', 'Отсутствует цена').notEmpty(),
    body('description', 'Отсутствует описание').isLength({ min: 3 }),


]

export default validateProduct