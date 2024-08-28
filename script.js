// Hva er addressen til der dataen er
let url = "https://ghibliapi.vercel.app/films/"

// Send melding til siden og vent på svar
let response = await fetch(url)

// Konver fra standard formatet til javascript formatet
let data = await response.json()

// Hent ut liste elementet fra dokumente
let filmList = document.getElementById("film-list")

// For hver data punkt i data settet
for (let movie of data) 
{
    // Lage html elementet
    let element = document.createElement("li")

    // Konfigurer elementet
    element.textContent = movie.title

    // Sett det inn i dokumentet
    filmList.append(element)
}