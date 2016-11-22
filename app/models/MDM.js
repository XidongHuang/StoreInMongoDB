var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var MDMSchema = new Schema({
	coreid: String,
	DeviceID: String,
	Volume: Number,
	Flow: Number,
	Temperature: Number,
	Pin: Number,
	Pout: Number,
	ValveStatus: Number,
	LBStatus: Number,
	AlertCount: Number,
	TimeStamp: Date

});

module.exports = MDMSchema;