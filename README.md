# ArietaNoova — Opción B

Paleta **C2 · Oliva y oro suave**. Logo de la opción B (tres dientes, ligadura de infinito y destello dorado).

## Cómo verlo en local

```bash
npm install
npm run dev
```

Abre <http://localhost:3000>.

Para ver el build de producción (es el que se usó para las capturas):

```bash
npm run build
npm start
```

## Ver la animación de entrada

Por defecto la animación respeta la preferencia del sistema: si el equipo tiene
«reducir movimiento» activado, la web sirve el logo ya montado en la cabecera
con un fundido. Ese es el comportamiento correcto para un visitante real.

Para enseñarla en una demo aunque el equipo tenga esa preferencia puesta:

    http://localhost:3000/?animacion=forzar    la activa siempre
    http://localhost:3000/?animacion=no        la desactiva siempre

**Dos cosas que la pueden ocultar aunque el código esté bien:**

1. **«Reducir movimiento» del sistema.** En Windows: Configuración →
   Accesibilidad → Efectos visuales → Efectos de animación. Se salta con
   `?animacion=forzar`.
2. **La ventana del navegador en segundo plano.** Windows congela
   `requestAnimationFrame` en ventanas que no se están componiendo, y sin
   ticker la animación no avanza aunque el scroll sí se mueva. Hay que tener
   la ventana de Chrome **al frente** mientras se hace scroll.

El recorrido es ~110vh en escritorio y ~70vh en móvil: baja despacio desde
arriba del todo.

## Los tres HEX de marca

Salen del comparador `ArietaNoova_Comparador_HD (2).html`, verificados dos veces:
en el CSS del comparador y dentro del propio SVG del logo.

| Rol | HEX | Dónde aparece en el logo |
|---|---|---|
| Verde | `#425B46` | Nombre, contornos y brackets |
| Oro | `#C2A14E` | Arco y destello |
| Crema | `#F7F3E9` | Base clara |

Los tonos derivados (`oroTinta`, `oroClaro`, `verdeTinta`) están solo por
accesibilidad y su cálculo está documentado en `src/content/marca.ts`.

## Dónde se cambia la identidad

Toda la identidad vive en **dos archivos**:

- `src/content/marca.ts` — los HEX y los derivados
- `public/marca/logo-arietanoova.svg` — el logo vectorial

El resto del código es idéntico al de la opción A. Los HEX se inyectan como
variables CSS desde `src/app/layout.tsx`; ninguna hoja de estilo declara un
color de marca a mano.

## Estructura

```
src/
  app/
    layout.tsx                    tokens de marca, SEO, JSON-LD Dentist
    page.tsx                      Inicio (animación del logo)
    globals.css                   base, cabecera, portada, sistema de oro
    piezas.css                    piezas de contenido, pie, formularios
    paginas.css                   estilos por página
    especialidades/               índice + [slug] (6 páginas estáticas)
    sobre-la-doctora/             «La autoridad que acompaña»
    para-odontologos/             derivación profesional + formulario
    como-funciona-el-pago/        sin cifras
    casos/                        estructura lista, material pendiente
    contacto/                     dirección, horarios, mapa, formulario
  components/
    IntroLogo.tsx                 animación de entrada ligada al scroll
    Encabezado.tsx                cabecera + #ancla-logo (destino de la animación)
    Pendiente.tsx                 marcador visible de dato faltante
    ...
  content/
    marca.ts                      ← LO ÚNICO QUE CAMBIA ENTRE A Y B
    site.ts                       contenido, idéntico en las dos versiones
```

## Sincronizar cambios

El script de sincronización vive en la opción A
(`arietanoova-opcionA/sincronizar-con-B.sh`) y copia el código de A hacia aquí,
preservando `src/content/marca.ts` y el logo de B. Si editas código directamente
en este proyecto, ese script lo sobrescribirá: conviene trabajar en A y
sincronizar, o quitar el script si las dos versiones se separan.

## Datos pendientes

Los huecos se renderizan **visibles** en la página, con fondo ámbar y el texto
`PENDIENTE: …`. Es deliberado: es preferible un hueco evidente a un dato
inventado. Están en:

- Teléfono, WhatsApp y correo de la clínica (pie, contacto, botón flotante)
- Identidad de la persona en la foto de «Sobre la Doctora»
- Nombres, colegiatura y fotos de los seis especialistas
- Medios de pago y condiciones de fraccionamiento
- Material de casos clínicos y testimonios
- Pin exacto de Google Maps y letrero de fachada

Para quitar un pendiente basta completar el dato en `src/content/site.ts`
(por ejemplo `whatsapp`) y el aviso desaparece solo.
