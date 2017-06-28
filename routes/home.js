var express = require('express');
var router = express.Router();
var fs = require('fs-extra');
var jwt = require('jwt-simple');
//var config = require('../config/main');
var passport = require('passport');
var gulp = require('gulp');
var git = require('gulp-git');
var http = require('http');
var Client = require('node-rest-client').Client;
 
var client = new Client();
var firebase = require("firebase");
 var config = {
    apiKey: "AIzaSyAJGaNjSAn6uA0zxigXcY5tkAdcDe46Ey0",
    authDomain: "datacopy-d2204.firebaseapp.com",
    databaseURL: "https://datacopy-d2204.firebaseio.com",
    projectId: "datacopy-d2204",
    storageBucket: "datacopy-d2204.appspot.com",
    messagingSenderId: "348358635323"
}
   firebase.initializeApp(config);

// Set up middleware
//var requireAuth = passport.authenticate('jwt', { session: false });
function write(){
	var successCount=0,failedCount=0;
	var link="http://api.pharmeasy.in/v2/medicine-guide/"
	//var no =26570;
	for(i=1;i<=1000000;i++)
	{
		var url = link+i;
		client.get(url, function (data, response) {
		// parsed response body as js object 
		if (data.status==1){
			var newKey = firebase.database().ref().child('data').push().key;
			var updates = {};
			updates['/data/' + newKey] = data.data;
			console.log(data.status,data.data);
			successCount++;
			return firebase.database().ref().update(updates);
			
		}
		else{
			failedCount++;
		}
		

		});
	}
	firebase.database().ref('/' ).set({
			success : successCount,
			failed : failedCount,
			completed : i
		});
}
router.post('/', function(req, res, next){
	
	//var result = readWriteAsync(req.body);
	write();	
    
    // raw response 
    //console.log(response);

	//console.log(req.body.color);
	
	res.status(201).json({status:'success',data:next});
	
	
});

module.exports = router;
