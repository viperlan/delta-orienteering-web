import type { ReactNode } from "react";

type Props = {
  id: string;
  title: string;
  tone?: "white" | "paper" | "musgo" | "dark" | "red";
  wide?: boolean;
  decor?: ReactNode;
  children: ReactNode;
};

const tones = {
  white: "bg-white text-marino",
  paper: "bg-paper text-marino",
  musgo: "bg-musgo text-marino",
  dark: "bg-marino text-white",
  red: "bg-ruta text-white",
};

export default function Section({ id, title, tone = "white", wide = false, decor, children }: Props) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 ${tones[tone]} ${decor ? "relative isolate overflow-hidden" : ""}`}
    >
      {decor}
      <div
        className={`mx-auto grid max-w-6xl gap-10 px-4 py-20 md:py-28 ${
          wide ? "md:gap-14" : "md:grid-cols-[0.8fr_1.4fr] md:gap-16"
        }`}
      >
        <h2
          className={`font-display text-4xl font-extrabold leading-[1.02] tracking-tight ${
            wide ? "max-w-3xl md:text-6xl" : "md:sticky md:top-28 md:self-start md:text-5xl"
          }`}
        >
          {title}
        </h2>
        <div>{children}</div>
      </div>
    </section>
  );
}
