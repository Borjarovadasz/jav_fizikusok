const fejlecobj = {    //fejléc objektum létrehozása
    elsoertek : 'Fizika területe', //fejléc elsoertek tulajdonságának értéke
    masodikertek :'Időszak', //fejléc masodikertek  tulajdonságának értéke
    harmadikertek : 'Képviselők' //fejléc harmadikertek  tulajdonságának értéke
}

const elsosor = { //elso sor objektum létrehozása
    elsosor1ertek : 'Optika', //elsosor elso ertek tulajdonságának érték adás
    elsosor2ertek : 'XI. század', //elsosor masodik ertek tulajdonságának érték adás
    elsosor3ertek : 'Alhazen' //elsosor harmadik ertek tulajdonságának érték adás 
}

const masodiksor = { //masodik sor objektum létrehozása
    
    masodiksor1ertek : 'Asztronómia', //masodiksor elso ertek tulajdonságának érték adás
    masodiksor2ertek : 'reneszánsz', //masodiksor masodik ertek tulajdonságának érték adás
    masodiksor3ertek : 'Kepler', //masodiksor harmadik ertek tulajdonságának érték adás
    masodiksor4ertek : 'Galilei', //masodiksor negyedik ertek tulajdonságának érték adás
    }

const harmadiksor = { //harmadik sor objektum létrehozása
    
    
    harmadiksor1ertek : 'Kvantumfizika', //harmadiksor elso ertek tulajdonságának érték adás
    harmadiksor2ertek : 'XIX-XX. század	', //harmadiksor masodik ertek tulajdonságának érték adás
    harmadiksor3ertek : 'Max Planck', //harmadiksor harmadik ertek tulajdonságának érték adás
    harmadiksor4ertek : 'Albert Einstei', //harmadiksor negyedik ertek tulajdonságának érték adás

    }

const negyediksor = { //negyedik sor objektum létrehozása
    negyediksor1ertek : 'Modern fizika', //negyediksor elso ertek tulajdonságának érték adás
    negyediksor2ertek : 'XX-XXI. század', //negyediksor masodik ertek tulajdonságának érték adás
    negyediksor3ertek : 'Richard Feynman', //negyediksor harmadik ertek tulajdonságának érték adás
    negyediksor4ertek : 'Stephen Hawking', //negyediksor negyedik ertek tulajdonságának érték adás
}


const tablazat = document.createElement('table') // Létrehozzuk a táblázat változo

document.body.appendChild(tablazat) // hozzá appendáljuk a táblázatot a bodyhoz

const fejlec = document.createElement('thead') // létrehozzuk a fejléc változót

tablazat.appendChild(fejlec) // a táblázathoz hozzá appendáljuk a thedünket

const tr = document.createElement('tr') // létrehozzunk a fejlécünknek a tr-jét
 // hozzá appendáljuk a fejléchez a tr (sort)


const th = document.createElement('th') //th létrehozása
th.innerHTML = fejlecobj.elsoertek //a cella értéke a létrehozott fejlecobj objektumbol az elsoertek értéke lesz.
tr.appendChild(th) // th hozzá appendálása a tr (fejléc sor)

const th2 = document.createElement('th') //th létrehozása
th2.innerHTML = fejlecobj.masodikertek  //a cella értéke a létrehozott fejlecobj objektumbol az masodikertek értéke lesz.
tr.appendChild(th2) // th hozzá appendálása a tr (fejléc sor)

const th3 = document.createElement('th') //th létrehozása
th3.colSpan = 2; //beállítjuk a colspant
th3.innerHTML = fejlecobj.harmadikertek //a cella értéke a létrehozott fejlecobj objektumbol az harmadikertek értéke lesz.
tr.appendChild(th3) // th hozzá appendálása a tr (fejléc sor)

fejlec.appendChild(tr) //fejléchez hozzá appendáljuk a tr-t (fejléc-sor)

/////////////////////////////////////////////////////

const tbody = document.createElement('tbody') // lérehozzuk a tbody változót

tablazat.appendChild(tbody) //hozzátesszük a bodyhoz a tbody változót

const firstrowtr = document.createElement('tr') // megcsináljuk az első sorunkat 

const cella1 = document.createElement('td') // az első td cella létrehozás
cella1.innerHTML = elsosor.elsosor1ertek //a cella értéke a létrehozott elsosor objektumbol az elsosor1ertek értéke lesz.
firstrowtr.appendChild(cella1) // cella hozzáfűzése az első sorhoz

const cella2 = document.createElement('td')  // a második td cella létrehozás
cella2.innerHTML = elsosor.elsosor2ertek //a cella értéke a létrehozott elsosor objektumbol az elsosor2ertek értéke lesz.
firstrowtr.appendChild(cella2) // cella hozzáfűzése az első sorhoz

const cella3 = document.createElement('td')  // a harmadik td cella létrehozás
cella3.innerHTML = elsosor.elsosor3ertek //a cella értéke a létrehozott elsosor objektumbol az elsosor3ertek értéke lesz.
cella3.colSpan = 2 //beállítjuk a colspant
firstrowtr.appendChild(cella3) // cella hozzáfűzése az első sorhoz

tbody.appendChild(firstrowtr) // a tbodyhoz hozzáfűzzük az első sorunkat

const secondrow = document.createElement('tr') // megcsináljuk a második sorunkat 

const second1 = document.createElement('td') // az első td cella létrehozás
second1.innerHTML = masodiksor.masodiksor1ertek //a cella értéke a létrehozott masodiksor objektumbol a masodiksor1ertek értéke lesz.
secondrow.appendChild(second1) // cella hozzáfűzése az második sorhoz

const second2 = document.createElement('td') // a második td cella létrehozás
second2.innerHTML = masodiksor.masodiksor2ertek //a cella értéke a létrehozott masodiksor objektumbol a masodiksor2ertek értéke lesz.
secondrow.appendChild(second2) // cella hozzáfűzése az második sorhoz

const second3 = document.createElement('td') // a harmadik td cella létrehozás
second3.innerHTML = masodiksor.masodiksor3ertek //a cella értéke a létrehozott masodiksor objektumbol a masodiksor3ertek értéke lesz.
secondrow.appendChild(second3)// cella hozzáfűzése az második sorhoz

const second4 = document.createElement('td') // a negyedik td cella létrehozás
second4.innerHTML = masodiksor.masodiksor4ertek //a cella értéke a létrehozott masodiksor objektumbol a masodiksor4ertek értéke lesz.
secondrow.appendChild(second4) // cella hozzáfűzése az második sorhoz

tbody.appendChild(secondrow) // a tbodyhoz hozzáfűzzük a második sorunkat

const thirdrow = document.createElement('tr') // megcsináljuk a harmadik sorunkat 


const third1 = document.createElement('td') // az első td cella létrehozás
third1.innerHTML = harmadiksor.harmadiksor1ertek //a cella értéke a létrehozott harmadiksor objektumbol a harmadiksor1ertek értéke lesz.
thirdrow.appendChild(third1) // cella hozzáfűzése az harmadik sorhoz

const third2 = document.createElement('td') // a második td cella létrehozás
third2.innerHTML = harmadiksor.harmadiksor2ertek //a cella értéke a létrehozott harmadiksor objektumbol a harmadiksor2ertek értéke lesz.
thirdrow.appendChild(third2) // cella hozzáfűzése az harmadik sorhoz

const third3 = document.createElement('td') // a harmadik td cella létrehozás
third3.innerHTML = harmadiksor.harmadiksor3ertek//a cella értéke a létrehozott harmadiksor objektumbol a harmadiksor3ertek értéke lesz.
thirdrow.appendChild(third3)// cella hozzáfűzése az harmadik sorhoz

const third4 = document.createElement('td') // a negyedik td cella létrehozás
third4.innerHTML = harmadiksor.harmadiksor4ertek //a cella értéke a létrehozott harmadiksor objektumbol a harmadiksor4ertek értéke lesz.
thirdrow.appendChild(third4) // cella hozzáfűzése az harmadik sorhoz

tbody.appendChild(thirdrow) // a tbodyhoz hozzáfűzzük a harmadik sorunkat


const fourthrow = document.createElement('tr') // megcsináljuk a negyedik sorunkat 


const fourthrow1 = document.createElement('td') // az első td cella létrehozás
fourthrow1.innerHTML = negyediksor.negyediksor1ertek //a cella értéke a létrehozott negyediksor objektumbol a negyediksor1ertek értéke lesz.
fourthrow.appendChild(fourthrow1) // cella hozzáfűzése az negyedik sorhoz

const fourthrow2 = document.createElement('td') // a második td cella létrehozás
fourthrow2.innerHTML =negyediksor.negyediksor2ertek //a cella értéke a létrehozott negyediksor objektumbol a negyediksor2ertek értéke lesz.
fourthrow.appendChild(fourthrow2) // cella hozzáfűzése az negyedik sorhoz

const fourthrow3 = document.createElement('td') // a harmadik td cella létrehozás
fourthrow3.innerHTML = negyediksor.negyediksor3ertek//a cella értéke a létrehozott negyediksor objektumbol a negyediksor3ertek értéke lesz.
fourthrow.appendChild(fourthrow3) // cella hozzáfűzése az negyedik sorhoz

const fourthrow4 = document.createElement('td') // a negyedik td cella létrehozás
fourthrow4.innerHTML = negyediksor.negyediksor4ertek //a cella értéke a létrehozott negyediksor objektumbol a negyediksor4ertek értéke lesz.
fourthrow.appendChild(fourthrow4) // cella hozzáfűzése az negyedik sorhoz


tbody.appendChild(fourthrow) // a tbodyhoz hozzáfűzzük a negyedik sorunkat 