time = ()=>{
    let date = new Date()
    let hour = date.getHours()
    let min = date.getMinutes();
    let sec = date.getSeconds();

   

    document.getElementById('hour').innerHTML = hour
    document.querySelector("#min").innerHTML = min
    document.querySelector("#seconds").innerHTML = sec


    setInterval(time , 1000)



}

window.addEventListener('load' , time())