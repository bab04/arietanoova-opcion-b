import Link from "next/link";

import { marca } from "@/content/marca";
import { clinica, NAVEGACION_PRINCIPAL, NAVEGACION_PIE } from "@/content/site";

export default function PieDePagina() {
  return (
    <footer className="pie superficie-verde">
      <div className="envoltura">
        <hr className="filete" />

        <div className="pie-rejilla">
          <div className="pie-marca">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={marca.logo}
              alt={clinica.marca}
              width={720}
              height={415}
              className="pie-logo"
            />
            {/* Tagline: uso secundario, nunca como titular */}
            <p className="pie-tagline">{clinica.tagline}</p>
          </div>

          <div>
            <h3 className="pie-titulo">Navegación</h3>
            <ul className="pie-lista">
              {NAVEGACION_PRINCIPAL.map((i) => (
                <li key={i.href}>
                  <Link href={i.href}>{i.etiqueta}</Link>
                </li>
              ))}
            </ul>

            {/* Secciones que no van en el menú principal (rutas.ts) */}
            <h3 className="pie-titulo pie-titulo-segundo">Además</h3>
            <ul className="pie-lista">
              {NAVEGACION_PIE.map((i) => (
                <li key={i.href}>
                  <Link href={i.href}>{i.etiqueta}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="pie-titulo">Dónde estamos</h3>
            <address className="pie-texto">
              {clinica.direccion.calle}
              <br />
              {clinica.direccion.distrito}, {clinica.direccion.ciudad}
              <br />
              {clinica.direccion.pais}
            </address>
            <p className="pie-texto pie-dato">
              <a
                href="https://wa.me/51985996818?text=Hola%20ArietaNoova,%20deseo%20solicitar%20informaci%C3%B3n"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--oro-claro)", textDecoration: "underline" }}
              >
                WhatsApp: +51 985 996 818
              </a>
            </p>
          </div>

          <div>
            <h3 className="pie-titulo">Horarios</h3>
            <ul className="pie-lista pie-horarios">
              {clinica.horarios.map((h) => (
                <li key={h.dia}>
                  <span>{h.dia}</span>
                  <span>{h.horas}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pie-legal">
          <p>
            © {new Date().getFullYear()} {clinica.marca}. {clinica.descriptor}.
          </p>
          <p className="pie-nota">
            Versión {marca.nombre} · Paleta {marca.paleta}
          </p>
        </div>
      </div>
    </footer>
  );
}
