"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { Flip } from "gsap/Flip";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MorphSVGPlugin, Flip, useGSAP);

/**
 * Animación de entrada: el logo se CONSTRUYE con el scroll.
 *
 *   0 %        pantalla limpia con el crema de la paleta. El logo no existe.
 *   0 – 28 %   se traza el símbolo, como lo dibujaría una mano.
 *   22 – 42 %  entran uno a uno los detalles: en la opción A son los seis
 *              puntos, que son las seis especialidades — por eso se cuentan.
 *   44 – 68 %  aparece el wordmark letra por letra y después el descriptor.
 *   68 – 100 % el logo completo aterriza en la cabecera y entra el hero.
 *
 * DECISIONES DE HERRAMIENTA
 *
 * - DrawSVGPlugin para el trazado. La primera versión movía a mano
 *   stroke-dashoffset con pathLength="1", y GSAP redondea los valores en px:
 *   con todo el trazo entre 0 y 1 px el dibujo salía binario (1px → 0px, sin
 *   pasos intermedios). Verificado con Playwright. DrawSVG trabaja en
 *   porcentajes y no tiene ese problema.
 *
 * - MorphSVGPlugin.convertToPath solo como habilitador: DrawSVG no admite
 *   <rect>, y los tres dientes de la opción B lo son. La conversión es
 *   geométricamente exacta y ocurre en memoria sobre la copia inline; el
 *   archivo .svg de la marca no se toca.
 *
 * - Flip.fit calcula el aterrizaje en la cabecera. Sustituye a la FLIP
 *   invertida a mano: mide el destino real en cada refresh, así que aguanta
 *   cambios de viewport sin rehacer la aritmética.
 *
 * - NO se usa ScrollSmoother ni Lenis en modo transform: envuelven el
 *   contenido en un contenedor transformado, y eso rompe `position: fixed` y
 *   `position: sticky`, que son la base de esta animación y del hero. La
 *   suavidad se consigue con el `scrub` numérico, sin tocar la estructura.
 *
 * - SplitText no aplica: el wordmark viene vectorizado como trazados, no
 *   como texto. Cada letra ya es un elemento con data-glifo.
 *
 * Progreso atado al scroll: reversible al subir, sin scroll-jacking, y quien
 * entre con un ancla o con scroll ya avanzado ve el estado que le toca.
 */
export default function IntroLogo({ svg }: { svg: string }) {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const cajaRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const raiz = document.documentElement;

      const params = new URLSearchParams(window.location.search);
      const q = params.get("animacion");
      if (q === "no") {
        raiz.removeAttribute("data-intro");
        return;
      }

      // Por defecto la animación se activa siempre (sin necesidad de ?animacion=forzar)
      raiz.setAttribute("data-intro", "activa");

      const overlay = overlayRef.current;
      const caja = cajaRef.current;
      const ancla = document.getElementById("ancla-logo");
      const seccion = document.querySelector<HTMLElement>(".portada");
      // Estos dos viven fuera del overlay: useGSAP acota los selectores de
      // texto a su `scope`, así que hay que pasarlos como elementos.
      const velo = document.querySelector<HTMLElement>(".portada-velo");
      const heroTexto = document.querySelector<HTMLElement>(".portada-texto");
      if (!overlay || !caja || !ancla || !seccion || !velo || !heroTexto) return;

      const pista = overlay.querySelector<HTMLElement>(".intro-pista");

      // DrawSVG no admite <rect>: los dientes de la opción B se convierten a
      // <path> equivalente. Solo en la copia inline; el archivo no cambia.
      const rects = Array.from(
        caja.querySelectorAll<SVGRectElement>("rect[data-trazo]")
      );
      if (rects.length) MorphSVGPlugin.convertToPath(rects);

      const trazos = gsap.utils.toArray<SVGElement>(
        caja.querySelectorAll("[data-trazo]")
      );
      const detalles = gsap.utils.toArray<SVGElement>(
        caja.querySelectorAll("[data-detalle]")
      );
      const wordmark = gsap.utils.toArray<SVGElement>(
        caja.querySelectorAll('[data-parte="wordmark"] [data-glifo]')
      );
      const descriptor = gsap.utils.toArray<SVGElement>(
        caja.querySelectorAll('[data-parte="descriptor"] [data-glifo]')
      );

      // El símbolo ocupa una fracción muy distinta del lockup en cada opción:
      // el arco de A es ancho, el emblema de B es pequeño y durante su fase se
      // perdía en el encuadre. Se le da un acercamiento derivado de su propio
      // bbox para que ambos se lean igual mientras se trazan; en A el factor
      // sale ~1 y no pasa nada.
      const simbolo = caja.querySelector<SVGGraphicsElement>(
        '[data-parte="simbolo"]'
      );
      let acercamiento = 1;
      if (simbolo) {
        const bb = simbolo.getBBox();
        const vb = 720; // ancho del viewBox del lockup
        const porAncho = (vb * 0.46) / Math.max(bb.width, 1);
        const porAlto = (415 * 0.62) / Math.max(bb.height, 1);
        acercamiento = gsap.utils.clamp(1, 2.4, Math.min(porAncho, porAlto));
      }

      const esMovil = () => raiz.clientWidth < 768;

      // Recorrido de scroll dedicado a construir y aterrizar el logo
      const recorridoAnimacion = () => window.innerHeight * (esMovil() ? 0.6 : 0.75);

      // Pausa breve para apreciar el inicio terminado sin sentirse trabado (~1 a 2 toques de rueda)
      const recorridoPausa = () => window.innerHeight * (esMovil() ? 0.15 : 0.25);

      // Recorrido total durante el cual la portada permanece sticky
      const recorridoTotal = () => recorridoAnimacion() + recorridoPausa();

      // Vars del aterrizaje, recalculadas en cada refresh de ScrollTrigger.
      let destino: gsap.TweenVars = {};

      const medir = () => {
        // Flip.fit mide la caja tal y como está: hay que devolverla a su
        // estado sin transformar antes de compararla con la cabecera.
        gsap.set(caja, { x: 0, y: 0, scaleX: 1, scaleY: 1 });
        destino =
          (Flip.fit(caja, ancla, {
            scale: true,
            getVars: true,
          }) as gsap.TweenVars) ?? {};

        // El alto de la sección incluye la animación + la pausa con el hero visible
        seccion.style.setProperty("--recorrido", `${recorridoTotal()}px`);
      };

      medir();
      ScrollTrigger.addEventListener("refreshInit", medir);

      // ---------------- estado de partida del vector ----------------------
      if (simbolo && acercamiento > 1.02) {
        gsap.set(simbolo, { scale: acercamiento, transformOrigin: "50% 50%" });
      }
      gsap.set(trazos, { drawSVG: "0%", fillOpacity: 0 });
      gsap.set(detalles, { scale: 0, opacity: 0, transformOrigin: "center" });
      gsap.set(wordmark, { opacity: 0 });
      gsap.set(descriptor, { opacity: 0 });

      // ------------------------- la línea de tiempo ------------------------
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: seccion,
          start: "top top",
          end: () => `+=${recorridoAnimacion()}`,
          scrub: 0.8, // suaviza el scrub sin envolver el scroll
          invalidateOnRefresh: true,
        },
      });

      // Fase 1 · el trazo. `power2.inOut` arranca y cierra suave: es el gesto
      // de una mano, no un barrido a velocidad constante.
      tl.to(
        trazos,
        {
          drawSVG: "100%",
          duration: 0.28,
          ease: "power2.inOut",
          stagger: { amount: trazos.length > 1 ? 0.08 : 0 },
        },
        0
      ).to(trazos, { fillOpacity: 1, duration: 0.1, ease: "power1.out" }, 0.2);

      // Fase 2 · los detalles, uno a uno. En la opción A son las seis
      // especialidades: el escalonado es lo que las hace contables.
      tl.to(
        detalles,
        {
          scale: 1,
          opacity: 1,
          duration: 0.1,
          ease: "back.out(2.2)",
          stagger: { amount: 0.22, from: "start" },
        },
        0.24
      );

      // El símbolo se asienta en su sitio del lockup justo cuando va a
      // entrar la palabra: el conjunto se "monta" en vez de aparecer ya hecho.
      if (simbolo && acercamiento > 1.02) {
        tl.to(
          simbolo,
          { scale: 1, transformOrigin: "50% 50%", duration: 0.2, ease: "power2.inOut" },
          0.3
        );
      }

      // Fase 3 · la palabra. `amount` fija el reparto total del escalonado,
      // así el ritmo no depende de cuántos glifos tenga cada opción.
      tl.to(
        wordmark,
        {
          opacity: 1,
          duration: 0.18,
          ease: "power2.out",
          stagger: { amount: 0.16, from: "start" },
        },
        0.44
      ).to(
        descriptor,
        {
          opacity: 1,
          duration: 0.14,
          ease: "power2.out",
          stagger: { amount: 0.1, from: "start" },
        },
        0.58
      );

      // Fase 4 · aterrizaje. Flip.fit da las vars; las funciones permiten que
      // se reevalúen en cada refresh sin rehacer la línea de tiempo.
      tl.to(
        caja,
        {
          x: () => (destino.x as number) ?? 0,
          y: () => (destino.y as number) ?? 0,
          scaleX: () => (destino.scaleX as number) ?? 1,
          scaleY: () => (destino.scaleY as number) ?? 1,
          duration: 0.32,
          // power3.inOut se quedaba plano hasta el 85 % y el aterrizaje se
          // sentía de golpe. power2.inOut reparte mejor el viaje.
          ease: "power2.inOut",
        },
        0.68
      )
        .to(velo, { opacity: 0, duration: 0.22, ease: "power2.inOut" }, 0.68)
        .fromTo(
          heroTexto,
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: 0.22, ease: "power2.out" },
          0.74
        )
        .to(pista ?? [], { opacity: 0, duration: 0.08, ease: "none" }, 0)
        // Relevo: el logo del overlay se apaga justo cuando enciende el de la
        // cabecera, exactamente encima. El cambio es imperceptible.
        .to(ancla, { opacity: 1, duration: 0.05 }, 0.95)
        .to(overlay, { autoAlpha: 0, duration: 0.05 }, 0.95);

      ScrollTrigger.refresh();

      return () => {
        ScrollTrigger.removeEventListener("refreshInit", medir);
        raiz.removeAttribute("data-intro");
      };
    },
    { scope: overlayRef }
  );

  return (
    <div className="intro-overlay" ref={overlayRef} aria-hidden="true">
      <div
        className="intro-logo-caja"
        ref={cajaRef}
        dangerouslySetInnerHTML={{ __html: svg }}
      />
      <span className="intro-pista">
        <span>Desplácese para continuar</span>
        <i />
      </span>
    </div>
  );
}
