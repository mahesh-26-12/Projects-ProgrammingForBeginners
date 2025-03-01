let watchHours = document.querySelector('#hours')
let watchMinutes = document.querySelector('#minutes')
let watchSeconds = document.querySelector('#seconds')
let watchCount = document.querySelector('#count')
let startBtn = document.querySelector('#startBtn')
let stopBtn = document.querySelector('#stopBtn')
let resetBtn = document.querySelector('#resetBtn')


let hour = 0, minute = 0 ,seconds = 0, count = 0
let timer = false

startBtn.addEventListener('click',function(){
    timer = true
    stopWatch()
})

stopBtn.addEventListener('click',function(){
    timer = false
})

resetBtn.addEventListener('click',function(){
    hour = '00', minute ='00',seconds = '00', count = '00'
    watchHours.innerHTML=hour
    watchMinutes.innerHTML=minute
    watchSeconds.innerHTML=seconds
    watchCount.innerHTML=count
    timer=false
})

function stopWatch(){
    if(timer){
        count++
        if(count==100){
            seconds++
            count=0
        }
        if(seconds == 60){
            minute++
            seconds = 0
        }
        if(minute == 60){
            hour++
            minute = 0
        }

        let hourString = hour;
        let minString = minute;
        let secString = seconds;
        let countString = count;


        if(hour < 10) {
            hourString = "0" + hourString;
        }
        
        if(minute < 10){
            minString = "0" + minString;
        }
           
        if(seconds < 10){
            secString = "0" + secString;
        }
            
        if(count < 10){
            countString = "0" + countString;
        }
            
        watchHours.innerHTML = hourString
        watchMinutes.innerHTML = minString
        watchSeconds.innerHTML = secString
        watchCount.innerHTML = countString
        setTimeout(stopWatch, 10);
        
    }


    
}