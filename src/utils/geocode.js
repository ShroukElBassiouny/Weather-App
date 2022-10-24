const request = require('request')
const geocode = (address , callback)=>{
    const url = `http://api.positionstack.com/v1/forward?access_key=9546069bb53390d310312c1623b33eb1&query=${encodeURIComponent(address)}&limit=1`
    request({url, json : true}, (error , {body}={})=>{
        try{
            if (error){
                callback ("Unable to connect location service!", undefined)
            }else if(body.data.length === 0 ){
                callback("Unable to find location! , Try anther search" , undefined)
            }else {
                callback(undefined,{
                    latitude: body.data[0].latitude,
                    longitude: body.data[0].longitude,
                    location: body.data[0].label
            })
        }
        }catch(e){
            callback ('Oops , something went wrong try in another time!')
        }
        
    })
}
module.exports = geocode