//Alle inputs die je ophaalt, dit moet je per vak doen in verschillende javascript bestanden
let pwaDocent = document.getElementById('pwaDocent');
let pwaStartdatum = document.getElementById('pwaStartdatum');
let pwaEinddatum = document.getElementById('pwaEinddatum');
let pwaCijfer = document.getElementById('pwaCijfer');
let pwaLesstof = document.getElementById('pwaLesstof');
let pwaUitleg = document.getElementById('pwaUitleg');
let pwaInzicht = document.getElementById('pwaInzicht');


//Deze code herhaal je voor elk variabele
if(sessionStorage.getItem('pwa-docent')) {
    pwaDocent.value = sessionStorage.getItem('pwa-docent');
}

pwaDocent.addEventListener("change", function() {
    sessionStorage.setItem('pwa-docent', pwaDocent.value);
})
//Hier eindigt het eerste variabele



// 2de variabele
if(sessionStorage.getItem('pwa-startdatum')) {
    pwaStartdatum.value = sessionStorage.getItem('pwa-startdatum');
}

pwaStartdatum.addEventListener("change", function() {
    sessionStorage.setItem('pwa-startdatum', pwaStartdatum.value);
})


// 3de variabele
if(sessionStorage.getItem('pwa-einddatum')) {
    pwaEinddatum.value = sessionStorage.getItem('pwa-einddatum');
}

pwaEinddatum.addEventListener("change", function() {
    sessionStorage.setItem('pwa-einddatum', pwaEinddatum.value);
})



// 4de variabele
if(sessionStorage.getItem('pwa-cijfer')) {
    pwaCijfer.value = sessionStorage.getItem('pwa-cijfer');
}

pwaCijfer.addEventListener("change", function() {
    sessionStorage.setItem('pwa-cijfer', pwaCijfer.value);
})



// 5de variabele
if(sessionStorage.getItem('pwa-lesstof')) {
    pwaLesstof.value = sessionStorage.getItem('pwa-cijfer');
}

pwaLesstof.addEventListener("change", function() {
    sessionStorage.setItem('pwa-lesstof', pwaLesstof.value);
})



// 6de variabele
if(sessionStorage.getItem('pwa-uitleg')) {
    pwaUitleg.value = sessionStorage.getItem('pwa-uitleg');
}

pwaUitleg.addEventListener("change", function() {
    sessionStorage.setItem('pwa-uitleg', pwaUitleg.value);
})


// 7de variabele
if(sessionStorage.getItem('pwa-inzicht')) {
    pwaInzicht.value = sessionStorage.getItem('pwa-inzicht');
}

pwaInzicht.addEventListener("change", function() {
    sessionStorage.setItem('pwa-inzicht', pwaInzicht.value);
})