import type { Metadata } from "next";

import Revelar from "@/components/Revelar";
import Pendiente from "@/components/Pendiente";
import { PortadaInterior, Cierre } from "@/components/Piezas";
import { pago } from "@/content/site";

export const metadata: Metadata = {
  title: "Formas de pago",
  description:
    "ArietaNoova no publica lista de precios. Sí publica cómo funciona el proceso: primero se evalúa, después se cotiza, y el presupuesto se entrega completo y por escrito.",
  alternates: { canonical: "/formas-de-pago" },
};

export default function ComoFuncionaElPago() {
  return (
    <>
      <PortadaInterior
        antetitulo="Transparencia"
        titulo={pago.titulo}
        bajada={pago.entrada}
        foto="/fotos/logo-marmol.jpeg"
        fotoAlt="Emblema de ArietaNoova en relieve dorado sobre mármol, en el interior de la clínica"
      />

      <section className="seccion">
        <div className="envoltura">
          <p className="bajada" style={{ maxWidth: "64ch", marginBottom: "2rem" }}>
            En ArietaNoova la transparencia es el primer paso. El presupuesto detallado de su plan de tratamiento y las alternativas de financiamiento se entregan por escrito desde la primera cita de evaluación.
          </p>

          <ol className="pasos-pago">
            {pago.bloques.map((b, i) => (
              <Revelar key={b.n} as="li" retraso={i * 60}>
                <span className="indice">{b.n}</span>
                <div>
                  <h2 className="display-m pago-titulo">{b.titulo}</h2>
                  <p className="pago-texto">{b.texto}</p>
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
              <p className="antetitulo">Facilidades y medios de pago</p>
              <p className="nota-pago-texto">
                Aceptamos pagos en efectivo, transferencias bancarias directas y todas las tarjetas de crédito o débito (Visa, Mastercard, American Express). Consulte con nuestra administración por alternativas de financiamiento fraccionado según la duración de su tratamiento.
              </p>
            </div>
          </Revelar>
        </div>
      </section>

      <Cierre
        titulo="El primer paso es la evaluación"
        texto="Es donde se define el diagnóstico y, a partir de ahí, el plan y su costo. Escríbanos y coordinamos una cita."
      />
    </>
  );
}
