import Image from "next/image";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-marino text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-12 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          {site.logo && (
            <Image src={site.logo} alt="" width={72} height={72} className="h-16 w-16 rounded-full object-contain" />
          )}
          <p className="font-display text-2xl font-bold">{site.name}</p>
        </div>
        <p className="text-sm text-white/70">© 2026 {site.name}</p>
      </div>
    </footer>
  );
}