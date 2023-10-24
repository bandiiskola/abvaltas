var fele="Egy"
var c=null

const Egy = () => {
    fele="Egy"
    c = setInterval(Valtas,1000)
}


const Fel = () => {
    fele="Fel"
    c = setInterval(Valtas,500)
}

const Valt = () => {
    clearInterval(c)
    if (fele=="Egy") {
        fele="Fel"
        Fel()
    }
    else {
        fele="Egy"
        Egy()
    }
}

const Valtas=() => {
    if(document.getElementById("beiras").innerHTML=="A") {
        document.getElementById("beiras").innerHTML="B"
    }
    else {
        document.getElementById("beiras").innerHTML="A"
    }
}