import Image from "next/image";
import type { Metadata } from "next";

import Revelar from "@/components/Revelar";
import Pendiente from "@/components/Pendiente";
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

              <h2 className="contacto-sub">Teléfono y WhatsApp</h2>
              <p className="contacto-dato">
                <Pendiente>teléfono fijo o celular de la clínica</Pendiente>
              </p>
              <p className="contacto-dato">
                <Pendiente>número de WhatsApp</Pendiente>
              </p>
              <p className="contacto-dato">
                <Pendiente>correo de contacto</Pendiente>
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
          <p className="pie-foto">
            <Pendiente>
              confirmar el pin exacto en Google Maps con la ficha de Google
              Business de la clínica. El mapa se arma con la dirección escrita.
            </Pendiente>
          </p>

          <div className="fachada">
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
                <Pendiente>
                  el letrero de la fachada todavía dice «Arieta». La renovación
                  con la marca ArietaNoova está pendiente; esta foto se reemplaza
                  cuando esté instalado.
                </Pendiente>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
