const mongoose = require('mongoose');
// OLD - > const Schema = mongoose.Schema; ES16 BELOW
const { Schema } = mongoose; //Called Destructuring
const RecipientSchema = require('./Recipients')

const surveySchema = new Schema({
	title: String,
	body: String,
	subject: String,
	recipients: [RecipientSchema],
	yes: { type: Number, default: 0 },
	no: { type: Number, default: 0 },
	_user: { type: Schema.Types.ObjectId, ref: 'User' },
	dateSent: Date,
	lastResponded: Date
});

mongoose.model('surveys', surveySchema);