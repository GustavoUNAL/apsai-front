import type { MediaHotspot } from "@/components/visuals/InteractiveMedia";
import type { IllustrationId } from "@/components/visuals/illustrations/types";

export const heroPillars = [
  "Simulación de Sistemas de Potencia",
  "Inteligencia Artificial",
  "Investigación Aplicada",
  "Código Abierto",
];

export const carouselSlides = [
  {
    id: "intro",
    badge: "Open Power Systems AI",
    title: "Donde los sistemas de potencia se encuentran con la inteligencia artificial",
    link: "#comunidad",
    linkText: "Unirse al proyecto",
    visual: "power-ai-hub" as IllustrationId,
    alt: "Diagrama de red eléctrica con núcleo de inteligencia artificial",
  },
  {
    id: "etapa-1",
    badge: "Primera etapa",
    title: "Estudios eléctricos fundamentales",
    link: "#roadmap",
    linkText: "Ver roadmap",
    visual: "load-flow" as IllustrationId,
    alt: "Diagrama unifilar y ecuaciones de flujo de carga",
    items: [
      "Flujo de carga",
      "Newton-Raphson",
      "Gauss-Seidel",
      "Cortocircuito",
      "Estudios de conexión simplificados",
    ],
  },
  {
    id: "etapa-2",
    badge: "Segunda etapa",
    title: "Herramientas inteligentes",
    link: "#roadmap",
    linkText: "Explorar fases",
    visual: "ai-tools" as IllustrationId,
    alt: "Código de diagnóstico y gráficos de optimización",
    items: [
      "Diagnóstico asistido por IA",
      "Recomendaciones técnicas",
      "Optimización de redes",
      "Generación automática de reportes",
    ],
  },
  {
    id: "etapa-3",
    badge: "Tercera etapa",
    title: "Plataforma colaborativa",
    link: "#comunidad",
    linkText: "Construir en público",
    visual: "collab-platform" as IllustrationId,
    alt: "Flujo de módulos colaborativos y código abierto",
    items: [
      "Simulación avanzada",
      "Gemelos digitales",
      "Integración IoT",
      "Redes inteligentes",
    ],
  },
];

export const featureSections = [
  {
    id: "problema",
    title: "El Problema",
    subtitle: "La ingeniería energética necesita herramientas más abiertas",
    description:
      "Actualmente muchas herramientas de análisis eléctrico son costosas, cerradas, difíciles de extender e inaccesibles para estudiantes e investigadores. Esto limita la innovación y la colaboración.",
    items: ["Costosas", "Cerradas", "Difíciles de extender", "Inaccesibles para estudiantes e investigadores"],
    link: "#vision",
    linkLabel: "Nuestra visión",
    visual: "closed-tools" as IllustrationId,
    alt: "Diagrama de software propietario cerrado y con licencia",
    hotspots: [
      { id: "p1", x: 35, y: 45, label: "Licencias costosas", description: "Software propietario con barreras de acceso económico." },
      { id: "p2", x: 62, y: 58, label: "Código cerrado", description: "Sin posibilidad de auditar, extender o compartir modelos." },
    ] satisfies MediaHotspot[],
    reverse: false,
  },
  {
    id: "vision",
    title: "Nuestra Visión",
    subtitle: "Democratizar la ingeniería de sistemas de potencia",
    description:
      "Queremos construir una plataforma abierta que permita a cualquier ingeniero, estudiante o investigador simular, analizar y optimizar redes eléctricas con apoyo de inteligencia artificial.",
    items: [
      "Simular redes eléctricas",
      "Realizar estudios de conexión",
      "Analizar cortocircuitos",
      "Integrar energías renovables",
      "Utilizar IA para apoyar decisiones técnicas",
    ],
    link: "#roadmap",
    linkLabel: "Ver roadmap",
    visual: "open-platform" as IllustrationId,
    alt: "Red abierta con fuentes renovables y simulación",
    hotspots: [
      { id: "v1", x: 28, y: 52, label: "Red renovable", description: "Integración de generación distribuida y fuentes limpias." },
      { id: "v2", x: 72, y: 38, label: "Simulación abierta", description: "Modelos accesibles para ingenieros e investigadores." },
    ] satisfies MediaHotspot[],
    reverse: true,
  },
];

export const roadmapPhases = [
  {
    id: "fase-1",
    label: "Fase 1",
    title: "Fundamentos Matemáticos",
    description:
      "Construyendo las bases del motor de simulación con modelado riguroso de elementos de red y algoritmos numéricos confiables.",
    visual: "math-foundations" as IllustrationId,
    alt: "Matriz Y_bus y modelo pi de línea de transmisión",
    hotspots: [
      { id: "r1a", x: 40, y: 50, label: "Modelado de barras", description: "Nodos y variables de estado del sistema." },
      { id: "r1b", x: 65, y: 42, label: "Modelado de líneas", description: "Parámetros pi y impedancias de red." },
    ] satisfies MediaHotspot[],
    items: [
      { label: "Modelado de barras", done: true },
      { label: "Modelado de líneas", done: true },
      { label: "Newton-Raphson", done: false },
      { label: "Visualización básica", done: false },
    ],
  },
  {
    id: "fase-2",
    label: "Fase 2",
    title: "Estudios Eléctricos",
    description:
      "Ampliando el alcance hacia estudios de operación y conexión que los ingenieros necesitan en proyectos reales.",
    visual: "electrical-studies" as IllustrationId,
    alt: "Diagrama unifilar con estudio de cortocircuito",
    hotspots: [
      { id: "r2a", x: 50, y: 48, label: "Cortocircuito", description: "Niveles de falla y capacidad de ruptura." },
      { id: "r2b", x: 30, y: 60, label: "Calidad de energía", description: "Armónicos, factor de potencia y perfiles de carga." },
    ] satisfies MediaHotspot[],
    items: [
      { label: "Cortocircuito", done: false },
      { label: "Calidad de energía", done: false },
      { label: "Conexión de generación distribuida", done: false },
    ],
  },
  {
    id: "fase-3",
    label: "Fase 3",
    title: "Inteligencia Artificial",
    description:
      "Integrando asistencia inteligente para acelerar análisis, optimización y generación de estudios técnicos.",
    visual: "ai-phase" as IllustrationId,
    alt: "Curva de optimización y asistente técnico",
    hotspots: [
      { id: "r3a", x: 45, y: 45, label: "Asistente técnico", description: "Soporte contextual para decisiones de ingeniería." },
      { id: "r3b", x: 68, y: 55, label: "Optimización", description: "Ajuste automático de parámetros y topología." },
    ] satisfies MediaHotspot[],
    items: [
      { label: "Asistente técnico", done: false },
      { label: "Optimización de sistemas", done: false },
      { label: "Generación automática de estudios", done: false },
    ],
  },
];

export const communityContent = {
  title: "Comunidad",
  subtitle: "Construido en público",
  description:
    "OPSAI es un proyecto abierto. Creemos que la ingeniería avanza más rápido cuando el conocimiento se comparte.",
  seeking: ["Ingenieros", "Programadores", "Investigadores", "Estudiantes", "Entusiastas de la energía"],
  visual: "community-graph" as IllustrationId,
  alt: "Grafo de colaboradores conectados al proyecto OPSAI",
  hotspots: [
    { id: "c1", x: 30, y: 50, label: "Ingenieros", description: "Modelado, estudios y validación de redes." },
    { id: "c2", x: 55, y: 42, label: "Desarrolladores", description: "Código, APIs y herramientas de simulación." },
    { id: "c3", x: 75, y: 55, label: "Investigadores", description: "Publicaciones, tesis y colaboración académica." },
  ] satisfies MediaHotspot[],
};

export const teamMembers = [
  {
    id: "gustavo",
    name: "Gustavo Arteaga",
    roles: ["Ingeniero Electricista", "Magíster en Sistemas Energéticos", "Desarrollador de Software"],
    title: "Fundador de OPSAI",
    quote:
      "Creo que las herramientas de simulación energética deben ser más abiertas, accesibles e inteligentes para acelerar la innovación en el sector eléctrico.",
    visual: "founder-circuit" as IllustrationId,
    alt: "Ilustración de perfil técnico con circuito integrado",
  },
];

export const researchContent = {
  title: "Investigación",
  subtitle: "Más que software",
  description: "OPSAI también busca convertirse en una plataforma para:",
  items: [
    "Investigación científica",
    "Publicaciones académicas",
    "Proyectos universitarios",
    "Tesis de maestría y doctorado",
    "Colaboración internacional",
  ],
  visual: "research-diagram" as IllustrationId,
  alt: "Documento científico con fórmulas y referencias académicas",
  hotspots: [
    { id: "res1", x: 42, y: 48, label: "Publicaciones", description: "Resultados reproducibles y código abierto." },
    { id: "res2", x: 68, y: 40, label: "Colaboración", description: "Red internacional de universidades y centros de estudio." },
  ] satisfies MediaHotspot[],
};

export const navLinks = [
  { label: "Proyecto", href: "#proyecto" },
  { label: "Visión", href: "#vision" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Comunidad", href: "#comunidad" },
  { label: "Equipo", href: "#equipo" },
  { label: "Investigación", href: "#investigacion" },
];

export const externalLinks = {
  github: "https://github.com/GustavoUNAL/apsai-front",
  docs: "#",
  contribute: "#comunidad",
};
