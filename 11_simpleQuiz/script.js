const data = [
    {
        question: 'What is 2 + 2',
        answers: [
            {text : 3,correct: false},
            {text : 4,correct: true},
            {text : 1,correct: false},
            {text : 2,correct: false}
        ]
    },
    {
        question: 'What is 5 * 7',
        answers: [
            {text : 21,correct: false},
            {text : 28,correct: false},
            {text : 35,correct: true},
            {text : 36,correct: false}
        ]
    },
    {
        question: 'What is 6 / 2',
        answers: [
            {text : 3,correct: true},
            {text : 4,correct: false},
            {text : 5,correct: false},
            {text : 6,correct: false}
        ]
    },
    {
        question: 'What is 100 - 81',
        answers: [
            {text : 13,correct: false},
            {text : 15,correct: false},
            {text : 17,correct: false},
            {text : 19,correct: true}
        ]
    },
]

let elementQuestion = document.querySelector('#question')
let elementAnswerButtons = document.querySelectorAll('.answer-buttons button')
let questionIndex = ""
let btnNext = document.querySelector('#next')
let btnSubmit = document.querySelector('#submit');
let score = 0; // Track the user's score

function startQuiz(){
    questionIndex = 0;
    score = 0;
    displayQuestion(questionIndex)

}

function displayQuestion(questionIndex){
    elementQuestion.innerHTML = `${questionIndex + 1}. ${data[questionIndex].question}`
    elementAnswerButtons.forEach((button,index) => {
        button.innerHTML = data[questionIndex].answers[index].text
    })
}

elementAnswerButtons.forEach(button => {
    button.addEventListener('click',(event)=> {
        let slecetedOption = event.target.innerHTML
        let correctAnswer = ""
        let temp = data[questionIndex].answers
        temp.forEach(answer => {
            if(answer.correct){
                correctAnswer = answer.text
            }
        })
        if(slecetedOption == correctAnswer){
            // console.log('correct');
            score++;
            event.target.style.backgroundColor = 'green'
            btnNext.style.display = 'block'
        }
        else{
            // console.log(`incorrect`);
             event.target.style.backgroundColor = 'red'
             event.target.style.color  = 'white'
        }
        
        
    })
    
})

btnNext.addEventListener('click',() =>{
  questionIndex++
  if(questionIndex <= 3){
  displayQuestion(questionIndex)
     btnNext.style.display = 'none'
     reset()
  }
})
btnSubmit.addEventListener('click', () => {
    // Display the final score
    alert(`Quiz completed! Your final score is ${score}/${data.length}`);
    startQuiz(); // Restart the quiz after submission
});

function reset(){
    elementAnswerButtons.forEach(button => {
        button.style.backgroundColor = 'silver'
       button.style.color  = 'black'
    })
}
startQuiz()
