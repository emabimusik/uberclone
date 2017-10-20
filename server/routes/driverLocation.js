var express = require("express");
var router =express.Router();
var mongodb = require("mongojs");
var db = mongodb("mongodb://emabi16:Tinofara_1@ds163034.mlab.com:63034/uberclone",["driverLocation"]);
// update socket id
router.put("/driverLocationSocket/:id",function(req,res,next){
var io = req.app.io;
 if(!req.body){
     res.status(400);
     res.json({
         "error":"Bad data"
     })
 }else{
     db.driverLocation.update({_id:mongodb.ObjectId(req.params.id)},
     {
         $set:{socketId:req.body.socketId}},function(err,updateDetails){
         if(err){
             res.send(err);
         }else{
             res.send(updateDetails);
         }
        
     });
 }

});

// get the nearest driver

//get nearby driver
//get nearby driver
router.get("/driverLocation", function(req, res, next){
	db.driverLocation.ensureIndex({"coordinate":"2dsphere"});
	db.driverLocation.find({
			"coordinate":{
				
				"$near":{
					"$geometry":{
						"type":"Point",
						"coordinates": [parseFloat(req.query.longitude), parseFloat(req.query.latitude)]
					},
					"$maxDistance":90000
				}
				
				/*
				"$near":{
					"$geometry":{
						"type":"Point",
                        	"coordinates":[55.75594,12.88553]
					},
					"$maxDistance":90000
				}
				*/
				
			}
		},function(err, location){
			if(err){
				res.send(err);

			}else{
				res.send(location);
		}
	});

});

module.exports = router;