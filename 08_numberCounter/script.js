let buttons = document.querySelectorAll('.buttons > input')
let counter = document.querySelector('#count')
let count = 0


buttons.forEach(button => {
    button.addEventListener('click',() => {
        if(button.value === 'Increase')
            count++
        else if(button.value === 'Decrease')
            if (count > 0) {
                count--; // Only decrease if count is greater than 0
            }
            
        else
            count = 0
        counter.innerHTML = count
    })
})
