//Alle inputs die je ophaalt, dit moet je per vak doen in verschillende javascript bestanden
let btDocent = document.getElementById('btDocent');
let btStartdatum = document.getElementById('btStartdatum');
let btEinddatum = document.getElementById('btEinddatum');
let btCijfer = document.getElementById('btCijfer');
let btLesstof = document.getElementById('btLesstof');
let btUitleg = document.getElementById('btUitleg');
let btInzicht = document.getElementById('btInzicht');


//Deze code herhaal je voor elk variabele
if(sessionStorage.getItem('bt-docent')) {
    btDocent.value = sessionStorage.getItem('bt-docent');
}

btDocent.addEventListener("change", function() {
    sessionStorage.setItem('bt-docent', btDocent.value);
})
//Hier eindigt het eerste variabele



// 2de variabele
if(sessionStorage.getItem('bt-startdatum')) {
    btStartdatum.value = sessionStorage.getItem('bt-startdatum');
}

btStartdatum.addEventListener("change", function() {
    sessionStorage.setItem('bt-startdatum', btStartdatum.value);
})


// 3de variabele
if(sessionStorage.getItem('bt-einddatum')) {
    btEinddatum.value = sessionStorage.getItem('bt-einddatum');
}

btEinddatum.addEventListener("change", function() {
    sessionStorage.setItem('bt-einddatum', btEinddatum.value);
})



// 4de variabele
if(sessionStorage.getItem('bt-cijfer')) {
    btCijfer.value = sessionStorage.getItem('bt-cijfer');
}

btCijfer.addEventListener("change", function() {
    sessionStorage.setItem('bt-cijfer', btCijfer.value);
})



// 5de variabele
if(sessionStorage.getItem('bt-lesstof')) {
    btLesstof.value = sessionStorage.getItem('bt-cijfer');
}

btLesstof.addEventListener("change", function() {
    sessionStorage.setItem('bt-lesstof', btLesstof.value);
})



// 6de variabele
if(sessionStorage.getItem('bt-uitleg')) {
    btUitleg.value = sessionStorage.getItem('bt-uitleg');
}

btUitleg.addEventListener("change", function() {
    sessionStorage.setItem('bt-uitleg', btUitleg.value);
})


// 7de variabele
if(sessionStorage.getItem('bt-inzicht')) {
    btInzicht.value = sessionStorage.getItem('bt-inzicht');
}

btInzicht.addEventListener("change", function() {
    sessionStorage.setItem('bt-inzicht', btInzicht.value);
})