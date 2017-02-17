import axios from 'axios'
const bodyParser = require('body-parser');
const multer = require('multer'); 
module.exports = function (app){
	app.use(bodyParser.json()); // for parsing application/json
	app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
	// app.use(multer({})); // for parsing multipart/form-data
	app.use('/api*',async (req,res)=>{
	  	await new Promise(function(resolve) {
			axios({
			  method: req.method,
			  url: req.originalUrl,
			  baseURL:'http://106.14.57.55:8090/',
			  data: {
			    
			  },
			  transformResponse:function(data){
			  	console.log('api huode');
			  	res.send(data);
			  }
			});
		});
		console.log('api end');
	})
}