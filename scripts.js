const url = "https://artister-c311.restdb.io/rest/artister";

const options = {
  headers: {
    "x-apikey": "613a5a7043cedb6d1f97ef14",
  },
};

async function hentData() {
  const respons = await fetch(url, options);
  const json = await respons.json();
  vis(json);
}

function vis(json) {
  console.log(json);

  const container = document.querySelector(".gallery_item");
  const template = document.querySelector("template");

  json.forEach((artist) => {
    const klon = template.cloneNode(true).content;
    klon.querySelector(".navn").textContent = artist.navn;
    klon.querySelector("img").src = "images/" + artist.billede;
    klon.querySelector(".beskrivelse").textContent = artist.beskrivelse;
    klon.querySelector(".genre").textContent = `Genre: ${artist.genre}`;
    klon.querySelector(".hits").textContent = `Største hits: ${artist.hits}`;
    container.appendChild(klon);
  });
}
hentData();
