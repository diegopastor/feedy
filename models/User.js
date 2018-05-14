const mongoose = require('mongoose');
// OLD - > const Schema = mongoose.Schema; ES16 BELOW
const { Schema } = mongoose; //Called Destructuring

const userSchema = new Schema({
	googleId: String,
	credits: { type: Number, default: 0 }
});

mongoose.model('users',userSchema);