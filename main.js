const contador = document.querySelector("#contador");
const click = document.querySelector("#btnClick");
const reset = document.querySelector("#btnReset");
let numero = 0;

click.addEventListener("click", (e) => {
  numero++;
  contador.innerHTML = numero;
});

reset.addEventListener("click", (e) => {
  numero = 0;
  contador.innerHTML = numero;
});
