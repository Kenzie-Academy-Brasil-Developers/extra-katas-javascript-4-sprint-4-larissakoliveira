const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";

const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];

const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit";

let pai = document.getElementsByTagName("body")[0];

function showResults(valor){
    let novoElemento = document.createElement("div");
    novoElemento.textContent = JSON.stringify(valor);
    pai.appendChild(novoElemento)
}

function titulo(texto) {
    let titulo = document.createElement('h4');
    titulo.innerText = texto
    pai.appendChild(titulo);
} 

titulo('kata1')

function kata1() {
    let resultado = gotCitiesCSV.split(',')
    showResults(resultado)
   return resultado
}

 kata1();

 titulo('kata2')

 function kata2() {
    let resultado = bestThing.split(' ')
    showResults(resultado)
   return resultado
}

kata2()

titulo('kata3')

function kata3() {
    let resultado = gotCitiesCSV.split(',').join(';')
    showResults(resultado)
   return resultado
}

kata3()

titulo('kata4')

function kata4() {
    let resultado = lotrCitiesArray.join(',')
    showResults(resultado)
   return resultado
}

kata4()

titulo('kata5')

function kata5() {
    let resultado = lotrCitiesArray.slice(0, 5)
    showResults(resultado)
    return resultado
}

kata5()

titulo('kata6')

function kata6() {
    let resultado = lotrCitiesArray.slice(-5)
    showResults(resultado)
    return resultado
}

kata6()

titulo('kata7')

function kata7() {
    let resultado = lotrCitiesArray.slice(2, 5)
    showResults(resultado)
    return resultado
}

kata7()

titulo('kata8')

function kata8() {
    let resultado = lotrCitiesArray.splice(2, 1)
    showResults(lotrCitiesArray)
    return lotrCitiesArray
}

kata8()

titulo('kata9')

function kata9() {
    let resultado = lotrCitiesArray.splice(5, Number.MAX_VALUE)
    showResults(lotrCitiesArray)
    return lotrCitiesArray
}

kata9()

titulo('kata10')

function kata10() {
    let resultado = lotrCitiesArray.splice(2, 0, 'Rohan')
    showResults(lotrCitiesArray)
    return lotrCitiesArray
}

kata10()


titulo('kata11')

function kata11() {
    let resultado = lotrCitiesArray.splice(5, 1, 'Deadest Marshes')
    showResults(lotrCitiesArray)
    return lotrCitiesArray
}

kata11()

titulo('kata12')

function kata12() {
    let resultado = bestThing.slice(0, 14)
    showResults(resultado)
    return resultado
}

kata12() 

titulo('kata13')

function kata13() {
    let resultado = bestThing.slice(-12)
    showResults(resultado)
    return resultado
}

kata13()    

titulo('kata14')

function kata14() {
    let resultado = bestThing.slice(23, 38)
    showResults(resultado)
    return resultado
}

kata14()   

titulo('kata15')

function kata15() {
    let resultado = bestThing.substring(bestThing.length - 12)
    showResults(resultado)
    return resultado
}

kata15()   

titulo('kata16')

function kata16() {
    let resultado = bestThing.substring(23, 38)
    showResults(resultado)
    return resultado
}

kata16()   

titulo('kata17')

function kata17() {
    let resultado = lotrCitiesArray.pop()
    showResults(lotrCitiesArray)
    return lotrCitiesArray
}

kata17() 

titulo('kata18')

function kata18() {
    let resultado = lotrCitiesArray.push("Deadest Marshes")
    showResults(lotrCitiesArray)
    return lotrCitiesArray
}

kata18() 


titulo('kata19')

function kata19() {
    let resultado = lotrCitiesArray.shift()
    showResults(lotrCitiesArray)
    return lotrCitiesArray
}

kata19() 

titulo('kata20')

function kata20() {
    let resultado = lotrCitiesArray.unshift("Mordor")
    showResults(lotrCitiesArray)
    return lotrCitiesArray
}

kata20() 