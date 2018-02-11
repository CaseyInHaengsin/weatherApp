
var request = require('request');





    var geocodeAddress = (address) => {
        var add = encodeURIComponent(address);
//

        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${add}`,
            json: true
        }, (error, response, body) => {

            if(error){
                reject('unable to connect to google servers');

            }
            else if(body.status === 'ZER0_RESULTS'){
                reject('unable to find that address');
            }
            else if(body.status == 'OK'){
                resolve({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                })


            }


        });
    };




geocodeAddress('19146').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
    console.log(errorMessage);
});