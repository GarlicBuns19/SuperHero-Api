superHeroUrl = "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/";

const container = document.querySelector(".container");

async function displayHero(url) {
  let data = await fetch(url + "all.json")
    .then((res) => res.json())
    .then((data) =>
      data.forEach((hero) => {
        container.innerHTML += `
        <div class="row">
          <div class="col-md-6 col-sm-12">
            <img src="${hero.images.sm}" alt="" class="img-fluid ${hero.appearance.gender}" id="heroImg">
          </div>
          <div class="col-md-6 col-sm-12" id="heroData">
            <h1>${hero.name}</h1>
            <h2>Gender</h2>
            <h3 class="${hero.appearance.gender}">${hero.appearance.gender}</h3>
            <h2>Race</h2>
            <h3>${hero.appearance.race}</h3>
            <h2>Height</h2>
            <h3>${hero.appearance.height[1]}</h3>
          </div>
        </div>
        `;
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
