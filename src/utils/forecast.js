const request = require('request')
const forecast = (latitude , longitude , callback)=>{
    const url = `http://api.weatherstack.com/current?access_key=688bc178f96b2aa3b0d0fa2c0b04894d&query=${latitude},${longitude}&units=m`
    request({url, json : true}, (error , {body}={})=>{
        try{
            if (error){
                callback("Unable to connect weather service!", undefined)
            }else{
                callback(undefined,`${body.current.weather_descriptions[0]} : It's currently ${body.current.temperature} degrees out. And it's feel like ${body.current.feelslike} degrees out.The humidity is ${body.current.humidity}%.`)
            }
        }catch(e){
           callback ('Oops , something went wrong try in another time!')
        }
    })
}
module.exports = forecast