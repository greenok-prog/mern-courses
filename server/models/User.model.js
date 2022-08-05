import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    name: { type: String, require: true },
    email: {
        type: String, require: true, trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
    },
    phone: { type: String, require: true },
    password: { type: String, require: true },
    isActive: { type: Boolean, default: false },
    isAdmin: { type: Boolean, default: false },
    purchasedProducts: [{ type: mongoose.Types.ObjectId, ref: 'Product' }],
    lastLogin: { type: Date, default: Date.now },
    adress: { type: String }




})
const User = mongoose.model("User", UserSchema)
export default User