import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import Revelar from "@/components/Revelar";
import { PortadaInterior, Cierre } from "@/components/Piezas";
import { especialidades } from "@/content/site";

export function generateStaticParams() {
  return especialidades.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const e = especialidades.find((x) => x.slug === slug);
  if (!e) return {};
  return {
    title: e.nombre,
    description: e.sumario,
    alternates: { canonical: `/especialidades/${e.slug}` },
  };
}

export default async function EspecialidadDetalle({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const e = especialidades.find((x) => x.slug === slug);
  if (!e) notFound();

  const otras = especialidades.filter((x) => x.slug !== e.slug);

  return (
    <>
      <PortadaInterior
        antetitulo="Especialidad"
        titulo={e.nombre}
        bajada={e.sumario}
        foto={e.foto}
        fotoAlt={e.fotoAlt}
      />

      <section className="seccion">
        <div className="envoltura">
          <div className="detalle-rejilla">
            <Revelar>
              <p className="antetitulo">En qué consiste</p>
              <p className="detalle-texto">{e.descripcion}</p>
            </Revelar>

            <Revelar>
              <div className="tarjeta atiende">
                <p className="antetitulo">Qué atendemos</p>
                <ul>
                  {e.atiende.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
                <Link href="/contacto" className="boton boton-oro">
                  Consultar sobre mi caso
                </Link>
              </div>
            </Revelar>
          </div>
        </div>
      </section>

      <section className="seccion superficie-oro">
        <div className="envoltura">
          <p className="antetitulo">Otras especialidades</p>
          <div className="rejilla rejilla-2 rejilla-3">
            {otras.map((o) => (
              <Link key={o.slug} href={`/especialidades/${o.slug}`} className="tarjeta">
                <h3 className="tarjeta-titulo">{o.nombre}</h3>
                <p className="tarjeta-texto">{o.sumario}</p>
                <span className="tarjeta-mas" aria-hidden="true">
                  Ver especialidad →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Cierre />
    </>
  );
}
