import { encrypt, objPrimary, objSecundary } from "./functionEncript.mjs";

//variable
const textInput = document.querySelector('.encrypt__textInput');
const btnEncrypt = document.querySelector('.encrypt__btn-primary');
const btnDencrypt = document.querySelector('.encrypt__btn-secundary')
const img = document.querySelector('.decrypt__img');
const btnCopiar = document.querySelector('.decrypt__btn-copiar');
const mensaje = document.querySelector('.decrypt__result');
const span = document.querySelector('.decrypt__message');
const tooltip = document.querySelector('.tooltip');
const body = document.getElementsByTagName('body');
console.log(body)

var text;
const regex = /[a-z\ñ\s]+$/g;




textInput.addEventListener('input', (e)=>{
    text = e.target.value;
    if(text===""){
        img.classList.add('decrypt__img')
        img.classList.remove('decrypt__img--remove');
        btnCopiar.classList.add('decrypt__message--remove');
        mensaje.classList.add('decrypt__result');
        mensaje.classList.remove('decrypt__result--text');
        span.classList.remove('decrypt__message--remove')
        mensaje.textContent = 'Ningún mensaje fue encontrado'
        span.textContent = 'Ingresa el texto que desees encriptar o desencriptar'
    } 
})

btnEncrypt.addEventListener('click', ()=> exec(text, objPrimary))

btnDencrypt.addEventListener('click', ()=> exec(text,objSecundary))

btnCopiar.addEventListener('click',()=> copy())

function changeClass() {
    img.classList.remove('decrypt__img')
    img.classList.add('decrypt__img--remove');
    btnCopiar.classList.remove('decrypt__message--remove');
    mensaje.classList.remove('decrypt__result');
    mensaje.classList.add('decrypt__result--text');
    span.classList.add('decrypt__message--remove')
}

function copy() {
    navigator.clipboard.writeText(mensaje.textContent);
}

function exec(text,obj) {
    if(regex.test(text)){
        const result = encrypt(text,obj);
        mensaje.textContent = result
        changeClass() 

    } else {
        setTimeout(()=>{
            tooltip.classList.remove('tooltip');
            tooltip.classList.add('tooltip--block');
            body[0].classList.add('b-tooltip')
        })
        setTimeout(function() {
            tooltip.classList.remove('tooltip--block');
            tooltip.classList.add('tooltip');
            body[0].classList.remove('b-tooltip')
        }, 2000);
    }
}













