@AGENTS.md

# Delta Orienteering School – sitio web

Cliente: grupo de entrenamiento de orientación (orienteering) en Ecuador. Sitio en español.
Objetivo: dar a conocer el deporte y al grupo, mostrar competencias y entrenamientos
semanales, y que la gente escriba por WhatsApp para unirse en 2027.
Fase actual: página de inicio (demostración). Sin base de datos ni CMS todavía.
Fases futuras: contenido editable (CMS con PostgreSQL), inscripciones, ranking.

## Stack
Next.js (App Router) + TypeScript + Tailwind. Datos de relleno en lib/site.ts.

## Dirección de diseño
- Concepto: la página es un mapa de orientación: curvas de nivel de fondo, una ruta que se
  traza al cargar y círculos de control para numerar los pasos. El movimiento se limita a la
  ruta (portada, línea de los pasos y minijuego "Elige tu ruta").
- Colores aprobados, azul y rojo (variables en app/globals.css): papel #f5f7fb, marino #0b2260,
  ruta/rojo #d62839, rojo oscuro #b01e2e, naranja del logo #f39a1e (solo días de entrenamiento),
  azul claro (--musgo) #e6ecf8.
- Tipografías: Bricolage Grotesque (títulos) e IBM Plex Sans (texto).
- Evitar: etiquetas en mayúsculas sobre cada título, una palabra de color en un titular,
  tarjetas idénticas, animaciones de entrada en cada sección.
- Respetar prefers-reduced-motion, foco visible, contraste AA y mobile-first.

## Reglas
- NO usar logo, fotos, textos ni carteles de FEXO ni de otras federaciones.
- No guardar claves ni datos personales en el repositorio. Los .env* nunca se suben.
- No instalar dependencias nuevas sin preguntarme.
- Imágenes en public/ (logo en public/logo/logo.png, fotos en public/fotos/), optimizadas
  (máx. ~1920 px de ancho y menos de 500 KB).
- Lo marcado como "relleno" o "por definir" es provisional: no inventar datos reales
  (fechas, nombres, horarios).
- Commits pequeños y en español.