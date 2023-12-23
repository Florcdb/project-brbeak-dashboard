function updateClock() {
    momentoActual = new Date();
    hora = momentoActual.getHours();
    minuto = momentoActual.getMinutes();
    segundo = momentoActual.getSeconds();

    str_segundo = segundo.toString();
    if (str_segundo.length == 1)
        segundo = "0" + segundo;

    str_minuto = minuto.toString();
    if (str_minuto.length == 1)
        minuto = "0" + minuto;

    str_hora = hora.toString();
    if (str_hora.length == 1)
        hora = "0" + hora;

    horaImprimible = hora + " : " + minuto + " : " + segundo;



    
    let mensaje = '';
    if (hora >= 1 && hora <= 7) {
        mensaje = 'Es hora de descansar. Apaga y sigue mañana';
    } else if (hora >= 7 && hora <= 12) {
        mensaje = 'Buenos días, desayuna fuerte y a darle al código';
    } else if (hora >= 12 && hora <= 14) {
        mensaje = 'Echa un rato más pero no olvides comer';
    } else if (hora >= 14 && hora <= 16) {
        mensaje = 'Espero que hayas comido';
    } else if (hora >= 16 && hora <= 18) {
        mensaje = 'Buenas tardes, el último empujón';
    } else if (hora >= 18 && hora <= 22) {
        mensaje = 'Esto ya son horas extras, ... piensa en parar pronto';
    } else {
        mensaje = 'Buenas noches, es hora de pensar en parar y descansar';
    }

    document.getElementById('mensaje').innerHTML = mensaje;
    document.getElementById('clock').innerHTML = horaImprimible;
    console.log(mensaje)
    console.log(clock)
    setTimeout(updateClock, 1000);
}


updateClock();
