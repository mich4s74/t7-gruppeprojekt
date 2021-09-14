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
      theClone.querySelector("h1").textContent = artist.navn;
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

function addEventListenersToButtons() {
  document.querySelectorAll("#second_nav ul li").forEach((elm) => {
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