//Alle inputs die je ophaalt, dit moet je per vak doen in verschillende javascript bestanden
let wafsDocent = document.getElementById('wafsDocent');
let wafsStartdatum = document.getElementById('wafsStartdatum');
let wafsEinddatum = document.getElementById('wafsEinddatum');
let wafsCijfer = document.getElementById('wafsCijfer');
let wafsLesstof = document.getElementById('wafsLesstof');
let wafsUitleg = document.getElementById('wafsUitleg');
let wafsInzicht = document.getElementById('wafsInzicht');


//Deze code herhaal je voor elk variabele
if(sessionStorage.getItem('wafs-docent')) {
    wafsDocent.value = sessionStorage.getItem('wafs-docent');
}

wafsDocent.addEventListener("change", function() {
    sessionStorage.setItem('wafs-docent', wafsDocent.value);
})
//Hier eindigt het eerste variabele



// 2de variabele
if(sessionStorage.getItem('wafs-startdatum')) {
    wafsStartdatum.value = sessionStorage.getItem('wafs-startdatum');
}

wafsStartdatum.addEventListener("change", function() {
    sessionStorage.setItem('wafs-startdatum', wafsStartdatum.value);
})


// 3de variabele
if(sessionStorage.getItem('wafs-einddatum')) {
    wafsEinddatum.value = sessionStorage.getItem('wafs-einddatum');
}

wafsEinddatum.addEventListener("change", function() {
    sessionStorage.setItem('wafs-einddatum', wafsEinddatum.value);
})



// 4de variabele
if(sessionStorage.getItem('wafs-cijfer')) {
    wafsCijfer.value = sessionStorage.getItem('wafs-cijfer');
}

wafsCijfer.addEventListener("change", function() {
    sessionStorage.setItem('wafs-cijfer', wafsCijfer.value);
})



// 5de variabele
if(sessionStorage.getItem('wafs-lesstof')) {
    wafsLesstof.value = sessionStorage.getItem('wafs-cijfer');
}

wafsLesstof.addEventListener("change", function() {
    sessionStorage.setItem('wafs-lesstof', wafsLesstof.value);
})



// 6de variabele
if(sessionStorage.getItem('wafs-uitleg')) {
    wafsUitleg.value = sessionStorage.getItem('wafs-uitleg');
}

wafsUitleg.addEventListener("change", function() {
    sessionStorage.setItem('wafs-uitleg', wafsUitleg.value);
})


// 7de variabele
if(sessionStorage.getItem('wafs-inzicht')) {
    wafsInzicht.value = sessionStorage.getItem('wafs-inzicht');
}

wafsInzicht.addEventListener("change", function() {
    sessionStorage.setItem('wafs-inzicht', wafsInzicht.value);
})