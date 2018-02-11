const request = require('request');

var getWeather = (lat, lon, callback) => {

    request({
        url: `https://api.darksky.net/forecast/41eb8ba367df3a29486cac42ed89e898/${lat}, ${lon}`,
        json: true
    }, (error, response, body) => {

        if(!error && response.statusCode === 200){
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        }
        else{

            callback('Unable to fetch weather.');
        };


    });

};

module.exports.getWeather = getWeather;

