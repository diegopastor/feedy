const mongoose = require('mongoose');
// OLD - > const Schema = mongoose.Schema; ES16 BELOW
const { Schema } = mongoose; //Called Destructuring

const userSchema = new Schema({
	googleId: String
});

mongoose.model('users',userSchema);