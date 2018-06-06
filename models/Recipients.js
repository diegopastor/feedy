const mongoose = require('mongoose');
// OLD - > const Schema = mongoose.Schema; ES16 BELOW
const { Schema } = mongoose; //Called Destructuring

const recipientSchema = new Schema({
	email: String,
	responded: { type: Boolean, default: false }
});

module.exports = recipientSchema;