let arrayImg = [
    "assets/bilder/bild0.jpg",
    "assets/bilder/bild1.jpg",
    "assets/bilder/bild2.jpg",
    "assets/bilder/bild3.jpg",
    "assets/bilder/bild4.jpg",
    "assets/bilder/bild5.jpg",
    "assets/bilder/bild6.jpg",
    "assets/bilder/bild7.png",
    "assets/bilder/bild8.jpg",
    "assets/bilder/bild9.jpg",
    "assets/bilder/bild10.jpg",
    "assets/bilder/bild11.jpg",
]
const dialogfeld = document.getElementById("dialogfeld")
const bildWrapper = document.getElementById("bildWrapper")

function init(){
    renderImg()
}

function openDialog(i){
    if (i < 0) {
    i = arrayImg.length - 1;
    }

    if (i >= arrayImg.length) {
        i = 0;
    }
    renderDialog(i)
    dialogfeld.showModal();
}

function closeDialog(){
    dialogfeld.close();
}

function renderImg(){
    
    for(let i = 0; i < arrayImg.length; i++){
        bildWrapper.innerHTML += `
            <button id="bildButton" onclick="openDialog(${i})">
                <img src="${arrayImg[i]}" alt="bild${i}">
            </button>
        `
    }
    
}

function renderDialog(i){
        dialogfeld.innerHTML = `
            <div class="dialogHeader">
                    <p>bild${i+1}</p>
                    <img src="./assets/icons/close.png" alt="close" onclick="closeDialog()" class="closeDialog">
                </div>
                <img src="${arrayImg[i]}" alt="bild${i+1}" class="bildDialog">
                <div class="dialogFooter">
                    <img src="./assets/icons/pfeil.png" alt="weiter" onclick="openDialog(${i-1})" class="bildVor">
                    <p>${i+1}/${arrayImg.length}</p>
                    <img src="./assets/icons/pfeil.png" alt="weiter" onclick="openDialog(${i+1})" class="bildZurück">
                </div>
        `
}

