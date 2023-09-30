
let ampm = document.querySelector("#ampm")
function display(){
    let dateTime = new Date();
    let hour = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();

    if(hour>12){
        hour = hour - 12
        ampm.innerHTML = 'PM'
    }
    

    document.querySelector('#hours').innerHTML=zero(hour);
    document.querySelector('#min').innerHTML=zero(min);
    document.querySelector('#seconds').innerHTML=zero(sec);
}


function zero(num){
    return num<10?"0"+num:num
}

setInterval(display,500)