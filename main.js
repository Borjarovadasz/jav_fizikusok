const fejlec  = 
    //headerarray létrehozása
    {
        elso: "Fizika terület", //az objektum elso tulajdonság ertekadása
        masodik: "Időszak", //az objektum  masodik tulajdonság ertekadása
        harmadik: "Képviselők", //az objektum harmadik tulajdonság ertekadása
    }


const array = [ 
    { //array elso elem létrehozása az elsosor
        fizikaterulet: "Optika", //az array elso elem sor1 tulajdonság ertekadása
        idoszak: "XI. század", //az array elso elem sor2 tulajdonság ertekadása
        tudos1: "Alhazen", //az array elso elem sor3 tulajdonság ertekadása
    
    },
    { //array masodik elem létrehozása a masodiksor
        fizikaterulet: "Asztronómia", //az array masodik elem sor1 tulajdonság ertekadása
        idoszak: "reneszánsz", //az array masodik elem sor2 tulajdonság ertekadása
        tudos1: "Kepler", //az array masodik elem sor3 tulajdonság ertekadása
        tudos2: "Galilei", //az array masodik elem sor4 tulajdonság ertekadása
    },
    { //array harmadik elem létrehozása a harmadiksor
        fizikaterulet: "Kvantumfizika", //az array harmadik elem sor1 tulajdonság ertekadása
        idoszak: "XIX-XX. század	", //az array harmadik elem sor2 tulajdonság ertekadása
        tudos1: "Max Planck", //az array harmadik elem sor3 tulajdonság ertekadása
        tudos2: "Albert Einstei", //az array harmadik elem sor4 tulajdonság ertekadása

    },
    { //array negyedik elem létrehozása a negyediksor
        fizikaterulet: "Modern fizika	", //az array negyedik elem sor1 tulajdonság ertekadása
        idoszak: "XX-XXI. század	", //az array negyedik elem sor2 tulajdonság ertekadása
        tudos1: "Richard Feynman	", //az array negyedik elem sor3 tulajdonság ertekadása
        tudos2: "Stephen Hawking", //az array negyedik elem sor4 tulajdonság ertekadása

    },
    
]

const tablazat = document.createElement('table') // Létrehozzuk a táblázat változo
document.body.appendChild(tablazat) // hozzá appendáljuk a táblázatot a bodyhoz
const header = document.createElement('thead') // létrehozunk egy thead-et
tablazat.appendChild(header) //hozzátesszük a táblázatunkhoz
const tr = document.createElement('tr') //létrehozunk egy tr-sort
header.appendChild(tr) //a tr-t hozzátesszük a headerünkhöz (thead)
const tbody = document.createElement('tbody') //csinálunk egy tbodyt
tablazat.appendChild(tbody) //a tbody-t pedig a táblázatunkhoz fűzünk.

for (let adat in fejlec) { // for ciklussal az az adatokat nézzük az objektumból
    const th = document.createElement('th'); // létrehozunk egy th elemet
    th.innerHTML = fejlec[adat]// a th elem belső HTML-jét az aktuális adat értékére állítjuk
    tr.appendChild(th); // hozzáadjuk a sorhoz

    if (adat === 'harmadik') {  //hogyha a adat a harmadik elem akkor legyen colspan 2
        th.colSpan = 2; // colSpan beállítása a th elemre
    }
}



function tablegenerate() {

    
    for(let i = 0; i < array.length; i++ ) { //végigiterálok egy for ciklussal az array-en
        const mostanielement = array[i]  //az i-dik element a mostanielement lesz
        const sor = document.createElement('tr') // csinálok egy sort
    
        tablazat.appendChild(sor) //a fő táblázathoz hozzácsatolom a sort
    
        const elsosor = document.createElement('td') //elsosor létrehozása
        elsosor.innerHTML = mostanielement.fizikaterulet //elsosor innerHTML-je a az array-ben a mostanielement (i)-nek a sor1.je
        sor.appendChild(elsosor) //hozzátesszük a sorhoz az elso oszlop elso elemjét 
    
        const masodiksor = document.createElement('td') //masodiksor létrehozása
        masodiksor.innerHTML = mostanielement.idoszak //masodiksor innerHTML-je a az array-ben a mostanielement (i)-nek a sor2.je
        sor.appendChild(masodiksor) //hozzátesszük a sorhoz az elso oszlop masodik elemjét 
    
        const harmadiksor = document.createElement('td') //harmadiksor létrehozása
        harmadiksor.innerHTML = mostanielement.tudos1 //harmadiksor innerHTML-je a az array-ben a mostanielement (i)-nek a sor3.je
        sor.appendChild(harmadiksor) //hozzátesszük a sorhoz az elso oszlop harmadik elemjét 
        
        if (!mostanielement.tudos2) {
            harmadiksor.colSpan = 2 // ha nincs tudos2 akkor colspan 2
        }else {
            const negyediksor = document.createElement('td') //negyediksor létrehozása
            negyediksor.innerHTML = mostanielement.tudos2 //negyediksor innerHTML-je a az array-ben a mostanielement (i)-nek a sor4.je
              sor.appendChild(negyediksor) //hozzátesszük a sorhoz az elso oszlop negyedik elemjét 
            
        }
            
        tbody.appendChild(sor)
       
}

}

tablegenerate()

const form = document.getElementById('form') // megszerezzük az id alapján a formot

form.addEventListener('submit', function(e) {

    e.preventDefault(); //az alapértelmezett böngészű lefusson megakadályozza
    const terulet = document.getElementById("fizika") //elkerem a fizika idt és beteszem az itt létrehozott változóba
    const idoszak = document.getElementById("ido") //elkerem a ido idt és beteszem az itt létrehozott változóba
    const tudos1 = document.getElementById("tudos1") //elkerem a tudos1 idt és beteszem az itt létrehozott változóba
    const tudos2 = document.getElementById("tudos2") //elkerem a tudos2 idt és beteszem az itt létrehozott változóba
    
    
    const teruletertek = terulet.value //itt egy másik változóba belerakom az elöbb elkért terulet változó értékét

    const idoszakertek = idoszak.value //itt egy másik változóba belerakom az elöbb elkért idoszak változó értékét

    const tudos1ertek = tudos1.value //itt egy másik változóba belerakom az elöbb elkért tudos1 változó értékét

    const tudos2ertek = tudos2.value//itt egy másik változóba belerakom az elöbb elkért tudos2 változó értékét
    
    let valid = true

    if(!teruletertek || !idoszakertek) {
        valid = false
    }else {
        valid = true
    }

    const form = e.currentTarget
    const errorhtml = form.querySelectorAll('.error')
    for(const errorelement of errorhtml){ 
        errorelement.innerHTML = ''
    }

    if(teruletertek === "") {
        const parentElement = terulet.parentElement; 
        const errormsg = parentElement.querySelector('.error'); 
        if(errormsg != undefined) {
            errormsg.innerHTML = 'Terület megadasa kotelezo'; 
        }
    } 

    if(idoszakertek === "") {
        const parentElement = idoszak.parentElement; 
        const errormsg = parentElement.querySelector('.error'); 
    
        if(errormsg != undefined) {
            errormsg.innerHTML = 'Időszak megadasa kotelezo'; 
            
        } 
    } 
    
    if(tudos1ertek === "") {
        const parentElement = tudos1.parentElement; 
        const errormsg = parentElement.querySelector('.error'); 
    
        if(errormsg != undefined) {
            errormsg.innerHTML = 'Az első tudos megadasa kotelezo'; 
            
        } 
    }
    
    if(tudos2ertek === "") {
        const parentElement = tudos2.parentElement;  //a parentelement azért kell mert igy nézzük meg az adott divet amiben megkerssük az error classt
        const errormsg = parentElement.querySelector('.error'); 
    
        if(errormsg != undefined) {
            errormsg.innerHTML = 'A második tudos  megadasa kotelezo'; 
            
        } 
    } 

   

    
    form.reset()
    if(valid) {
        const ujadat = { // egy uj objektumot hozunk létre 
            fizikaterulet: teruletertek, // az uj fizikateruletnek a teruletertek lesz az értéke
            idoszak : idoszakertek, // az idoszaknak az idoszakerteke lesz az értéke
            tudos1 : tudos1ertek, // a tudos1-nek a tudos1ertek lesz az új értéke
            tudos2 : tudos2ertek // a tudos2-nek a tudos2ertek lesz az új értéke
            
        }
    
        

    array.push(ujadat) //belerakjuk az arrayben ami ugye már létezik ezt az új létrehozott adatobjektumunkat.

    tbody.innerHTML = "" //kitörlöm a táblázatot azért a tbodyt mert abban van igazából az egész táblázat a headerrel nem kell foglalkozni.

    tablegenerate() // és az ujonnan belerakott dologgal ujragenerálom a táblát.
    }

    

})
