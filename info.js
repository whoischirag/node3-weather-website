const request = require("postman-request");
const forecast = require("./src/Utils/Forecast");

const address = process.argv[2];
if (!address) {
  console.log("Please Provide an Address!");
} else {
  forecast(address, (error, { country, temp, feels_like }) => {
    console.log("Error :", error);
    console.log("Data :", country, temp, feels_like);
  });
}
// const url='https://api.openweathermap.org/data/2.5/weather?q='+encodeURIComponent(address)+'&appid=29daf806a621d23c8e1910fb65027614&units=metric'

// request({url ,json:true},(error,response)=>{
// //console.log(response.body)

// if(error){
//   console.log('Cannot Connect to Weather Services!')
// }
// else if(response.body.cod==='400'){
//     console.log('Unable to Find the location. Try another Search!')
// }

// else{
// const country=response.body.sys.country
// const temp=response.body.main.temp
// const feels_like=response.body.main.feels_like
// console.log(address+','+ country+'. It is currently '+temp+' degress out. It feels like '+feels_like+' degrees Out.')
// }

// })
