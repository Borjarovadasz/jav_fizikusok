const fejlec  = [
    //headerarray létrehozása
    { //array első elem létrehozása a fejléc
        fejlec1: "Fizika terület", //az array elso elem fejlec1 tulajdonság ertekadása
        fejlec2: "Időszak", //az array elso elem fejlec2 tulajdonság ertekadása
        fejlec3: "Képviselők" //az array elso elem fejlec3 tulajdonság ertekadása
    },
]

const array = [ 
    { //array masodik elem létrehozása az elsosor
        oszlop1: "Optika", //az array masodik elem oszlop1 tulajdonság ertekadása
        oszlop2: "XI. század", //az array masodik elem oszlop2 tulajdonság ertekadása
        oszlop3: "Alhazen", //az array masodik elem oszlop3 tulajdonság ertekadása
    },
    { //array harmadik elem létrehozása a masodiksor
        oszlop1: "Asztronómia", //az array harmadik elem oszlop1 tulajdonság ertekadása
        oszlop2: "reneszánsz", //az array harmadik elem oszlop2 tulajdonság ertekadása
        oszlop3: "Kepler", //az array harmadik elem oszlop3 tulajdonság ertekadása
        oszlop4: "Galilei", //az array harmadik elem oszlop4 tulajdonság ertekadása
    },
    { //array negyedik elem létrehozása a harmadiksor
        oszlop1: "Kvantumfizika", //az array negyedik elem oszlop1 tulajdonság ertekadása
        oszlop2: "XIX-XX. század	", //az array negyedik elem oszlop2 tulajdonság ertekadása
        oszlop3: "Max Planck", //az array negyedik elem oszlop3 tulajdonság ertekadása
        oszlop4: "Albert Einstei", //az array negyedik elem oszlop4 tulajdonság ertekadása

    },
    { //array ötödik elem létrehozása a negyediksor
        oszlop1: "Modern fizika	", //az array ötödik elem oszlop1 tulajdonság ertekadása
        oszlop2: "XX-XXI. század	", //az array ötödik elem oszlop2 tulajdonság ertekadása
        oszlop3: "Richard Feynman	", //az array ötödik elem oszlop3 tulajdonság ertekadása
        oszlop4: "Stephen Hawking", //az array ötödik elem oszlop4 tulajdonság ertekadása

    },
    
]

const tablazat = document.createElement('table') // Létrehozzuk a táblázat változo
document.body.appendChild(tablazat) // hozzá appendáljuk a táblázatot a bodyhoz
const header = document.createElement('thead')
tablazat.appendChild(header)
const tr = document.createElement('tr')
header.appendChild(tr)
const tbody = document.createElement('tbody')
tablazat.appendChild(tbody)


for(let adat in fejlec[0]) { //for ciklussal az adat a fejléc arraynek az első elemjét nézzük
    const th = document.createElement('th') //létrehozunk egy th elementet
    th.innerHTML = fejlec[0][adat] // a th elementnek mindig az adott érték lesz fentről lefelé a fejléc arrayben.
    tr.appendChild(th) //majd hozzáappendáljuk a létrehozott sorunkhoz
}



for(let i = 0; i < array.length; i++ ) { //végigiterálok egy for ciklussal az array-en
    const mostanielement = array[i]  //az i-dik element a mostanielement lesz
    const sor = document.createElement('tr') // csinálok egy sort

    tablazat.appendChild(sor) //a fő táblázathoz hozzácsatolom a sort

    const elsosor = document.createElement('td') //elsosor létrehozása
    elsosor.innerHTML = mostanielement.oszlop1 //elsosor innerHTML-je a az array-ben a mostanielement (i)-nek a oszlop1.je
    sor.appendChild(elsosor) //hozzátesszük a sorhoz az elso oszlop elso elemjét 

    const masodiksor = document.createElement('td') //masodiksor létrehozása
    masodiksor.innerHTML = mostanielement.oszlop2 //masodiksor innerHTML-je a az array-ben a mostanielement (i)-nek a oszlop2.je
    sor.appendChild(masodiksor) //hozzátesszük a sorhoz az elso oszlop masodik elemjét 

    const harmadiksor = document.createElement('td') //harmadiksor létrehozása
    harmadiksor.innerHTML = mostanielement.oszlop3 //harmadiksor innerHTML-je a az array-ben a mostanielement (i)-nek a oszlop3.je
    sor.appendChild(harmadiksor) //hozzátesszük a sorhoz az elso oszlop harmadik elemjét 

    const negyediksor = document.createElement('td') //negyediksor létrehozása
    negyediksor.innerHTML = mostanielement.oszlop4 //negyediksor innerHTML-je a az array-ben a mostanielement (i)-nek a oszlop4.je
    sor.appendChild(negyediksor) //hozzátesszük a sorhoz az elso oszlop negyedik elemjét 
    tbody.appendChild(sor)
}

