const array = [ //array létrehozása
    { //array első elem létrehozása a fejléc
        fejlec1: "Fizika terület", //az array elso elem fejlec1 tulajdonság ertekadása
        fejlec2: "Időszak", //az array elso elem fejlec2 tulajdonság ertekadása
        fejlec3: "Képviselők" //az array elso elem fejlec3 tulajdonság ertekadása
    },
    { //array masodik elem létrehozása az elsosor
        elsosor1: "Optika", //az array masodik elem elsosor1 tulajdonság ertekadása
        elsosor2: "XI. század", //az array masodik elem elsosor2 tulajdonság ertekadása
        elsosor3: "Alhazen", //az array masodik elem elsosor3 tulajdonság ertekadása
    },
    { //array harmadik elem létrehozása a masodiksor
        masodiksor1: "Asztronómia", //az array harmadik elem masodiksor1 tulajdonság ertekadása
        masodiksor2: "reneszánsz", //az array harmadik elem masodiksor2 tulajdonság ertekadása
        masodiksor3: "Kepler", //az array harmadik elem masodiksor3 tulajdonság ertekadása
        masodiksor4: "Galilei", //az array harmadik elem masodiksor4 tulajdonság ertekadása
    },
    { //array negyedik elem létrehozása a harmadiksor
        harmadiksor1: "Kvantumfizika", //az array negyedik elem harmadiksor1 tulajdonság ertekadása
        harmadiksor2: "XIX-XX. század	", //az array negyedik elem harmadiksor2 tulajdonság ertekadása
        harmadiksor3: "Max Planck", //az array negyedik elem harmadiksor3 tulajdonság ertekadása
        harmadiksor4: "Albert Einstei", //az array negyedik elem harmadiksor4 tulajdonság ertekadása

    },
    { //array ötödik elem létrehozása a negyediksor
        negyediksor1: "Modern fizika	", //az array ötödik elem negyediksor1 tulajdonság ertekadása
        negyediksor2: "XX-XXI. század	", //az array ötödik elem negyediksor2 tulajdonság ertekadása
        negyediksor3: "Richard Feynman	", //az array ötödik elem negyediksor3 tulajdonság ertekadása
        negyediksor4: "Stephen Hawking", //az array ötödik elem negyediksor4 tulajdonság ertekadása

    },
    
]

const tablazat = document.createElement('table') // Létrehozzuk a táblázat változo

document.body.appendChild(tablazat) // hozzá appendáljuk a táblázatot a bodyhoz

const fejlec = document.createElement('thead') // létrehozzuk a fejléc változót

tablazat.appendChild(fejlec) // a táblázathoz hozzá appendáljuk a thedünket

const tr = document.createElement('tr') // létrehozzunk a fejlécünknek a tr-jét
 // hozzá appendáljuk a fejléchez a tr (sort)


const th = document.createElement('th') //th létrehozása
th.innerHTML = array[0].fejlec1 //a cella értéke a létrehozott array elso elemjének a fejlec1 tulajdonságnak az értéke lesz.
tr.appendChild(th) // th hozzá appendálása a tr (fejléc sor)

const th2 = document.createElement('th') //th létrehozása
th2.innerHTML = array[0].fejlec2  //a cella értéke a létrehozott array elso elemjének a fejlec2 tulajdonságnak az értéke lesz.
tr.appendChild(th2) // th hozzá appendálása a tr (fejléc sor)

const th3 = document.createElement('th') //th létrehozása
th3.colSpan = 2; //beállítjuk a colspant
th3.innerHTML = array[0].fejlec3 //a cella értéke a létrehozott array elso elemjének a fejlec3 tulajdonságnak az értéke lesz.
tr.appendChild(th3) // th hozzá appendálása a tr (fejléc sor)

fejlec.appendChild(tr) //fejléchez hozzá appendáljuk a tr-t (fejléc-sor)

/////////////////////////////////////////////////////

const tbody = document.createElement('tbody') // lérehozzuk a tbody változót

tablazat.appendChild(tbody) //hozzátesszük a bodyhoz a tbody változót

const firstrowtr = document.createElement('tr') // megcsináljuk az első sorunkat 

const cella1 = document.createElement('td') // az első td cella létrehozás
cella1.innerHTML = array[1].elsosor1 //a cella értéke a létrehozott array masodik elemjének az elsosor1 tulajdonságnak az értéke lesz.
firstrowtr.appendChild(cella1) // cella hozzáfűzése az első sorhoz

const cella2 = document.createElement('td')  // a második td cella létrehozás
cella2.innerHTML = array[1].elsosor2 //a cella értéke a létrehozott array masodik elemjének az elsosor2 tulajdonságnak az értéke lesz.
firstrowtr.appendChild(cella2) // cella hozzáfűzése az első sorhoz

const cella3 = document.createElement('td')  // a harmadik td cella létrehozás
cella3.innerHTML = array[1].elsosor3 //a cella értéke a létrehozott array masodik elemjének az elsosor3 tulajdonságnak az értéke lesz.
cella3.colSpan = 2 //beállítjuk a colspant
firstrowtr.appendChild(cella3) // cella hozzáfűzése az első sorhoz

tbody.appendChild(firstrowtr) // a tbodyhoz hozzáfűzzük az első sorunkat

const secondrow = document.createElement('tr') // megcsináljuk a második sorunkat 

const second1 = document.createElement('td') // az első td cella létrehozás
second1.innerHTML = array[2].masodiksor1 //a cella értéke a létrehozott array harmadik elemjének a masodiksor1 tulajdonságnak az értéke lesz.
secondrow.appendChild(second1) // cella hozzáfűzése az második sorhoz

const second2 = document.createElement('td') // a második td cella létrehozás
second2.innerHTML = array[2].masodiksor2 //a cella értéke a létrehozott array harmadik elemjének a masodiksor2 tulajdonságnak az értéke lesz.
secondrow.appendChild(second2) // cella hozzáfűzése az második sorhoz

const second3 = document.createElement('td') // a harmadik td cella létrehozás
second3.innerHTML = array[2].masodiksor3 //a cella értéke a létrehozott array harmadik elemjének a masodiksor3 tulajdonságnak az értéke lesz.
secondrow.appendChild(second3)// cella hozzáfűzése az második sorhoz

const second4 = document.createElement('td') // a negyedik td cella létrehozás
second4.innerHTML = array[2].masodiksor4 //a cella értéke a létrehozott array harmadik elemjének a masodiksor4 tulajdonságnak az értéke lesz.
secondrow.appendChild(second4) // cella hozzáfűzése az második sorhoz

tbody.appendChild(secondrow) // a tbodyhoz hozzáfűzzük a második sorunkat

const thirdrow = document.createElement('tr') // megcsináljuk a harmadik sorunkat 


const third1 = document.createElement('td') // az első td cella létrehozás
third1.innerHTML = array[3].harmadiksor1 //a cella értéke a létrehozott array negyedik elemjének a harmadiksor1 tulajdonságnak az értéke lesz.
thirdrow.appendChild(third1) // cella hozzáfűzése az harmadik sorhoz

const third2 = document.createElement('td') // a második td cella létrehozás
third2.innerHTML = array[3].harmadiksor2 //a cella értéke a létrehozott array negyedik elemjének a harmadiksor2 tulajdonságnak az értéke lesz.
thirdrow.appendChild(third2) // cella hozzáfűzése az harmadik sorhoz

const third3 = document.createElement('td') // a harmadik td cella létrehozás
third3.innerHTML = array[3].harmadiksor3 //a cella értéke a létrehozott array negyedik elemjének a harmadiksor3 tulajdonságnak az értéke lesz.
thirdrow.appendChild(third3)// cella hozzáfűzése az harmadik sorhoz

const third4 = document.createElement('td') // a negyedik td cella létrehozás
third4.innerHTML = array[3].harmadiksor4 //a cella értéke a létrehozott array negyedik elemjének a harmadiksor4 tulajdonságnak az értéke lesz.
thirdrow.appendChild(third4) // cella hozzáfűzése az harmadik sorhoz

tbody.appendChild(thirdrow) // a tbodyhoz hozzáfűzzük a harmadik sorunkat


const fourthrow = document.createElement('tr') // megcsináljuk a negyedik sorunkat 


const fourthrow1 = document.createElement('td') // az első td cella létrehozás
fourthrow1.innerHTML = array[4].negyediksor1 //a cella értéke a létrehozott array ötödik elemjének a negyediksor1 tulajdonságnak az értéke lesz.
fourthrow.appendChild(fourthrow1) // cella hozzáfűzése az negyedik sorhoz

const fourthrow2 = document.createElement('td') // a második td cella létrehozás
fourthrow2.innerHTML =array[4].negyediksor2 //a cella értéke a létrehozott array ötödik elemjének a negyediksor2 tulajdonságnak az értéke lesz.
fourthrow.appendChild(fourthrow2) // cella hozzáfűzése az negyedik sorhoz

const fourthrow3 = document.createElement('td') // a harmadik td cella létrehozás
fourthrow3.innerHTML = array[4].negyediksor3 //a cella értéke a létrehozott array ötödik elemjének a negyediksor3 tulajdonságnak az értéke lesz.
fourthrow.appendChild(fourthrow3) // cella hozzáfűzése az negyedik sorhoz

const fourthrow4 = document.createElement('td') // a negyedik td cella létrehozás
fourthrow4.innerHTML = array[4].negyediksor4 //a cella értéke a létrehozott array ötödik elemjének a negyediksor4 tulajdonságnak az értéke lesz.
fourthrow.appendChild(fourthrow4) // cella hozzáfűzése az negyedik sorhoz


tbody.appendChild(fourthrow) // a tbodyhoz hozzáfűzzük a negyedik sorunkat 