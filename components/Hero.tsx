import Image from "next/image";
import { site } from "@/lib/site";
import Curvas from "./Curvas";
import WhatsAppButton from "./WhatsAppButton";

export default function Hero() {
  return (
    <section id="inicio" className="relative isolate scroll-mt-24 overflow-hidden bg-marino text-white">
      <Curvas id="curvas-hero" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pt-14 md:grid-cols-[1.15fr_0.85fr] md:pt-20">
        <div>
          <h1 className="font-display text-[3.2rem] font-extrabold leading-[0.95] tracking-tight text-balance sm:text-7xl md:text-6xl lg:text-8xl">
            Un mapa, una brújula y tú.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/85 md:text-xl">
            Somos un grupo de entrenamiento de orientación. En 2027 queremos
            entrenar a más personas: escríbenos y te contamos cómo empezar.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <WhatsAppButton />
            <a
              href="#competencias"
              className="inline-flex items-center justify-center rounded-full border-2 border-white px-6 py-3 font-semibold transition-colors hover:bg-white hover:text-marino"
            >
              Ver competencias
            </a>
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-sm md:max-w-none">
          {site.heroImage ? (
            <div className="absolute inset-0 overflow-hidden rounded-full ring-[10px] ring-ruta">
              <Image
                src={site.heroImage}
                alt={site.heroAlt}
                fill
                preload
                sizes="(min-width: 768px) 40vw, 80vw"
                className="object-cover"
              />
            </div>
          ) : site.logo ? (
            <Image
              src={site.logo}
              alt={site.name}
              fill
              preload
              sizes="(min-width: 768px) 40vw, 80vw"
              className="rounded-full object-contain"
            />
          ) : null}
        </div>
      </div>

      {/* Ruta: salida, dos controles y meta */}
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-8 md:pb-24">
        <svg viewBox="0 0 1200 130" className="block h-auto w-full" fill="none" aria-hidden="true">
          <path
            className="ruta-trazo stroke-white"
            pathLength={1}
            d="M70 95 C 200 20, 300 120, 440 70 S 640 20, 780 80 S 980 120, 1090 55"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <polygon points="70,72 90,108 50,108" className="fill-ruta stroke-white" strokeWidth="4" strokeLinejoin="round" />
          <g className="control-pop" style={{ animationDelay: "1.2s" }}>
            <circle cx="440" cy="70" r="24" className="fill-ruta stroke-white" strokeWidth="4" />
            <text x="440" y="77" textAnchor="middle" fontSize="22" fontWeight="700" className="fill-white">1</text>
          </g>
          <g className="control-pop" style={{ animationDelay: "2s" }}>
            <circle cx="780" cy="80" r="24" className="fill-ruta stroke-white" strokeWidth="4" />
            <text x="780" y="87" textAnchor="middle" fontSize="22" fontWeight="700" className="fill-white">2</text>
          </g>
          <g className="control-pop" style={{ animationDelay: "2.6s" }}>
            <circle cx="1090" cy="55" r="26" className="fill-ruta stroke-white" strokeWidth="4" />
            <circle cx="1090" cy="55" r="13" className="stroke-white" strokeWidth="4" />
          </g>
        </svg>
      </div>

      {/* Borde curvo hacia la sección siguiente */}
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className="absolute inset-x-0 -bottom-px block h-8 w-full md:h-14"
        aria-hidden="true"
      >
        <path d="M0 60 C 360 0, 1080 0, 1440 60 Z" className="fill-white" />
      </svg>
    </section>
  );
}
