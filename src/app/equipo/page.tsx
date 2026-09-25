import Image from "next/image";
import type { Metadata } from "next";

import Revelar from "@/components/Revelar";
import Pendiente from "@/components/Pendiente";
import { Cierre } from "@/components/Piezas";
import { doctora } from "@/content/site";

export const metadata: Metadata = {
  title: "Equipo",
  description:
    "El equipo de ArietaNoova: la Dra. Jessica Arieta Miranda — 25 años como cirujano dentista, especialista en ortodoncia y ortopedia maxilar desde 2013, docente en la UNMSM y en la Universidad Wiener — y los seis especialistas de la clínica.",
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
              <Pendiente>
                confirmar que esta es la fotografía de la Dra. Jessica Arieta
                Miranda. La sesión llegó sin identificar a las personas
                retratadas.
              </Pendiente>
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
              <p className="antetitulo">El equipo</p>
              <h2 className="display-m">Seis especialistas y un mismo criterio</h2>
              <p className="bajada">
                La clínica trabaja con seis especialistas. La dirección clínica
                define el criterio con el que se planifica cada caso y el equipo
                lo ejecuta dentro de su especialidad.
              </p>
              <p className="pie-foto">
                <Pendiente bloque>
                  nombres, especialidad, colegiatura y fotografía individual de
                  cada especialista. Tres de ellos tienen el RNE en trámite: hasta
                  que salga deben presentarse como «Cirujano Dentista —
                  [Especialidad]», no como «Especialista en».
                </Pendiente>
              </p>
            </Revelar>

            <Revelar>
              <div className="marco-foto equipo-foto">
                <Image
                  src="/fotos/equipo-recepcion.jpg"
                  alt="Equipo de ArietaNoova en la recepción de la clínica"
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                />
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
