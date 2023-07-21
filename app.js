const inputEmail = document.querySelector('#exampleInputEmail1')
const password = document.querySelector('#exampleInputPassword1')
const form = document.querySelector('#form')
const myBtn =document.querySelector("#btn")
const modal= document.getElementById('modal')
const close = document.getElementById('close')

// comment added
myBtn.addEventListener('click',()=>{
   modal.style.display = "block";
})

form.addEventListener('submit',(e)=>{
e.preventDefault()

validateInput()
})


const validateInput = ()=>{
    inputValue = inputEmail.value.trim()
    passwordValue = password.value.trim()

    if(inputEmail.value=== '' && password.value === ''){
        alert('email and password is required') 
     } else {
        window.location.href="dashboard.html"
     }

}




