import Link from "next/link";

import { NAVEGACION_PRINCIPAL, NAVEGACION_PIE } from "@/content/site";

export default function NoEncontrada() {
  return (
    <section className="seccion no-encontrada">
      <div className="envoltura">
        <p className="antetitulo">Error 404</p>
        <h1 className="display-l">Esta página no existe</h1>
        <p className="bajada bajada-grande">
          Puede que el enlace esté desactualizado. Estas son las secciones del
          sitio:
        </p>
        <ul className="no-encontrada-lista">
          {[...NAVEGACION_PRINCIPAL, ...NAVEGACION_PIE].map((i) => (
            <li key={i.href}>
              <Link href={i.href}>{i.etiqueta}</Link>
            </li>
          ))}
        </ul>
        <Link href="/" className="boton boton-oro">
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}
