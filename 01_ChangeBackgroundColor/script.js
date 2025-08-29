let btn =document.querySelector('#changebgcolor')
let body =document.querySelector('body')
let btn1 = document.querySelector('#changebgcolor1')
let btn2 = document.querySelector('#changebgcolor2')
let resetBtn = document.querySelector('#resetbgcolor')
let colorCode = document.querySelector('#colorcode')

function getRandomColor(){
    let str = '0123456789abcdef'
    let color = '#'
    for(i=1;i<=6;i++){
     color += str[ Math.floor(Math.random()*16)]
    }
    console.log(color);
    
    return color
}


function changeColor(color){
    body.style.backgroundColor = color
    colorCode.textContent = color
}


btn.addEventListener('click',function(){
let randomColor = getRandomColor()   
changeColor(randomColor)
})

btn1.addEventListener('click',function(){
    changeColor('blue')
    })

btn2.addEventListener('click',function(){
       changeColor('blueviolet')
        })

    //Reset to default
    resetBtn.addEventListener('click',function(){
        body.style.backgroundColor = "";
        colorCode.textContent = "Default"
    })

    //copy color to clipboard when clicked 
    colorCode.addEventListener('click',function(){
        if(colorCode.textContent !== "Default"){
            navigator.clipboard.writeText(colorCode.textContent)
            alert(`Color ${colorCode.textContent} copied to clipboard!`)
        }
    })