const mongoose=require('mongoose')
const registrationSchema = new mongoose.Schema({
    name: { type: String },
    email: {type: String, unique: true, required: true},
    avatar:{type: String},
    password: {type: String},
    phone:{type:Number}
})

module.exports = mongoose.model('registration', registrationSchema)