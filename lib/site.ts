// Prefijo de las imágenes cuando el sitio se publica en GitHub Pages.
const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const site = {
  name: "Club Delta Orienteering",
  // Formato internacional sin + ni espacios: 593 + número sin el 0 inicial
  whatsapp: "593988302704",
  whatsappText: "Hola, quiero información para entrenar con el Club Delta Orienteering",
  telefonos: [
    { label: "098 830 2704", href: "tel:+593988302704" },
    { label: "096 905 9163", href: "tel:+593969059163" },
  ],
  email: "", // pon "" si no hay correo
  instagram: "https://www.instagram.com/orientaciondelta", // pon "" si aún no lo tienes
  logo: `${base}/logo/logo.png`, // pon "" si aún no lo tienes
  heroImage: `${base}/fotos/hero.jpg`, // pon "" si aún no hay foto
  heroAlt: "Tres corredores con gorras de colores revisan juntos un mapa de orientación",
  galeria: [
    { src: `${base}/fotos/foto-1.jpg`, alt: "Corredores bajan a toda velocidad por unas gradas entre la vegetación" },
    { src: `${base}/fotos/foto-2.jpg`, alt: "Tres participantes señalan un punto en el mapa de la competencia" },
    { src: `${base}/fotos/foto-3.jpg`, alt: "Un corredor sube unas gradas seguido por otros participantes" },
    { src: `${base}/fotos/foto-4.jpg`, alt: "Una corredora celebra con los brazos abiertos en una calle con montañas al fondo" },
    { src: `${base}/fotos/foto-5.jpg`, alt: "Tres corredores con camisetas amarillas avanzan por una calle empedrada" },
    { src: `${base}/fotos/foto-6.jpg`, alt: "Un corredor estudia de cerca un mapa pegado en una pared" },
    { src: `${base}/fotos/foto-7.jpg`, alt: "Tres participantes sonríen y posan juntos junto a un muro con grafitis" },
    { src: `${base}/fotos/foto-8.jpg`, alt: "Dos corredores suben una cuesta rodeados de vegetación" },
    { src: `${base}/fotos/foto-9.jpg`, alt: "Dos participantes sonríen mostrando sus medallas" },
  ],
  nav: [
    { label: "El deporte", href: "#deporte" },
    { label: "Quiénes somos", href: "#nosotros" },
    { label: "Competencias", href: "#competencias" },
    { label: "Entrenamientos", href: "#entrenamientos" },
    { label: "Galería", href: "#galeria" },
    { label: "Contacto", href: "#contacto" },
  ],
  deporte: [
    "La orientación es un deporte en el que se recorre un terreno con un mapa y una brújula, pasando por puntos de control en el menor tiempo posible.",
    "Combina carrera, lectura del mapa y toma de decisiones: no gana solo el más rápido, sino quien mejor elige su ruta.",
  ],
  pasos: [
    { title: "Lees el mapa", text: "Antes de salir ves dónde estás y dónde están los puntos de control." },
    { title: "Eliges tu ruta", text: "No hay un camino marcado: tú decides por dónde ir." },
    { title: "Llegas a cada control", text: "Marcas tu paso en cada punto, en el orden indicado." },
    { title: "Terminas en la meta", text: "Gana el menor tiempo, pero también la mejor decisión." },
  ],
  // Minijuego: valores ilustrativos, no corresponden a un mapa real.
  rutasJuego: [
    {
      id: "A",
      nombre: "Recta por el cerro",
      d: "M70 320 L560 90",
      etiqueta: { x: 315, y: 205 },
      distancia: "540 m",
      subida: "90 m",
      tiempo: "7:40",
      nota: "Es la más corta, pero la subida te frena.",
      mejor: false,
    },
    {
      id: "B",
      nombre: "Rodear por el sendero",
      d: "M70 320 C 220 380, 470 360, 560 90",
      etiqueta: { x: 338, y: 329 },
      distancia: "760 m",
      subida: "10 m",
      tiempo: "5:50",
      nota: "Es la más larga, pero corres todo el camino. ¡La mejor decisión!",
      mejor: true,
    },
    {
      id: "C",
      nombre: "Atajo por el bosque",
      d: "M70 320 C 120 150, 330 60, 560 90",
      etiqueta: { x: 248, y: 130 },
      distancia: "620 m",
      subida: "40 m",
      tiempo: "7:05",
      nota: "Parece un buen atajo, pero en el bosque se avanza lento.",
      mejor: false,
    },
  ],
  // role, bio, foto e instagram son opcionales: lo que quede en "" no se muestra.
  equipo: [
    { name: "Oscar Anrango", role: "", bio: "", foto: "", instagram: "" },
    { name: "Carlos Salazar", role: "", bio: "", foto: "", instagram: "" },
    { name: "Carlos Angamarca", role: "", bio: "", foto: "", instagram: "" },
    { name: "Tefita Vale", role: "", bio: "", foto: "", instagram: "" },
    { name: "Patricio Sotomayor", role: "", bio: "", foto: "", instagram: "" },
  ],
  // Mientras estén vacías, la página invita a preguntar por Instagram o WhatsApp.
  competencias: [] as { name: string; date: string; place: string }[],
  entrenamientos: [] as { day: string; time: string; place: string; focus: string }[],
};
