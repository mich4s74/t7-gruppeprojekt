// BURGERMENU
window.addEventListener("load", sidenVises);

// Når siden vises, lyttes der efter klik på burgerBtn
function sidenVises() {
  const burgerBtn = document.querySelector("#burger_btn");
  burgerBtn.addEventListener("click", openMenu);
}
// Ved klik på burgerBtn, starter funktion openMenu, som åbner menuen, og der lyttes igen efter klik på burgerBtn
function openMenu() {
  const burgerBtn = this;
  const menu = document.querySelector("#menu");

  this.removeEventListener("click", openMenu);
  this.classList.add("open");
  menu.classList.add("open");
  this.addEventListener("click", closeMenu);
}
// Ved klik på burgerBtn, starter funktion closeMenu, som lukker menuen og der lyttes igen efter klik på burgerBtn
function closeMenu() {
  const burgerBtn = this;
  const menu = document.querySelector("#menu");

  this.removeEventListener("click", closeMenu);
  menu.classList.remove("open");
  this.addEventListener("click", openMenu);
}

let artister;
const url = "https://artister-c311.restdb.io/rest/artister";
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
  console.log("Artister", artister);

  visArtister();
  addEventListenersToButtons();
}

function visArtister() {
  dest.innerHTML = "";
  artister.forEach((artist) => {
    if (filterArtist == "alle" || filterArtist == artist.genre) {
      const theClone = theTemplatePointer.cloneNode(true).content;
      theClone.querySelector("h1").textContent = artist.navn;
      theClone.querySelector("img").src = billedUrl + artist.billedenavn;
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
  location.href = `/detalje.html?id=${artist._id}`;
}

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

// BURGERMENU
window.addEventListener("load", sidenVises);

// Når siden vises, lyttes der efter klik på burgerBtn
function sidenVises() {
  const burgerBtn = document.querySelector("#burger_btn");
  burgerBtn.addEventListener("click", openMenu);
}
// Ved klik på burgerBtn, starter funktion openMenu, som åbner menuen, og der lyttes igen efter klik på burgerBtn
function openMenu() {
  const burgerBtn = this;
  const menu = document.querySelector("#menu");

  this.removeEventListener("click", openMenu);
  this.classList.add("open");
  menu.classList.add("open");
  this.addEventListener("click", closeMenu);
}
// Ved klik på burgerBtn, starter funktion closeMenu, som lukker menuen og der lyttes igen efter klik på burgerBtn
function closeMenu() {
  const burgerBtn = this;
  const menu = document.querySelector("#menu");

  this.removeEventListener("click", closeMenu);
  menu.classList.remove("open");
  this.addEventListener("click", openMenu);
}