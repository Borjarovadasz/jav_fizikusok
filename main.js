const fejlec  = //létrehozunk egy fejléc arrayt objektumokkal
    [
        {
            szoveg: "Fizika terület" //elso objektomunk amiben eltároljuk a szöveget
        },
        {
            szoveg: "Időszak" //második objektomunk amiben eltároljuk a szöveget
        },
        {
            szoveg: "Képviselők", colSpan: 2 //harmadik objektomunk amiben eltároljuk a szöveget és adunk neki colspan-2 is
        }
    ]

    const form1 = [ //létrehozunk egy fejléc arrayt objektumokkal
        { //elso objektumunk
            label: "Terület megnevezése", //adunk egy labelt és egy értéket hozzá amit majd használunk a form generálásnál
            id: "fizika", //adunk egy idt és egy értéket hozzá amit majd használunk a form generálásnál
            for:"fizika" //adunk egy for-t és egy értéket hozzá amit majd használunk a form generálásnál
        },
        { //második objektumunk
            label: "Időszak", //adunk egy és egy értéket hozzá amit majd használunk a form generálásnál
            id: "ido", //adunk egy idt és egy értéket hozzá amit majd használunk a form generálásnál
            for:"ido" //adunk egy for-t és egy értéket hozzá amit majd használunk a form generálásnál
        },
        { //harmadik objektumunk
            label: "Első Tudos:", //adunk egy labelt és egy értéket hozzá amit majd használunk a form generálásnál
            id: "tudos1", //adunk egy id-t és egy értéket hozzá amit majd használunk a form generálásnál
            for:"tudos1" //adunk egy for-t és egy értéket hozzá amit majd használunk a form generálásnál
        },
        { //negyedik objektumunk
            label: "Második Tudos:", //adunk egy labelt és egy értéket hozzá amit majd használunk a form generálásnál
            id: "tudos2", //adunk egy id-t és egy értéket hozzá amit majd használunk a form generálásnál
            for:"tudos1" //adunk egy for-t és egy értéket hozzá amit majd használunk a form generálásnál
        }
    ]


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
/**
 * Ez a függvény egy array-ból generál le egy formot, a bemeneti paraméter pedig egy array.
 * @param {array} arrayform 
 */
function formgenerate(arrayform) { //formgenerate függvény létrehozása
    const form = document.createElement('form') //csinálom egy form változó alatt egy formot
    form.id = "form" // a form id-je legyen form
   for(let i = 0; i < arrayform.length; i++) { //végig iterálunk a form1 arrayünkön
        const div = document.createElement('div') //csinálunk egy div-et div névvel
        const label = document.createElement('label') //csinálunk egy labelt-
        label.htmlFor  = arrayform[i].for //a label-nek a "fos"-os tulajdonság értéke az legyen mindig az adott ciklus i-nek az arrayben a "for"-hoz hozzákapcsolt érték.
        label.innerHTML = arrayform[i].label //a label-nek legyen az innerhtml-je az adott ciklis i-nek az arrayban a "label"-hez kapcsolt érték.

        const input = document.createElement('input') //csinálunk egy inputot
        input.type = 'text' //az input typeja legyen text
        input.id = arrayform[i].id //az input id-je legyen mindig az arrayban az id tulajdonság mögötti értékek valamelyik attól függ hol tartunk az iterácion. 
        input.name = arrayform[i].id //az input name-je legyen szintén ugyan az mint az id mert az ugyan az.

        const br = document.createElement('br')  // csinálunk egy br-t hogy ne legyn csúnya és ne legyen olyan közel egymáshoz minden

        div.appendChild(label) //a fődivunkhöz hozzátesszük a labelt amiben már van sok minden (for, innerhtml)
        div.appendChild(br) //a fődivunkhöz hozzátesszük a br-t hogy itt mér tényleg lássuk hogy szép lesz
        div.appendChild(input) //a fődivunkhöz az inputot amiben itt is már van (id,name,type)
        
        
        const errordiv = document.createElement('div') //csináluk egy divet errordiv névvel
        errordiv.className = 'error' //az errordivnek a classneve az legyen "error"
        div.appendChild(errordiv) //majd szépen hozzátesszük a fődivhez ezt az uj divet. Persze mivel egy forcikluson belül vagyunk ebből is sok lesz vagyis amilyen hosszú az arrayünk.

 
       
        form.appendChild(div) //majd végül a fődivet amiben van már label, input, br, errordiv is hozzátesszük a formhoz.
       
    
   }
   const button = document.createElement('button') //csinálunk egy gombot
   button.innerHTML = "Hozzáadás" //a gombnak legyen az innerhtml-je a "Hozzáadás"
   document.body.appendChild(form) //a bodyhoz hozzátesszük a formot
   form.appendChild(button) //majd a gombot pedig a formhoz
}

formgenerate(form1) //majd meghívjuk ezt a csodálatos függvényt

const tablazat = document.createElement('table') // Létrehozzuk a táblázat változo
document.body.appendChild(tablazat) // hozzá appendáljuk a táblázatot a bodyhoz
const header = document.createElement('thead') // létrehozunk egy thead-et
tablazat.appendChild(header) //hozzátesszük a táblázatunkhoz
const tr = document.createElement('tr') //létrehozunk egy tr-sort
header.appendChild(tr) //a tr-t hozzátesszük a headerünkhöz (thead)
const tbody = document.createElement('tbody') //csinálunk egy tbodyt
tablazat.appendChild(tbody) //a tbody-t pedig a táblázatunkhoz fűzünk.
const th = document.createElement('th')

/**
 * Ez a header az az a fejlécgenerátor függvény aminek két bemeneti paramétere van. Az egyik az maga az objektum
 * amiből majd generálja a fejlécet. A másik pedig Egy HTMLElement ami esetünkben az a tr amit elöbb a kódban 
 * létrehoztunk és ahhoz appendeljük hozzá.
 * @param {HTMLTableRowElement} sor 
 * @param {object} fejlecobjk 
 */
function headergen(sor,fejlecobjk){
    for (const adat of fejlecobjk) { // for ciklussal az az adatokat nézzük az objektumból
        const cella = document.createElement('th')
        cella.innerHTML = adat.szoveg// a th elem belső HTML-jét az aktuális adat értékére állítjuk
    
        sor.appendChild(cella); // hozzáadjuk a sorhoz
        if (adat.colSpan) {  //hogyha a adat a harmadik elem akkor legyen colspan 2
            cella.colSpan = adat.colSpan // colSpan beállítása a th elemre
        }
     
    }
}
headergen(tr,fejlec)



/**
 * Ez a tablegenerate tömb amivel generáljuk a táblát. Bemeneti paraméteri egy tomb és az a tbody amihez majd appendáljuk
 *a sorokot és a cellákat. Ez a tbodyt már létrehoztuk a kódban az elején.
  A függvényen belül csinálunk sorokat a sorokhoz cellákat amiknek az értékeit az array-ből vesszük ki.
 * @param {array} tomb 
 * @param {HTMLTableSectionElement} tbody 
 *
 */
function tablegenerate(tomb,tbody) {

    for(data of tomb) { //végigiterálok egy for ciklussal az array-en
        const sor = document.createElement('tr') // csinálok egy sort
    
        tbody.appendChild(sor) //a fő táblázathoz hozzácsatolom a sort
    
        const elsosor = document.createElement('td') //elsosor létrehozása
        elsosor.innerHTML = data.fizikaterulet //elsosor innerHTML-je a az array-ben a mostanielement (i)-nek a sor1.je
        sor.appendChild(elsosor) //hozzátesszük a sorhoz az elso oszlop elso elemjét 
    
        const masodiksor = document.createElement('td') //masodiksor létrehozása
        masodiksor.innerHTML = data.idoszak //masodiksor innerHTML-je a az array-ben a mostanielement (i)-nek a sor2.je
        sor.appendChild(masodiksor) //hozzátesszük a sorhoz az elso oszlop masodik elemjét 
    
        const harmadiksor = document.createElement('td') //harmadiksor létrehozása
        harmadiksor.innerHTML = data.tudos1 //harmadiksor innerHTML-je a az array-ben a mostanielement (i)-nek a sor3.je
        sor.appendChild(harmadiksor) //hozzátesszük a sorhoz az elso oszlop harmadik elemjét 
        
        if (!data.tudos2) {
            harmadiksor.colSpan = 2 // ha nincs tudos2 akkor colspan 2
        }else {
            const negyediksor = document.createElement('td') //negyediksor létrehozása
            negyediksor.innerHTML = data.tudos2 //negyediksor innerHTML-je a az array-ben a mostanielement (i)-nek a sor4.je
              sor.appendChild(negyediksor) //hozzátesszük a sorhoz az elso oszlop negyedik elemjét 
            
        }
            
        tbody.appendChild(sor)
       
}

}


tablegenerate(array,tbody)

const form = document.getElementById('form') // megszerezzük az id alapján a formot


form.addEventListener('submit', function(e) {

    e.preventDefault(); //az alapértelmezett böngészű lefusson megakadályozza
    const terulet = document.getElementById("fizika") //elkerem a fizika idt és beteszem az itt létrehozott változóba
    const idoszak = document.getElementById("ido") //elkerem a ido idt és beteszem az itt létrehozott változóba
    const tudos1 = document.getElementById("tudos1") //elkerem a tudos1 idt és beteszem az itt létrehozott változóba
    const tudos2 = document.getElementById("tudos2") //elkerem a tudos2 idt és beteszem az itt létrehozott változóba
    
    
    const teruletertek = terulet.value //itt egy másik változóba belerakom az elöbb elkért terulet változó értékét
    console.log(teruletertek)
    const idoszakertek = idoszak.value //itt egy másik változóba belerakom az elöbb elkért idoszak változó értékét

    let tudos1ertek = tudos1.value //itt egy másik változóba belerakom az elöbb elkért tudos1 változó értékét

    let tudos2ertek = tudos2.value//itt egy másik változóba belerakom az elöbb elkért tudos2 változó értékét
    
    let valid = true //csinálunk egy valid változot aminek true lesz az értéke

    if(!teruletertek || !idoszakertek || !tudos1ertek && !tudos2ertek) { //hogy ha a teruletertek vagy az idoszakertek "" vagy undefined akkor a valid legyen false amúgy meg true
        valid = false //legyen false
    }else {
        valid = true //legyen true
    }

    const form = e.currentTarget  
    const errorhtml = form.querySelectorAll('.error') //a formon belül mindenet aminek error classal rendelkezik beletesszük egy változoba
    for(const errorelement of errorhtml){  //minden egyes element ami ebben az errorhtml-ben van 
        errorelement.innerHTML = '' //annak legyen az innerhtml-je üres string. (igy eltűnik majd a validácios szöveg ha tényleg irunk valamit)
    }    
    teridocheck(idoszak, "Kötelező időszakot megadni") //meghívjuk a teridochecket és hogy a függvénynek milyen bemeneti paraméterei lesznek
    teridocheck(terulet, "Kötelező területet megadni") //meghívjuk a teridochecket és hogy a függvénynek milyen bemeneti paraméterei lesznek

    tudoscheck(tudos1, "Legalább egy tudos megadása kötelező!", tudos2) //meghívjuk a tudoschecket és hogy a függvénynek milyen bemeneti paraméterei lesznek
    tudoscheck(tudos2, "Legalább egy tudos megadása kötelező!", tudos1) //meghívjuk a tudoschecket és hogy a függvénynek milyen bemeneti paraméterei lesznek
  
    if(!tudos1ertek && tudos2ertek) { //ha a tudos1ertek undefined és "" és a tudos2ertek létezik. akkor
        tudos1ertek = tudos2ertek //tudos1ertek ami ugye üres abba belerakjuk a tudos2erteket
        tudos2ertek = "" //majd nullázzuk a tudos2erteket hogy az ne irodjon ki 
       
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
    
    tablegenerate(array,tbody) // és az ujonnan belerakott dologgal ujragenerálom a táblát.
    }

   
})

/**Ez a teridocheck függvény, ami megnézi hogy a felhasználi írt e be a formba időt vagy területet. Ha nem írt akkor az 
 * adott alá írjuk hogy kötelező
 * 
 * @param {HTMLElement} ertek 
 * @param {string} uzenet 
 */

function teridocheck(ertek, uzenet) { // teridocheck függvény aminek a bemeneti paraméteri ertek és uzenet
    if (!ertek.value) { // ha az érték nek a tulajdonsága undefined vagy "" 
        const parentElement = ertek.parentElement; //akkor létrehozunk egy parentelement változot és eltároljuk a bejővő értéknek a parentelementjét
        const errormsg = parentElement.querySelector('.error'); //majd egy errormsg változóban a bejövő értéknek parentelementjében megkeressük az első error classal rendekező dolgot.
        if (errormsg) { //ha az errormsg van akkor 
            errormsg.innerHTML = uzenet; //legyen a megadott uzenetünk az
        }
    }
}

/**Hasonló történik itt is ha nem írt egyik tudos mezőben a formban akkor írjuk ki a szöveget. Ha csak az egyikbe írt 
 * az már nekünk elég lesz.
 * 
 * @param {HTMLElement} ertek 
 * @param {string} uzenet 
 * @param {HTMLElement} masik 
 */
    function tudoscheck(ertek, uzenet, masik) { //tudoscheck függvény aminek a bemeneti paraméteri ertek, uzenet és másik
        if (!ertek.value) {  // ha az érték nek a tulajdonsága undefined vagy "" 
            const parentElement = ertek.parentElement; //akkor létrehozunk egy parentelement változot és eltároljuk a bejővő értéknek a parentelementjét
            const errormsg = parentElement.querySelector('.error');  //majd egy errormsg változóban a bejövő értéknek parentelementjében megkeressük az első error classal rendekező dolgot.
            if (errormsg) { //ha az errormsg van akkor 
                errormsg.innerHTML = uzenet; //legyen a megadott uzenetünk az
        
            } if(masik.value) { //ha van a másik valueja szóval nem undefined vagy ""
                errormsg.innerHTML = "" //akkor viszont legyen a másiknak az errorja üres mivel csak egy tudost akarunk
            }
        }
        }

