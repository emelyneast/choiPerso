document.getElementById("Harceleur").addEventListener("click", function () {
  document.getElementById("message").innerHTML =
    "Bravo tu l'as trouvé, tu as sauvé la personne harcelée!";
});

document.querySelectorAll(".bouton").forEach(function (button) {
  button.addEventListener("click", function () {
    if (button.id !== "Harceleur") {
      document.getElementById("message").innerHTML =
        "Tu t'es trompé de personne.";
    }
  });
});
