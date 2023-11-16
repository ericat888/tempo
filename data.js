/*var data = new Date(2006, 12, 18, 16, 20).getMonth()+1; //ano, mes, dia, hora, minuto, segundo, milisegundo
//getDate, getHours, getMinutes, getSeconds, getFullYear, getMonth, getDay
console.log(data);*/

var relogio = setInterval(function (){
    let horas = new Date().getHours();
    let minutos = new Date ().getMinutes();
    let segundos = new Date ().getSeconds();
    console.log(`${horas}:${minutos}:${segundos}`);
}, 1000);