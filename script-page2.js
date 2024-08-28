let url = "https://ghibliapi.vercel.app/films/"

let response = await fetch(url)

let data = await response.json()

let filmdescription = document.getElementById("film-description")

for (let movie of data)
{
    let element = document.createElement("li")

    element.textContent = movie.description

    filmdescription.append(element)
}