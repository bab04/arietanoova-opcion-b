"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Aparición suave al entrar en viewport.
 * Si el usuario pide menos movimiento, el contenido se muestra directo:
 * la clase .revelar ya queda neutralizada en globals.css.
 */
export default function Revelar({
  children,
  as: Tag = "div",
  retraso = 0,
  className = "",
}: {
  children: React.ReactNode;
  as?: "div" | "section" | "article" | "li";
  retraso?: number;
  className?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const nodo = ref.current;
    if (!nodo) return;

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setVisible(true);
      return;
    }

    const obs = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    obs.observe(nodo);
    return () => obs.disconnect();
  }, []);

  return (
    <Tag
      // @ts-expect-error - ref polimórfico sobre un set cerrado de etiquetas
      ref={ref}
      className={`revelar ${visible ? "visible" : ""} ${className}`.trim()}
      style={{ transitionDelay: `${retraso}ms` }}
    >
      {children}
    </Tag>
  );
}
