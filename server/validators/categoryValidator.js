import validator from 'express-validator'

const { body } = validator

const validateProduct = [

    body('name', 'Отсутствует название').notEmpty(),

]

export default validateProduct