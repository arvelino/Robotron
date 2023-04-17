

const controle = document.querySelectorAll("[data-controle]")
const estatisticas = document.querySelectorAll("[data-estatisticas")
const producao = document.querySelector('#producao')
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}
// console.log(estatisticas);

controle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);

        atualizaEstatisticas(evento.target.dataset.peca,evento.target.dataset.controle);
    })
    
})

function manipulaDados(operacao,controle) {
    const peça = controle.querySelector("[data-contador]");

    if(operacao === "-" && peça.value > 0) {
        peça.value = parseInt(peça.value) - 1
    } else if(operacao === "+"){ 
        peça.value = parseInt(peça.value) + 1
    }

}


function atualizaEstatisticas(peca,operacao){
        estatisticas.forEach((elemento)=>{
          
            if(operacao ==="-" ){
                elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatisticas];
                
            }else{
                elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatisticas];
            }            
    })   

}


producao.onclick = validaProducao;

function validaProducao(){
    let indice = 0;
    estatisticas.forEach((elemento)=>{    
        if(Number(elemento.textContent)==0){
            indice +=1;
        }

    })
    if(indice==4){
        alert(' Por favor, insira as configurações para a produção do ROBOTRON');
    }else{
        alert(' Dados recebidos. Produção iniciada!');
    }
    
        
}




