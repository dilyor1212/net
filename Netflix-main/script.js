const reges = document.querySelector('.regestration')
const butt = document.querySelector('.butt')
const regExName = /^[a-zA-Z\s]{6,18}$/
const regExNumber = /^[0-9]{9,9}$/
const list = document.querySelector('h1')
const text = document.querySelector('.text')
const password = document.querySelector('.password')
const form = document.querySelector('form')
const button = document.querySelector('button')

text.addEventListener('keyup', ()=> {
    if(regExName.test(text.value)) {
        text.style.border = '3px solid green'
    }else { 
        text.style.border = '2px solid red'
    }
} )
password.addEventListener('keyup', ()=> {
    if(regExNumber.test(password.value)) {
        password.style.border = '3px solid green'
    }else {
         password.style.border = '3px solid red'
    }
} );


form.addEventListener('submit', (e)=> {
    e.preventDefault()
    
    if(regExName.test(text.value) && regExNumber.test(password.value) ) {
    document.location='netflix.html'
        
    }else {
        
    }
})



 
