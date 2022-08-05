import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({
    name: { type: String, require: true, minlength: 1, maxlength: 100, trim: true },
    description: { type: String, require: true },
    price: { type: Number, require: true },
    discount: { type: Number, min: 0, max: 100 },
    raitng: { type: Number, min: 0, max: 5 },
    image: { type: String },
    count: { type: Number, min: 0 },
    category: { type: mongoose.Types.ObjectId, ref: 'Category', require: true },
    chars: [{ type: Object }]

})
const Product = mongoose.model("Product", ProductSchema)
export default Product