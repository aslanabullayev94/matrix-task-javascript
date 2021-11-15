
// Task 1

for (let i = 1; i < 4; i++) {

    let ad = prompt(`${i}. neferin adi?`, "cavidan");

    let soyad = prompt(`${i}. neferin soyadi?`, "abdullayev");

    let ixtisas = prompt(`${i}. neferin ixtisasi?`, "biznesin idare edilmesi");

    let isleyirmi = prompt('isleyirsiniz? He veya Yox yazin.', "He");

    let dersSaati;

    if (isleyirmi === "He") {

        dersSaati = "19:00";

    } else if (isleyirmi === "Yox") {

        dersSaati = "10:00";
    }

    console.log('****************');
    console.log(i + ". Nefer");
    console.log(ad);
    console.log(soyad);
    console.log(ixtisas);
    console.log(isleyirmi);
    console.log(dersSaati);
    console.log('****************');
}

// ------------------------------------------------------------------------------------ //
// Task 2

for (i = 1; i <= 3; i++) {

    let masininAdi = prompt("Masinin adini qeyd edin", "nissan");
    let masininTarixi = +prompt("Masinin tarixini qeyd edin", 2015);
    let masininQiymeti;
    (masininTarixi < 2011) ? masininQiymeti = "15 000 AZN" : (masininTarixi >= 2011 && masininTarixi <= 2016) ? masininQiymeti = "20 000 AZN" : masininQiymeti = "25 000 AZN";

    console.log('****************');
    console.log(i + ". Masin");
    console.log(masininAdi);
    console.log(masininTarixi);
    console.log(masininQiymeti);
    console.log('****************');
}

// ------------------------------------------------------------------------------------ //

// Task 3:
// - Suleymanin 580 manati var cibinde. Bu pul ile hem geyim hem de eve 1 ayliq erzaq almalidir. Eger paltara xerclediyi pul chox olarsa
// cibindeki pulun 50%-den demeli o 20 gun den sonra maashinin 20%-ni qabaqcadan ( avans ) istemelidir mudurunden. Mudur eger vererse
// pulu bu zmn alan 10 gun uchunde erzaq ala biler.
// Sonuncu serbest taskdir. Esas bezi case-leri ( shertleri ) men yazmisham. Geri qalanini sizi oz mentiqinizi ve xeyal dunyaninizdan
// istifade edin

// ------------

function surviveSuleyman() {
    let nagdPul = +prompt("Suleymanin nece manat pulu var ?");
    let xercPaltar = +prompt("Suleyman paltara nece manat xerclesin ? (yemeye 200 man saxla)");

    let xercErzaq = nagdPul - xercPaltar;

    if (xercErzaq <= 290) {

        alert('Yemeye pul qalmadi');
        alert('Süleyman müdürdən avans istəyir...');
        let avansAlabildi = Math.floor(Math.random() * 2) + 1;

        if (avansAlabildi === 1) {

            alert('Müdür avans verdi');

        } else {

            alert('Müdür avans vermedi');
            alert('Suleyman acından öldü');
        }
    }
}
// ------------------------------------------------------------------------------------ //

// Task 4
// 0 ve 100 arasinda random olaraq iki deyerimiz olacaq. Eger deyerler 50-den azdirsa her ehtimala deyerleri 
// Int-e chevirib her iki deyeri tipleri ile muqayise edin ve console ile ekrana verin. eksidirse , string-e 
// chevirib her iki deyeri tipleri ile muqayise edin ve alert ile ekrana verin.

// -----------

function a() {

    reqA = Math.floor(Math.random() * 101);
    alert(`1. reqem: ${reqA}`);

    reqB = Math.floor(Math.random() * 101);
    alert(`2. reqem: ${reqB}`);

    if((reqA && reqB) < 50) {

        if(reqA < reqB) alert('2.reqem daha boyukdur');
        else if(reqA === reqB) alert('reqemler beraberdir');
        else alert('1.reqem daha boyukdur');
    } else {

        if(reqA.toString() < reqB.toString()) alert(`"${reqB}" boyukdur "${reqA}"`);
        else if(reqA.toString() === reqB.toString()) alert(`"${reqB}" beraberdir "${reqA}"`);
        else alert(`"${reqA}" boyukdur "${reqB}"`);
    }
}

// ------------------------------------------------------------------------------------ //
// Task 5
// Adinizi prompt ile alib, her birini balacalashdirib, tersine console-da ekrana verin. Eger string yox reqem 
// daxil edilibse, ekrana console ile “Zehmet olmasa reqem daxil etmeyin !” errornu qaytarin.

// ------------

function a() {

    let adiniz = prompt('adiniz nedir ?');

    while (!isNaN(+adiniz)) {

        alert('Zehmet olmasa reqem daxil etmeyin !');
        adiniz = prompt('adiniz nedir ?');
    }

    adiniz = adiniz.toLowerCase().split("").reverse().join("");
    console.log(adiniz);
}

a();

// ------------------------------------------------------------------------------------ //
// Task 6
// Nomernizi prompt ile alib, eger +994 ile bashlayibsa ( +994704400500 ) +994-i silib, 0 ile evez 
// edib ( 0704400500 ), nomreni console-da ekrana verin. Eger reqem sayi 13-den chox ise ekrana console 
// ile “Zehmet olmasa duzgun formatda nomrenizi daxil edin !” errornu qaytarin.

// ------------
function a() {

    let nomre = prompt("nomrenizi daxil edin");

    if(nomre.includes("+994")) {

        nomre = '0' + nomre.slice(4);
        console.log(nomre);
    }

    if(nomre.length >= 12 ) {

        console.log('Zehmet olmasa duzgun formatda nomrenizi daxil edin !')
    }
}
a();

