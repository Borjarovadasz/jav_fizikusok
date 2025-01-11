
const tablazat = document.createElement('table') // Létrehozzuk a táblázat változo

document.body.appendChild(tablazat) // hozzá appendáljuk a táblázatot a bodyhoz

const fejlec = document.createElement('thead') // létrehozzuk a fejléc változót

tablazat.appendChild(fejlec) // a táblázathoz hozzá appendáljuk a thedünket

const tr = document.createElement('tr') // létrehozzunk a fejlécünknek a tr-jét
fejlec.appendChild(tr) // hozzá appendáljuk a fejléchez a tr (sort)


const th = document.createElement('th') //th létrehozása
th.innerHTML = "Fizika területe" // th értékmegadása
tr.appendChild(th) // th hozzá appendálása a tr (fejléc sor)

const th2 = document.createElement('th') //th létrehozása
th2.innerHTML = "Időszak"  // th értékmegadása
tr.appendChild(th2) // th hozzá appendálása a tr (fejléc sor)

const th3 = document.createElement('th') //th létrehozása
th3.innerHTML = "Képviselők" // th értékmegadása
tr.appendChild(th3) // th hozzá appendálása a tr (fejléc sor)



/////////////////////////////////////////////////////

const tbody = document.createElement('tbody') // lérehozzuk a tbody változót

document.body.appendChild(tbody) //hozzátesszük a bodyhoz a tbody változót

const firstrowtr = document.createElement('tr') // megcsináljuk az első sorunkat 

const cella1 = document.createElement('td') // az első td cella létrehozás
cella1.innerHTML = "Optika" // td cella értékadás
firstrowtr.appendChild(cella1) // cella hozzáfűzése az első sorhoz

const cella2 = document.createElement('td')  // a második td cella létrehozás
cella2.innerHTML = "XI. század" // td cella értékadás
firstrowtr.appendChild(cella2) // cella hozzáfűzése az első sorhoz

const cella3 = document.createElement('td')  // a harmadik td cella létrehozás
cella3.innerHTML = "Alhazen" // td cella értékadás
firstrowtr.appendChild(cella3) // cella hozzáfűzése az első sorhoz

tbody.appendChild(firstrowtr) // a tbodyhoz hozzáfűzzük az első sorunkat

const secondrow = document.createElement('tr') // megcsináljuk a második sorunkat 

const second1 = document.createElement('td') // az első td cella létrehozás
second1.innerHTML = "Asztronómia" // td cella értékadás
secondrow.appendChild(second1) // cella hozzáfűzése az második sorhoz

const second2 = document.createElement('td') // a második td cella létrehozás
second2.innerHTML = "reneszánsz" // td cella értékadás
secondrow.appendChild(second2) // cella hozzáfűzése az második sorhoz

const second3 = document.createElement('td') // a harmadik td cella létrehozás
second3.innerHTML = "Kepler" // td cella értékadás
secondrow.appendChild(second3)// cella hozzáfűzése az második sorhoz

const second4 = document.createElement('td') // a negyedik td cella létrehozás
second4.innerHTML = "Galilei" // td cella értékadás
secondrow.appendChild(second4) // cella hozzáfűzése az második sorhoz

tbody.appendChild(secondrow) // a tbodyhoz hozzáfűzzük a második sorunkat

const thirdrow = document.createElement('tr') // megcsináljuk a harmadik sorunkat 


const third1 = document.createElement('td') // az első td cella létrehozás
third1.innerHTML = "Kvantumfizika" // td cella értékadás
thirdrow.appendChild(third1) // cella hozzáfűzése az harmadik sorhoz

const third2 = document.createElement('td') // a második td cella létrehozás
third2.innerHTML = "XIX-XX. század" // td cella értékadás
thirdrow.appendChild(third2) // cella hozzáfűzése az harmadik sorhoz

const third3 = document.createElement('td') // a harmadik td cella létrehozás
third3.innerHTML = "Max Planck" // td cella értékadás
thirdrow.appendChild(third3)// cella hozzáfűzése az harmadik sorhoz

const third4 = document.createElement('td') // a negyedik td cella létrehozás
third4.innerHTML = "Albert Einstein" // td cella értékadás
thirdrow.appendChild(third4) // cella hozzáfűzése az harmadik sorhoz

tbody.appendChild(thirdrow) // a tbodyhoz hozzáfűzzük a harmadik sorunkat


const fourthrow = document.createElement('tr') // megcsináljuk a negyedik sorunkat 


const fourthrow1 = document.createElement('td') // az első td cella létrehozás
fourthrow1.innerHTML = "Modern fizika" // td cella értékadás
fourthrow.appendChild(fourthrow1) // cella hozzáfűzése az negyedik sorhoz

const fourthrow2 = document.createElement('td') // a második td cella létrehozás
fourthrow2.innerHTML = "XX-XXI. század" // td cella értékadás
fourthrow.appendChild(fourthrow2) // cella hozzáfűzése az negyedik sorhoz

const fourthrow3 = document.createElement('td') // a harmadik td cella létrehozás
fourthrow3.innerHTML = "Richard Feynman"// td cella értékadás
fourthrow.appendChild(fourthrow3) // cella hozzáfűzése az negyedik sorhoz

const fourthrow4 = document.createElement('td') // a negyedik td cella létrehozás
fourthrow4.innerHTML = "Stephen Hawking" // td cella értékadás
fourthrow.appendChild(fourthrow4) // cella hozzáfűzése az negyedik sorhoz


tbody.appendChild(fourthrow) // a tbodyhoz hozzáfűzzük a negyedik sorunkat 