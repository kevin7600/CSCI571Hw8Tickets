const express = require('express');
const router = express.Router();
const mongojs = require('mongojs');
const request=require('request');
const geohash = require('ngeohash');
const SpotifyWebApi = require('spotify-web-api-node');
const db = mongojs('mongodb://kevin:kirbyex7600@ds157923.mlab.com:57923/mytasklist', ['tasks'])
//Get all apis
const ticketmasterKey='WUZpipDRqIHiV8jTieLC9mWxEgPBz15c';
const googleKey='AIzaSyC7BHd7OmH2zM8-vT88mT7Zfh_iRW3JHzI';
const googleSearchEngineID='009783632782972079683:ronz5c9btt0';
const songkickAPIKey='sCjJxYJg3pdqNol4';
const spotifyApi = new SpotifyWebApi({
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

router.get('/upcoming/',function(req,res,next){//get upcoming events for upcoming tab
    const songkickVenueURL='https://api.songkick.com/api/3.0/search/venues.json?'+
        'query='+req.query.venue+
        '&apikey='+songkickAPIKey;
        console.log("songkick venue: "+songkickVenueURL);
        request.get({url: songkickVenueURL, json:true},
            function(err,response,body){
                if (!body['resultsPage']['results'].hasOwnProperty('venue')){//no results, send back nothing
                    console.log("no upcoming results for: ",songkickVenueURL);
                    res.json({});
                }
                else{
                    let venueId=body['resultsPage']['results']['venue'][0]['id'];
                    const songKickUpcomingURL='https://api.songkick.com/api/3.0/venues/'+
                    venueId+'/calendar.json?'+
                    'apikey='+songkickAPIKey;
                    console.log("upcoming upcoming search",songKickUpcomingURL);
                    request.get({url:songKickUpcomingURL,json:true},
                        function(err,response,body){
                            if (!body['resultsPage']['results'].hasOwnProperty('event')){
                                res.json({});
                            }
                            else{
                                res.json(body['resultsPage']['results']['event']);
                            }
                        });
                }
            });
});

router.get('/photos/',function(req,res,next){
    const googleSearchAPI='https://www.googleapis.com/customsearch/v1?'+
        'q='+req.query.q+
        '&cx='+googleSearchEngineID+
        '&imgSize=huge'+
        '&imgType=news'+
        '&num=8'+
        '&searchType=image'+
        '&key='+googleKey;
    request.get({url: googleSearchAPI,json: true},
        function(err,response,body){
            res.json(body['items']);
        });
        
});

function VenueHelper(req,res){
    const venueAPICall='https://app.ticketmaster.com/discovery/v2/venues?'+
        'apikey='+ticketmasterKey+
        '&keyword='+req.query.venue;
    request.get({url: venueAPICall,json: true},
        function(err,response,body){
            if (!body.hasOwnProperty('_embedded')){//spike arrest, keep trying until it works
                console.log("Venue Spike arrest!");
                VenueHelper(req,res);
            }
            else{
                res.json(body['_embedded']['venues'][0]);
            }

        });
}
router.get('/venue/',function(req,res,next){
    VenueHelper(req,res);
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

module.exports = router;