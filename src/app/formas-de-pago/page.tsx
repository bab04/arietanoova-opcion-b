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
          <p className="aviso-politica">
            <Pendiente bloque>
              validar esta política con la clínica. Los cuatro puntos de abajo
              son una propuesta de redacción: describen cómo suele funcionar el
              pago en una clínica de especialidades, pero no constan como
              política escrita de ArietaNoova en los documentos del proyecto. No
              deben publicarse sin que la Dra. los confirme o los corrija.
            </Pendiente>
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
              <p className="antetitulo">Lo que todavía falta definir</p>
              <p className="nota-pago-texto">{pago.nota}</p>
              <p>
                <Pendiente bloque>
                  medios de pago aceptados (tarjetas, transferencia, efectivo),
                  condiciones de fraccionamiento y política frente a seguros o
                  reembolsos. Ninguno de estos datos consta en los documentos del
                  proyecto y no se inventaron.
                </Pendiente>
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
