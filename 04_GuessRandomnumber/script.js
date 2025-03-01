//Generate random number between 1 to 100
function getRandomNumber(){
    let random = Math.ceil(Math.random()  * 100)
    return random
}

let userinput = document.querySelector('#userinput')
let submitbtn = document.querySelector('#Submit')
let result = document.querySelector('#result')
let noofattempts = document.querySelector('#attempts')


let randomNumber = getRandomNumber()
let attempts = 0; // Initialize the attempts counter


function submitButtonClick(){
   let userGuess = parseInt(userinput.value) 
   attempts++; // Increment the counter for each guess
   noofattempts.innerHTML = `Number attempts made : ${attempts}`

//    while(userGuess !== randomNumber){
      if(userGuess < randomNumber){
        result.innerHTML = "Your guess is too low"
        userinput.value = ""

      }
      else if(userGuess > randomNumber){
        result.innerHTML = "Your guess is too high"
           userinput.value = ""
      }
    else if(userGuess === randomNumber)
        result.innerHTML = "Your guess is Correct"
  

//    }
}

submitbtn.addEventListener('click',function(){
    submitButtonClick()
})