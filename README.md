# User story

Ik wil een enquête kunnen invullen over de minor Web Development, met verschillende antwoordmogelijkheden. Als ik de enquête niet afkrijg, wil ik later weer verder gaan met waar ik ben gebleven.



# Wireflow schets

![88c59fbe-26dc-4638-9558-f70c7098385a](https://user-images.githubusercontent.com/74242736/162214053-dad5fc35-40cc-4e92-9bb8-b841eae4214a.jpg)



# Features

* Persoonlijke gegevens invullen
* Vragen over de vakken invullen
* Form validatie -> checkt of de ingevulde info klopt
* Form validatie -> niet mogelijk om door te gaan als niet alles is ingevuld
* Antwoorden van de enquete worden opgeslagen in een json bestand
* Antwoorden van de enquete worden lokaal opgeslagen



## Progressive enhancement

### Laag 1 -> HTML

De core functionaliteiten van de enquete werken nog met alleen HTML. Het is mogelijk om de enquete in te vullen en de resultaten te versturen.

<img width="800" alt="Schermafbeelding 2022-04-07 om 15 58 37" src="https://user-images.githubusercontent.com/74242736/162216612-f097414d-e6c0-46da-92e7-055fca288415.png">


### Laag 2 -> CSS

Door de CSS verbeterd de user experience. Er zijn UI principes toegevoegd, en feedback op acties van de gebruiker.

<img width="800" alt="Schermafbeelding 2022-04-07 om 15 59 30" src="https://user-images.githubusercontent.com/74242736/162216789-e87979e7-fc71-4c54-b020-2f9867d4f10f.png">

Een voorbeeld van feedback aan de gebruiker is hier te zien. De button is grijs wanneer nog niet alle velden zijn ingevuld, en je kan nog niet door naar de volgende pagina. Wanneer een veld correct is ingevuld wordt de border groen. Als alle velden zijn ingevuld veranderd de button van kleur en is het mogelijk om door te gaan naar de volgende pagina.

<img width="800" alt="Schermafbeelding 2022-04-07 om 16 00 21" src="https://user-images.githubusercontent.com/74242736/162216968-62631dad-875b-4806-8c61-bf0d89a3fb41.png">


### Laag 3 -> JS

Met JS is het voor de gebruiker mogelijk om antwoorden lokaal op te slaan. Hierdoor worden de antwoorden niet meteen verwijderd.

<img width="800" alt="Schermafbeelding 2022-04-07 om 16 04 19" src="https://user-images.githubusercontent.com/74242736/162217797-ec9f0e49-5a47-4d45-b97b-54b460736f91.png">




# Geteste browsers

### Desktop
- [x] Chrome
- [x] Safari

### Mobiel
- [x] Safari (iPhone)
- [x] Chrome browser Nexus 5 




# Testverslag

Ik heb zowel CSS als JS uitgezet en getest of alles nog werkt. Alles is nog te doen en de core functionaliteit werkt nog. Ik heb de HTML code door een validator laten checken, en na een paar kleine aanpassingen zaten daar geen fouten meer in. 

### Onderzochte features
Ik heb op caniuse.com de features gecheckt of ze ondersteunt worden op verschillende browsers. Bijna alle features die ik heb gebruikt worden goed ondersteunt. Alleen op hele oude browsers zoals IE 6-9 niet. Alleen animation wordt niet ondersteunt door Opera mini, verder is animation niet belangrijk voor de functionaliteiten dus dat is geen probleem.

* @Keyframes
* @Font-face
* Transform
* :Active
* :Valid
* Min width
* Animation

