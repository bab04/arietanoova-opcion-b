import Image from "next/image";
import type { Metadata } from "next";

import DesplegableEspecialistas from "@/components/DesplegableEspecialistas";
import Revelar from "@/components/Revelar";
import { Cierre } from "@/components/Piezas";
import { doctora, equipoEspecialistas } from "@/content/site";

export const metadata: Metadata = {
  title: "Equipo",
  description:
    "El equipo de ArietaNoova: la Dra. Jessica Arieta Miranda — 25 años como cirujano dentista, especialista en ortodoncia y ortopedia maxilar desde 2013, docente en la UNMSM y en la Universidad Wiener — y los especialistas de la clínica.",
  alternates: { canonical: "/equipo" },
};

export default function SobreLaDoctora() {
  return (
    <>
      <header className="autoridad">
        <div className="envoltura autoridad-rejilla">
          <Revelar>
            <p className="antetitulo">{doctora.rol}</p>
            <h1 className="display-xl autoridad-titulo">{doctora.titulo}</h1>
            <p className="autoridad-nombre">{doctora.nombre}</p>
            <p className="bajada bajada-grande">{doctora.entrada}</p>
          </Revelar>

          <Revelar>
            <div className="marco-foto autoridad-foto">
              <Image
                src="/fotos/doctora-retrato.jpg"
                alt="Retrato de la dirección clínica de ArietaNoova"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
              />
            </div>
            <p className="pie-foto">
              Dra. Jessica Margoth Arieta Miranda — Directora Clínica (COP 14814 · RNE 1525)
            </p>
          </Revelar>
        </div>
        <hr className="filete" />
      </header>

      {/* --------------------------- CREDENCIALES ---------------------------- */}
      <section className="seccion">
        <div className="envoltura">
          <p className="antetitulo">La trayectoria, en datos</p>
          <div className="rejilla rejilla-2 credenciales-rejilla">
            {doctora.credenciales.map((c, i) => (
              <Revelar key={c.titulo} as="article" retraso={i * 60}>
                <div className="tarjeta credencial">
                  <strong className="credencial-cifra">{c.cifra}</strong>
                  <h2 className="credencial-titulo">{c.titulo}</h2>
                  <p className="tarjeta-texto">{c.detalle}</p>
                </div>
              </Revelar>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------ EL CIERRE ---------------------------- */}
      <section className="seccion superficie-verde">
        <div className="envoltura">
          <Revelar>
            <div className="cita">
              <p className="antetitulo">Por qué importa</p>
              <p className="cita-texto">{doctora.cierre}</p>
            </div>
          </Revelar>
        </div>
      </section>

      {/* ------------------------------- EL EQUIPO --------------------------- */}
      <section className="seccion">
        <div className="envoltura">
          <div className="equipo-rejilla">
            <Revelar>
              <p className="antetitulo">El equipo médico</p>
              <h2 className="display-m">Especialistas coordinados bajo un mismo criterio</h2>
              <p className="bajada">
                La dirección clínica define el criterio con el que se planifica cada caso y el equipo
                lo ejecuta dentro de su especialidad. Haga clic en cada especialista para conocer su trayectoria, enfoque y procedimientos.
              </p>
              <div style={{ marginTop: "1.5rem" }}>
                <DesplegableEspecialistas especialistas={equipoEspecialistas} />
              </div>
            </Revelar>

            <Revelar>
              <div style={{ position: "sticky", top: "100px" }}>
                <div className="marco-foto equipo-foto">
                  <Image
                    src="/fotos/equipo-recepcion.jpg"
                    alt="Equipo de ArietaNoova en la recepción de la clínica"
                    fill
                    sizes="(max-width: 900px) 100vw, 50vw"
                  />
                </div>
                <p className="pie-foto" style={{ marginTop: "0.75rem" }}>
                  Equipo clínico multidisciplinario en las instalaciones de ArietaNoova.
                </p>
              </div>
            </Revelar>
          </div>
        </div>
      </section>

      <Cierre
        titulo="Una evaluación con la dirección clínica"
        texto="Si su caso necesita más de una especialidad, conviene que el diagnóstico y el plan se definan desde el inicio con quien va a coordinarlo."
      />
    </>
  );
}
