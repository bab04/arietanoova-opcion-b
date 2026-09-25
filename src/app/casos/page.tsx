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

      {/* -------------------------- CASOS PENDIENTES ------------------------- */}
      <section className="seccion superficie-oro">
        <div className="envoltura">
          <Revelar>
            <p className="antetitulo">Los casos</p>
            <div className="hueco-casos">
              <Pendiente bloque>
                material de casos clínicos. A la fecha la clínica no tiene casos
                registrados en formato publicable, con los seis apartados y con
                consentimiento informado firmado. Esta sección queda construida y
                se llena cuando el material exista.
              </Pendiente>

              <div className="hueco-rejilla" aria-hidden="true">
                {[1, 2, 3].map((n) => (
                  <div key={n} className="hueco-tarjeta">
                    <span>Caso {String(n).padStart(2, "0")}</span>
                  </div>
                ))}
              </div>
            </div>
          </Revelar>
        </div>
      </section>

      {/* ---------------------------- TESTIMONIOS ---------------------------- */}
      <section className="seccion">
        <div className="envoltura">
          <Revelar>
            <p className="antetitulo">Testimonios</p>
            <h2 className="display-m">Lo que dicen los pacientes</h2>
            <p className="bajada">
              <Pendiente bloque>
                testimonios de pacientes. No se incluyó ninguno porque no hay
                textos, nombres ni autorizaciones en los documentos del proyecto.
                Inventar un testimonio sería un dato falso frente a la clienta.
              </Pendiente>
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
