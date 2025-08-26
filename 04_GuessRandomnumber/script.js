//Generate random number between 1 to 100
function getRandomNumber(){
     return  Math.ceil(Math.random()  * 100)
   
}

let userinput = document.querySelector('#userinput')
let submitbtn = document.querySelector('#Submit')
let result = document.querySelector('#result')
let noofattempts = document.querySelector('#attempts')


let randomNumber = getRandomNumber()
let attempts = 0; // Initialize the attempts counter


function submitButtonClick(){
   let userGuess = parseInt(userinput.value) 

   //Validate input
   if(isNaN(userGuess) || userGuess < 1 || userGuess >100){
        result.innerHTML = "Please enter a valid number between 1 and 100"
        userinput.value = ""
        userinput.focus();
        return; // Exit the function if input is invalid
   }
   attempts++; // Increment the counter for each guess
   noofattempts.innerHTML = `Number of attempts made : ${attempts}`

//    while(userGuess !== randomNumber){
      if(userGuess < randomNumber){
        result.innerHTML = "Your guess is too low"
        userinput.value = ""

      }
      else if(userGuess > randomNumber){
        result.innerHTML = "Your guess is too high"
          
      }
    else {
      result.innerHTML = "Your guess is Correct"  
      submitbtn.disabled = true; // Disable the button after correct guess
      userinput.disabled = true; // Disable the input field after correct guess
    }
   userinput.value = "";
   userinput.focus(); // Set focus back to the input field

//    }
}

submitbtn.addEventListener('click',submitButtonClick)
    
