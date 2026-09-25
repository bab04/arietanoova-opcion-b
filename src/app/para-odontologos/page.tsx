import type { Metadata } from "next";

import Revelar from "@/components/Revelar";
import FormularioDerivacion from "@/components/FormularioDerivacion";
import { PortadaInterior } from "@/components/Piezas";
import { paraOdontologos } from "@/content/site";

export const metadata: Metadata = {
  title: "Para odontólogos",
  description:
    "Derivación profesional y mentoría de casos en ArietaNoova: qué casos recibimos, cómo se coordina la atención y cómo regresa el paciente a su odontólogo tratante.",
  alternates: { canonical: "/para-odontologos" },
};

export default function ParaOdontologos() {
  return (
    <>
      <PortadaInterior
        antetitulo="Derivación profesional"
        titulo={paraOdontologos.titulo}
        bajada={paraOdontologos.entrada}
        foto="/fotos/equipo-trabajo.jpg"
        fotoAlt="Equipo clínico de ArietaNoova revisando un caso"
      />

      {/* --------------------------- QUÉ RECIBIMOS --------------------------- */}
      <section className="seccion">
        <div className="envoltura">
          <Revelar>
            <p className="antetitulo">01 · {paraOdontologos.casos.titulo}</p>
          </Revelar>
          <div className="rejilla rejilla-2 casos-rejilla">
            {paraOdontologos.casos.items.map((c, i) => (
              <Revelar key={c.titulo} as="article" retraso={i * 60}>
                <div className="tarjeta">
                  <h2 className="tarjeta-titulo">{c.titulo}</h2>
                  <p className="tarjeta-texto">{c.texto}</p>
                </div>
              </Revelar>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------- MENTORÍA ------------------------------ */}
      <section className="seccion superficie-oro">
        <div className="envoltura">
          <Revelar>
            <div className="mentoria">
              <p className="antetitulo">02 · {paraOdontologos.mentoria.titulo}</p>
              <p className="mentoria-texto">{paraOdontologos.mentoria.texto}</p>
            </div>
          </Revelar>
        </div>
      </section>

      {/* ----------------------------- PROTOCOLO ----------------------------- */}
      <section className="seccion superficie-verde">
        <div className="envoltura">
          <Revelar>
            <p className="antetitulo">03 · {paraOdontologos.protocolo.titulo}</p>
            <h2 className="display-m protocolo-titulo">
              El compromiso con el colega que deriva
            </h2>
          </Revelar>

          <ol className="protocolo">
            {paraOdontologos.protocolo.pasos.map((p, i) => (
              <Revelar key={p.n} as="li" retraso={i * 60}>
                <span className="indice">{p.n}</span>
                <div>
                  <h3 className="protocolo-paso">{p.titulo}</h3>
                  <p>{p.texto}</p>
                </div>
              </Revelar>
            ))}
          </ol>
        </div>
      </section>

      {/* ----------------------------- FORMULARIO ---------------------------- */}
      <section className="seccion" id="derivar">
        <div className="envoltura">
          <div className="derivar-rejilla">
            <Revelar>
              <p className="antetitulo">04 · Enviar un caso</p>
              <h2 className="display-m">Formulario de derivación</h2>
              <p className="bajada">
                Complete los datos del caso y la clínica responderá con el
                diagnóstico y el plan propuesto antes de iniciar cualquier
                tratamiento.
              </p>
            </Revelar>
            <Revelar>
              <FormularioDerivacion />
            </Revelar>
          </div>
        </div>
      </section>
    </>
  );
}
