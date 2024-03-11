const botao = document .querySelectorAll(".botao");

for (lei i=0;i <botao.length;i++) {
    botao[i].onclick = function(){
    
    for(let j=0;j<botao.lenght;j++){
        botao[j].classList.remove("ativo");
    }

    botao[i].classList.add("ativo");
   }
   console.log();
}