//Alle inputs die je ophaalt, dit moet je per vak doen in verschillende javascript bestanden
let naamPersoon = document.getElementById('naamPersoon');
let studentNummer = document.getElementById('studentNummer');



//Deze code herhaal je voor elk variable
if(sessionStorage.getItem('naam-persoon')) {
    naamPersoon.value = sessionStorage.getItem('naam-persoon');
}

naamPersoon.addEventListener("change", function() {
    sessionStorage.setItem('naam-persoon', naamPersoon.value);
})
//hier eindigt het eerste variable


if(sessionStorage.getItem('student-nummer')) {
    studentNummer.value = sessionStorage.getItem('student-nummer');
}

studentNummer.addEventListener("change", function() {
    sessionStorage.setItem('student-nummer', studentNummer.value);
})
