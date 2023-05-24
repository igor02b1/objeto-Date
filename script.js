const resultado = document.getElementById("resposta");

const data = new Date();
//datas//
let dataDia = data.getDate();
let dataMes = data.getMonth();
let diaDaSemana = data.getDay();
let ano = data.getFullYear();
//horas//
let segundos = data.getSeconds();
let minutos = data.getMinutes();
let horas = data.getHours();


switch (dataMes) {
    case 0:
        dataMes = 'Janeiro';
        break;
    case 1:
        dataMes = 'Fevereiro';
        break;
    case 2:
        dataMes = 'Março';
        break;
    case 3:
        dataMes = 'Abril';
        break;
    case 4:
        dataMes = 'Maio';
        break;
    case 5:
        dataMes = 'Junho';
        break;
    case 6:
        dataMes = 'Julho';
        break;
    case 7:
        dataMes = 'Agosto';
        break;
    case 8:
        dataMes = 'Setembro';
        break;
    case 9:
        dataMes = 'Outubro';
        break;
    case 10:
        dataMes = 'Novembro';
        break;
    case 11:
        dataMes = 'Dezembro';
        break;
}

switch (diaDaSemana) {
    case 0:
        diaDaSemana = 'Domingo';
        break;
    case 1:
        diaDaSemana = 'Segunda-feira';
        break;
    case 2:
        diaDaSemana = 'Terça-feira';
        break;
    case 3:
        diaDaSemana = 'Quarta-feira';
        break;
    case 4:
        diaDaSemana = 'Quinta-feira';
        break;
    case 5:
        diaDaSemana = 'Sexta-feira';
        break;
    case 6:
        diaDaSemana = 'Sábado';
        break;
}

if (segundos < 10) {
    segundos = '0' + segundos;
}

if (minutos < 10) {
    minutos = '0' + minutos;
}

if (horas < 10) {
    horas = '0' + horas;
}

const msg = `${diaDaSemana}, ${dataDia} de ${dataMes} de ${ano} às ${horas}:${minutos}:${segundos}`;

resultado.innerHTML = msg;



