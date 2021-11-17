var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
const User= require('../models/user');

const register=(req,res,next)=>{
    bcrypt.hash(req.body.password,10,function(err,hashedPass){
        if(err){
            res.json({
                error:err
            })
        }
        let user=new User({
            name:req.body.name,
            email:req.body.email,
            password:hashedPass,
            phone:req.body.phone
        })
        if(req.file){
            user.avatar=req.file.path
        }
        user.save()
        .then(user=>{
            res.json({
                message:"User added successfully"
            })
        })
        .catch(error=>{
            res.json({
                message:'An error occured'
            })
        })
    })
   
}
const login=(req,res,next)=>{
    var email=req.body.email
    var password=req.body.password
    User.findOne({$or:[{email:email}]})
    .then(user=>{
        if(user){
            bcrypt.compare(password,user.password,function(err,result){
                if(err){
                    res.json({
                        error:err
                    })
                }
                if(result){
                    let token=jwt.sign({email:user.email},'verySecreteValue',{expiresIn:'1hr'})
                    res.json({
                        message:'loginsuccess',
                        token
                    })
                }
                else{
                    res.json({
                        message:'Password does not matched!',
                    })
                }
            })
        }
        else{
            res.json({
                message:'no user found'
            })
        }
    })
}
module.exports={
    register,login
}