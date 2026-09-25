"use client";

import { useState } from "react";

/**
 * Formulario de derivación profesional — solo front.
 * Los campos salen de lo que la Dra. pidió explícitamente en su respuesta al
 * documento de propuesta web: tipo de caso, modalidad (derivación o mentoría)
 * y cómo quiere recibir el seguimiento el colega que deriva.
 */
export default function FormularioDerivacion() {
  const [enviado, setEnviado] = useState(false);

  return (
    <form
      className="formulario"
      onSubmit={(e) => {
        e.preventDefault();
        setEnviado(true);
      }}
    >
      <fieldset className="grupo">
        <legend>Datos del colega</legend>
        <div className="campo-fila">
          <div className="campo">
            <label htmlFor="d-nombre">Nombre y apellidos</label>
            <input id="d-nombre" name="nombre" type="text" required />
          </div>
          <div className="campo">
            <label htmlFor="d-cop">N.º de colegiatura (COP)</label>
            <input id="d-cop" name="cop" type="text" required inputMode="numeric" />
          </div>
        </div>
        <div className="campo-fila">
          <div className="campo">
            <label htmlFor="d-correo">Correo</label>
            <input id="d-correo" name="correo" type="email" required />
          </div>
          <div className="campo">
            <label htmlFor="d-tel">Teléfono</label>
            <input id="d-tel" name="telefono" type="tel" required inputMode="tel" />
          </div>
        </div>
      </fieldset>

      <fieldset className="grupo">
        <legend>El caso</legend>

        <div className="campo">
          <label htmlFor="d-modalidad">Modalidad</label>
          <select id="d-modalidad" name="modalidad" required defaultValue="">
            <option value="" disabled>
              Seleccione una opción
            </option>
            <option value="derivacion">
              Derivación — el paciente pasa a ArietaNoova por el alcance acordado
            </option>
            <option value="mentoria">
              Mentoría — resuelvo yo el caso con asesoría de la clínica
            </option>
            <option value="segunda-opinion">Segunda opinión diagnóstica</option>
          </select>
        </div>

        <div className="campo">
          <label htmlFor="d-tipo">Tipo de caso</label>
          <select id="d-tipo" name="tipo" required defaultValue="">
            <option value="" disabled>
              Seleccione una opción
            </option>
            <option value="ortopedia">Ortopedia maxilar compleja</option>
            <option value="orto-quirurgico">Caso ortodóncico-quirúrgico</option>
            <option value="rehabilitacion">Rehabilitación multidisciplinaria</option>
            <option value="otro">Otro</option>
          </select>
        </div>

        <div className="campo">
          <label htmlFor="d-motivo">Motivo de la derivación</label>
          <textarea id="d-motivo" name="motivo" rows={4} required />
        </div>

        <div className="campo">
          <label htmlFor="d-estudios">
            Estudios disponibles <span className="opcional">(opcional)</span>
          </label>
          <input
            id="d-estudios"
            name="estudios"
            type="text"
            placeholder="Radiografía panorámica, cefalométrica, tomografía, escaneo intraoral…"
          />
          <p className="ayuda">
            El envío de archivos todavía no está habilitado. Indique aquí qué
            estudios tiene y la clínica coordinará el canal de envío.
          </p>
        </div>
      </fieldset>

      <button type="submit" className="boton boton-oro">
        Enviar derivación
      </button>

      {enviado && (
        <p className="pendiente pendiente-bloque" role="status">
          <span aria-hidden="true">⚠</span>
          <span>
            PENDIENTE: el formulario está maquetado y validado, pero todavía no
            envía a ninguna parte. Falta definir el correo de destino y el canal
            para recibir estudios radiográficos. Ningún dato salió de este
            navegador.
          </span>
        </p>
      )}
    </form>
  );
}
