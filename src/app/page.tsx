import fs from "node:fs";
import path from "node:path";

import Image from "next/image";
import Link from "next/link";

import IntroLogo from "@/components/IntroLogo";
import Revelar from "@/components/Revelar";
import Pendiente from "@/components/Pendiente";
import { TituloSeccion, Cierre } from "@/components/Piezas";
import { clinica, doctora, especialidades, tecnologia } from "@/content/site";

/**
 * El logo se inyecta INLINE (no como <img>) para poder animar los trazos
 * reales del vector. Se lee en servidor, así que no hay petición extra ni
 * parpadeo en cliente.
 */
function leerLogo(): string {
  const ruta = path.join(process.cwd(), "public", "marca", "logo-arietanoova.svg");
  return fs.readFileSync(ruta, "utf8");
}

export default function Inicio() {
  const svgLogo = leerLogo();

  return (
    <>
      {/*
        Decide ANTES del primer pintado si la animación de construcción
        procede. Si no, la página se sirve con el logo ya montado en la
        cabecera y el hero visible: nadie ve un estado intermedio.

        Por defecto se descarta con prefers-reduced-motion y en dispositivos
        de gama baja, donde dibujar 50+ glifos por scroll no rinde.

        Interruptor explícito para poder enseñarla en una demo aunque el
        equipo tenga «reducir movimiento» puesto en el sistema:
          ?animacion=forzar   la activa siempre
          ?animacion=no       la desactiva siempre
        Sin parámetro manda la preferencia del sistema, que es el
        comportamiento correcto para un visitante real.
      */}
      <script
        dangerouslySetInnerHTML={{
          __html:
            "(function(){try{" +
            "var d=document.documentElement;" +
            "var q=new URLSearchParams(location.search).get('animacion');" +
            "if(q!=='no'){" +
            "d.setAttribute('data-intro','activa')" +
            "}}catch(e){}})()",
        }}
      />

      <IntroLogo svg={svgLogo} />

      {/* ------------------------------ PORTADA ------------------------------ */}
      <section className="portada">
        <div className="portada-fija">
          <div className="portada-foto">
            <Image
              src="/fotos/equipo-consultorio.jpg"
              alt="El equipo clínico de ArietaNoova revisando un caso en consultorio"
              fill
              sizes="100vw"
              priority
            />
          </div>
          <div className="portada-lectura" aria-hidden="true" />
          <div className="portada-velo" aria-hidden="true" />

          <div className="portada-texto">
            <p className="antetitulo">
              {clinica.direccion.distrito}, {clinica.direccion.ciudad}
            </p>
            <h1 className="display-xl portada-titulo">
              Una clínica de especialidades, no un consultorio general.
            </h1>
            <p className="portada-bajada">
              Seis especialidades bajo una misma dirección clínica. Veinticinco
              años de ejercicio y cátedra universitaria sostienen el criterio con
              el que se decide cada tratamiento.
            </p>
            <div className="portada-acciones">
              <Link href="/contacto" className="boton boton-oro">
                Solicitar evaluación
              </Link>
              <Link href="/especialidades" className="boton boton-linea">
                Ver especialidades
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------- POSICIONAMIENTO -------------------------- */}
      <section className="seccion">
        <div className="envoltura">
          <Revelar>
            <div className="manifiesto">
              <p className="antetitulo">Qué nos distingue</p>
              <p className="manifiesto-texto">
                Un especialista no compite por el paciente que busca un dentista
                cerca. Recibe al paciente que un odontólogo general no puede
                resolver solo. Esa es la clínica que ArietaNoova construyó: un
                lugar donde el caso difícil encuentra a quien corresponde.
              </p>
            </div>
          </Revelar>
        </div>
      </section>

      {/* --------------------------- ESPECIALIDADES --------------------------- */}
      <section className="seccion superficie-oro">
        <div className="envoltura">
          <Revelar>
            <TituloSeccion
              antetitulo="01 · Especialidades"
              titulo="Seis especialidades, una sola planificación"
              bajada="Cuando un caso necesita más de una especialidad, el plan se define completo antes de empezar. El paciente no va rebotando de consultorio en consultorio."
            />
          </Revelar>

          <div className="rejilla rejilla-2 rejilla-3 rejilla-esp">
            {especialidades.map((e, i) => (
              <Revelar key={e.slug} as="article" retraso={i * 60}>
                <Link href={`/especialidades/${e.slug}`} className="tarjeta">
                  <span className="indice">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="tarjeta-titulo">{e.nombre}</h3>
                  <p className="tarjeta-texto">{e.sumario}</p>
                  <span className="tarjeta-mas" aria-hidden="true">
                    Ver especialidad →
                  </span>
                </Link>
              </Revelar>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------ LA DOCTORA ---------------------------- */}
      <section className="seccion">
        <div className="envoltura">
          <div className="doctora-rejilla">
            <Revelar>
              <div className="marco-foto doctora-foto">
                <Image
                  src="/fotos/doctora-retrato.jpg"
                  alt="Retrato de la dirección clínica de ArietaNoova en consultorio"
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                />
              </div>
              <p className="pie-foto">
                <Pendiente>
                  confirmar que esta es la fotografía de la Dra. Jessica Arieta
                  Miranda. La sesión llegó sin identificar a las personas.
                </Pendiente>
              </p>
            </Revelar>

            <Revelar>
              <p className="antetitulo">02 · {doctora.titulo}</p>
              <h2 className="display-l">{doctora.nombre}</h2>
              <p className="bajada bajada-grande">{doctora.entrada}</p>
              <ul className="credenciales">
                {doctora.credenciales.slice(0, 3).map((c) => (
                  <li key={c.titulo}>
                    <strong>{c.cifra}</strong>
                    <span>{c.titulo}</span>
                  </li>
                ))}
              </ul>
              <Link href="/equipo" className="boton boton-linea">
                Su trayectoria completa
              </Link>
            </Revelar>
          </div>
        </div>
      </section>

      {/* ------------------------------ TECNOLOGÍA ---------------------------- */}
      <section className="seccion superficie-verde">
        <div className="envoltura">
          <div className="tecno-rejilla">
            <Revelar>
              <p className="antetitulo">03 · Tecnología</p>
              <h2 className="display-m">{tecnologia.titulo}</h2>
              <p className="tecno-texto">{tecnologia.texto}</p>
              <Link href="/tecnologia" className="boton boton-linea tecno-boton">
                Ver el flujo digital
              </Link>
            </Revelar>
            <Revelar>
              <div className="marco-foto tecno-foto">
                <Image
                  src="/fotos/consultorio-adulto-b.jpeg"
                  alt="Unidad dental equipada de ArietaNoova"
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                />
              </div>
            </Revelar>
          </div>
        </div>
      </section>

      {/* --------------------------- PARA ODONTÓLOGOS ------------------------- */}
      <section className="seccion">
        <div className="envoltura">
          <Revelar>
            <div className="derivacion-bloque">
              <div>
                <p className="antetitulo">04 · Para odontólogos</p>
                <h2 className="display-m">
                  Si usted deriva pacientes, esta sección es para usted
                </h2>
                <p className="bajada">
                  Qué casos recibimos, cómo se coordina la atención, qué informes
                  recibe el colega que deriva y en qué momento el paciente vuelve
                  a su consulta.
                </p>
                <Link href="/para-odontologos" className="boton boton-oro">
                  Ver el protocolo de derivación
                </Link>
              </div>
              <div className="marco-foto derivacion-foto">
                <Image
                  src="/fotos/equipo-recepcion.jpg"
                  alt="Equipo de ArietaNoova en la recepción de la clínica"
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                />
              </div>
            </div>
          </Revelar>
        </div>
      </section>

      {/* ------------------------------ UBICACIÓN ----------------------------- */}
      <section className="seccion superficie-oro">
        <div className="envoltura">
          <div className="ubicacion-rejilla">
            <Revelar>
              <TituloSeccion
                antetitulo="05 · Dónde estamos"
                titulo="Pueblo Libre, Lima"
              />
              <address className="ubicacion-dato">
                {clinica.direccion.calle}
                <br />
                {clinica.direccion.distrito}, {clinica.direccion.ciudad}
              </address>
              <ul className="horarios">
                {clinica.horarios.map((h) => (
                  <li key={h.dia}>
                    <span>{h.dia}</span>
                    <span>{h.horas}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contacto" className="boton boton-linea">
                Cómo llegar y contacto
              </Link>
            </Revelar>
            <Revelar>
              <div className="marco-foto ubicacion-foto">
                <Image
                  src="/fotos/recepcion-principal.jpeg"
                  alt="Recepción de ArietaNoova, con el emblema dorado sobre mármol"
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                />
              </div>
            </Revelar>
          </div>
        </div>
      </section>

      <Cierre />
    </>
  );
}
