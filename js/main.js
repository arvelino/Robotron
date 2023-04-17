

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
let validador=0;
// console.log(estatisticas);

controle.forEach( (elemento) => {

    elemento.addEventListener('click', (evento) => {        
        const contador = evento.target.parentNode.querySelector("[data-contador]");
        validador = parseInt(contador.value);

        manipulaDados(evento.target.dataset.controle, contador);
      
        atualizaEstatisticas(evento.target.dataset.peca,evento.target.dataset.controle,validador);      
        
    })
    
})

/* Função para alterar os controle, somando e subtraindo do menu */
function manipulaDados(operacao,controle) {

    if(operacao === "-" && controle.value > 0) {
        controle.value = parseInt(controle.value) - 1
    } else if(operacao === "+"){ 
        controle.value = parseInt(controle.value) + 1
    }

}

/*  Função para somar as caracteristicas na estatistica do Robo */
function atualizaEstatisticas(peca,operacao,validar){
        // console.log(parseInt(validar));

        estatisticas.forEach((elemento)=>{ 

            if(operacao ==="-" && validar>0){
                elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatisticas];
                
            }else if(operacao ==='+'){
                elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatisticas];
            }  
    })   

}


producao.onclick = validaProducao;

function validaProducao(){
    let indice = 0;
    estatisticas.forEach((elemento)=>{    
        if(Number(elemento.textContent)==0){
            indice ++;
        }

    })
    if(indice==4){
        alert(' Por favor, insira as configurações para a produção do ROBOTRON');
    }else{
        alert(' Dados recebidos. Produção iniciada!');
    }
    
        
}




