import Image from "next/image";
import Link from "next/link";

/** Encabezado de sección: antetítulo en oro + título display. */
export function TituloSeccion({
  antetitulo,
  titulo,
  bajada,
  nivel = 2,
}: {
  antetitulo: string;
  titulo: string;
  bajada?: string;
  nivel?: 2 | 3;
}) {
  const H = nivel === 2 ? "h2" : "h3";
  return (
    <div className="titulo-seccion">
      <p className="antetitulo">{antetitulo}</p>
      <H className={nivel === 2 ? "display-l" : "display-m"}>{titulo}</H>
      {bajada && <p className="bajada">{bajada}</p>}
    </div>
  );
}

/** Cabecera de las páginas interiores (todas menos el Inicio). */
export function PortadaInterior({
  antetitulo,
  titulo,
  bajada,
  foto,
  fotoAlt,
}: {
  antetitulo: string;
  titulo: string;
  bajada?: string;
  foto?: string;
  fotoAlt?: string;
}) {
  return (
    <header className="interior">
      <div className="envoltura interior-rejilla">
        <div>
          <p className="antetitulo">{antetitulo}</p>
          <h1 className="display-l">{titulo}</h1>
          {bajada && <p className="bajada bajada-grande">{bajada}</p>}
        </div>
        {foto && (
          <div className="marco-foto interior-foto">
            <Image
              src={foto}
              alt={fotoAlt ?? ""}
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
            />
          </div>
        )}
      </div>
      <hr className="filete" />
    </header>
  );
}

/** Franja de cierre con llamada a la acción. Se repite al pie de cada página. */
export function Cierre({
  titulo = "¿Su caso necesita una especialidad?",
  texto = "La evaluación es el punto donde se define el diagnóstico y, a partir de él, el plan y su costo. Escríbanos y coordinamos una cita.",
}: {
  titulo?: string;
  texto?: string;
}) {
  return (
    <section className="seccion superficie-verde cierre">
      <div className="envoltura">
        <div className="cierre-rejilla">
          <div>
            <p className="antetitulo">Siguiente paso</p>
            <h2 className="display-m">{titulo}</h2>
          </div>
          <div>
            <p className="cierre-texto">{texto}</p>
            <div className="cierre-acciones">
              <Link href="/contacto" className="boton boton-oro">
                Solicitar evaluación
              </Link>
              <Link href="/formas-de-pago" className="boton boton-linea">
                Formas de pago
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
