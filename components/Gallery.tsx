import Image from "next/image";
import Section from "./Section";
import { site } from "@/lib/site";

export default function Gallery() {
  if (site.galeria.length === 0) return null;

  return (
    <Section id="galeria" title="Galería" tone="paper" wide>
      <div className="grid grid-cols-2 gap-3 md:auto-rows-[240px] md:grid-cols-3">
        {site.galeria.map((foto, i) => (
          <div
            key={foto.src}
            className={`relative overflow-hidden ${
              i === 0
                ? "col-span-2 aspect-[4/3] md:row-span-2 md:aspect-auto"
                : "aspect-square md:aspect-auto"
            }`}
          >
            <Image
              src={foto.src}
              alt={foto.alt}
              fill
              sizes={i === 0 ? "(min-width: 768px) 66vw, 100vw" : "(min-width: 768px) 33vw, 50vw"}
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </Section>
  );
}