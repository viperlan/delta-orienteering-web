import Image from "next/image";
import { site } from "@/lib/site";
import WhatsAppButton from "./WhatsAppButton";

// Sin fotos, Gallery no se muestra y su enlace no llevaría a ningún lado.
const nav = site.nav.filter((item) => item.href !== "#galeria" || site.galeria.length > 0);

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-marino/95 text-white backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <a href="#inicio" className="flex items-center gap-3">
          {site.logo && (
            <Image
              src={site.logo}
              alt=""
              width={72}
              height={72}
              loading="eager"
              className="h-14 w-14 rounded-full object-contain md:h-16 md:w-16"
            />
          )}
          <span className="sr-only font-display text-2xl font-bold leading-none sm:not-sr-only">
            {site.name}
          </span>
        </a>

        <nav className="hidden lg:block" aria-label="Principal">
          <ul className="flex gap-7 text-sm font-medium">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="decoration-ruta decoration-2 underline-offset-8 hover:underline"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <WhatsAppButton size="sm" label="WhatsApp" />
      </div>

      <nav className="overflow-x-auto border-t border-white/10 lg:hidden" aria-label="Principal móvil">
        <ul className="flex gap-5 whitespace-nowrap px-4 py-2 text-sm">
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
