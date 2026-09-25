import type { MetadataRoute } from "next";

import { RUTAS, especialidades, rutaEspecialidad } from "@/content/site";

const BASE = "https://arietanoova.pe";

/**
 * El sitemap se arma desde RUTAS, que es la misma fuente que alimenta el menú
 * y el pie. Añadir una sección es editar src/content/site.ts, no tres sitios.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const ahora = new Date();

  const principales = Object.values(RUTAS).map((ruta) => ({
    url: `${BASE}${ruta === "/" ? "" : ruta}`,
    lastModified: ahora,
    changeFrequency: "monthly" as const,
    priority: ruta === "/" ? 1 : 0.8,
  }));

  const detalles = especialidades.map((e) => ({
    url: `${BASE}${rutaEspecialidad(e.slug)}`,
    lastModified: ahora,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...principales, ...detalles];
}
