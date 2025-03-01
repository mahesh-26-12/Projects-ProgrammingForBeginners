let inputBox =document.querySelector('#task')
let btnAdd =document.querySelector('#Add')
let listContainer = document.querySelector('#list-container')

btnAdd.addEventListener('click',addTask)
listContainer.addEventListener('click',handleListClick)

function addTask(){
    if(inputBox.value === ""){
        alert('Please provide valid Task')
        return
    }
    let li = document.createElement('li')
    li.innerHTML = inputBox.value
    listContainer.appendChild(li)
    let remove = document.createElement('button')
    remove.innerHTML = 'Remove'
    li.appendChild(remove)
    inputBox.value = ''
    saveData()
}

function handleListClick(event){
    if(event.target.tagName === 'LI'){
        let upadtedTask = prompt('Enter upadted Task')
      event.target.innerHTML =`${upadtedTask} <button>Remove</button>`    
    }
    else if(event.target.tagName === 'BUTTON'){
        console.log(event.target);
        event.target.parentElement.remove()
      
        
    }
    saveData()
}

function saveData(){
    localStorage.setItem('data', listContainer.innerHTML)
}

function loadData(){
    listContainer.innerHTML = localStorage.getItem('data')
}

loadData()