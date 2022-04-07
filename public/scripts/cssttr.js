//Alle inputs die je ophaalt, dit moet je per vak doen in verschillende javascript bestanden
let cssDocent = document.getElementById('cssDocent');
let cssStartdatum = document.getElementById('cssStartdatum');
let cssEinddatum = document.getElementById('cssEinddatum');
let cssCijfer = document.getElementById('cssCijfer');
let cssLesstof = document.getElementById('cssLesstof');
let cssUitleg = document.getElementById('cssUitleg');
let cssInzicht = document.getElementById('cssInzicht');


//Deze code herhaal je voor elk variabele
if(sessionStorage.getItem('css-docent')) {
    cssDocent.value = sessionStorage.getItem('css-docent');
}

cssDocent.addEventListener("change", function() {
    sessionStorage.setItem('css-docent', cssDocent.value);
})
//Hier eindigt het eerste variabele



// 2de variabele
if(sessionStorage.getItem('css-startdatum')) {
    cssStartdatum.value = sessionStorage.getItem('css-startdatum');
}

cssStartdatum.addEventListener("change", function() {
    sessionStorage.setItem('css-startdatum', cssStartdatum.value);
})


// 3de variabele
if(sessionStorage.getItem('css-einddatum')) {
    cssEinddatum.value = sessionStorage.getItem('css-einddatum');
}

cssEinddatum.addEventListener("change", function() {
    sessionStorage.setItem('css-einddatum', cssEinddatum.value);
})



// 4de variabele
if(sessionStorage.getItem('css-cijfer')) {
    cssCijfer.value = sessionStorage.getItem('css-cijfer');
}

cssCijfer.addEventListener("change", function() {
    sessionStorage.setItem('css-cijfer', cssCijfer.value);
})



// 5de variabele
if(sessionStorage.getItem('css-lesstof')) {
    cssLesstof.value = sessionStorage.getItem('bt-cijfer');
}

cssLesstof.addEventListener("change", function() {
    sessionStorage.setItem('css-lesstof', cssLesstof.value);
})



// 6de variabele
if(sessionStorage.getItem('css-uitleg')) {
    cssUitleg.value = sessionStorage.getItem('css-uitleg');
}

cssUitleg.addEventListener("change", function() {
    sessionStorage.setItem('css-uitleg', cssUitleg.value);
})


// 7de variabele
if(sessionStorage.getItem('css-inzicht')) {
    cssInzicht.value = sessionStorage.getItem('css-inzicht');
}

cssInzicht.addEventListener("change", function() {
    sessionStorage.setItem('css-inzicht', cssInzicht.value);
})