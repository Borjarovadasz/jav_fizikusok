const fejlec  = [
    //headerarray létrehozása
    { //array első elem létrehozása a fejléc
        fejlec1: "Fizika terület", //az array elso elem fejlec1 tulajdonság ertekadása
        fejlec2: "Időszak", //az array elso elem fejlec2 tulajdonság ertekadása
        fejlec3: "Képviselők" //az array elso elem fejlec3 tulajdonság ertekadása
    },
]

const array = [ 
    { //array elso elem létrehozása az elsosor
        sor1: "Optika", //az array elso elem sor1 tulajdonság ertekadása
        sor2: "XI. század", //az array elso elem sor2 tulajdonság ertekadása
        sor3: "Alhazen", //az array elso elem sor3 tulajdonság ertekadása
    },
    { //array masodik elem létrehozása a masodiksor
        sor1: "Asztronómia", //az array masodik elem sor1 tulajdonság ertekadása
        sor2: "reneszánsz", //az array masodik elem sor2 tulajdonság ertekadása
        sor3: "Kepler", //az array masodik elem sor3 tulajdonság ertekadása
        sor4: "Galilei", //az array masodik elem sor4 tulajdonság ertekadása
    },
    { //array harmadik elem létrehozása a harmadiksor
        sor1: "Kvantumfizika", //az array harmadik elem sor1 tulajdonság ertekadása
        sor2: "XIX-XX. század	", //az array harmadik elem sor2 tulajdonság ertekadása
        sor3: "Max Planck", //az array harmadik elem sor3 tulajdonság ertekadása
        sor4: "Albert Einstei", //az array harmadik elem sor4 tulajdonság ertekadása

    },
    { //array negyedik elem létrehozása a negyediksor
        sor1: "Modern fizika	", //az array negyedik elem sor1 tulajdonság ertekadása
        sor2: "XX-XXI. század	", //az array negyedik elem sor2 tulajdonság ertekadása
        sor3: "Richard Feynman	", //az array negyedik elem sor3 tulajdonság ertekadása
        sor4: "Stephen Hawking", //az array negyedik elem sor4 tulajdonság ertekadása

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
    elsosor.innerHTML = mostanielement.sor1 //elsosor innerHTML-je a az array-ben a mostanielement (i)-nek a sor1.je
    sor.appendChild(elsosor) //hozzátesszük a sorhoz az elso oszlop elso elemjét 

    const masodiksor = document.createElement('td') //masodiksor létrehozása
    masodiksor.innerHTML = mostanielement.sor2 //masodiksor innerHTML-je a az array-ben a mostanielement (i)-nek a sor2.je
    sor.appendChild(masodiksor) //hozzátesszük a sorhoz az elso oszlop masodik elemjét 

    const harmadiksor = document.createElement('td') //harmadiksor létrehozása
    harmadiksor.innerHTML = mostanielement.sor3 //harmadiksor innerHTML-je a az array-ben a mostanielement (i)-nek a sor3.je
    harmadiksor.colSpan = 2 //beállítjuk a colspant.
    sor.appendChild(harmadiksor) //hozzátesszük a sorhoz az elso oszlop harmadik elemjét 

    const negyediksor = document.createElement('td') //negyediksor létrehozása
    negyediksor.innerHTML = mostanielement.sor4 //negyediksor innerHTML-je a az array-ben a mostanielement (i)-nek a sor4.je
    sor.appendChild(negyediksor) //hozzátesszük a sorhoz az elso oszlop negyedik elemjét 
    tbody.appendChild(sor)
   
}

