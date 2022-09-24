const request = require('request')
const forecast = (latitude , longitude , callback)=>{
    const url = `http://api.weatherstack.com/current?access_key=688bc178f96b2aa3b0d0fa2c0b04894d&query=${latitude},${longitude}&units=m`
    request({url, json : true}, (error , {body})=>{
        if (error){
            callback({error: "Unable to connect weather service!"}, undefined)
        }else if(body.error){
            callback({error :"Unable to find location!"}, undefined)
        }else{
            callback(undefined,`${body.current.weather_descriptions[0]} : It's currently ${body.current.temperature} degrees out. And it's feel like ${body.current.feelslike} degrees out.`)
        }
    })
}
module.exports = forecast