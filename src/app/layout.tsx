import type { Metadata } from "next";
import { Fraunces, Poppins } from "next/font/google";
import type { CSSProperties } from "react";

import "./globals.css";
import { marca } from "@/content/marca";
import { clinica } from "@/content/site";
import Encabezado from "@/components/Encabezado";
import PieDePagina from "@/components/PieDePagina";
import FlotanteWhatsApp from "@/components/FlotanteWhatsApp";

const display = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--f-display",
  weight: ["300", "400", "500", "600"],
});

const texto = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--f-texto",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://arietanoova.pe"),
  title: {
    default: `${clinica.marca} · ${clinica.descriptor} en ${clinica.direccion.distrito}`,
    template: `%s · ${clinica.marca}`,
  },
  description:
    "Clínica de especialidades odontológicas en Pueblo Libre, Lima. Ortodoncia y ortopedia maxilar, endodoncia, rehabilitación oral, cirugía oral, odontopediatría y periodoncia, bajo dirección de la Dra. Jessica Arieta Miranda.",
  keywords: [
    "ortodoncia Pueblo Libre",
    "ortopedia maxilar Lima",
    "clínica de especialidades odontológicas",
    "endodoncia Pueblo Libre",
    "rehabilitación oral Lima",
    "periodoncia Pueblo Libre",
    "odontopediatría Lima",
    "ArietaNoova",
  ],
  authors: [{ name: clinica.marca }],
  openGraph: {
    type: "website",
    locale: "es_PE",
    siteName: clinica.marca,
    title: `${clinica.marca} · ${clinica.descriptor}`,
    description:
      "Clínica de especialidades odontológicas en Pueblo Libre, Lima. Veinticinco años de trayectoria clínica y docente.",
    images: [{ url: "/fotos/recepcion-principal.jpeg", width: 1600, height: 1200 }],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

/** JSON-LD: solo datos que constan en los documentos del proyecto. */
const schema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: clinica.marca,
  description: clinica.descriptor,
  address: {
    "@type": "PostalAddress",
    streetAddress: clinica.direccion.calle,
    addressLocality: clinica.direccion.distrito,
    addressRegion: clinica.direccion.ciudad,
    addressCountry: "PE",
  },
  foundingDate: clinica.aperturaLocal,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "13:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "15:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  medicalSpecialty: [
    "Orthodontics",
    "Endodontics",
    "Prosthodontics",
    "OralSurgery",
    "PediatricDentistry",
    "Periodontics",
  ],
  founder: {
    "@type": "Person",
    name: "Jessica Arieta Miranda",
    jobTitle: "Cirujano dentista · Especialista en ortodoncia y ortopedia maxilar",
  },
  // telephone y url se agregan cuando la clínica confirme esos datos
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Los HEX de marca entran como variables CSS: cambiar de opción A a B
  // es cambiar únicamente src/content/marca.ts
  const tokens = {
    "--verde": marca.verde,
    "--verde-tinta": marca.verdeTinta,
    "--oro": marca.oro,
    "--oro-tinta": marca.oroTinta,
    "--oro-claro": marca.oroClaro,
    "--texto-atenuado": marca.textoAtenuado,
    "--crema-atenuada": marca.cremaAtenuada,
    "--crema": marca.crema,
    "--papel": marca.papel,
    "--fuente-display": "var(--f-display)",
    "--fuente-texto": "var(--f-texto)",
  } as CSSProperties;

  return (
    <html
      lang="es-PE"
      className={`${display.variable} ${texto.variable}`}
      style={tokens}
      suppressHydrationWarning
    >
      <body>
        <a className="saltar" href="#contenido">
          Ir al contenido
        </a>
        <Encabezado />
        <main id="contenido">{children}</main>
        <PieDePagina />
        <FlotanteWhatsApp />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </body>
    </html>
  );
}
