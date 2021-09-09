const url = "";

const options = {
  headers: {
    "x-apikey": "",
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
