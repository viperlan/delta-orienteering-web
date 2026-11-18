"use client";

import { useState } from "react";
import { site } from "@/lib/site";

export default function EligeTuRuta() {
  const [elegida, setElegida] = useState<string | null>(null);
  const ruta = site.rutasJuego.find((r) => r.id === elegida);

  return (
    <div className="mt-16 grid gap-8 rounded-3xl bg-musgo p-4 md:grid-cols-[1.35fr_1fr] md:p-8">
      <svg
        viewBox="0 0 640 400"
        className="block h-auto w-full rounded-2xl bg-white md:self-center"
        fill="none"
        role="img"
        aria-label="Mapa de ejemplo con una salida, un control y tres rutas posibles: recta por el cerro, rodeando por el sendero o atajando por el bosque."
      >
        {/* Bosque */}
        <path
          d="M130 60 C 220 10, 360 30, 400 90 C 420 150, 300 170, 210 160 C 130 150, 90 100, 130 60 Z"
          className="fill-musgo"
        />
        {/* Cerro */}
        <g className="stroke-marino/25" strokeWidth="2">
          {[130, 100, 70, 40].map((rx) => (
            <ellipse key={rx} cx="335" cy="215" rx={rx} ry={rx * 0.72} transform="rotate(-18 335 215)" />
          ))}
        </g>
        {/* Sendero */}
        <path
          d="M70 320 C 220 380, 470 360, 560 90"
          className="stroke-marino/40"
          strokeWidth="3"
          strokeDasharray="10 8"
        />

        {site.rutasJuego.map((r) => (
          <path
            key={r.id}
            d={r.d}
            className={r.id === elegida ? "stroke-ruta/20" : "stroke-ruta/45"}
            strokeWidth="4"
            strokeLinecap="round"
          />
        ))}

        {ruta && (
          <g key={ruta.id}>
            <path
              d={ruta.d}
              pathLength={1}
              className="juego-trazo stroke-ruta"
              strokeWidth="7"
              strokeLinecap="round"
            />
          </g>
        )}

        {/* Zonas amplias para elegir tocando el mapa; el teclado usa los botones */}
        {site.rutasJuego.map((r) => (
          <path
            key={r.id}
            d={r.d}
            className="cursor-pointer stroke-transparent"
            strokeWidth="30"
            pointerEvents="stroke"
            onClick={() => setElegida(r.id)}
          />
        ))}

        {site.rutasJuego.map((r) => (
          <g key={r.id} className="pointer-events-none">
            <circle cx={r.etiqueta.x} cy={r.etiqueta.y} r="16" className="fill-marino stroke-white" strokeWidth="3" />
            <text
              x={r.etiqueta.x}
              y={r.etiqueta.y + 6}
              textAnchor="middle"
              fontSize="17"
              fontWeight="700"
              className="fill-white"
            >
              {r.id}
            </text>
          </g>
        ))}

        <polygon
          points="70,296 92,334 48,334"
          className="pointer-events-none fill-white stroke-ruta"
          strokeWidth="5"
          strokeLinejoin="round"
        />
        <circle cx="560" cy="90" r="24" className="pointer-events-none fill-white stroke-ruta" strokeWidth="5" />
        <circle cx="560" cy="90" r="6" className="pointer-events-none fill-ruta" />
        <text x="70" y="366" textAnchor="middle" fontSize="18" fontWeight="600" className="fill-marino">
          Salida
        </text>
        <text x="560" y="52" textAnchor="middle" fontSize="18" fontWeight="600" className="fill-marino">
          Control
        </text>

        {/* El corredor va encima de todo para que nunca quede tapado */}
        {ruta && (
          <circle
            key={ruta.id}
            r="11"
            className="juego-corredor pointer-events-none fill-ruta stroke-white"
            strokeWidth="4"
            style={{ offsetPath: `path("${ruta.d}")` }}
          />
        )}
      </svg>

      <div className="px-2 pb-2 md:px-0 md:pb-0">
        <h3 className="font-display text-3xl font-extrabold tracking-tight">Elige tu ruta</h3>
        <p className="mt-2 text-soft">{site.deporte[1]}</p>

        <div className="mt-5 grid gap-2">
          {site.rutasJuego.map((r) => (
            <button
              key={r.id}
              type="button"
              aria-pressed={r.id === elegida}
              onClick={() => setElegida(r.id)}
              className="flex cursor-pointer items-center gap-3 rounded-2xl border-2 border-marino px-4 py-3 text-left font-semibold transition-colors hover:bg-white aria-pressed:bg-marino aria-pressed:text-white"
            >
              <span aria-hidden="true" className="font-display text-lg font-bold">
                {r.id}
              </span>
              {r.nombre}
            </button>
          ))}
        </div>

        <div role="status" className="mt-5 min-h-36">
          {ruta ? (
            <>
              <dl className="grid grid-cols-3 gap-2">
                {[
                  ["Distancia", ruta.distancia],
                  ["Subida", ruta.subida],
                  ["Tiempo", ruta.tiempo],
                ].map(([dato, valor]) => (
                  <div key={dato}>
                    <dt className="text-sm text-soft">{dato}</dt>
                    <dd className="font-display text-2xl font-bold">{valor}</dd>
                  </div>
                ))}
              </dl>
              <p className={`mt-3 font-semibold ${ruta.mejor ? "text-ruta-dark" : ""}`}>{ruta.nota}</p>
            </>
          ) : (
            <p className="text-soft">Toca una ruta para ver cómo te iría.</p>
          )}
          <p className="mt-2 text-sm text-soft">Ejemplo ilustrativo.</p>
        </div>
      </div>
    </div>
  );
}
