// feladat:  jeleníts meg képeket egy oldalon div-ekben. A képekre kattintva a képek elérési útja kerüljön bele egy listába.
/**A kiválasztott kép jelenjen meg a sok kép fölött egy külön section tárolóban */
window.addEventListener("load", myFunction);
const kepeklista = ["kepek/1.jpg", "kepek/2.jpg", "kepek/3.jpg", "kepek/4.jpg"];

function myFunction() {
  const kepek = document.querySelectorAll(".kepek");
  for (let index = 0; index < kepek.length; index++) {
    kepek[index].addEventListener("click", kepekClicked);
    console.log("valami")
  }
}

function kepekClicked() {
    const eleresiut = event.target.src
  document.getElementById("kepekk").innerHTML =`<img src="${eleresiut}" alt="1"></img>`;
  console.log(event.target)
}
