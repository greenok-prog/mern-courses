import mongoose from "mongoose";

const CategorySchema = mongoose.Schema({
    name: { type: String, require: true, minlength: 1, maxlength: 100 },
    chars: [{ require: true, type: Object }],
    inMainPage: { type: Boolean, default: false },
    products: [{ type: mongoose.Types.ObjectId, ref: 'Product' }]

})
const Category = mongoose.model("Category", CategorySchema)
export default Category