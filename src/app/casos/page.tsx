import type { Metadata } from "next";

import Revelar from "@/components/Revelar";
import Pendiente from "@/components/Pendiente";
import { PortadaInterior, Cierre } from "@/components/Piezas";
import { casos } from "@/content/site";

export const metadata: Metadata = {
  title: "Casos y testimonios",
  description:
    "Casos clínicos de ArietaNoova presentados como proceso: problema, diagnóstico, planificación, tratamiento, especialidades involucradas y resultado.",
  alternates: { canonical: "/casos" },
};

export default function Casos() {
  return (
    <>
      <PortadaInterior
        antetitulo="Casos clínicos"
        titulo={casos.titulo}
        bajada={casos.entrada}
        foto="/fotos/area-comun.jpeg"
        fotoAlt="Área común de ArietaNoova"
      />

      {/* ---------------------------- LA ESTRUCTURA -------------------------- */}
      <section className="seccion">
        <div className="envoltura">
          <Revelar>
            <p className="antetitulo">Cómo se presenta cada caso</p>
            <h2 className="display-m estructura-titulo">
              Un antes y después no explica nada por sí solo
            </h2>
            <p className="bajada">
              Por eso cada caso se publica con los mismos seis apartados. El
              paciente entiende qué se decidió y por qué; el colega que deriva
              entiende el criterio clínico.
            </p>
          </Revelar>

          <div className="rejilla rejilla-2 rejilla-3 estructura-rejilla">
            {casos.estructura.map((s, i) => (
              <Revelar key={s.n} as="article" retraso={i * 50}>
                <div className="tarjeta">
                  <span className="indice">{s.n}</span>
                  <h3 className="tarjeta-titulo">{s.titulo}</h3>
                  <p className="tarjeta-texto">{s.texto}</p>
                </div>
              </Revelar>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------- CASOS DE ÉXITO ------------------------- */}
      <section className="seccion superficie-oro">
        <div className="envoltura">
          <Revelar>
            <p className="antetitulo">Casos clínicos</p>
            <h2 className="display-m" style={{ marginBottom: "1rem" }}>Planificación y seguimiento interdisciplinario</h2>
            <p className="bajada" style={{ maxWidth: "60ch" }}>
              En ArietaNoova cada caso es documentado desde el diagnóstico inicial hasta el resultado final. Durante su consulta de evaluación, su especialista le compartirá casos análogos al suyo para que conozca el pronóstico y la evolución clínica prevista.
            </p>
          </Revelar>
        </div>
      </section>

      {/* ---------------------------- TESTIMONIOS ---------------------------- */}
      <section className="seccion">
        <div className="envoltura">
          <Revelar>
            <p className="antetitulo">Confianza médica</p>
            <h2 className="display-m">El respaldo de colegas que derivan</h2>
            <p className="bajada" style={{ maxWidth: "62ch" }}>
              El mayor respaldo de nuestra práctica es la confianza de los colegas odontólogos de Lima que nos derivan a sus pacientes para tratamientos de ortodoncia, endodoncia, cirugía e implantología de alta complejidad.
            </p>
          </Revelar>
        </div>
      </section>

      {/* ------------------------------- AVISO ------------------------------- */}
      <section className="seccion superficie-verde">
        <div className="envoltura">
          <Revelar>
            <div className="aviso-consentimiento">
              <p className="antetitulo">Consentimiento</p>
              <p className="cita-texto">{casos.aviso}</p>
            </div>
          </Revelar>
        </div>
      </section>

      <Cierre />
    </>
  );
}
