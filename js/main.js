'use strict'
console.log('holis');
const main = document.querySelector('.js_main');
const option = document.querySelector('.js_form_option');
const result = document.querySelector('.js_result_option')
const btnOption = document.querySelector('.js_btn_option');
let pcValue = '';
const letsplay = document.querySelector('.js_letsPlay');
let player = '';
let Pc ='';

function letsPlayPlayer (){
    const randomNumber = getRandomNumber(9);
    if ( player ==== randomNumber){
    
    result.innerHTML = 'has ganado';
} else if( player => randomNumber){
    
    result.innerHTML = 'empate';
 } else( );
    
    result.innerHTML = 'has perdido';
}



function getRandomNumber(max){
   return Math.ceil (Math.random()*max);
}

function changeOption(){
    const randomNumber = getRandomNumber(9); 
    console.log(randomNumber);
    
    if(randomNumber  < 0 ){
      pcValue = 'valor incorrecto';
   
    }else if (randomNumber <=3){
        pcValue = 'piedra';
    } else if (randomNumber <= 7){
        pcValue = 'papel';
    }else 
    {
        pcValue = 'tijera';
    }
}

function handleClick(ev){
    ev.preventDefault(); 
    changeOption(); 
    
}


btnOption.addEventListener("click", handleClick); 