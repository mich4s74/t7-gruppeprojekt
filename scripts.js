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
}
hentData();
