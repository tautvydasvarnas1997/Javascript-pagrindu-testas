console.log('1 UŽDUOTIS');

function konvertuojameEurus(eurai, konvertavimoKursas) {
    return eurai * konvertavimoKursas;
}

const randomSkaicius = Math.floor(Math.random() * 1000) + 1; // GAUNAMAS ATSITIKTINIS SKAIČIUS NUO 1 IKI 1000

const konvertavimoKursas = 1.05; // DABARTINIS KURSAS KEIČIANT EURĄ Į DOLERĮ

const dollars = konvertuojameEurus(randomSkaicius, konvertavimoKursas);
console.log(`Eurai: €${randomSkaicius}`);
console.log(`Konvertuojame į dolerius: $${dollars.toFixed(2)}`);

console.log();

console.log('2 UŽDUOTIS');

function konvertuojameDolerius(doleriai, konvertavimoKursas2) {
    return doleriai / konvertavimoKursas2;
}

const randomSkaicius2 = Math.floor(Math.random() * 1000) + 1; // GAUNAMAS ATSITIKTINIS SKAIČIUS NUO 1 IKI 1000

const konvertavimoKursas2 = 1.05;

const euros = konvertuojameDolerius(randomSkaicius2, konvertavimoKursas2);
console.log(`Doleriai: $${randomSkaicius2}`);
console.log(`Konvertuojame į eurus: €${euros.toFixed(2)}`);

console.log();

console.log('3 UŽDUOTIS');

let zmogaus_ugis = 1.75;
let zmogaus_svoris = 85;

console.log('Žmogaus ūgis yra', zmogaus_ugis, 'm., o svoris', zmogaus_svoris, 'kg');
console.log('Apskaičiuotas BMI:', (zmogaus_svoris / (zmogaus_ugis * zmogaus_ugis)).toFixed(2));

console.log();

console.log('4 UŽDUOTIS');

let zmogaus_amzius_metais = 30;

console.log('Žmogaus amžius sekundėmis yra:', zmogaus_amzius_metais * (60 * 60 * 24 * 365));
console.log('Žmogaus amžius minutėmis yra:', zmogaus_amzius_metais * (60 * 24 * 365));
console.log('Žmogaus amžius valandomis yra:', zmogaus_amzius_metais * (24 * 365));
console.log('Žmogaus amžius dienomis yra:', zmogaus_amzius_metais * 365);

console.log();

console.log('5 UŽDUOTIS');

let laipsniaiF = 55;

console.log(laipsniaiF, '°F pavertus į °C gauname', ((laipsniaiF - 32) / 1.8).toFixed(4), '°C');

console.log();

console.log('6 UŽDUOTIS');

let skaiciai = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(skaiciai.join('-'));

console.log();

console.log('7 UŽDUOTIS');

for (let i = 0; i <= 5; i++) {
    console.log('* '.repeat(i));
}

console.log();

console.log('8 UŽDUOTIS');

let siandien = new Date(); // ŠIANDIENOS DATA

let kaledos = new Date(siandien.getFullYear(), 11, 25); // NUSTATOME ŠIŲ METŲ KALĖDŲ DIENĄ

if (siandien > kaledos) {
    kaledos.setFullYear(siandien.getFullYear() + 1); // PATIKRINAME, AR ŠIAIS METAIS DAR NEPRAĖJO KALĖDOS
}

let likoDienu = Math.ceil((kaledos - siandien) / (1000 * 60 * 60 * 24));

console.log(`Liko ${likoDienu} dienų iki Kalėdų`);

console.log();

console.log('9 UŽDUOTIS');

let vardai = ['Tomas', 'Dainius', 'Paulius', 'Jonas'];
let sakinys = vardai.join(',');
let sakinys2 = vardai.join('+');

console.log(sakinys);
console.log(sakinys2);

console.log();

console.log('10 UŽDUOTIS');



console.log();