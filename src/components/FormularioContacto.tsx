"use client";

import { useState } from "react";

import { especialidades } from "@/content/site";

/**
 * Formulario de contacto — solo front.
 * No hay endpoint ni correo de destino confirmado, así que el envío no sale
 * a ninguna parte y la página lo advierte. La validación sí es real, para
 * que la clienta pueda probar el comportamiento.
 */
export default function FormularioContacto() {
  const [enviado, setEnviado] = useState(false);

  return (
    <form
      className="formulario"
      noValidate={false}
      onSubmit={(e) => {
        e.preventDefault();
        setEnviado(true);
      }}
    >
      <div className="campo">
        <label htmlFor="c-nombre">Nombre y apellidos</label>
        <input id="c-nombre" name="nombre" type="text" required autoComplete="name" />
      </div>

      <div className="campo-fila">
        <div className="campo">
          <label htmlFor="c-tel">Teléfono</label>
          <input
            id="c-tel"
            name="telefono"
            type="tel"
            required
            inputMode="tel"
            autoComplete="tel"
          />
        </div>
        <div className="campo">
          <label htmlFor="c-correo">
            Correo <span className="opcional">(opcional)</span>
          </label>
          <input id="c-correo" name="correo" type="email" autoComplete="email" />
        </div>
      </div>

      <div className="campo">
        <label htmlFor="c-motivo">Motivo de la consulta</label>
        <select id="c-motivo" name="motivo" required defaultValue="">
          <option value="" disabled>
            Seleccione una opción
          </option>
          {especialidades.map((e) => (
            <option key={e.slug} value={e.slug}>
              {e.nombre}
            </option>
          ))}
          <option value="no-se">Todavía no sé qué especialidad necesito</option>
        </select>
      </div>

      <div className="campo">
        <label htmlFor="c-mensaje">
          Cuéntenos brevemente su caso <span className="opcional">(opcional)</span>
        </label>
        <textarea id="c-mensaje" name="mensaje" rows={4} />
      </div>

      <label className="consentimiento">
        <input type="checkbox" name="consentimiento" required />
        <span>
          Autorizo a ArietaNoova a contactarme para coordinar una evaluación y
          al tratamiento de mis datos con esa única finalidad.
        </span>
      </label>

      <button type="submit" className="boton boton-oro">
        Enviar solicitud
      </button>

      {enviado && (
        <p className="pendiente pendiente-bloque" role="status">
          <span aria-hidden="true">⚠</span>
          <span>
            PENDIENTE: el formulario está maquetado y validado, pero todavía no
            envía a ninguna parte. Faltan el correo de destino y el servicio de
            envío. Ningún dato salió de este navegador.
          </span>
        </p>
      )}
    </form>
  );
}
