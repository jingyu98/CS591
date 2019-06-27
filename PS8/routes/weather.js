const express = require('express');
const router = express.Router();
const request = require('request-promise');
const db = require('../mongo/mongo');
const configs = require('../config/config.js');

db.connect((err, client) => {
    if (err) {
        console.log(`ERR: ${err}`);
    } else {
        console.log(`Connected`);
    }
});

router.get('/：cityname', function(req, res, next) {
    let mongo = db.getDB();
    mongo.collection('weatherInfo').findOne({cityname: req.params.cityname}, {
            fields: {
                _id: 0,
                cityname: '',
            }
        },
        function (err, weatherObject) {
            if (err) {
                console.log(err);
            } else if (weatherObject != null) {
                res.send({...weatherObject, cached: true});
            } else {
                getWeather(req.params.cityname)
                    .then(function (response) {
                        let responseObject = JSON.parse(response);
                        console.log(responseObject)
                        let {cityname, weather, ...weatherObject} = {
                            cityname = responseObject.name,
                            weather = responseObject.weather[0].description,
                            temperature = responseObject.main.temp,
                            humidity = responseObject.main.humidity,
                            fact: ""
                        };

                        let secondApi_options = {
                            url: "http://ws.audioscrobbler.com/2.0/?method=album.search&album=" + responseObject.weather[0].description + "&api_key=" + configs.musicapikey + "&format=json",
                        };
                        request(secondApi_options)
                            .then(function (response) {
                                response = JSON.parse(response)
                                weatherObject.fact = response.text;

                                mongo.collection('weatherInfo').insertOne({cityname, weather, ...weatherObject},
                                    function (err, result) {
                                        if (err) {
                                            console.log(err);
                                        } else {
                                            res.send({...weatherObject, cached: false});
                                        }
                                    })
                            })

                            .catch(function (err) {
                                console.log("Error: ", err);
                            })
                    })
                    .catch(function (err) {
                        console.log("Error: ", err);
                    });
            }
        });
});

let getWeather = function (cityname) {
    return new Promise(function (resolve, reject) {
        request.get("https://api.openweathermap.org/data/2.5/weather?q=" + cityname + "&appid=" + configs.weatherapikey)
            .then(function (response) {
                let cityname = JSON.parse(body).name
                resolve(cityname);
            })
            .catch(function (err) {
                console.log("there was an error in getWeather");
                reject(err);
            });
    });
};


module.exports = router;
