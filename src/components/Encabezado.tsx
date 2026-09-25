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
 *
 * El teléfono va visible en la barra y FUERA del menú hamburguesa: el 68 % del
 * tráfico de la clínica es móvil y llamar es el camino de contacto más corto.
 */
export default function Encabezado() {
  const ruta = usePathname();
  const [abierto, setAbierto] = useState(false);

  useEffect(() => {
    setAbierto(false);
  }, [ruta]);

  useEffect(() => {
    document.body.style.overflow = abierto ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [abierto]);

  const telefono = clinica.telefono as string | null;

  return (
    <header className="cabecera">
      <div className="cabecera-fila">
        {/* El logo ES el enlace a inicio. No existe un ítem "Inicio" en el menú.
            #ancla-logo es además el destino de la animación de entrada. */}
        <Link
          href="/"
          id="ancla-logo"
          className="cabecera-logo"
          aria-label={`${clinica.marca}, ir al inicio`}
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
          {/* Teléfono siempre visible, nunca dentro del hamburguesa */}
          {telefono ? (
            <a className="cabecera-tel" href={`tel:${telefono.replace(/\s/g, "")}`}>
              <IconoTelefono />
              <span>{telefono}</span>
            </a>
          ) : (
            <span className="cabecera-tel cabecera-tel-pendiente">
              <IconoTelefono />
              <span>
                Teléfono
                <small>PENDIENTE</small>
              </span>
            </span>
          )}

          <Link href="/contacto" className="boton boton-oro cabecera-cta">
            Solicitar evaluación
          </Link>

          <button
            type="button"
            className="cabecera-menu"
            aria-expanded={abierto}
            aria-controls="menu-movil"
            onClick={() => setAbierto((v) => !v)}
          >
            <span className="solo-lectores">
              {abierto ? "Cerrar menú" : "Abrir menú"}
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
        <div className="movil" id="menu-movil">
          <nav aria-label="Principal (móvil)">
            {NAVEGACION_PRINCIPAL.map((i) => (
              <Link key={i.href} href={i.href} className="movil-enlace">
                {i.etiqueta}
              </Link>
            ))}
          </nav>

          <p className="movil-titulo">Además</p>
          <nav aria-label="Secundaria (móvil)" className="movil-secundaria">
            {NAVEGACION_PIE.map((i) => (
              <Link key={i.href} href={i.href} className="movil-enlace-menor">
                {i.etiqueta}
              </Link>
            ))}
          </nav>

          <Link href="/contacto" className="boton boton-oro movil-cta">
            Solicitar evaluación
          </Link>
        </div>
      )}
    </header>
  );
}

function IconoTelefono() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
      <path
        fill="currentColor"
        d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2Z"
      />
    </svg>
  );
}
