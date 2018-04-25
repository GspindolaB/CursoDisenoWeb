//Declaramos las variables
var video = document.getElementById('video'),
    btnPlay = document.getElementById('btnPlay'),
    icono = document.getElementById('icono'),
    tiempo = document.getElementById('tiempo'),
    volumen = document.getElementById('volumen');

//El tiempo maximo que durara el video es la duración del video
tiempo.setAttribute('max', video.duration)

//Si el icono tiene la clase fa-play el video se reproducira y tendrá un intervalo de un milisegundo
//De lo contrario el video se pausara
btnPlay.addEventListener('click', function(){
    if(icono.className=='fa fa-play'){
        video.play();
        var intervalo = setInterval(barraTiempo, 1);
    }else{
        video.pause();
    }
    //class list nos ayuda a conocer la lista que tiene el elemento
    //En este caso si ya tiene la clase se la vamos a quitar y si no la tiene, se la vamos a poner
    icono.classList.toggle('fa-play');
    icono.classList.toggle('fa-pause');
});

//Se obtiene el tiempo actual del video
tiempo.addEventListener('change', function(){
    video.currentTime = tiempo.value;
});
//Funcion para el intervalo
function barraTiempo(){
    tiempo.value = video.currentTime;
    if(video.ended){
        icono.className = 'fa fa-play';
    }
}
//Volumen del video
volumen.addEventListener('change', function(){
    video.volume = volumen.value;
});