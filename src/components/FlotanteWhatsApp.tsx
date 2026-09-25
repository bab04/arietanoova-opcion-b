"use client";

import { clinica } from "@/content/site";

/**
 * Botón flotante de WhatsApp.
 *
 * El número de la clínica no consta en ningún documento del proyecto, así que
 * el botón queda deshabilitado y lo dice en pantalla. Cuando llegue el dato,
 * basta con completar `whatsapp` en src/content/site.ts: el enlace wa.me se
 * arma solo y el aviso desaparece.
 */
export default function FlotanteWhatsApp() {
  const numero = clinica.whatsapp as string | null;

  if (!numero) {
    return (
      <div className="wa wa-pendiente" role="note">
        <span aria-hidden="true">⚠</span>
        <span>
          WhatsApp
          <small>PENDIENTE: número</small>
        </span>
      </div>
    );
  }

  const limpio = numero.replace(/\D/g, "");
  const mensaje = encodeURIComponent(
    `Hola, escribo desde la web de ${clinica.marca}. Quisiera información sobre una evaluación.`
  );

  return (
    <a
      className="wa"
      href={`https://wa.me/${limpio}?text=${mensaje}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.87 9.87 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.16 8.16 0 0 1-1.25-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.25 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.79.97-.14.16-.29.18-.54.06-.25-.13-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.87.86-.87 2.09s.9 2.43 1.02 2.6c.12.16 1.76 2.7 4.27 3.78.6.26 1.06.41 1.42.53.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.19.21-.58.21-1.08.14-1.18-.06-.11-.22-.17-.47-.29Z"
        />
      </svg>
      <span>Escribir por WhatsApp</span>
    </a>
  );
}
