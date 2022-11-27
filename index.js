let reactElement =document.getElementById('reactt');
let jsElement =document.getElementById('jss')
let htmlElement =document.getElementById('htmll');
let solidityElement =document.getElementById('solidityy');




let reactEventListener = reactElement.addEventListener('click',function(){


     reactElement.style.backgroundColor ='rgb(33, 123, 168)'
     jsElement.style.backgroundColor='white'
     htmlElement.style.backgroundColor ='white'
     solidityElement.style.backgroundColor ='white'
     reactElement.style.borderRadius ='5px'
     reactElement.style.width ='50px'
    
     
})


let jsEventListener = jsElement.addEventListener('click',function(){
    
    jsElement.style.backgroundColor='yellow'
    reactElement.style.backgroundColor ='white'
    htmlElement.style.backgroundColor ='white'
    solidityElement.style.backgroundColor ='white'
    jsElement.style.borderRadius ='5px'
    jsElement.style.width ='50px'
})


let htmlEventListener = htmlElement.addEventListener('click',function(){
    
    htmlElement.style.backgroundColor='orange'
    jsElement.style.backgroundColor='white'
    reactElement.style.backgroundColor ='white'
    solidityElement.style.backgroundColor ='white'
    htmlElement.style.borderRadius ='5px'
    htmlElement.style.width ='80px'
})

let solidityEventListener= solidityElement.addEventListener('click',function(){

    solidityElement.style.backgroundColor='rgba(64, 151, 24, 0.728)'
    htmlElement.style.backgroundColor='white'
    jsElement.style.backgroundColor='white'
    reactElement.style.backgroundColor ='white'
    solidityElement.style.borderRadius ='5px'
    solidityElement.style.width ='80px'
})

let myLogin = document.querySelector('.myLogin')
let myManu = document.querySelector('.myManu')


myLogin.addEventListener('click',function(event){
    event.target.style.display='none'
    myManu.style.display='block'
})

let loginFormBtnSubmit = document.querySelector('.loginFormBtnSubmit')
let loginFormBtnCancel = document.querySelector('.loginFormBtnCancel')
let myNameInput = document.querySelector('.myNameInput')
let myAgeInput = document.querySelector('.myAgeInput')
let loginFormPage = document.querySelector('.loginFormPage')
let registry  = document.querySelector('.registry')

let Profile  = document.querySelector('.Profile')
let myProfileBox = document.querySelector('.myProfileBox')
let myProfileCancelBox = document.querySelector('.myProfileCancelBox')
let myNameProfileBox = document.querySelector('.myNameProfileBox')
let myAgeProfileBox = document.querySelector('.myAgeProfileBox')
let emptyError =document.querySelector('.emptyError')



registry.addEventListener('click',function(){
    loginFormPage.style.display='block'
    myProfileBox.style.display='none' 
})

loginFormBtnCancel.addEventListener('click',function(){
    loginFormPage.style.display='none'
})

loginFormBtnSubmit.addEventListener('click',function(event){
    
    
    if(myNameInput.value ==''|| myAgeInput.value ==''){
        emptyError.innerHTML='Please log in to your user panel first'
        emptyError.style.color='red'
    }else{
        myNameProfileBox.innerHTML ='name is : ' + myNameInput.value
        myAgeProfileBox.innerHTML ='age is : ' + myAgeInput.value
        emptyError.style.display='none'
    }
    
})




Profile.addEventListener('click',function(){
    myProfileBox.style.display='block'
    loginFormPage.style.display='none'  
})

myProfileCancelBox.addEventListener('click',function(){
    myProfileBox.style.display='none'
})