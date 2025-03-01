let btn =document.querySelector('#changebgcolor')
let body =document.querySelector('body')
let btn1 = document.querySelector('#changebgcolor1')
let btn2 = document.querySelector('#changebgcolor2')


function getRandomColor(){
    let str = '0123456789abcdef'
    let color = '#'
    for(i=1;i<=6;i++){
     color += str[ Math.floor(Math.random()*16)]
    }
    console.log(color);
    
    return color
}

btn.addEventListener('click',function(){
//change bg color    
body.style.backgroundColor = getRandomColor()
})

btn1.addEventListener('click',function(){
    //change bg color    
    body.style.backgroundColor = "blue"
    })

btn2.addEventListener('click',function(){
        //change bg color    
        body.style.backgroundColor = "blueviolet"
        })