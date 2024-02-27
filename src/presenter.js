import aniobisiesto from "./aniobisiesto.js";

const year = document.querySelector("#anio");
const form = document.querySelector("#bisiesto-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const anio = Number.parseInt(year.value);
  console.log(anio);
  if(aniobisiesto(anio)==true){
    div.innerHTML = "<p>" + "Es un año bisiesto" + "</p>";
  }
  else{
    div.innerHTML = "<p>" + "No es un año bisiesto" + "</p>";
  }
});
