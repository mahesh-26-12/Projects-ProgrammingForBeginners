let elementlength = document.querySelector('#passwordlength')
let btnGenerate = document.querySelector('#btnGenerate')
let inputPassword = document.querySelector('.password input')
let btncopy = document.querySelector('.password button')

btnGenerate.addEventListener('click',generatePassword)

function generatePassword(){
    let length = parseInt(elementlength.value)
    if(length <6 || length > 20 || isNaN(length)){
        alert("Please provide length between 6 and 20")
        return
    }
    let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let lowercase = 'abcdefghijklmnopqrstuvwxyz'
    let numbers = '0123456789'
    let specialCharacters = '!@#$%^&*()_-+={}[]\|/?.>,<~`'

    let allcharacters =uppercase+lowercase+numbers+specialCharacters
    let password = ""

    while(length > password.length){
       password +=  allcharacters[Math.floor(Math.random()*allcharacters.length)];
        
    }
    inputPassword.value = password
    
}

btncopy.addEventListener('click', () => {
    // inputPassword.select()
    // document.execCommand('copy')
    navigator.clipboard.writeText(inputPassword.value)
})