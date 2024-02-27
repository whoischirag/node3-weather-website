const request = require("postman-request");

const forecast = (address, callback) => {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    encodeURIComponent(address) +
    "&appid=29daf806a621d23c8e1910fb65027614&units=metric";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to Connect to Weather Services!", undefined);
    } else if (body && body.cod === 400) {
      callback("Unable to Find the location. Try another Search!", undefined);
    } else if (body && body.sys) {
      callback(undefined, {
        country: body.sys.country,
        temp: "It is currently " + body.main.temp + " Degrees out",
        feels_like: ". It feels like " + body.main.feels_like + " Degrees out.",
        humidity:'The Humidity is  '+body.main.humidity+'%.'
      });
    } else {
      callback("Unable to Find the location. Try another Search!", undefined);
    }
  });
};

module.exports = forecast;
