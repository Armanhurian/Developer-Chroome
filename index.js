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

