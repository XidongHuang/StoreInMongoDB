var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create MDM schema
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

// Set model for JSON, and the schema name will be changed by JSON's timestamp
function getModel(collectionName){

    var mdmoel = mongoose.model('default', MDMSchema, collectionName);
    
    // Return model
    return mdmoel;

}


// Epxort the method to let API define collectionName
module.exports = getModel;