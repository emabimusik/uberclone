var express = require('express');
var router =express.Router();
var mongodb = require('mongojs');
var db = mongodb('mongodb://emabi16:Tinofara_1@ds163034.mlab.com:63034/uberclone',['booking']);
router.get('/bookings',function(req,res,next) {
    db.bookings.find(function(err,bookings){
        if(err){
            res.send(err)
        }
        res.json(bookings);
    });
 //res.send('BOOKING ROUTER');
    
})
// post the collection
router.post('/bookings',function(req,res,next){
var booking=req.body.data;
 if(!booking.userName){
     res.status(400);
     res.json({
        'error':'Bad data'
     })
 }else{
     db.bookings.save(booking,function(err,savedBooking){
         if(err){
             res.send(err);
         }
         res.json(savedBooking);
     });
 }

});

module.exports = router;