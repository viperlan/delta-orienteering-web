import { site } from "@/lib/site";

type Props = {
  label?: string;
  size?: "sm" | "lg";
  tone?: "red" | "white";
};

export default function WhatsAppButton({
  label = "Escríbenos por WhatsApp",
  size = "lg",
  tone = "red",
}: Props) {
  const href = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappText)}`;
  const sizes = size === "sm" ? "px-4 py-2 text-sm" : "px-7 py-3.5 text-base";
  const tones =
    tone === "white"
      ? "bg-white text-ruta hover:bg-paper focus-visible:outline-white"
      : "bg-ruta text-white hover:bg-ruta-dark focus-visible:outline-white";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-full font-semibold transition-colors ${tones} ${sizes}`}
    >
      {label}
    </a>
  );
}