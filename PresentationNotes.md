# Webseite über mich selbst
- 4 Subsites zu meinen Hobbies

# Features
## Styling
- Verwendung von CSS Variablen, um Theme austauschen zu können (global.css 2-15)
- Utilityklassen, um das Grunddesign einfach anwenden zu können (global.css 23-114)
## Aufbau der HTML und JS Dateien
- Relativ strikte Trennung von HTML, JS und CSS
- Controllerklasse (layout.js 1-63)
- Initialisierung beim Aufrufen (index.html 21)
## Navigation
- DRY Dont repeat yourself Navigation wird wiederverwendet (layout.js 9-58)
- Sticky Navigation (Browser)
## Hompage:
- Gallerie mit Bildern und Videos (Browser)
    - responsive
        - CSS Grid und Mediaqueries (index.css 1-66)
            - 2x6 Raster => 1x6 auf schmalen Bildschirmen
- Tabelle mit Links und Hovereffekt (Browser)
- Gästebuch mit Feedbackfunktion (Browser)
    - Formularevents
        - Evaluierung der Daten (Rating) (gaestebuch-form.js 13-45)
        -  Eigener Prototype (gaestebuch-form.js 1-10)
## Gästebuchformulardaten auslesen und anzeigen (Browser)
- URL Parameter als Objekt abspeichern (gaestebuch.js 9-23)
## Hobbies
- teilen sich HTML und JS
- Unterscheidung nach URL Parametern (Browser hobbies.js 9-24)
- Öffnen von externen Fenstern und iframes nach Anforderung (Browser)
## Repositories
- Laden von meinem öffentlichen Quellcode auf GitHub und Anzeige von Informationen als Karten/Kacheln(Browser)
    - Ajax mit fetch API (repositories.js 60-80, 104-131)
        - Asynchron mit Promises
- Als Funktion getarnte Klasse (repositories.js 1-56)
- Hydrieren/Befüllen des Templates mit den Daten (repositories.js 12-53)
- Sequenzielles Einblenden der Karten (repositories.js 94-102)
- Layout mit Flexbox (repositories.css 1-6)
    - ebenfalls responsive
- Layout der Karten ebenfalls mit Flexbox (repositories.css 8-90)