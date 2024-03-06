const botoes = document .querySelectorAll(".botao");

for(lei i=0;i <botoes.length;i++){
   botoes[i].onclick = function(){
    
    for(let j=0;j<botoes.lenght;j++){
        botoes[j].classList.remove("ativo");
    }

    botoes[i].classList.add("ativo");
   }
    console.log();
}