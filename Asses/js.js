let elemento = document.querySelector("button");
let elementoH3 = document.querySelector("#humor");
let elementoImg = document.querySelector("#zeca");

function random(){
if(elemento.value == "0"){
elementoH3.innerText= "Vamos beber?"
elementoImg.setAttribute("src","./Asses/Imagens/Convite.png")
elemento.value = "1"
} else if(elemento.value == "1"){
    elementoH3.innerText= "Tá gelada!"
    elementoImg.setAttribute("src","./Asses/Imagens/Gelada.png")
    elemento.value = "2"
} else if(elemento.value == "2"){
    elementoH3.innerText= "Brinde"
    elementoImg.setAttribute("src","./Asses/Imagens/Brinde.png")
    elemento.value = "0"
}
}