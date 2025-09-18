const girasol1 = document.querySelectorAll(".girasol")[0]
const girasol2 = document.querySelectorAll(".girasol")[1]
const girasol3 = document.querySelectorAll(".girasol")[2]
const girasol4 = document.querySelectorAll(".girasol")[3]
const girasol5 = document.querySelectorAll(".girasol")[4]
const girasol6 = document.querySelectorAll(".girasol")[5]
const girasol7 = document.querySelectorAll(".girasol")[6]
const girasol8 = document.querySelectorAll(".girasol")[7]
const girasol9 = document.querySelectorAll(".girasol")[8]
const girasol10 = document.querySelectorAll(".girasol")[9]
const girasol11 = document.querySelectorAll(".girasol")[10]
const girasol12 = document.querySelectorAll(".girasol")[11]
const girasol13 = document.querySelectorAll(".girasol")[12]
const girasol14 = document.querySelectorAll(".girasol")[13]
const girasol15 = document.querySelectorAll(".girasol")[14]
const girasol16 = document.querySelectorAll(".girasol")[15]
const girasol17 = document.querySelectorAll(".girasol")[16]
const girasol18 = document.querySelectorAll(".girasol")[17]



let posX = Math.round(Math.random() * 1100);
let posY = Math.round(Math.random() * 900);


const puntosTxt = document.querySelectorAll("h2")[0]
const tiempoTxt = document.querySelectorAll("h2")[1]
const winDiv = document.querySelector(".win")


let puntos = 0
let tiempo = 30
let intervalo = setInterval(mover, 1000)
let moverGirasol = setInterval(mover, 1000)
let girasolVivo = true
let cantidad = 0

alert("Debes hayar el girasol correcto en el tiempo estimado si no logras con tus 3 vidas fracasaras en la misión")

function mover() {
    posX = Math.round(Math.random() * 500) + "px"
    posY = Math.round(Math.random() * 850) + "px"

    girasol1.style.left = posX = Math.round(Math.random() * 750) + "px";
    girasol1.style.top = posY = Math.round(Math.random() * 400) + "px";

    girasol2.style.left = Math.round(Math.random() * 750) + "px";
    girasol2.style.top = Math.round(Math.random() * 400) + "px";

    girasol3.style.left = Math.round(Math.random() * 750) + "px";
    girasol3.style.top = Math.round(Math.random() * 400) + "px";

    girasol4.style.left = Math.round(Math.random() * 750) + "px";
    girasol4.style.top = Math.round(Math.random() * 400) + "px";

    girasol5.style.left = Math.round(Math.random() * 750) + "px";
    girasol5.style.top = Math.round(Math.random() * 400) + "px";

    girasol6.style.left = Math.round(Math.random() * 750) + "px";
    girasol6.style.top = Math.round(Math.random() * 400) + "px";

    girasol7.style.left = Math.round(Math.random() * 750) + "px";
    girasol7.style.top = Math.round(Math.random() * 400) + "px";

    girasol8.style.left = Math.round(Math.random() * 750) + "px";
    girasol8.style.top = Math.round(Math.random() * 400) + "px";

    girasol9.style.left = Math.round(Math.random() * 750) + "px";
    girasol9.style.top = Math.round(Math.random() * 400) + "px";

    girasol10.style.left = Math.round(Math.random() * 750) + "px";
    girasol10.style.top = Math.round(Math.random() * 400) + "px";

    girasol11.style.left = Math.round(Math.random() * 750) + "px";
    girasol11.style.top = Math.round(Math.random() * 400) + "px";

    girasol12.style.left = Math.round(Math.random() * 750) + "px";
    girasol12.style.top = Math.round(Math.random() * 400) + "px";

    girasol13.style.left = Math.round(Math.random() * 750) + "px";
    girasol13.style.top = Math.round(Math.random() * 400) + "px";

    girasol14.style.left = Math.round(Math.random() * 750) + "px";
    girasol14.style.top = Math.round(Math.random() * 900) + "px";

    girasol15.style.left = Math.round(Math.random() * 750) + "px";
    girasol15.style.top = Math.round(Math.random() * 400) + "px";

    girasol16.style.left = Math.round(Math.random() * 750) + "px";
    girasol16.style.top = Math.round(Math.random() * 400) + "px";

    girasol17.style.left = Math.round(Math.random() * 750) + "px";
    girasol17.style.top = Math.round(Math.random() * 400) + "px";

    girasol18.style.left = Math.round(Math.random() * 750) + "px";
    girasol18.style.top = Math.round(Math.random() * 400) + "px";

    girasol19.style.left = Math.round(Math.random() * 750) + "px";
    girasol19.style.top = Math.round(Math.random() * 400) + "px";
}

const actualizarTiempo = setInterval(actualizar, 1000)

function actualizar() {
    if (tiempo > 0) {
        tiempo--
        tiempoTxt.innerText = tiempo
    } else {
        clearInterval(actualizarTiempo)
        clearInterval(moverGirasol)
        alert("¡SE ACABO EL TIEMPO! No hayaste el GIRASOL correcto.")
    }
}

girasol1.addEventListener("click", aplastar)
girasol2.addEventListener("click", aplastar1)
girasol3.addEventListener("click", aplastar2)
girasol4.addEventListener("click", aplastar3)
girasol5.addEventListener("click", aplastar4)
girasol6.addEventListener("click", aplastar5)
girasol7.addEventListener("click", aplastar6)
girasol8.addEventListener("click", aplastar7)
girasol9.addEventListener("click", aplastar8)
girasol10.addEventListener("click", aplastar9)
girasol11.addEventListener("click", aplastar10)
girasol12.addEventListener("click", aplastar11)
girasol13.addEventListener("click", aplastar12)
girasol14.addEventListener("click", aplastar13)
girasol15.addEventListener("click", aplastar14)
girasol16.addEventListener("click", aplastar15)
girasol17.addEventListener("click", aplastar16)
girasol18.addEventListener("click", aplastar17)

function aplastar() {
    girasol1.setAttribute("src", "multimedia/cambiodeFotoCorrecta.png")
    puntos++
    puntosTxt.innerText = puntos

    if (puntos >= 3) {

        clearInterval(actualizarTiempo)
        clearInterval(moverGirasol)
        alert("¡GANASTE! Has encontrado el GIRASOL correcto.")
    }
}
function aplastar1() {
    girasol2.setAttribute("src", "multimedia/girasolMalo.png")
}
function aplastar2() {
    girasol3.setAttribute("src", "multimedia/girasolMalo.png")
}
function aplastar3() {
    girasol4.setAttribute("src", "multimedia/girasolMalo.png")
}
function aplastar4() {
    girasol5.setAttribute("src", "multimedia/girasolMalo.png")
}
function aplastar5() {
    girasol6.setAttribute("src", "multimedia/girasolMalo.png")
}
function aplastar6() {
    girasol7.setAttribute("src", "multimedia/girasolMalo.png")
}
function aplastar7() {
    girasol8.setAttribute("src", "multimedia/girasolMalo.png")
}   
function aplastar8() {
    girasol9.setAttribute("src", "multimedia/girasolMalo.png")
}
function aplastar9() {
    girasol10.setAttribute("src", "multimedia/girasolMalo.png")
}
function aplastar10() {
    girasol11.setAttribute("src", "multimedia/girasolMalo.png")
}
function aplastar11() {
    girasol12.setAttribute("src", "multimedia/girasolMalo.png")
}
function aplastar12() {
    girasol13.setAttribute("src", "multimedia/girasolMalo.png")
}
function aplastar13() {
    girasol14.setAttribute("src", "multimedia/girasolMalo.png")
}
function aplastar14() {
    girasol15.setAttribute("src", "multimedia/girasolMalo.png")
}
function aplastar15() {
    girasol16.setAttribute("src", "multimedia/girasolMalo.png")
}
function aplastar16() {
    girasol17.setAttribute("src", "multimedia/girasolMalo.png")
}
function aplastar17() {
    girasol18.setAttribute("src", "multimedia/girasolMalo.png")
}
function aplastar18() {
    girasol19.setAttribute("src", "multimedia/girasolMalo.png")
}