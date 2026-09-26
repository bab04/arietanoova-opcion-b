"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { marca } from "@/content/marca";
import { clinica, NAVEGACION_PRINCIPAL, NAVEGACION_PIE } from "@/content/site";

/**
 * Encabezado.
 *
 * Estructura fijada en web/lib/rutas.ts (NAVEGACION_PRINCIPAL). No se añaden,
 * renombran ni quitan entradas aquí: se editan en src/content/site.ts.
 */
export default function Encabezado() {
  const ruta = usePathname();
  const [abierto, setAbierto] = useState(false);

  useEffect(() => {
    setAbierto(false);
  }, [ruta]);

  useEffect(() => {
    if (abierto) {
      document.body.classList.add("menu-abierto");
      document.body.style.overflow = "hidden";
    } else {
      document.body.classList.remove("menu-abierto");
      document.body.style.overflow = "";
    }
    return () => {
      document.body.classList.remove("menu-abierto");
      document.body.style.overflow = "";
    };
  }, [abierto]);

  useEffect(() => {
    const alPresionarTecla = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAbierto(false);
    };
    window.addEventListener("keydown", alPresionarTecla);
    return () => window.removeEventListener("keydown", alPresionarTecla);
  }, []);

  return (
    <header className={`cabecera ${abierto ? "cabecera-abierta" : ""}`}>
      <div className="cabecera-fila">
        {/* El logo ES el enlace a inicio. Tocarlo además cierra el menú móvil si estaba abierto. */}
        <Link
          href="/"
          id="ancla-logo"
          className="cabecera-logo"
          aria-label={`${clinica.marca}, ir al inicio`}
          onClick={() => setAbierto(false)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={marca.logo}
            alt={`${clinica.marca} — ${clinica.descriptor}`}
            width={720}
            height={415}
          />
        </Link>

        <nav className="cabecera-nav" aria-label="Principal">
          {NAVEGACION_PRINCIPAL.map((i) => {
            const activo = ruta.startsWith(i.href);
            return (
              <Link
                key={i.href}
                href={i.href}
                className={`cabecera-enlace ${activo ? "activo" : ""}`}
                aria-current={activo ? "page" : undefined}
              >
                {i.etiqueta}
              </Link>
            );
          })}
        </nav>

        <div className="cabecera-acciones">
          <Link href="/contacto" className="boton boton-oro cabecera-cta">
            Solicitar evaluación
          </Link>

          <button
            type="button"
            className={`cabecera-menu ${abierto ? "abierto" : ""}`}
            aria-expanded={abierto}
            aria-controls="menu-movil"
            aria-label={abierto ? "Cerrar menú y regresar" : "Abrir menú de navegación"}
            title={abierto ? "Regresar al sitio" : "Abrir menú"}
            onClick={() => setAbierto((v) => !v)}
          >
            <span className="solo-lectores">
              {abierto ? "Cerrar menú y regresar" : "Abrir menú"}
            </span>
            <span aria-hidden="true" className={abierto ? "cruz" : "barras"}>
              <i />
              <i />
              <i />
            </span>
          </button>
        </div>
      </div>

      <hr className="filete" />

      {abierto && (
        <div
          className="movil"
          id="menu-movil"
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación"
        >
          {/* Botón explícito para regresar en celular */}
          <div className="movil-barra-volver">
            <button
              type="button"
              className="movil-btn-regresar"
              onClick={() => setAbierto(false)}
              aria-label="Regresar al sitio y cerrar menú"
            >
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              <span>Regresar</span>
            </button>
            <span className="movil-indicador-menu">Navegación</span>
          </div>

          <nav aria-label="Principal (móvil)">
            {NAVEGACION_PRINCIPAL.map((i) => (
              <Link
                key={i.href}
                href={i.href}
                className="movil-enlace"
                onClick={() => setAbierto(false)}
              >
                {i.etiqueta}
              </Link>
            ))}
          </nav>

          <p className="movil-titulo">Además</p>
          <nav aria-label="Secundaria (móvil)" className="movil-secundaria">
            {NAVEGACION_PIE.map((i) => (
              <Link
                key={i.href}
                href={i.href}
                className="movil-enlace-menor"
                onClick={() => setAbierto(false)}
              >
                {i.etiqueta}
              </Link>
            ))}
          </nav>

          <Link
            href="/contacto"
            className="boton boton-oro movil-cta"
            onClick={() => setAbierto(false)}
          >
            Solicitar evaluación
          </Link>
        </div>
      )}
    </header>
  );
}
