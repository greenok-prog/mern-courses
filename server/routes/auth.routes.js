import express from "express";

const router = express.Router()

router.get('/', (req, res) => {
    return res.json({ "auth": 'da' })
})

export default router