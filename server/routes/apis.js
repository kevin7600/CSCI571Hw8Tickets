var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var request=require('request');

var db = mongojs('mongodb://kevin:kirbyex7600@ds157923.mlab.com:57923/mytasklist', ['tasks'])
const TicketAPIKey='https://app.ticketmaster.com/discovery/v2/suggest?apikey=WUZpipDRqIHiV8jTieLC9mWxEgPBz15c&keyword=';
//Get all apis
router.get('/autocomplete/:keyword',function(req, res, next){
    request.get({url: TicketAPIKey+req.params.keyword,json: true},
        function(err,response,body){
            if(err){
            console.log("error in autocomplete");
            }
        }).pipe(res);
});

// //get single api
// router.get('/apis/:id',function(req, res, next){
//     db.apis.findOne({_id: mongojs.ObjectId(req.params.id)},function(err, api){
//         if(err){
//             res.send(err);
//         }
//         res.json(api);
//     })
// });

// //save api
// router.post('/api', function(req, res, next){
//     var api = req.body;
//     if(!api.title || !(api.isDone + '')){
//         res.status(400);
//         res.json({
//             "error": "Bad Data"
//         });
//     }
//     else{
//         db.apis.save(api,function(err,api){
//             if(err){
//                 res.send(err);
//             }
//             res.json(api);
//         });
//     }
// });

// //delete api
// router.delete('/apis/:id',function(req, res, next){
//     db.apis.remove({_id: mongojs.ObjectId(req.params.id)},function(err, api){
//         if(err){
//             res.send(err);
//         }
//         res.json(api);
//     })
// });

// //update api
// router.put('/apis/:id',function(req, res, next){
//     var api = req.body;
//     var updapi = {};

//     if(api.isDone){
//         updapi.isDone = api.isDone;
//     }

//     if(api.title){
//         updapi.title = api.title;
//     }

//     if(!updapi){
//         res.status(400);
//         res.json({
//             "error":"Bad Data"
//         });
//     }
//     else{
//         db.apis.update({_id: mongojs.ObjectId(req.params.id)},updapi, {},function(err, api){
//             if(err){
//                 res.send(err);
//             }
//             res.json(api);
//         });
//     }

// });


module.exports = router;