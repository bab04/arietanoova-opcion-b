/**
 * Marcador de dato faltante.
 * Se renderiza VISIBLE en la página a propósito: es preferible que la clienta
 * vea un hueco evidente a que reciba un dato inventado.
 */
export default function Pendiente({
  children,
  bloque = false,
}: {
  children: React.ReactNode;
  bloque?: boolean;
}) {
  return (
    <span className={bloque ? "pendiente pendiente-bloque" : "pendiente"}>
      <span aria-hidden="true">⚠</span>
      <span>PENDIENTE: {children}</span>
    </span>
  );
}
