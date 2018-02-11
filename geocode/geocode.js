
const request = require('request');




var geocodeAddress = (address, callback) => {
    var add = encodeURIComponent(address);
//

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${add}`,
        json: true
    }, (error, response, body) => {

        if(error){
            callback('unable to connect to google servers');

        }
        else if(body.status === 'ZER0_RESULTS'){
            callback('unable to find that address');
        }
        else if(body.status == 'OK'){
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            })


        }


    });
};




module.exports.geocodeAddress = geocodeAddress;

/*

weather.getWeather(40.2128559, -111.7256936, (errorMessage, weatherResults) => {
    if (errorMessage){
        console.log(errorMessage);
    }
    else{
        console.log(JSON.stringify(weatherResults, undefined, 2));
    }

});*/
