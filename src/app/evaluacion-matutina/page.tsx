import type { Metadata } from "next";

import Revelar from "@/components/Revelar";
import Pendiente from "@/components/Pendiente";
import FormularioContacto from "@/components/FormularioContacto";
import { PortadaInterior } from "@/components/Piezas";
import { clinica, evaluacionMatutina } from "@/content/site";

export const metadata: Metadata = {
  title: "Evaluación matutina",
  description:
    "Consulta de diagnóstico en horario de mañana en ArietaNoova, Pueblo Libre: sirve para saber qué tiene y qué especialidad corresponde antes de comprometerse con un tratamiento.",
  alternates: { canonical: "/evaluacion-matutina" },
};

export default function EvaluacionMatutina() {
  return (
    <>
      <PortadaInterior
        antetitulo="Puerta de entrada"
        titulo={evaluacionMatutina.titulo}
        bajada={evaluacionMatutina.entrada}
        foto="/fotos/recepcion-vertical.jpeg"
        fotoAlt="Recepción de ArietaNoova"
      />

      {/* --------------------------- QUÉ INCLUYE ----------------------------- */}
      <section className="seccion">
        <div className="envoltura">
          <div className="detalle-rejilla">
            <Revelar>
              <p className="antetitulo">01 · {evaluacionMatutina.incluye.titulo}</p>
              <p className="detalle-texto">
                Las clínicas de especialidades que mejor convierten cuantifican
                la primera visita: cuánto dura y qué comprende exactamente. Es la
                información que decide a un paciente a pedir la cita.
              </p>
              <p className="pie-foto">
                <Pendiente bloque>
                  duración de la evaluación y el detalle de qué incluye
                  (anamnesis, examen clínico, radiografía, escaneo intraoral,
                  plan preliminar). No consta en los documentos del proyecto y es
                  justo el dato que hace funcionar esta página. La Dra. pidió
                  explícitamente «explicar claramente qué incluye la evaluación,
                  cómo es el proceso y qué puede esperar el paciente después».
                </Pendiente>
              </p>
            </Revelar>

            <Revelar>
              <div className="tarjeta atiende">
                <p className="antetitulo">Condiciones</p>
                <ul>
                  <li>Solo en horario de mañana</li>
                  <li>Con cita previa</li>
                  <li>Atendida por el equipo clínico</li>
                </ul>
                <p className="pie-foto">
                  <Pendiente bloque>
                    el precio. Los documentos del proyecto fijan la evaluación
                    matutina en S/ 60 y la Dra. confirmó por escrito que quiere
                    mantenerla visible como puerta de entrada — pero el encargo de
                    estas dos webs pidió no publicar cifras. Decidir si esta
                    landing es la excepción.
                  </Pendiente>
                </p>
              </div>
            </Revelar>
          </div>
        </div>
      </section>

      {/* -------------------------- QUÉ PASA DESPUÉS ------------------------- */}
      <section className="seccion superficie-verde">
        <div className="envoltura">
          <Revelar>
            <p className="antetitulo">02 · {evaluacionMatutina.despues.titulo}</p>
            <h2 className="display-m protocolo-titulo">
              Sale sabiendo qué tiene y qué sigue
            </h2>
          </Revelar>

          <ol className="protocolo">
            {evaluacionMatutina.despues.pasos.map((p, i) => (
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

      {/* ------------------------------ RESERVAR ----------------------------- */}
      <section className="seccion">
        <div className="envoltura">
          <div className="derivar-rejilla">
            <Revelar>
              <p className="antetitulo">03 · Pedir la cita</p>
              <h2 className="display-m">Horario de mañana</h2>
              <ul className="horarios">
                {clinica.horarios.map((h) => (
                  <li key={h.dia}>
                    <span>{h.dia}</span>
                    <span>{h.horas}</span>
                  </li>
                ))}
              </ul>
              <p className="pie-foto">
                <Pendiente bloque>
                  enlace de agendamiento de Doctocliq para la evaluación
                  matutina. Debe ser un enlace propio y con UTM distinto, para
                  poder atribuir cuántas citas vienen de la web. Mientras tanto
                  el formulario cubre la solicitud.
                </Pendiente>
              </p>
            </Revelar>
            <Revelar>
              <FormularioContacto />
            </Revelar>
          </div>
        </div>
      </section>
    </>
  );
}
