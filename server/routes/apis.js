var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var request=require('request');
var geohash = require('ngeohash');
var SpotifyWebApi = require('spotify-web-api-node');
var db = mongojs('mongodb://kevin:kirbyex7600@ds157923.mlab.com:57923/mytasklist', ['tasks'])
//Get all apis
const ticketmasterKey='WUZpipDRqIHiV8jTieLC9mWxEgPBz15c';
const googleKey='AIzaSyDNUOKu86B3k1O0HL8rO2pSSUG1FJecQqw';
var spotifyApi = new SpotifyWebApi({
    clientId: '27c8a3ba4d6d4a1c9c22e3bc8ba77ce7',
    clientSecret: '0acf787ad67e47c1a00ef6918af672d4',
  });
function SpotifyHelper(req, res){//keep requesting new token and request artist until works
    console.log("in spotify:");
    spotifyApi.searchArtists(req.query.artist)
        .then(function(data){
            //return the artist that matches the search keyword
            let arr=data.body['artists']['items'];
            for (let i=0;i<arr.length;i++){
                if (arr[i]['name'].toLowerCase()==req.query.artist.toLowerCase()){
                    res.json(arr[i]);
                    return;
                }
            }
            res.json({});//if we get here, artist isn't found
        }, function(err){
            console.log("failed.. geting another token");
            spotifyApi.clientCredentialsGrant().then(
                function(data) {
                    spotifyApi.setAccessToken(data.body['access_token']);
                    SpotifyHelper(req,res);
                }
            );
        });
}
router.get('/spotify/',function(req,res,next){//calls helper function above
    SpotifyHelper(req,res);
});


router.get('/autocomplete/:keyword',function(req, res, next){
    const TicketAPIKey='https://app.ticketmaster.com/discovery/v2/suggest?apikey='+ticketmasterKey+'&keyword=';
    request.get({url: TicketAPIKey+req.params.keyword,json: true},
        function(err,response,body){
            if(err){
            console.log("error in autocomplete");
            }
        }).pipe(res);
});

router.get('/eventdetails/',function(req,res,next){
    const TicketAPI='https://app.ticketmaster.com/discovery/v2/events/'+req.query.id+
    '?apikey='+ticketmasterKey;
    console.log(TicketAPI);
    request.get({url: TicketAPI,json:true},
        function(err,response,body){
            res.json(body);
        });
});

router.get('/searchresults/',function(req,res,next){
    if (req.query.otherLocationTextDisabled=="false"){
        const googleGeocodeAPI='https://maps.googleapis.com/maps/api/geocode/json?address='+req.query.otherLocationKeywords+'&key='+googleKey;
        request.get({url:googleGeocodeAPI,json:true},
            function(err,response,body){
                console.log(googleGeocodeAPI);
                // console.log(body);
                if (body.hasOwnProperty('results') && body['results'][0].hasOwnProperty('geometry') 
                && body['results'][0]['geometry'].hasOwnProperty('location')){
                    let lat=body['results'][0]['geometry']['location']['lat'];
                    let lon=body['results'][0]['geometry']['location']['lng'];

                    // res.json(body['results'][0]['geometry']['location']);
                    let segID;
                    switch(req.query.category){
                        case "default":
                            segID="";
                            break;
                        case "music":
                            segID="KZFzniwnSyZfZ7v7nJ";
                            break;
                        case "sports":
                            segID="KZFzniwnSyZfZ7v7nE";
                            break;
                        case "artsAndTheatre":
                            segID="KZFzniwnSyZfZ7v7na";
                            break;
                        case "film":
                            segID="KZFzniwnSyZfZ7v7nn";
                            break;
                        case "miscellaneous":
                            segID="KZFzniwnSyZfZ7v7n1";
                            break;
                    }
                    const ticketSearchURL = 'https://app.ticketmaster.com/discovery/v2/events.json?apikey='+ticketmasterKey+
                    '&keyword='+req.query.keywords+'&segmentId='+segID+
                    '&radius='+req.query.distance+'&unit='+req.query.distanceUnits+
                    '&geoPoint='+geohash.encode(lat,lon);
                    console.log(ticketSearchURL);
                    request.get({url:ticketSearchURL,json:true},
                        function(err2,res2,body2){
                            
                            if (body2.hasOwnProperty('_embedded')&&body2['_embedded'].hasOwnProperty('events')){
                                res.json(body2['_embedded']['events']);
                            }
                            else{//no search results found
                                res.json({});
                            }
                            // res.json(body2);
                        
                        }
                    );
                }
                else{
                    console.log("error, googleapi could not find input other location");
                }

            });
    }
    else{//use current location to geohash
        let lat=req.query.lat;
        let lon=req.query.lon;

        // res.json(body['results'][0]['geometry']['location']);
        let segID;
        switch(req.query.category){
            case "default":
                segID="";
                break;
            case "music":
                segID="KZFzniwnSyZfZ7v7nJ";
                break;
            case "sports":
                segID="KZFzniwnSyZfZ7v7nE";
                break;
            case "artsAndTheatre":
                segID="KZFzniwnSyZfZ7v7na";
                break;
            case "film":
                segID="KZFzniwnSyZfZ7v7nn";
                break;
            case "miscellaneous":
                segID="KZFzniwnSyZfZ7v7n1";
                break;
        }
        const ticketSearchURL = 'https://app.ticketmaster.com/discovery/v2/events.json?apikey='+ticketmasterKey+
        '&keyword='+req.query.keywords+'&segmentId='+segID+
        '&radius='+req.query.distance+'&unit='+req.query.distanceUnits+
        '&geoPoint='+geohash.encode(lat,lon);
        console.log(ticketSearchURL);
        request.get({url:ticketSearchURL,json:true},
            function(err2,res2,body2){
                
                if (body2.hasOwnProperty('_embedded')&&body2['_embedded'].hasOwnProperty('events')){
                    res.json(body2['_embedded']['events']);
                }
                else{//no search results found
                    res.json({});
                }
                // res.json(body2);
            
            }
        );
    }
    
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