"use client";

import { useState } from "react";
import Image from "next/image";
import type { Especialista } from "@/content/site";

interface Props {
  especialistas: Especialista[];
}

export default function DesplegableEspecialistas({ especialistas }: Props) {
  // Guardamos qué especialistas están abiertos. Por defecto el primero puede estar abierto
  // o todos cerrados para que el usuario explore haciendo click.
  const [abiertos, setAbiertos] = useState<Record<string, boolean>>({});

  const toggle = (id: string) => {
    setAbiertos((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="equipo-desplegable" style={{ display: "grid", gap: "1rem" }}>
      {especialistas.map((esp) => {
        const estaAbierto = !!abiertos[esp.id];
        // REGLA LEGAL ESTRICTA:
        // Si no tiene RNE, solo se muestra su COP.
        // NUNCA colocar "en trámite".
        const credencialTexto = esp.rne
          ? `${esp.colegiatura} · ${esp.rne}`
          : esp.colegiatura;

        const primerNombre = esp.nombre.split(" ")[0];
        const apellido = esp.nombre.split(" ").slice(-1)[0];
        const wspMensaje = encodeURIComponent(
          `Hola ArietaNoova, quisiera solicitar una consulta con ${esp.nombre} (${esp.especialidad}).`
        );

        return (
          <div
            key={esp.id}
            className="tarjeta"
            style={{
              padding: 0,
              overflow: "hidden",
              border: estaAbierto
                ? "1px solid var(--oro)"
                : "1px solid color-mix(in srgb, var(--oro) 35%, transparent)",
              borderLeft: esp.rne
                ? "4px solid var(--oro)"
                : "4px solid var(--verde)",
              background: estaAbierto
                ? "color-mix(in srgb, var(--oro-velo) 75%, white)"
                : "var(--oro-velo)",
              boxShadow: estaAbierto
                ? "0 6px 20px rgba(0, 0, 0, 0.06)"
                : "none",
              transition: "all 0.25s ease",
            }}
          >
            {/* Cabecera clickeable */}
            <button
              type="button"
              onClick={() => toggle(esp.id)}
              aria-expanded={estaAbierto}
              style={{
                width: "100%",
                padding: "1.125rem 1.25rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                textAlign: "left",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                gap: "1rem",
              }}
            >
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                  }}
                >
                  <strong
                    style={{
                      fontSize: "1.0625rem",
                      fontFamily: "var(--fuente-display), serif",
                      color: "var(--verde-tinta)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {esp.nombre}
                  </strong>
                  <span
                    style={{
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      color: "var(--oro-tinta)",
                      letterSpacing: "0.02em",
                      background: "color-mix(in srgb, var(--oro) 18%, transparent)",
                      padding: "0.2rem 0.6rem",
                      borderRadius: "999px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {credencialTexto}
                  </span>
                </div>
                <p
                  style={{
                    margin: "0.35rem 0 0",
                    fontSize: "0.875rem",
                    color: "var(--texto-atenuado)",
                  }}
                >
                  {esp.tituloProfesional}
                </p>
              </div>

              {/* Indicador de despliegue */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: "var(--oro-tinta)",
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    display: "none",
                    "@media (minWidth: 640px)": { display: "inline" },
                  } as React.CSSProperties}
                  className="oculto-movil"
                >
                  {estaAbierto ? "Ocultar" : "Ver perfil"}
                </span>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    background: estaAbierto
                      ? "var(--verde)"
                      : "color-mix(in srgb, var(--oro) 25%, transparent)",
                    color: estaAbierto ? "#FFFFFF" : "var(--oro-tinta)",
                    transform: estaAbierto ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.25s ease, background 0.2s ease",
                  }}
                >
                  ▼
                </span>
              </div>
            </button>

            {/* Panel desplegado con foto y especificaciones */}
            {estaAbierto && (
              <div
                style={{
                  padding: "0 1.25rem 1.25rem 1.25rem",
                  borderTop: "1px solid color-mix(in srgb, var(--oro) 25%, transparent)",
                  paddingTop: "1.125rem",
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "1.25rem",
                  alignItems: "start",
                  animation: "desplegarSuave 0.25s ease",
                }}
              >
                {/* Columna 1: Fotografía y ficha */}
                <div style={{ maxWidth: "240px", margin: "0 auto", width: "100%" }}>
                  {esp.foto ? (
                    <div
                      style={{
                        position: "relative",
                        aspectRatio: "1 / 1",
                        width: "100%",
                        borderRadius: "8px",
                        overflow: "hidden",
                        border: "1px solid var(--oro-linea)",
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                      }}
                    >
                      <Image
                        src={esp.foto}
                        alt={`Fotografía de ${esp.nombre}`}
                        fill
                        sizes="(max-width: 640px) 100vw, 240px"
                        style={{ objectFit: "cover", objectPosition: "top" }}
                      />
                    </div>
                  ) : (
                    <div
                      style={{
                        aspectRatio: "1 / 1",
                        width: "100%",
                        borderRadius: "8px",
                        background: "var(--verde)",
                        color: "#FFFFFF",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "2rem",
                        fontFamily: "var(--fuente-display), serif",
                      }}
                    >
                      {esp.nombre
                        .split(" ")
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join("")}
                    </div>
                  )}

                  <div
                    style={{
                      marginTop: "0.625rem",
                      textAlign: "center",
                      padding: "0.35rem 0.5rem",
                      background: "color-mix(in srgb, var(--verde) 8%, transparent)",
                      borderRadius: "4px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        color: "var(--verde-tinta)",
                      }}
                    >
                      {esp.especialidad}
                    </span>
                  </div>
                </div>

                {/* Columna 2: Especificaciones clínicas completas */}
                <div style={{ display: "grid", gap: "1rem" }}>
                  {/* Enfoque clínico */}
                  <div>
                    <h4
                      style={{
                        fontSize: "0.75rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        color: "var(--oro-tinta)",
                        margin: "0 0 0.35rem",
                        fontWeight: 700,
                      }}
                    >
                      Enfoque Clínico
                    </h4>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "0.9rem",
                        lineHeight: 1.6,
                        color: "var(--tinta)",
                        fontStyle: "italic",
                        borderLeft: "2px solid var(--oro)",
                        paddingLeft: "0.75rem",
                      }}
                    >
                      "{esp.enfoque}"
                    </p>
                  </div>

                  {/* Procedimientos y tratamientos */}
                  {esp.procedimientos && esp.procedimientos.length > 0 && (
                    <div>
                      <h4
                        style={{
                          fontSize: "0.75rem",
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          color: "var(--oro-tinta)",
                          margin: "0 0 0.4rem",
                          fontWeight: 700,
                        }}
                      >
                        Tratamientos y Procedimientos
                      </h4>
                      <ul
                        style={{
                          margin: 0,
                          padding: 0,
                          listStyle: "none",
                          display: "grid",
                          gap: "0.3rem",
                        }}
                      >
                        {esp.procedimientos.map((p, idx) => (
                          <li
                            key={idx}
                            style={{
                              fontSize: "0.85rem",
                              lineHeight: 1.45,
                              color: "var(--texto-atenuado)",
                              display: "flex",
                              alignItems: "flex-start",
                              gap: "0.5rem",
                            }}
                          >
                            <span
                              style={{
                                color: "var(--oro-tinta)",
                                fontWeight: "bold",
                                fontSize: "0.75rem",
                                marginTop: "0.15rem",
                              }}
                            >
                              ✦
                            </span>
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Formación académica y registro */}
                  {esp.formacion && esp.formacion.length > 0 && (
                    <div>
                      <h4
                        style={{
                          fontSize: "0.75rem",
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          color: "var(--oro-tinta)",
                          margin: "0 0 0.4rem",
                          fontWeight: 700,
                        }}
                      >
                        Formación y Acreditación
                      </h4>
                      <ul
                        style={{
                          margin: 0,
                          padding: 0,
                          listStyle: "none",
                          display: "grid",
                          gap: "0.25rem",
                        }}
                      >
                        {esp.formacion.map((f, idx) => (
                          <li
                            key={idx}
                            style={{
                              fontSize: "0.8125rem",
                              color: "var(--texto-atenuado)",
                              display: "flex",
                              alignItems: "baseline",
                              gap: "0.4rem",
                            }}
                          >
                            <span style={{ color: "var(--verde)", fontSize: "0.6rem" }}>
                              ●
                            </span>
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Botón de consulta directa por WhatsApp */}
                  <div style={{ paddingTop: "0.5rem" }}>
                    <a
                      href={`https://wa.me/51985996818?text=${wspMensaje}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="boton boton-secundario"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        fontSize: "0.8125rem",
                        padding: "0.5rem 1rem",
                        textDecoration: "none",
                        borderRadius: "4px",
                      }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Agendar evaluación con {primerNombre} {apellido}
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
