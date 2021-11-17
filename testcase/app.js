const express=require('express')
const app=express()
var jsonwebtoken = require("jsonwebtoken");
const authRouter=require('./routes/auth')
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/api',authRouter)
app.use('/uploads',express.static('uploads'))
//  MongoDB connection 
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/testss', { useNewUrlParser: true })

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
	console.log('Connected to MongoDB')
	app.listen(app.get('port'), function () {
		console.log('API Server Listening on port ' + app.get('port') + '!')
	})
})
app.listen(5006,()=>{
	console.log('server is running on 5006 port')
})
module.exports=app;