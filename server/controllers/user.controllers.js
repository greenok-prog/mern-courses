import User from "../models/User.model.js"

export const getUsers = async (req, res) => {
    const users = await User.find({})
    return res.json(users)
}
export const changeUserAdress = async (req, res) => {
    const { adress, userId } = req.body
    await User.findByIdAndUpdate(userId, {
        adress: adress
    })
    const user = await User.findById(userId)
    return res.json(user)
}
export const changeUserInfo = async (req, res) => {

}
export const deleteUser = async (req, res) => {
    const { userId } = req.body
    await User.findByIdAndDelete(userId)
    return res.status(200).json("Пользователь удален")
}