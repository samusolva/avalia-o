var lanterna = document.getElementById("lanterna");
var bateria = document.getElementById("cont-bateria");
var status = 0;
var bateriaValor = 5;


//troca bateria e altera valor na view
function trocaBateria(){
    bateriaValor = 100
    document.getElementById("cont-bateria").innerHTML=bateriaValor + " %";
}


//descarrega bateria e atualizar valor na view
function descarregaBateria(event){
    var bateriaRestante = setInterval(timer, 1000);
    function timer(){
        if(status == 1)
            bateriaValor= bateriaValor-1;
            document.getElementById("cont-bateria").innerHTML=bateriaValor + " %";
                if(status == 0){
                    clearInterval(bateriaRestante);
                    return;
                }

                if (bateriaValor <= 0){
                apagaLampada()
                clearInterval(bateriaRestante);
                return;
            }
    }
};

//acende a lampada e inicia o descarregamento da bateria
function acendeLampada(){
    if(bateriaValor >= 1){
        lanterna.src = "img/lanterna-acesa.svg";
        status = 1;
        descarregaBateria();
    }
}


//apaga a lampada
function apagaLampada(){
    lanterna.src = "img/lanterna-apagada.svg";
    status = 0;
}


//altera status da lampada no click
document.getElementById("on/off").addEventListener("click", function(){
    if (status == 0){
        acendeLampada();
    }
    else{
        apagaLampada();
    }
})

//troca bateria qunado é clicado 
document.getElementById("troca-bateria").addEventListener("click", function(){
    trocaBateria();
})





