import bodyParser from "body-parser";
import express from 'express';
import fs from 'fs';



const app = express();
const port = 5000;



//Template engine
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));





//Index pagina, persoonsgegevens
app.get('/', (req, res) => {
    res.render('index')
});

// Enquete pagina CSSTTR
app.get('/cssttr', (req, res) => {
    res.render('cssttr')
});

// Enquete pagina WAFS
app.get('/wafs', (req, res) => {
    res.render('wafs')
});

// Enquete pagina BROWSERTECHNOLOGIES
app.get('/wafs', (req, res) => {
    res.render('wafs')
});

// Enquete pagina PROGRESSIVEWEBAPPS
app.get('/progressivewebapps', (req, res) => {
    res.render('progressivewebapps')
});

// Eindpagina
app.get('/eindpagina', (req, res) => {
    res.render('eindpagina')
});





// Formulier data ophalen persoonsgegevens, push naar CSSTTR pagina, en in JSON bestand schrijven
app.post('/cssttr', (req, res) => {
    let persoonsGegevens = JSON.stringify(req.body)
    fs.writeFile('gegevensPersoon.json', persoonsGegevens, 'utf8', cb => {
        console.log('werk dan!')
    });
    res.render('cssttr')
})


// Formulier data ophalen CSSTTR, push naar WAFS pagina, en in JSON bestand schrijven
app.post('/wafs', (req, res) => {
    let cssttrGegevens = JSON.stringify(req.body)
    fs.writeFile('gegevensCSSTTR.json', cssttrGegevens, 'utf8', cb => {
        console.log('werk dan!')
    });
    res.render('wafs')
})

// Formulier data ophalen WAFS, push naar BROWSERTECHNOLOGIES pagina, en in JSON bestand schrijven
app.post('/browsertechnologies', (req, res) => {
    let wafsGegevens = JSON.stringify(req.body)
    fs.writeFile('gegevensWafs.json', wafsGegevens, 'utf8', cb => {
        console.log('werk dan!')
    });
    res.render('browsertechnologies')
})

// Formulier data ophalen BROWSERTECHNOLOGIES, push naar PROGRESSIVEWEBAPPS pagina, en in JSON bestand schrijven
app.post('/progressivewebapps', (req, res) => {
    let browsertechnologiesGegevens = JSON.stringify(req.body)
    fs.writeFile('gegevensBrowsertechnologies.json', browsertechnologiesGegevens, 'utf8', cb => {
        console.log('werk dan!')
    });
    res.render('progressivewebapps')
})

// Formulier data ophalen PROGRESSIVEWEBAPPS, push naar EIND pagina, en in JSON bestand schrijven
app.post('/eindpagina', (req, res) => {
    let progressivewebappsGegevens = JSON.stringify(req.body)
    fs.writeFile('gegevensProgressivewebapps.json', progressivewebappsGegevens, 'utf8', cb => {
        console.log('werk dan!')
    });
    res.render('eindpagina')
})





// Server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});