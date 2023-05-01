'use strict'

let submitBtn = document.querySelector('.submit-btn')
let resetBtn = document.querySelector('.reset-btn')
// let userNumber = document.getElementById('userInput').value
  
  submitBtn.addEventListener('click',() => {
    let userNumber = document.getElementById('userInput').value
    let body = document.body.style
    let result = document.querySelector('#display')
    let colors = ['red','purple','green','yellow','blue','violet','black','teal','aquamarine','coral','yellowgreen','brown','white','indigo']
    let randomColors = Math.ceil(Math.random() * colors.length)
    console.log(randomColors);
    let randomNumbers = Math.ceil(Math.random() * 1)
    console.log(randomNumbers);

    if(!userNumber){
        alert('Error 404 Please input a number')
    }else if(randomNumbers === Number(userNumber)){
       result.innerText =  `CONGRATULATIONS🏆! Your Guess Is correct ${randomNumbers}`
       body.backgroundColor = colors[randomColors]
    }else if(randomNumbers < Number(userNumber)){
        result.innerText = `Your guess lesser than my guess😜:${randomNumbers}❗️.Better Luck Next Time!`
        body.backgroundColor = 'red'
    }else if(randomNumbers > Number(userNumber)){
        result.innerText = `Your guess is greater than my guess🤪:${randomNumbers}❗️. Better Luck Next Time!`
        body.backgroundColor = 'beige'
    }
 }) 

resetBtn.addEventListener('click', ()=>{
    window.location.reload()
})


