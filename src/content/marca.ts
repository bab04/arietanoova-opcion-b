/**
 * OPCION B - Paleta C2 "Oliva y oro suave"
 *
 * Los tres HEX de marca salen del comparador ArietaNoova_Comparador_HD:
 * verificados en el CSS del comparador y dentro del propio SVG del logo.
 * NO se inventaron ni se aproximaron.
 *
 *   verde  #425B46  nombre, contornos y brackets de B
 *   oro    #C2A14E  arco y destello de B
 *   crema  #F7F3E9  base clara
 *
 * Los tonos derivados (oroTinta, oroClaro, verdeTinta) existen solo por
 * accesibilidad: el oro de marca no alcanza contraste AA como texto pequeno.
 * El oro de marca se usa como SUPERFICIE, filete, icono y display grande,
 * que es lo que le da presencia real en el sistema sin romper legibilidad.
 *
 * Nota: el oliva de C2 es mas claro que el bosque de C1, asi que el oro
 * derivado para fondos oscuros es mas claro aqui (#DDCB9E) que en la
 * opcion A (#D2B677). Con el oro de marca puro sobre oliva el contraste
 * cae a 3.02:1 y no serviria para texto.
 */
export const marca = {
  id: "B",
  nombre: "Opcion B",
  paleta: "C2 - Oliva y oro suave",
  logo: "/marca/logo-arietanoova.svg",

  verde: "#425B46",
  oro: "#C2A14E",
  crema: "#F7F3E9",

  // derivados por accesibilidad
  verdeTinta: "#122E22", // texto sobre boton oro  -> 5.91:1
  oroTinta: "#7C6731", // texto pequeno oro: 4.53 sobre oro velado, 4.94 sobre crema
  oroClaro: "#DDCB9E", // display/filete/texto oro sobre oliva -> 4.65:1
  textoAtenuado: "#546A56", // 90 % de verde: 5.29 sobre crema, 4.85 sobre oro velado.
  // El oliva de C2 es mas claro que el bosque de C1, asi que aqui el tono
  // atenuado tiene que acercarse mucho mas al verde de marca para pasar AA.
  cremaAtenuada: "#D6D8CC", // texto secundario sobre las bandas verdes: 5.16 sobre el oliva de C2. Mas claro que en A porque el oliva
  // es mas claro: el mismo valor de A daba 4.24 y no pasaba AA
  papel: "#FFFFFF",
} as const;
