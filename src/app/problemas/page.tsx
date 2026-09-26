import type { Metadata } from "next";
import Link from "next/link";

import Revelar from "@/components/Revelar";
import Pendiente from "@/components/Pendiente";
import { PortadaInterior, Cierre } from "@/components/Piezas";
import { problemas, especialidades, rutaEspecialidad } from "@/content/site";

export const metadata: Metadata = {
  title: "Problemas frecuentes",
  description:
    "Sangrado de encías, dolor de muela, pérdida de una pieza, apiñamiento, mordida que no encaja: qué suele significar cada síntoma y qué especialidad lo resuelve.",
  alternates: { canonical: "/problemas" },
};

const nombreEspecialidad = (slug: string) =>
  especialidades.find((e) => e.slug === slug)?.nombre ?? slug;

export default function Problemas() {
  return (
    <>
      <PortadaInterior
        antetitulo="Problemas frecuentes"
        titulo="Lo que usted nota, y a qué corresponde"
        bajada="Los pacientes no llegan pidiendo «periodoncia»; llegan diciendo que les sangran las encías. Esta página traduce el síntoma a la especialidad que lo resuelve."
        foto="/fotos/area-comun.jpeg"
        fotoAlt="Área común de ArietaNoova"
      />

      <section className="seccion">
        <div className="envoltura">
          <div className="lista-problemas">
            {problemas.map((p, i) => (
              <Revelar key={p.slug} as="article" retraso={i * 40}>
                <div className="problema">
                  <span className="indice">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h2 className="problema-sintoma">«{p.sintoma}»</h2>
                    <p className="problema-texto">{p.significa}</p>
                    <Link
                      href={rutaEspecialidad(p.especialidad)}
                      className="problema-enlace"
                    >
                      Lo atiende {nombreEspecialidad(p.especialidad)} →
                    </Link>
                  </div>
                </div>
              </Revelar>
            ))}
          </div>
        </div>
      </section>

      <section className="seccion superficie-oro">
        <div className="envoltura">
          <Revelar>
            <div className="nota-pago">
              <p className="antetitulo">Orientación personalizada</p>
              <p className="nota-pago-texto">
                Si su molestia o síntoma abarca más de una especialidad, nuestro equipo clínico coordinará una evaluación interdisciplinaria para determinar el plan de tratamiento óptimo.
              </p>
            </div>
          </Revelar>
        </div>
      </section>

      <Cierre
        titulo="¿Se reconoce en alguno de estos?"
        texto="La evaluación es donde se confirma qué está pasando y qué especialidad corresponde. Escríbanos y coordinamos una cita."
      />
    </>
  );
}
