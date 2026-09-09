const enlaces = document.querySelectorAll(".nav-link");
const pestañas = document.querySelectorAll(".tab-content");
const botonNombres = document.getElementById("boton-nombres");
const formulario = document.getElementById("formAbsurdo");
const resultado = document.getElementById("resultado");

enlaces.forEach((enlace) => {
  enlace.addEventListener("click", (evento) => {
    evento.preventDefault();
    const pestañaSeleccionada = enlace.dataset.tab;

    enlaces.forEach((elemento) => elemento.classList.remove("active"));
    pestañas.forEach((pestaña) => pestaña.classList.remove("active-tab"));
    enlace.classList.add("active");
    document.getElementById(pestañaSeleccionada).classList.add("active-tab");
    history.replaceState(null, "", `#${pestañaSeleccionada}`);
  });
});

botonNombres.addEventListener("click", () => {
  const nombres = ["Leo", "Ana", "Carlos", "Sofía"];
  const nombreActual = botonNombres.textContent;
  const siguienteNombre = nombres[(nombres.indexOf(nombreActual) + 1) % nombres.length];
  botonNombres.textContent = siguienteNombre;
});

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const datos = new FormData(formulario);
  const respuestaAlien = datos.get("alien");

  if (!respuestaAlien) {
    resultado.textContent = "Selecciona una respuesta sobre los extraterrestres.";
    return;
  }

  resultado.textContent = `Formulario enviado. Tu respuesta sobre los extraterrestres: ${respuestaAlien}.`;
});
