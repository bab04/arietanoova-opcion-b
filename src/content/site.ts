/**
 * Contenido único de las dos versiones (A y B).
 * Este archivo es IDÉNTICO en arietanoova-opcionA y arietanoova-opcionB.
 * Lo único que cambia entre proyectos es src/content/marca.ts y el SVG del logo.
 *
 * REGLA APLICADA: ningún dato duro inventado. Lo que no consta en los
 * documentos del proyecto va como PENDIENTE y se renderiza visible en página.
 */

export const clinica = {
  marca: "ArietaNoova", // INDECOPI: siempre una sola palabra
  descriptor: "Clínica de especialidades odontológicas",
  tagline: "Sonrisas para toda la vida", // uso secundario únicamente
  direccion: {
    calle: "Av. Antonio José de Sucre 1160, Of. 204",
    distrito: "Pueblo Libre",
    ciudad: "Lima",
    pais: "Perú",
  },
  telefono: null, // no consta en la carpeta del proyecto
  whatsapp: null, // no consta en la carpeta del proyecto
  email: null,
  horarios: [
    {
      dia: "Lunes a viernes",
      horas: "9:00 a. m. – 1:00 p. m.  /  3:00 p. m. – 8:00 p. m.",
    },
    { dia: "Sábado", horas: "9:00 a. m. – 5:00 p. m. (horario corrido)" },
    { dia: "Domingo", horas: "Cerrado" },
  ],
  accesos: [
    "El edificio no cuenta con ascensor al segundo piso.",
    "Sin estacionamiento propio. Estacionamiento público a la vuelta, en Av. La Marina cuadra 5 (Mercado del Indio y casino Luckia).",
  ],
  aperturaLocal: "2015",
};

export const doctora = {
  nombre: "Dra. Jessica Arieta Miranda",
  rol: "Directora clínica",
  titulo: "La autoridad que acompaña",
  entrada:
    "Detrás de ArietaNoova hay una sola línea de criterio clínico sostenida durante veinticinco años. No es una promesa de marca: es un recorrido verificable de consultorio, especialización y aula.",
  credenciales: [
    {
      cifra: "25 años",
      titulo: "de ejercicio como cirujano dentista",
      detalle:
        "Titulada en 2001. Veinticinco años de práctica clínica continua — trayectoria profesional, no antigüedad del local.",
    },
    {
      cifra: "Desde 2013",
      titulo: "especialista en ortodoncia y ortopedia maxilar",
      detalle:
        "La especialidad que define el tipo de caso complejo que la clínica recibe y resuelve.",
    },
    {
      cifra: "+10 años",
      titulo: "docente en la UNMSM",
      detalle:
        "Universidad Nacional Mayor de San Marcos. Más de una década formando cirujanos dentistas.",
    },
    {
      cifra: "4 años",
      titulo: "docente en la Universidad Wiener",
      detalle: "Docencia universitaria en paralelo al ejercicio clínico.",
    },
  ],
  cierre:
    "Esa trayectoria docente explica por qué una parte importante de los pacientes de ArietaNoova llega derivada por otros odontólogos. El colega que deriva conoce el criterio antes de conocer la clínica.",
};

export type Especialidad = {
  slug: string;
  nombre: string;
  sumario: string;
  descripcion: string;
  atiende: string[];
  foto: string;
  fotoAlt: string;
};

export const especialidades: Especialidad[] = [
  {
    slug: "ortodoncia-y-ortopedia-maxilar",
    nombre: "Ortodoncia y ortopedia maxilar",
    sumario:
      "La especialidad de la dirección clínica. Corrección de la posición dentaria y del crecimiento de los maxilares.",
    descripcion:
      "La ortodoncia corrige la posición de los dientes; la ortopedia maxilar interviene sobre el crecimiento de los huesos que los sostienen. Distinguirlas importa porque determinan el momento del tratamiento: hay correcciones que solo son posibles mientras el hueso todavía crece, y otras que se resuelven a cualquier edad. La evaluación define cuál de los dos caminos corresponde antes de proponer un plan.",
    atiende: [
      "Apiñamiento y espaciamiento dentario",
      "Mordida cruzada, abierta o profunda",
      "Discrepancias entre maxilar superior e inferior",
      "Casos de ortopedia compleja derivados por colegas",
      "Planificación conjunta en casos ortodóncico-quirúrgicos",
    ],
    foto: "/fotos/consultorio-adulto-a.jpeg",
    fotoAlt: "Consultorio de adultos de ArietaNoova",
  },
  {
    slug: "endodoncia",
    nombre: "Endodoncia",
    sumario:
      "Tratamiento del interior del diente cuando la pulpa está comprometida, para conservar la pieza.",
    descripcion:
      "La endodoncia trata el tejido interno del diente cuando una caries profunda, una fractura o un traumatismo comprometen la pulpa. Su objetivo es conservar la pieza natural en lugar de extraerla. Es, en la mayoría de los casos, la alternativa que evita llegar a una rehabilitación más extensa más adelante.",
    atiende: [
      "Dolor dental persistente o espontáneo",
      "Caries profunda con compromiso pulpar",
      "Retratamiento de conductos",
      "Traumatismo dentario",
    ],
    foto: "/fotos/consultorio-adulto-c.jpeg",
    fotoAlt: "Unidad dental de ArietaNoova",
  },
  {
    slug: "rehabilitacion-oral",
    nombre: "Rehabilitación oral",
    sumario:
      "Devolver función y forma cuando hay piezas perdidas, desgaste o trabajos previos que fallaron.",
    descripcion:
      "La rehabilitación oral reconstruye la función masticatoria y la forma de la boca cuando el daño ya no es puntual. Suele ser el punto donde varias especialidades trabajan sobre el mismo paciente: periodoncia para sanear, endodoncia para conservar, cirugía para preparar el terreno. Por eso se planifica completa antes de empezar, no pieza por pieza.",
    atiende: [
      "Pérdida de una o varias piezas dentarias",
      "Desgaste generalizado",
      "Coronas, puentes y prótesis",
      "Rehabilitación sobre implantes",
      "Trabajos previos que necesitan rehacerse",
    ],
    foto: "/fotos/consultorio-adulto-e.jpeg",
    fotoAlt: "Consultorio equipado de ArietaNoova",
  },
  {
    slug: "cirugia-oral",
    nombre: "Cirugía oral",
    sumario:
      "Procedimientos quirúrgicos sobre dientes y tejidos de la boca, incluida la preparación para implantes.",
    descripcion:
      "Comprende desde la extracción de piezas retenidas hasta la preparación del terreno óseo para recibir implantes. En una clínica de especialidades, la cirugía rara vez es un fin en sí misma: se planifica en función de lo que viene después, sea una rehabilitación, una ortodoncia o ambas.",
    atiende: [
      "Extracción de terceras molares",
      "Piezas retenidas o incluidas",
      "Cirugía preprotésica",
      "Colocación de implantes",
    ],
    foto: "/fotos/consultorio-adulto-d.jpeg",
    fotoAlt: "Área clínica de ArietaNoova",
  },
  {
    slug: "odontopediatria",
    nombre: "Odontopediatría",
    sumario:
      "Atención odontológica de niños y adolescentes, con ambiente y tiempos propios.",
    descripcion:
      "La odontopediatría no es odontología de adultos en menor escala. Tiene tiempos, lenguaje y criterios de intervención distintos, y una función que no tiene equivalente en el adulto: detectar a tiempo lo que conviene corregir mientras el crecimiento todavía lo permite. La clínica cuenta con consultorios diferenciados para la atención infantil.",
    atiende: [
      "Primera consulta y control periódico",
      "Caries en dentición temporal",
      "Hábitos como succión digital o respiración bucal",
      "Derivación temprana a ortopedia maxilar",
    ],
    foto: "/fotos/consultorio-infantil-a.jpeg",
    fotoAlt: "Consultorio infantil de ArietaNoova",
  },
  {
    slug: "periodoncia",
    nombre: "Periodoncia",
    sumario:
      "Tratamiento de encías y del tejido que sostiene al diente. La base sobre la que se apoya todo lo demás.",
    descripcion:
      "La periodoncia trata el tejido que sostiene al diente. Es la especialidad que menos se busca por nombre y la que más condiciona el resultado de las demás: sin un soporte sano, ni la ortodoncia ni la rehabilitación se sostienen en el tiempo. El sangrado al cepillarse, que muchos pacientes normalizan, suele ser el primer signo.",
    atiende: [
      "Sangrado de encías",
      "Enfermedad periodontal",
      "Retracción gingival",
      "Mantenimiento previo a ortodoncia o rehabilitación",
    ],
    foto: "/fotos/consultorio-adulto-b.jpeg",
    fotoAlt: "Consultorio de ArietaNoova",
  },
];

export const paraOdontologos = {
  titulo: "Para odontólogos",
  entrada:
    "ArietaNoova recibe pacientes derivados por colegas. Esta sección existe para que esa derivación tenga reglas claras: qué casos recibimos, cómo se coordina la atención y cómo regresa el paciente a su odontólogo tratante.",
  casos: {
    titulo: "Qué casos recibimos",
    items: [
      {
        titulo: "Ortopedia maxilar compleja",
        texto:
          "Casos de crecimiento que requieren aparatología y control especializado, habitualmente en pacientes en edad de desarrollo.",
      },
      {
        titulo: "Casos ortodóncico-quirúrgicos",
        texto:
          "Discrepancias esqueletales que necesitan planificación conjunta entre ortodoncia y cirugía.",
      },
      {
        titulo: "Rehabilitación multidisciplinaria",
        texto:
          "Pacientes que requieren la intervención coordinada de más de una especialidad sobre el mismo plan.",
      },
      {
        titulo: "Segunda opinión diagnóstica",
        texto:
          "Evaluación de un caso antes de decidir el tratamiento, sin que implique transferencia del paciente.",
      },
    ],
  },
  mentoria: {
    titulo: "Mentoría de casos",
    texto:
      "Hay colegas que prefieren resolver el caso ellos mismos con asesoría. ArietaNoova acompaña esa modalidad: el paciente permanece con su odontólogo tratante y la clínica interviene en el diagnóstico, la planificación y el control del avance. Es una vía distinta a la derivación y se acuerda caso por caso.",
  },
  protocolo: {
    titulo: "Cómo funciona la derivación",
    pasos: [
      {
        n: "01",
        titulo: "El colega envía el caso",
        texto:
          "Por el formulario de esta página o por el canal directo de la clínica, con el motivo de la derivación y los estudios disponibles.",
      },
      {
        n: "02",
        titulo: "Evaluación y respuesta al colega",
        texto:
          "La clínica evalúa al paciente y devuelve al odontólogo referidor el diagnóstico y el plan propuesto antes de iniciar cualquier tratamiento.",
      },
      {
        n: "03",
        titulo: "Alcance acordado, no abierto",
        texto:
          "La intervención se limita a lo derivado. ArietaNoova no asume la atención general del paciente salvo que el colega lo solicite expresamente.",
      },
      {
        n: "04",
        titulo: "Informe de avance y alta",
        texto:
          "El colega recibe informe durante el tratamiento y al momento del alta, con las indicaciones de seguimiento que correspondan.",
      },
      {
        n: "05",
        titulo: "El paciente regresa",
        texto:
          "Concluido el alcance derivado, el paciente vuelve a su odontólogo tratante para continuar su atención habitual.",
      },
    ],
  },
};

export const pago = {
  titulo: "Cómo funciona el pago",
  entrada:
    "ArietaNoova no publica lista de precios. Un tratamiento de especialidad no tiene un precio único: depende del diagnóstico, de cuántas especialidades intervienen y de cuánto dura. Publicar una cifra suelta sin ese contexto orienta mal al paciente. Lo que sí corresponde publicar es cómo funciona el proceso.",
  bloques: [
    {
      n: "01",
      titulo: "Primero se evalúa, después se cotiza",
      texto:
        "Ningún plan de tratamiento se presupuesta antes de la evaluación. La primera visita existe para establecer un diagnóstico; el costo se deriva de ese diagnóstico, no al revés.",
    },
    {
      n: "02",
      titulo: "El presupuesto se entrega por escrito y completo",
      texto:
        "Antes de iniciar, el paciente recibe el plan detallado: qué procedimientos incluye, en qué orden, cuántas sesiones aproximadas y qué especialidades intervienen. Sin partidas abiertas.",
    },
    {
      n: "03",
      titulo: "Lo que cambia el presupuesto se conversa antes",
      texto:
        "Si durante el tratamiento aparece un hallazgo que modifica el plan, se informa y se acuerda antes de ejecutarlo. El paciente no recibe cargos que no haya aprobado.",
    },
    {
      n: "04",
      titulo: "Tratamientos largos, pago fraccionado",
      texto:
        "Ortodoncia y rehabilitación se extienden en el tiempo y el pago acompaña ese ritmo por etapas. Las condiciones se fijan al firmar el plan.",
    },
  ],
  nota: "Los medios de pago aceptados y las condiciones de fraccionamiento no constan en los documentos del proyecto.",
};

export const casos = {
  titulo: "Casos y testimonios",
  entrada:
    "Los casos clínicos de ArietaNoova se publican con una estructura fija, para que se entiendan como un proceso y no como una fotografía de antes y después. Esta sección está construida y a la espera del material.",
  estructura: [
    {
      n: "01",
      titulo: "Problema",
      texto: "Con qué llegó el paciente y qué lo trajo a consulta.",
    },
    {
      n: "02",
      titulo: "Diagnóstico",
      texto: "Qué se encontró en la evaluación.",
    },
    {
      n: "03",
      titulo: "Planificación",
      texto: "Qué plan se propuso y por qué ese y no otro.",
    },
    {
      n: "04",
      titulo: "Tratamiento",
      texto: "Qué se ejecutó y en cuánto tiempo.",
    },
    {
      n: "05",
      titulo: "Especialidades involucradas",
      texto: "Quiénes intervinieron en el caso.",
    },
    {
      n: "06",
      titulo: "Resultado",
      texto: "Qué cambió, en términos de función y no solo de estética.",
    },
  ],
  aviso:
    "Los casos clínicos se publican únicamente con consentimiento informado del paciente. Ninguna imagen de esta sección se difunde sin esa autorización firmada.",
};

export const tecnologia = {
  titulo: "Escáner intraoral 3D",
  texto:
    "La clínica cuenta con escáner intraoral 3D. Sustituye la impresión con pasta por un registro digital de la boca, lo que permite planificar el tratamiento sobre un modelo exacto y mostrarle al paciente lo mismo que ve el especialista.",
};

export type Problema = {
  slug: string;
  sintoma: string;
  significa: string;
  especialidad: string;
};

/**
 * "Problemas frecuentes" habla el idioma del paciente, no el del odontólogo:
 * captura búsquedas de síntoma, que son mucho más frecuentes que las de
 * especialidad. Cada entrada deriva a la especialidad que lo resuelve.
 *
 * El texto describe conocimiento clínico general, no afirmaciones sobre casos
 * de la clínica. rutas.ts contempla además páginas de detalle por problema
 * (/problemas/[slug]); no se construyeron por falta de contenido aprobado.
 */
export const problemas: Problema[] = [
  {
    slug: "sangrado-de-encias",
    sintoma: "Me sangran las encías al cepillarme",
    significa:
      "El sangrado no es normal ni es «porque cepillo fuerte». Suele ser el primer signo de inflamación del tejido que sostiene al diente, y es la etapa en la que todavía se revierte sin perder soporte.",
    especialidad: "periodoncia",
  },
  {
    slug: "perdi-una-pieza",
    sintoma: "Perdí un diente y no sé qué hacer",
    significa:
      "El hueco no se queda quieto: las piezas vecinas se inclinan y la de enfrente desciende. Cuanto antes se planifica, menos trabajo hace falta para reponerla.",
    especialidad: "rehabilitacion-oral",
  },
  {
    slug: "dolor-de-muela",
    sintoma: "Tengo un dolor de muela que no cede",
    significa:
      "Un dolor espontáneo, que despierta de noche o que sigue después de retirar el estímulo, apunta a que la pulpa está comprometida. Es el momento en que todavía se puede conservar la pieza.",
    especialidad: "endodoncia",
  },
  {
    slug: "dientes-apinados",
    sintoma: "Tengo los dientes apiñados o torcidos",
    significa:
      "Más allá de la estética, el apiñamiento crea zonas que el cepillo no alcanza y concentra el desgaste en pocas piezas. La evaluación define si corresponde ortodoncia o si hay un componente óseo de por medio.",
    especialidad: "ortodoncia-y-ortopedia-maxilar",
  },
  {
    slug: "mordida-no-encaja",
    sintoma: "Siento que mi mordida no encaja bien",
    significa:
      "Cuando el problema no está en la posición de los dientes sino en la relación entre los maxilares, la solución no es solo ortodóncica. Distinguirlo temprano cambia por completo el plan.",
    especialidad: "ortodoncia-y-ortopedia-maxilar",
  },
  {
    slug: "mi-hijo-rechina-los-dientes",
    sintoma: "Mi hijo rechina los dientes",
    significa:
      "En niños suele acompañar a otros hábitos —succión digital, respiración bucal— que influyen en cómo crecen los maxilares. Es una de las señales que conviene revisar mientras el crecimiento todavía permite corregir.",
    especialidad: "odontopediatria",
  },
  {
    slug: "muelas-del-juicio",
    sintoma: "Me dijeron que debo sacarme las muelas del juicio",
    significa:
      "No todas hay que extraerlas. La decisión depende de la posición, del espacio disponible y de si están afectando a las piezas vecinas; eso se ve con imagen, no a simple vista.",
    especialidad: "cirugia-oral",
  },
  {
    slug: "trabajos-antiguos-que-fallan",
    sintoma: "Tengo coronas o puentes antiguos que se despegan",
    significa:
      "Cuando un trabajo previo falla repetidamente, el problema rara vez está en la pieza que se despega. Conviene revisar el conjunto antes de volver a cementar.",
    especialidad: "rehabilitacion-oral",
  },
];

export const evaluacionMatutina = {
  titulo: "Evaluación matutina",
  entrada:
    "Una consulta de diagnóstico en horario de mañana, pensada como puerta de entrada: sirve para saber qué tiene, qué especialidad corresponde y qué alternativas existen, antes de comprometerse con ningún tratamiento.",
  incluye: {
    titulo: "Qué incluye",
    // No consta en los documentos del proyecto qué comprende exactamente.
    items: null,
  },
  despues: {
    titulo: "Qué pasa después",
    pasos: [
      {
        n: "01",
        titulo: "Sale con un diagnóstico, no con un presupuesto",
        texto:
          "La evaluación termina con una explicación de qué se encontró y qué especialidad corresponde. El plan y su costo vienen después, por escrito.",
      },
      {
        n: "02",
        titulo: "Si necesita una especialidad, se coordina",
        texto:
          "La derivación interna la hace la clínica. El paciente no tiene que averiguar por su cuenta a quién acudir.",
      },
      {
        n: "03",
        titulo: "Si no necesita nada, se lo decimos",
        texto:
          "Una evaluación que concluye que no hace falta tratamiento es un resultado válido. No se propone trabajo para justificar la visita.",
      },
    ],
  },
};

/**
 * NAVEGACIÓN — fuente de verdad: web/lib/rutas.ts del proyecto original
 * y la sección 6 de CI-2026-WEB-001.
 *
 * No renombrar, añadir ni quitar entradas sin aprobación. El orden y las
 * etiquetas son decisiones ya tomadas con la clienta:
 *  - "Equipo" (no "Sobre la Doctora"): la página sostiene el posicionamiento
 *    de clínica de especialistas, no solo el perfil de la directora.
 *  - "Tecnología" va en el menú: es la página que justifica el precio de la
 *    consulta con el escáner intraoral 3D.
 *  - El logo del encabezado es el enlace a "/". No hay ítem "Inicio".
 */

export const RUTAS = {
  inicio: "/",
  especialidades: "/especialidades",
  problemas: "/problemas",
  equipo: "/equipo",
  tecnologia: "/tecnologia",
  casos: "/casos",
  paraOdontologos: "/para-odontologos",
  evaluacionMatutina: "/evaluacion-matutina",
  formasDePago: "/formas-de-pago",
  contacto: "/contacto",
} as const;

export type EntradaNavegacion = { etiqueta: string; href: string };

/** Navegación principal de primer nivel (escritorio y móvil). */
export const NAVEGACION_PRINCIPAL: EntradaNavegacion[] = [
  { etiqueta: "Especialidades", href: RUTAS.especialidades },
  { etiqueta: "Equipo", href: RUTAS.equipo },
  { etiqueta: "Tecnología", href: RUTAS.tecnologia },
  { etiqueta: "Para odontólogos", href: RUTAS.paraOdontologos },
  { etiqueta: "Contacto", href: RUTAS.contacto },
];

/** Enlaces del pie. No se enlazan desde el menú principal. */
export const NAVEGACION_PIE: EntradaNavegacion[] = [
  { etiqueta: "Problemas frecuentes", href: RUTAS.problemas },
  { etiqueta: "Casos clínicos", href: RUTAS.casos },
  { etiqueta: "Evaluación matutina", href: RUTAS.evaluacionMatutina },
  { etiqueta: "Formas de pago", href: RUTAS.formasDePago },
];

export function rutaEspecialidad(slug: string): string {
  return `${RUTAS.especialidades}/${slug}`;
}
