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
