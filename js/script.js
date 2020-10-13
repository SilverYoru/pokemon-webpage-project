const button = document.getElementById("event-bttn");
button.addEventListener("click", function () {
  console.log("only 1 button clicked");
  window.location = "events.html";
});
const button2 = document.getElementById("battle-bttn");
button2.addEventListener("click", function () {
  console.log("only 1 button clicked");
  window.location = "https://pokemonshowdown.com/";
});
