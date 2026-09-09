const contenedor = document.getElementById("contenedorElementos");
const inputTexto = document.getElementById("inputTexto");
const btnCrear = document.getElementById("btnCrear");
const btnModificar = document.getElementById("btnModificar");

function crearElemento() {
  const texto = inputTexto.value.trim();

  if (texto === "") {
    alert("Escribe algo antes de crear el elemento");
    return;
  }

  const nuevoElemento = document.createElement("p");
  nuevoElemento.textContent = texto;
  contenedor.appendChild(nuevoElemento);

  inputTexto.value = "";
}

function modificarUltimoElemento() {
  const elementos = contenedor.querySelectorAll("p");

  if (elementos.length === 0) {
    alert("No hay elementos para modificar");
    return;
  }

  const ultimoElemento = elementos[elementos.length - 1];
  ultimoElemento.textContent += " (modificado)";
  ultimoElemento.classList.add("elemento-modificado");
}

btnCrear.addEventListener("click", crearElemento);
btnModificar.addEventListener("click", modificarUltimoElemento);

inputTexto.addEventListener("keydown", function (evento) {
  if (evento.key === "Enter") {
    crearElemento();
  }
});
