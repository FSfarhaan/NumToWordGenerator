console.log("farhaan Shaikh")

let myArr = [' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

let input = document.getElementById('input')

input.addEventListener('keypress', (event)=>{
    if(event.key == "Enter"){
    let input = document.getElementById('input').value.toLowerCase()
    let sum = 0;
    let index = 0
    for(key of input){
        index = myArr.indexOf(key)
        sum += index
    }
    let textarea = document.getElementById('textarea')
    return textarea.innerHTML = sum
    }
})