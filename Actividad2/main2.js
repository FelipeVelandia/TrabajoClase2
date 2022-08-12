let seg = 0;
let min = 0;
let hora = 0;

let tiempo = document.getElementById('tiempo');
let iniciar = document.getElementById('iniciar');
let detener = document.getElementById('detener');
let reiniciar = document.getElementById('reiniciar');

function crono () {
    seg++;
    if (seg>60) {
        min++;
        seg = 0;
    }
    if (min>60) {
        hora++;
        min = 0;
    }
    seg = ('0'+seg).slice(-2);
    min = ('0'+min).slice(-2);
    hora = ('0'+hora).slice(-2);
    tiempo.innerHTML = `${hora}:${min}:${seg}`;
}
 
iniciar.addEventListener('click', function () {
    crono();
    temporizador = setInterval(crono, 999);
});

detener.addEventListener('click', function () {
    clearInterval(temporizador);
})

reiniciar.addEventListener('click', function (){
    clearInterval(temporizador);
    tiempo.innerHTML = "00:00:00";
    seg = 0;
    min = 0;
    hora = 0;
})