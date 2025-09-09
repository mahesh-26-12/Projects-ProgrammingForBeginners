let buttons =document.querySelectorAll('.buttons > input')
let textarea = document.querySelector('#textarea')
let str = ""

buttons.forEach(button => {
    button.addEventListener('click',() =>{
        if(button.value === 'c') {
            str = ""
        }else if(button.value === '='){
            try {
               //Evaluate safely
               str = String(Function('"use strict";return('+str+')')()); 
            }catch(err) {
                str = "Error";
            }
        
             
        }else{
            //Prevent adding two operators consecutively
            if(/[+\-*/.]$/.test(str) && /[+\-*/.]/.test(button.value)){

                return
            }
                
            str += button.value
        }

           textarea.value = str
    })
    
})