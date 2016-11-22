var express = require('express'); //call express
var app = express(); //define our app using express
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
// var generator = require('mongoose-gen');


// var MDMSchema = require('./app/models/MDM');
var getModel = require('./app/models/MDMModel');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/test');


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 9000;


var router = express.Router();


router.use(function(req, res, next){

	console.log('Something is happening.');
	next();

});


router.route('/meterData')
	.post(function(req, res){
		console.log(req.body);
		
		
		var	originalTime = new Date(req.body.TimeStamp);

		console.log(req.body.coreid);

		var year = originalTime.getFullYear();
		var month = originalTime.getMonth()+1;

		var yearNmonth = year.toString()+month.toString();

		var mdmModel = getModel('mdm'+yearNmonth);

		var mdmItem = new mdmModel(req.body);
		
		mdmItem.save(function(err){
			if(err) res.send(err);
			res.send('Item saved!');

		});

	

	});

router.get('/', function(req, res){
	res.json({message: 'Hello'});
});

app.use('/api', router);

app.listen(port);
console.log("Magic happen on port " + port);
