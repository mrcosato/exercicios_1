//Faça um programa em que o usuário digite 5 números inteiros 
//positivos e ao final exiba o maior entre eles.
var readline = require('readline-sync');
  var valor;
  var maiorValor = 0;
  
  for(var i = 0; i < 5; i++){ 
     valor = parseInt(readline.question('Informe um numero valor: '));
  
     if(valor > maiorValor)
        maiorValor = valor;
  }
  
  console.log(`O maior valor digitado foi: ${maiorValor}`);