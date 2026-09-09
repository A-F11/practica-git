document.getElementById('formAbsurdo').addEventListener('submit', function (e) {
  e.preventDefault(); 
  const form = e.target;
  const resultado = document.getElementById('resultado');

  const palabra = form.palabra.value.trim();
  const calvos = form.calvos.value.trim();
  const gatos = form.gatos.value.trim();
  const baño = form.baño.value.trim();
  const alien = form.alien.value;

  if (!palabra || !calvos || !gatos || !baño || !alien) {
    resultado.textContent = "⚠️ ¡Tienes que responder TODAS las preguntas absurdas!";
    resultado.style.color = "red";
    return;
  }

  const respuestasGraciosas = [
    `Interesante... dijiste que te lavarías la cara hasta "${calvos}" si fueras calvo. Respetable.`,
    `Tu plan de emergencia sin papel es: "${baño}". Anotado para la posteridad.`,
    `Sobre los gatos y el sabor a ratón, tu teoría es: "${gatos}". Wikipedia debería llamarte.`,
    `Tu reflexión filosófica sobre "separado" fue: "${palabra}". Profundo.`,
    `Y sobre los extraterrestres, tu respuesta fue: "${alien}". El Área 51 quiere saber tu ubicación.`
  ];

  const mensajeAleatorio = respuestasGraciosas[Math.floor(Math.random() * respuestasGraciosas.length)];

  resultado.innerHTML = `
    <p style="color: green; font-weight: bold;">✅ Formulario enviado con éxito.</p>
    <p>${mensajeAleatorio}</p>
  `;

  form.reset();
});
// --- Navbar ---
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelectorAll('.tab-content').forEach(tab => tab.style.display = 'none');
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    document.getElementById(link.dataset.tab).style.display = 'block';
    link.classList.add('active');
  });
});

// --- Botón de nombres ---
const nombres = ['Leo', 'Fredy', 'Apaez', 'Jouse', 'Alicia'];
const boton = document.getElementById('boton-nombres');
let indice = 0;

boton.addEventListener('click', () => {
  indice = (indice + 1) % nombres.length;
  boton.textContent = nombres[indice];
});