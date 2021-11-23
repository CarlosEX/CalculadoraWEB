'use strict';

const display = 
  document.getElementById('display');

const numeros = 
  document.querySelectorAll('[id*=tecla]');

const operadores =
  document.querySelectorAll('[id*=operador]');
  

let novoNumero = true;
let operador;
let numeroAnterior;

const operacaoPendente = () => operador !== undefined;

const calcular = () => {
  if(operacaoPendente()){
    const numeroAtual = parseFloat(display.textContent);
    
    novoNumero = true;
    
    if(operador == '+'){
      atualizarDisplay(numeroAnterior + numeroAtual);
    }else if (operador == '-'){
      atualizarDisplay(numeroAnterior - numeroAtual);
    }else if (operador == '*') {
      atualizarDisplay(numeroAnterior * numeroAtual);
    }else if (operador == '/') {
      atualizarDisplay(numeroAnterior / numeroAtual);
    }
  }
}

const atualizarDisplay = (texto) => {
  if(novoNumero){
    display.textContent = texto;
    novoNumero = false;
    
  }
  else{
    display.textContent += texto;  
  }
}

const inserirNumero = (evento) => atualizarDisplay(evento.target.textContent);

const selecionarOperador = (evento) => {
  if(!novoNumero){
    calcular();
    novoNumero = true;
    operador = evento.target.textContent;
    numeroAnterior = parseFloat(display.textContent);  
    console.log (operador);
    
  }
}

numeros.forEach(numero =>
  numero.addEventListener('click', 
  inserirNumero)
);

operadores.forEach(operador =>
  operador.addEventListener('click', selecionarOperador)
);

const ativarIgual = () => {
  calcular();
  operador = undefined;
}

document.getElementById('igual').addEventListener('click', ativarIgual);

const limparDIsplay = () => display.textContent = '';
document.getElementById('limparDisplay').addEventListener('click', limparDisplay);