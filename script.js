let searchBox = document.querySelector('#search')
let button = document.querySelector('svg')
let map = document.querySelector('#gmap_canvas')
let address = document.querySelector('#ipAddress')
let ipLocation = document.querySelector('#location')
let timeZone = document.querySelector('#timeZone')
let isp = document.querySelector('#isp')
button.onclick=()=>{
    fetch(`http://ip-api.com/json/${searchBox.value}`)
    .then((response, error)=>{
        if (response.status === 200) {
            return response.json()
        }else{
            console.log('error')
        }
    })
    .then((response, error)=>{
        console.log(response)
        map.src= `https://maps.google.com/maps?q=${response.country, response.city}=&output=embed`
        address.innerHTML = response.query
        timeZone.innerHTML = response.timezone
        isp.innerHTML = response.isp
        ipLocation.innerHTML = response.country+', '+response.city
    })
    
}
window.onload =()=>{
    fetch(`http://ip-api.com/json/${searchBox.value}`)
    .then((response, error)=>{
        if (response.status === 200) {
            return response.json()
        }else{
            console.log('error')
        }
    })
    .then((response, error)=>{
        console.log(response)
        map.src= `https://maps.google.com/maps?q=${response.country, response.city}=&output=embed`
        address.innerHTML = response.query
        timeZone.innerHTML = response.timezone
        isp.innerHTML = response.isp
        ipLocation.innerHTML = response.country+', '+response.city
    })
    
}
