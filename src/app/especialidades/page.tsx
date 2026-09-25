import type { Metadata } from "next";
import Link from "next/link";

import Revelar from "@/components/Revelar";
import { PortadaInterior, Cierre } from "@/components/Piezas";
import { especialidades } from "@/content/site";

export const metadata: Metadata = {
  title: "Especialidades",
  description:
    "Ortodoncia y ortopedia maxilar, endodoncia, rehabilitación oral, cirugía oral, odontopediatría y periodoncia en Pueblo Libre, Lima.",
  alternates: { canonical: "/especialidades" },
};

export default function Especialidades() {
  return (
    <>
      <PortadaInterior
        antetitulo="Especialidades"
        titulo="Seis especialidades bajo una misma dirección clínica"
        bajada="Cada especialidad resuelve un problema distinto y, con frecuencia, el mismo paciente necesita más de una. Aquí se explica qué hace cada una y cuándo corresponde."
        foto="/fotos/consultorio-adulto-a.jpeg"
        fotoAlt="Consultorio de adultos de ArietaNoova"
      />

      <section className="seccion">
        <div className="envoltura">
          <div className="lista-esp">
            {especialidades.map((e, i) => (
              <Revelar key={e.slug} as="article" retraso={i * 50}>
                <Link href={`/especialidades/${e.slug}`} className="fila-esp">
                  <span className="indice">{String(i + 1).padStart(2, "0")}</span>
                  <div className="fila-esp-texto">
                    <h2 className="display-m">{e.nombre}</h2>
                    <p>{e.sumario}</p>
                  </div>
                  <span className="fila-esp-mas" aria-hidden="true">
                    →
                  </span>
                </Link>
              </Revelar>
            ))}
          </div>
        </div>
      </section>

      <Cierre />
    </>
  );
}
