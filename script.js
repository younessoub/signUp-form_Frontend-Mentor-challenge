const form = document.querySelector('form');
const email = document.querySelector('#email')
const errorText = document.querySelector('.error-text')
const mainWrapper = document.querySelector('.mainWrapper')
const successWrapper = document.querySelector('.successWrapper')
const dismissButton = document.querySelector('.dismiss')
const emailConfirm = document.querySelector('.confirmation b');



const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    if(emailPattern.test(email.value)){
        emailConfirm.innerText = email.value
        mainWrapper.style.display = 'none'
        successWrapper.style.display = 'flex'
        email.value = ' '
    }else{
        //throw error
        errorText.style.display = 'block';
        email.classList.add('error')
    }
})

//this is when the user wants to input the email again after invalid email 
email.addEventListener('focus', (e)=>{
    if(email.classList.contains('error')){
        errorText.style.display = 'none';
        email.classList.remove('error')
    }
})

//go back to the form when clicking on dismiss
dismissButton.addEventListener('click', ()=>{
    mainWrapper.style.display = 'flex'
    successWrapper.style.display = 'none'
})