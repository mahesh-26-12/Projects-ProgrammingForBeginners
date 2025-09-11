
let btnCalculate = document.querySelector('#calculateBMI');
let btnReset = document.querySelector('#reset');
let result = document.querySelector('#result');
let category = document.querySelector('#category')

//BMI = weight (kg) / (height * height) 

function calculateBMI(){
    let weight = document.querySelector('#weight').value;
    let height = document.querySelector('#height').value;
    
    //Validation
    
     if(weight === '' || isNaN(weight) || weight <= 0 ){
        alert('Please provide valid weight in kg')
        return null;
     }
     if(height === '' || isNaN(height) || height <= 0){
        alert('Please provide valid height in cm')
        return null;
     }

     //Convert height to meters
     height = height/100
     let bmi = weight/(height * height)

     return bmi.toFixed(2)

}

//Function to determine BMI Category
function getBMICategory(bmi){
   if(bmi < 18.5) return "Underweight";
   else if (bmi >= 18.5 && bmi < 24.9) return "Normal weight";
   else if (bmi >= 25 && bmi < 29.9) return "Overweight";
   else return "Obese";
}

//Event listener for Calculate 

btnCalculate.addEventListener('click',function(){
    let bmi = calculateBMI();
    if(bmi) {
      result.innerHTML = `Your BMI = <strong>${bmi}</strong>`;
      category.innerHTML = `Category: <strong>${getBMICategory(bmi)}</strong>`;
    }
    
});

//Event listener for Reset 
btnReset.addEventListener('click',function(){
   document.querySelector('#weight').value = "";
   document.querySelector('#height').value = "";
   result.innerHTML = "Result will display here";
   category.innerHTML = "";
})
