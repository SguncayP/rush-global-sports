# Rush Global Sports

Sitio web informativo de una academia deportiva, desarrollado para la Unidad I de
Aplicaciones Web (Diseño y creación de páginas web).

## Descripción

Página única con cinco secciones enlazadas por navegación interna: Inicio, Nosotros,
Deportes, Galería y Contacto. Construida con HTML5, CSS3 y JavaScript sin dependencias
externas ni frameworks.

## Interacciones implementadas

1. **Menú de navegación adaptable** — se despliega con un botón en pantallas pequeñas
   y se convierte en barra horizontal a partir de 768 px.
2. **Filtro de deportes** — muestra u oculta las tarjetas según la categoría elegida.
3. **Validación del formulario** — valida en el cliente, muestra los errores junto a
   cada campo y sitúa el foco en el primero que falla.

## Estructura

```
.
├── index.html          Estructura y contenido
├── css/styles.css      Estilos (mobile first, variables CSS)
├── js/script.js        Las tres interacciones
└── img/                Logotipo y fotografías de la galería
```

## Tecnologías y decisiones

- **Mobile first** con dos puntos de corte: 768 px (tabletas) y 1024 px (escritorio).
- **Variables CSS** sobre `:root` para centralizar la paleta, derivada del verde
  corporativo `#3daf87`.
- **Flexbox** para encabezado, filtros y pie; **CSS Grid** para las rejillas de
  tarjetas y galería.
- **JavaScript nativo** con `addEventListener`, organizado en tres funciones
  independientes.
- Contrastes verificados contra WCAG 2.1 nivel AA.

## Cómo ejecutarlo

Abrir `index.html` con la extensión **Live Server** de Visual Studio Code, o servir la
carpeta con cualquier servidor estático:

```bash
python -m http.server 8000
```

Y entrar a `http://localhost:8000`.
