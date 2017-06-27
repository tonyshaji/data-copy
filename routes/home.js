var express = require('express');
var router = express.Router();
var fs = require('fs-extra');
var jwt = require('jwt-simple');
//var config = require('../config/main');
var passport = require('passport');
var gulp = require('gulp');
var git = require('gulp-git');
var http = require('http');
var jenkinsapi = require('jenkins-api');
var jenkins = require('jenkins')({ baseUrl: 'http://tony:qwerty@ec2-52-11-209-11.us-west-2.compute.amazonaws.com:8080', crumbIssuer:false });
//global.XMLHttpRequest = require("xmlhttprequest");

var i=0,nex,done=null;
// Set up middleware
//var requireAuth = passport.authenticate('jwt', { session: false });
function readWriteAsync(item) {
i=0
   // fs.readFile('/data/myapp', 'utf-8', function(err, data){
   //  		if (err) throw err;

   //  		var newValue = data.replace(/com.example.najeeb.myapp/gm, /com.easy.tony.myapp/);

   //  		fs.writeFile(target, newValue, 'utf-8', function (err) {
   //    			if (err) throw err;
   //    			console.log('fileAsync complete');
   //    			return;
   //  		});
   //  	});
 //    	fs.copy('/data/ic_launcher.png', "/data/com/ic_launcher.png"+item.appName, err => {
 //  		if (err) 
 //  			return console.error(err);
  		
 //  		console.log('file renamed!');
 //  		 	var string = item.bundleId.replace(/\./gim,/\//);

 //  		 	var filename = "/MainActivity.java";
  		 	
	// });		
  //**copy all folder**/
	fs.copy('/data/myApp', "/data/"+item.appName, err => {
  		if (err) 
  			return console.error(err);
  		/**rename file or folder**/
  // 		fs.rename("/data/"+item.appName+"/MyApp.iml", "/data/"+item.appName+"/"+item.appName+".iml", function(err) {
  //   		if ( err ) 
  //   			console.log('ERROR: ' + err);
		// });
  		//console.log('file renamed!');
  		 	var string = item.bundleId.replace(/\./gim,/\//);
  		 	return filechange(item,string);
  		 	//callback(false,item.appName);
  		 	//var filename = "/MainActivity.java";
  		
  		console.log("GIT");
	});

	/*require('simple-git')('/data/"+item.appName')
         .init()
         .add('/data/'+item.appName+'/*')
         .commit("first commit!")
         .addRemote('origin', 'https://github.com/tonyshaji/easy-app.git')
         .push('origin', 'master');
*/
  	/**replace a string in a file**/
  // fs.readFile('doc.xml', 'utf-8', function(err, data){
  //   if (err) throw err;

  //   var newValue = data.replace(/\./gim, 'myString');

  //   fs.writeFile('doc.xml', newValue, 'utf-8', function (err) {
  //     if (err) throw err;
  //     console.log('filelistAsync complete');
  //   });
  //   });	
 //  	var string = item.bundleId.replace(/\./gim,/\//);
 //  	//var string= item.bundleId.split(".");
 //  	//var target="/data/"+item.appName+"/app/src/main/java/";
 //  	//for (var i = 0; i >= string.length - 1; i++) {
 //  		fs.mkdirs("/data/"+item.appName+"/app/src/main/java/"+string, function(err){
 //        if(err){
 //            console.log(err);
 //            // echo the result back
 //            response.send("ERROR! Can't make the directory! \n");
 //        }
 //        fs.copy('/data/MainActivity.java',"/data/"+item.appName+"/app/src/main/java/"+string+"/MainActivity.java", err => {
 //  		if (err) 
 //  			return console.error(err);
 //  		/**rename file or folder**/
 //  // 		fs.rename("/data/"+item.appName+"/MyApp.iml", "/data/"+item.appName+"/"+item.appName+".iml", function(err) {
 //  //   		if ( err ) 
 //  //   			console.log('ERROR: ' + err);
	// 	// });
 //  		console.log('success!');
 //  		//checkFile("/"+item.appName);
	// });
 //        //target=target+string[i];
 //    });
  		
  	//}

}
function filechange(item,string){
	var result;
	checkFile("/data/"+item.appName+"/app/src/",item.appName,item.bundleId);
	checkFile("/data/"+item.appName+"/app/build.gradle",item.appName,item.bundleId);
	result = copyFile("/data/"+item.appName+"/app/src/main/java/"+string,item.appName,item.bundleId,"/MainActivity.java",'/data/MainActivity.java');
  	result = copyFile("/data/"+item.appName+"/app/src/androidTest/java/"+string,item.appName,item.bundleId,"/ExampleInstrumentedTest.java",'/data/ExampleInstrumentedTest.java');
  	result = copyFile("/data/"+item.appName+"/app/src/test/java/"+string,item.appName,item.bundleId,"/ExampleUnitTest.java",'/data/ExampleUnitTest.java');
  	
  	//while(result === undefined){}
  	
  	console.log("git");
	return result;
}
function checkFile(target,appName,bundleId){

  fs.stat(target, function (err, stats){
  	if (err) {
  	  // Directory doesn't exist or something.
  	  console.log('Folder doesn\'t exist, so I made the folder ' + seriesid);
  	  return ;
  	}
  	if (!stats.isDirectory()) {
  	  // This isn't a directory!
  	  //console.log('temp is not a directory!');
  	  if (!target.endsWith(".png"))
    	{
  	   fs.readFile(target, 'utf-8', function(err, data){
    		if (err) throw err;
    		console.log(target);
    		
    		var newValue = data.replace(/com\.example\.najeeb/gm,bundleId).replace(/myapp/gm,appName);
    		//newValue = data.replace(/myapp/gm,appName);
    		fs.writeFile(target, newValue, 'utf-8', function (err) {
      			if (err) throw err;
      			//console.log('fileAsync complete');
      			return;
    		});
    		
    	});
  	   }


  	  //callback(new Error('temp is not a directory!'));
  	  
  	} 
  	else {
  	  fs.readdir(target, (err, files) => {
  				files.forEach(file => {
  	  		//console.log(target+"/"+file);
  	  		checkFile(target+"/"+file,appName,bundleId);
  	  		//check directory
  			});
		});
  	  return;
  	  //callback();
  	}
  });
	
}
function copyFile(filepath,appName,bundleId,filename,reqFile){
	fs.mkdirs(filepath, function(err){
       	if(err){
       	    console.log(err);
       	    // echo the result back
       	    response.send("ERROR! Can't make the directory! \n");
       	}
       	fs.copy(reqFile,filepath+"/"+appName+filename, err => {
  			if (err) 
  				return console.error(err);
  			
  			console.log('main file added!');
  			var target = filepath+"/"+appName+filename;
			fs.readFile(target, 'utf-8', function(err, data){
    			if (err) throw err;
	
    			var newValue = data.replace(/com\.example\.najeeb/gm, bundleId).replace(/myapp/gm,appName);;
    			//newValue = data
    			fs.writeFile(target, newValue, 'utf-8', function (err) {
      				if (err) throw err;
      				console.log('fileAsync complete');
      				callback(false,appName);
      				return ;
    			});
    		});
  		
		});
    });
}

var callback = function (err, data) {
  	if (err) return console.error(err);
  	i++;
  	console.log(i);
  	if(i>=3){
  	require('simple-git')('/data/'+data+'/')
         .init()
         .add('/data/'+data+'/')
         .commit("girst commit!")
         .addRemote('origin', 'https://github.com/tonyshaji/new-app.git')
         .push('origin', "master");

         //String username = "admin";
        //String password = "qwerty";"",
 //    http.get("http://ec2-52-11-209-11.us-west-2.compute.amazonaws.com:8080/job/app/build?token=app", function(res){
	// 	res.setEncoding('utf8');
	// 	res.on('data', function(chunk) {
	// 		console.log(chunk);
	// 	});
	// });
	//var next,done;
	jenkins.job.get('app', function(err, data) {
  		if (err) throw err;
  		
  		console.log( "This Are",nex,done);
  		console.log('build', "first");
	});

	jenkins.job.build('app', function(err, data) {
  		if (err) throw err;

  		console.log('queue item number', data);
	});
	//do{
		jenkins.job.get('app', function(err, data) {
  			if (err) throw err;
  			nex=data.nextBuildNumber;
  			done=data.lastStableBuild.number;
  			console.log( "This Are",nex,done);
  			console.log('build', "SECOND");
		});
		
		// if (next==done){
		// 	break;
		// }
	//}
	//while(true);
	console.log(done);
	return done;

	//console.log( "This Are",next,done);

	//var jenkins = jenkinsapi.init("http://tony:qwerty@ec2-52-11-209-11.us-west-2.compute.amazonaws.com:8080");
	// jenkins.enable_job('/job/app/build?token=myapp', function(err, data) {
 //  		if (err){
 //  		 	return console.log(err);
 //  		}
 //  		console.log(data)
	// });
	// jenkins.build('/job/app/build?token=myapp', function(err, data) {
 //  		if (err){ 
 //  			return console.log(err); 
 //  		}
 //  		console.log("data");
 //  		console.log(JSON.stringify(data));
	// });
         //.addRemote('origin', 'https://tony_shaji@bitbucket.org/tony_shaji/easy-app.git')
         //.push('-u','origin', 'master');
 //   gulp.task('add', function(){
 //  return gulp.src('/data/'+data+'/*')
 //    .pipe(git.add());
 //    console.log("add");
	// });
 //   gulp.task('commit', function(){
 //  return gulp.src('/data/'+data+'/*')
 //    .pipe(git.commit('initial commit'));
 //    console.log("commit");
	// });
 //   gulp.task('push', function(){
 //  	git.push('origin', 'master', function (err) {
 //    	if (err) throw err;
 //  	});
 //  	console.log("pushed");
	// });
 //    console.log("GIT got");
  }
}

router.post('/', function(req, res, next){
	
	var result = readWriteAsync(req.body);
	console.log(req.body.color);
	 // while(done==null){
		
	 // }
	res.status(201).json({status:'success',data:nex});
	
	
});

module.exports = router;
