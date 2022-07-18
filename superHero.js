superHeroUrl = "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/";

const row = document.querySelector(".row");

function heroLayout() {
  row.innerHTML = `
 <h1></h1>
        <div class="col-6" id="heroImg"></div>
        <div class="col-6" id="heroData"></div>
 `;
}

async function displayHero(url) {
  let data = await fetch(url + "all.json")
    .then((res) => res.json())
    .then((data) =>
      data.forEach((hero) => {
        row.innerHTML += `<button>${hero.id} ${hero.name}</button>`
        console.log(hero.id);

        // console.log(hero.name);
        // console.log(hero["images"].lg);
      })
    );
  try {
    console.log("Success");
  } catch (error) {
    console.log(error);
  }
  return data;
}
displayHero(superHeroUrl);
