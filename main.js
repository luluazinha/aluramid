function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play('');

}
const listaDeTeclas = document.querySelector('.tecla');

for (contador = 0; contador <listaDeTeclas.lenght; contador++){

const intrumento = listaDeTeclas[contador].classList[1];

const tecla = listaDeteclas[contador];

const idAudio = '#som_${instrumento}'

tecla.onclick = function(){
    tocaSom(idAudio);
};

}








}

