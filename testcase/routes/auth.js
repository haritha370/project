const express=require('express')
const router=express.Router()
const auth=require('../controllers/auth')
const upload=require('../middleware/upload')
router.post('/register',upload.single('avatar'),auth.register)
router.post('/login',auth.login)
module.exports=router