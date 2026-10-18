// Interacción 1: menú de navegación adaptable (mobile)
function initNavToggle() {
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("primary-nav");

  // getElementById devuelve null si el elemento no existe en el documento
  if (!toggle || !nav) {
    console.error("initNavToggle: no se encontró el botón o el menú");
    return;
  }

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    console.log(`Menú ${isOpen ? "abierto" : "cerrado"}`);
  });

  // Cierra el menú al elegir una opción (útil en mobile)
  nav.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

// Interacción 2: filtro de deportes por categoría
function initSportsFilter() {
  const buttons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll("#sportsGrid .card");

  if (buttons.length === 0 || cards.length === 0) {
    console.error("initSportsFilter: faltan los botones o las tarjetas");
    return;
  }

  for (const button of buttons) {
    button.addEventListener("click", () => {
      for (const otro of buttons) {
        otro.classList.remove("is-active");
      }
      button.classList.add("is-active");

      const filter = button.getAttribute("data-filter");
      let visibles = 0;

      for (const card of cards) {
        const matches = filter === "all" || card.getAttribute("data-category") === filter;
        card.classList.toggle("is-hidden", !matches);
        if (matches) {
          visibles++;
        }
      }

      console.log(`Filtro "${filter}": ${visibles} de ${cards.length} tarjetas visibles`);
    });
  }
}

// Interacción 3: validación accesible del formulario de contacto
function initContactForm() {
  const form = document.getElementById("contactForm");
  const success = document.getElementById("formSuccess");

  if (!form || !success) {
    console.error("initContactForm: no se encontró el formulario");
    return;
  }

  const fields = [
    { input: document.getElementById("nombre"), error: document.getElementById("nombreError"), message: "Ingresa tu nombre." },
    { input: document.getElementById("email"), error: document.getElementById("emailError"), message: "Ingresa un correo válido." },
    { input: document.getElementById("mensaje"), error: document.getElementById("mensajeError"), message: "Escribe tu mensaje (mínimo 10 caracteres)." },
    { input: document.getElementById("terminos"), error: document.getElementById("terminosError"), message: "Debes aceptar los términos y condiciones." },
  ];

  function validateField(field) {
    let valid = field.input.checkValidity();

    // `required` acepta un texto de solo espacios: se descarta con trim()
    if (valid && field.input.type !== "checkbox") {
      valid = field.input.value.trim().length > 0;
    }

    field.input.setAttribute("aria-invalid", String(!valid));
    field.error.textContent = valid ? "" : field.message;
    return valid;
  }

  for (const field of fields) {
    field.input.addEventListener("blur", () => validateField(field));

    // Al retomar la edición se retira el mensaje de éxito del envío anterior
    field.input.addEventListener("input", () => {
      success.textContent = "";
    });
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    let primerError = null;
    let validos = 0;

    for (const field of fields) {
      if (validateField(field)) {
        validos++;
      } else if (primerError === null) {
        primerError = field.input;
      }
    }

    if (primerError === null) {
      const nombre = fields[0].input.value.trim();
      success.textContent = `¡Gracias, ${nombre}! Tu mensaje fue enviado correctamente.`;
      console.log("Formulario válido: los datos quedarían listos para enviarse por POST");
      form.reset();
    } else {
      success.textContent = "";
      console.warn(`Formulario incompleto: ${validos} de ${fields.length} campos correctos`);
      primerError.focus();
    }
  });
}

console.group("Rush Global Sport");
initNavToggle();
initSportsFilter();
initContactForm();
console.groupEnd();
