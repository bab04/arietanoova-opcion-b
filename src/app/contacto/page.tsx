import Image from "next/image";
import type { Metadata } from "next";

import Revelar from "@/components/Revelar";
import FormularioContacto from "@/components/FormularioContacto";
import { PortadaInterior } from "@/components/Piezas";
import { clinica } from "@/content/site";

export const metadata: Metadata = {
  title: "Contacto y ubicación",
  description:
    "ArietaNoova en Av. Antonio José de Sucre 1160, Of. 204, Pueblo Libre, Lima. Horarios de atención y solicitud de evaluación.",
  alternates: { canonical: "/contacto" },
};

const mapa = `https://www.google.com/maps?q=${encodeURIComponent(
  `${clinica.direccion.calle}, ${clinica.direccion.distrito}, ${clinica.direccion.ciudad}, ${clinica.direccion.pais}`
)}&output=embed`;

export default function Contacto() {
  return (
    <>
      <PortadaInterior
        antetitulo="Contacto"
        titulo="Dónde estamos y cómo coordinar una cita"
        bajada="La clínica está en Pueblo Libre. Escríbanos para coordinar una evaluación; le confirmamos día y hora."
      />

      <section className="seccion">
        <div className="envoltura">
          <div className="contacto-rejilla">
            {/* --------------------------- DATOS --------------------------- */}
            <Revelar>
              <p className="antetitulo">La clínica</p>

              <h2 className="contacto-sub">Dirección</h2>
              <address className="contacto-dato">
                {clinica.direccion.calle}
                <br />
                {clinica.direccion.distrito}, {clinica.direccion.ciudad}
                <br />
                {clinica.direccion.pais}
              </address>

              <h2 className="contacto-sub">Atención directa</h2>
              <p className="contacto-dato">
                <a
                  href="https://wa.me/51985996818?text=Hola%20ArietaNoova,%20deseo%20solicitar%20una%20evaluaci%C3%B3n"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--verde-tinta)", fontWeight: 600, textDecoration: "underline" }}
                >
                  WhatsApp: +51 985 996 818
                </a>
              </p>
              <p className="contacto-dato" style={{ fontSize: "0.875rem", opacity: 0.85, marginTop: "0.25rem" }}>
                Atención exclusiva por WhatsApp (no contamos con central telefónica fija).
              </p>
              <p className="contacto-dato" style={{ marginTop: "0.5rem" }}>
                <a href="mailto:contacto@arietanoova.pe" style={{ color: "var(--verde-tinta)" }}>
                  contacto@arietanoova.pe
                </a>
              </p>

              <h2 className="contacto-sub">Horarios</h2>
              <ul className="horarios">
                {clinica.horarios.map((h) => (
                  <li key={h.dia}>
                    <span>{h.dia}</span>
                    <span>{h.horas}</span>
                  </li>
                ))}
              </ul>

              <h2 className="contacto-sub">Accesos</h2>
              <ul className="accesos">
                {clinica.accesos.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </Revelar>

            {/* ------------------------- FORMULARIO ------------------------- */}
            <Revelar>
              <p className="antetitulo">Solicitar una evaluación</p>
              <h2 className="display-m contacto-titulo">Escríbanos</h2>
              <p className="bajada">
                Cuéntenos brevemente su caso. La clínica responde para coordinar
                día y hora de la evaluación.
              </p>
              <FormularioContacto />
            </Revelar>
          </div>
        </div>
      </section>

      {/* ------------------------------- MAPA -------------------------------- */}
      <section className="seccion superficie-oro">
        <div className="envoltura">
          <p className="antetitulo">Cómo llegar</p>
          <div className="marco-foto mapa">
            <iframe
              src={mapa}
              title={`Ubicación de ${clinica.marca} en ${clinica.direccion.distrito}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="fachada" style={{ marginTop: "2rem" }}>
            <div className="marco-foto fachada-foto">
              <Image
                src="/fotos/fachada.jpg"
                alt="Fachada del edificio donde se encuentra ArietaNoova"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="contacto-sub">Cómo reconocer el edificio</h2>
              <p className="contacto-dato">
                La clínica está en el segundo piso, oficina 204. El edificio no
                cuenta con ascensor.
              </p>
              <p className="pie-foto">
                El letrero exterior actual conserva la marca previa («Arieta») y será renovado con la identidad ArietaNoova.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
