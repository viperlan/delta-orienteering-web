import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Gallery from "@/components/Gallery";
import Curvas from "@/components/Curvas";
import EligeTuRuta from "@/components/EligeTuRuta";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

const contactoLink =
  "inline-flex items-center justify-center rounded-full border-2 border-white px-5 py-3 font-semibold transition-colors hover:bg-white hover:text-ruta";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        <Section id="deporte" title="Así se juega la orientación" wide>
          <p className="max-w-2xl text-xl leading-relaxed text-soft md:text-2xl">{site.deporte[0]}</p>
          <ol className="pasos relative mt-14 grid gap-10 before:absolute before:bottom-7 before:left-[26px] before:top-7 before:border-l-[3px] before:border-dashed before:border-ruta/40 md:grid-cols-4 md:gap-6 md:before:bottom-auto md:before:left-7 md:before:right-[22%] md:before:border-l-0 md:before:border-t-[3px]">
            {site.pasos.map((paso, i) => (
              <li key={paso.title} className="relative z-10 flex gap-5 md:flex-col">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-[3px] border-ruta bg-white font-display text-xl font-bold text-ruta">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-bold">{paso.title}</h3>
                  <p className="mt-2 max-w-md text-soft">{paso.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <EligeTuRuta />
        </Section>

        <Section id="nosotros" title="Quiénes te entrenan" tone="musgo">
          <ul className="grid gap-x-8 border-t border-marino/15 sm:grid-cols-2">
            {site.equipo.map((p) => (
              <li key={p.name} className="flex items-center gap-5 border-b border-marino/15 py-6">
                {p.foto ? (
                  <Image src={p.foto} alt="" width={128} height={128} className="h-16 w-16 shrink-0 rounded-full object-cover" />
                ) : (
                  <div
                    className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-marino font-display text-xl font-bold text-white"
                    aria-hidden="true"
                  >
                    {p.name
                      .split(" ")
                      .slice(0, 2)
                      .map((palabra) => palabra[0])
                      .join("")}
                  </div>
                )}
                <div>
                  <h3 className="font-display text-2xl font-bold leading-tight">{p.name}</h3>
                  {p.role && <p className="font-medium text-ruta-dark">{p.role}</p>}
                  {p.bio && <p className="mt-1 max-w-md text-soft">{p.bio}</p>}
                  {p.instagram && (
                    <a
                      href={p.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Instagram de ${p.name}`}
                      className="mt-1 inline-block py-1 font-semibold underline underline-offset-4"
                    >
                      Instagram
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="competencias" title="Próximas competencias" wide>
          {site.competencias.length > 0 ? (
            <ul className="grid gap-4 md:grid-cols-2">
              {site.competencias.map((c, i) => (
                <li
                  key={i}
                  className={
                    i === 0
                      ? "flex min-h-72 flex-col justify-end rounded-3xl bg-marino p-8 text-white md:row-span-2 md:min-h-96"
                      : "rounded-3xl bg-musgo p-8"
                  }
                >
                  <p className={`font-display font-bold ${i === 0 ? "text-4xl md:text-5xl" : "text-2xl text-ruta-dark"}`}>
                    {c.date}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold">{c.name}</h3>
                  <p className={i === 0 ? "text-white/80" : "text-soft"}>{c.place}</p>
                </li>
              ))}
            </ul>
          ) : (
            <div className="relative isolate overflow-hidden rounded-3xl bg-marino p-8 text-white md:p-12">
              <Curvas id="curvas-competencias" cx="85%" cy="40%" />
              <p className="max-w-xl font-display text-3xl font-bold leading-tight md:text-4xl">
                Pronto publicaremos las próximas fechas.
              </p>
              <p className="mt-4 max-w-lg text-lg text-white/85">
                Síguenos en Instagram para enterarte de cada competencia.
              </p>
              {site.instagram && (
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 font-semibold text-marino transition-colors hover:bg-musgo focus-visible:outline-white"
                >
                  Seguir en Instagram
                </a>
              )}
            </div>
          )}
        </Section>

        <Section
          id="entrenamientos"
          title="Entrenamientos de la semana"
          tone="dark"
          wide
          decor={<Curvas id="curvas-entrenamientos" cx="12%" cy="20%" />}
        >
          {site.entrenamientos.length > 0 ? (
            <ul className="divide-y divide-white/15 border-y border-white/15">
              {site.entrenamientos.map((t) => (
                <li
                  key={t.day}
                  className="grid gap-2 py-8 md:grid-cols-[minmax(0,1.3fr)_8rem_minmax(0,1fr)] md:items-baseline md:gap-8"
                >
                  <p className="font-display text-5xl font-extrabold tracking-tight text-naranja md:text-6xl">{t.day}</p>
                  <p className="text-2xl font-semibold">{t.time}</p>
                  <div>
                    <p className="text-lg">{t.focus}</p>
                    <p className="text-white/75">{t.place}</p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div>
              <p className="max-w-2xl text-xl leading-relaxed md:text-2xl">
                Escríbenos y te contamos los días, las horas y los lugares de entrenamiento.
              </p>
              <div className="mt-8">
                <WhatsAppButton label="Preguntar por los horarios" />
              </div>
            </div>
          )}
        </Section>

        <Gallery />

        <Section
          id="contacto"
          title="Entrena con nosotros en 2027"
          tone="red"
          wide
          decor={<Curvas id="curvas-contacto" cx="88%" cy="30%" />}
        >
          <p className="max-w-2xl text-xl leading-relaxed text-white md:text-2xl">
            Escríbenos por WhatsApp y te contamos horarios, lugares y cómo empezar.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <WhatsAppButton tone="white" />
            {site.telefonos.map((telefono) => (
              <a key={telefono.href} href={telefono.href} className={contactoLink}>
                {telefono.label}
              </a>
            ))}
            {site.email && (
              <a href={`mailto:${site.email}`} className={contactoLink}>
                {site.email}
              </a>
            )}
            {site.instagram && (
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" className={contactoLink}>
                Instagram
              </a>
            )}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
