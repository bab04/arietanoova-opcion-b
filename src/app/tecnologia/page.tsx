import type { Metadata } from "next";

import Revelar from "@/components/Revelar";
import Pendiente from "@/components/Pendiente";
import { PortadaInterior, Cierre } from "@/components/Piezas";
import { tecnologia } from "@/content/site";

export const metadata: Metadata = {
  title: "Tecnología",
  description:
    "Escáner intraoral 3D y flujo digital en ArietaNoova: registro exacto de la boca, planificación sobre modelo digital y el paciente viendo lo mismo que el especialista.",
  alternates: { canonical: "/tecnologia" },
};

const flujo = [
  {
    n: "01",
    titulo: "Registro digital, sin pasta de impresión",
    texto:
      "El escáner intraoral levanta un modelo tridimensional de la boca en unos minutos. Sustituye la cubeta con pasta, que es la parte de la consulta que peor toleran los pacientes con reflejo nauseoso.",
  },
  {
    n: "02",
    titulo: "El plan se diseña sobre el modelo, no sobre una idea",
    texto:
      "Con la boca en digital, la planificación deja de depender de lo que se recuerda de la consulta: el especialista mide, compara y simula sobre el mismo archivo.",
  },
  {
    n: "03",
    titulo: "El paciente ve lo mismo que el especialista",
    texto:
      "Poder girar el modelo en pantalla cambia la conversación. El paciente entiende por qué se propone un tratamiento antes de decidir, no después.",
  },
  {
    n: "04",
    titulo: "El registro queda y sirve de referencia",
    texto:
      "En tratamientos largos, como ortodoncia o rehabilitación, el modelo inicial permite comparar el avance con el punto de partida real.",
  },
];

export default function Tecnologia() {
  return (
    <>
      <PortadaInterior
        antetitulo="Tecnología"
        titulo={tecnologia.titulo}
        bajada={tecnologia.texto}
        foto="/fotos/consultorio-adulto-b.jpeg"
        fotoAlt="Unidad dental equipada de ArietaNoova"
      />

      <section className="seccion">
        <div className="envoltura">
          <Revelar>
            <p className="antetitulo">El flujo digital</p>
            <h2 className="display-m protocolo-titulo">
              Qué cambia cuando el registro es digital
            </h2>
          </Revelar>

          <ol className="pasos-pago">
            {flujo.map((f, i) => (
              <Revelar key={f.n} as="li" retraso={i * 60}>
                <span className="indice">{f.n}</span>
                <div>
                  <h3 className="display-m pago-titulo">{f.titulo}</h3>
                  <p className="pago-texto">{f.texto}</p>
                </div>
              </Revelar>
            ))}
          </ol>
        </div>
      </section>

      <section className="seccion superficie-oro">
        <div className="envoltura">
          <Revelar>
            <div className="nota-pago">
              <p className="antetitulo">El equipamiento</p>
              <p className="nota-pago-texto">
                La clínica cuenta con escáner intraoral 3D. Es el único
                equipamiento que consta de forma explícita en los documentos del
                proyecto.
              </p>
              <p>
                <Pendiente bloque>
                  marca y modelo del escáner, y el resto del equipamiento que la
                  clínica quiera comunicar (radiografía panorámica, tomografía,
                  software de planificación). Nada de eso consta en los
                  documentos y no se inventó.
                </Pendiente>
              </p>
            </div>
          </Revelar>
        </div>
      </section>

      <Cierre
        titulo="La consulta incluye el registro con escáner"
        texto="Es lo que permite que el diagnóstico y el plan se apoyen en un modelo exacto de su boca y no en una estimación."
      />
    </>
  );
}
