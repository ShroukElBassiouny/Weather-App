console.log('Client side javascript file is loaded!')
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const fetchUrl = '/weather?address='
const messageOne = document.querySelector('#message-1')
const result = document.querySelector('#searchResult')
weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const address = search.value
    messageOne.textContent = "Loading...."
    result.textContent = " "
    fetch(fetchUrl+address).then((response)=>{
        response.json().then((data)=>{
            console.log(data)
            if(data.error){
                messageOne.textContent = data.error
            }else{
                messageOne.textContent = data.location
                result.textContent = data.forecast
            }
        })
})
})
