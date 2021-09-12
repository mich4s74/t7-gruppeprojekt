/* let artister;

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

  const container = document.querySelector("#gallery");
  const template = document.querySelector("template");

  json.forEach((artist) => {
    const klon = template.cloneNode(true).content;
    klon.querySelector(".navn").innerHTML = artist.navn;
    klon.querySelector("img").src =
      "images/resized_images/" + artist.billedenavn;

    container.appendChild(klon);
  });
}
hentData();
*/

let artister;
const url = "https://artister-c311.restdb.io/rest/artister"
const myHeaders = {
  headers: {
    "x-apikey": "613a5a7043cedb6d1f97ef14",
  },
};
const dest = document.querySelector("#gallery");
const theTemplatePointer = document.querySelector("template");
const billedUrl = "images/resized_images/";
let filterArtist = "alle";


document.addEventListener("DOMContentLoaded", getJson);


async function getJson() {
  let jsonData = await fetch(url, myHeaders);
  artister = await jsonData.json();
  console.log("Artister", artister)

  visArtister();
  addEventListenersToButtons();
}

function visArtister() {
  dest.innerHTML = "";
  artister.forEach((artist) => {

    if (filterArtist == "alle" || filterArtist == artist.genre) {
      const theClone = theTemplatePointer.cloneNode(true).content;
      theClone.querySelector("h2").textContent = artist.navn;
      theClone.querySelector(
        "img"
      ).src = billedUrl + artist.billedenavn;
      theClone.querySelector("img").alt = artist.navn;
      theClone.querySelector("p.genre").textContent = artist.genre;

      dest.appendChild(theClone);

      dest.lastElementChild.addEventListener("click", () => {
        visSingle(artist);
      });
    }
  });
}



function visSingle(artist) {
  location.href = `/detalje.html?id=${artist._id}`

};








/* function visSingle(artist) {
   console.log("artist", artist);
   
   document.querySelector(".popup").style.display = "block";
   document
     .querySelector(".popup button")
     .addEventListener("click", lukSingle);

   document.querySelector(".popup h2").textContent = ret.navn;
   document.querySelector(
     ".popup img"
   ).src = billedUrl + ret.billednavn + md;
   document.querySelector(".popup img").alt = ret.navn;
   document.querySelector(".popup details p").textContent =
     ret.langbeskrivelse;
 }

 function lukSingle() {
   document.querySelector(".popup").style.display = "none";
 }
 */

function addEventListenersToButtons() {
  document.querySelectorAll("nav li").forEach((elm) => {
    elm.addEventListener("click", filtrering);
  });
}

function filtrering() {
  filterArtist = this.dataset.artist;
  /*document.querySelector("main h1").textContent = this.textContent;*/
  visArtister();
}

/*document.querySelector(".burger").addEventListener("click", () => {
  document.querySelector("nav").classList.toggle("show");
});
*/