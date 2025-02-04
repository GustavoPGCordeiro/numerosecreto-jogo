alert("Olá!!!");

let nome = prompt("Como você se chama?");
let numeroSecreto = parseInt(Math.random()*26);
console.log(numeroSecreto);
let escolha; 
let tentativas = 1;
while (escolha != numeroSecreto){
   escolha = prompt(`${nome}, escolha um número entre 1 e 25`);
    if (escolha == numeroSecreto){
        alert(`Parabéns ${nome}! Você certou.`);
    } else {
        if (numeroSecreto > escolha){
            alert (`${nome}, o número ${escolha} é menor que o número secreto`);
        } else {
        alert(`${nome}, o número ${escolha} é maior que o número secreto`);
        
        
    }
    tentativas++
} 
}
if (tentativas < 5){
    alert(`Hmm, nada mal ${nome}! ${tentativas} tentativa(s).`)
} else{
    alert(`Ufa ${nome}, demorou mas conseguiu! ${tentativas} tentativas foi bastante.`)
}

