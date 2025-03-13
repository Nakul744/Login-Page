let wrapper=document.querySelector('.wrapper');
let logilink=document.querySelector('.login-link');
let registerlink=document.querySelector('.register-link');
let btnPopUp=document.querySelector('.btnlogin')

let iconClose=document.querySelector('.icon-close')
let iconClose2=document.querySelector('.icon-close2')
registerlink.addEventListener('click',()=>{
    wrapper.classList.add('active');
})

logilink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
})

btnPopUp.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
})

iconClose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
})

iconClose2.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
})
