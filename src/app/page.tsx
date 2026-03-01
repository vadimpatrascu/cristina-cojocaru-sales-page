"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

/* ──────────────────────────── fade-in observer ──────────────────────────── */
function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  const ref = useFadeIn();
  return (
    <section id={id} ref={ref} className={`fade-in ${className}`}>
      {children}
    </section>
  );
}

/* ──────────────────────────── DATA ──────────────────────────── */

{/* TODO: update name */}
const PROGRAM_NAME = "Cum să te eliberezi de datorii, CONȘTIENT?";

const weeks = [
  {
    nr: 1,
    title: "Siguranța de a privi adevărul",
    subtitle: "Adio, frica de cifre!",
    desc: "Claritate, ordine și siguranță. Exerciții NLP de cunoaștere, protocol EFT, semnătura astrală personalizată și prima sesiune live Theta Healing.",
  },
  {
    nr: 2,
    title: "Eliberarea de rușine și vinovăție",
    subtitle: "Datoria nu te definește ca om",
    desc: "Separăm cine ești de situația pe care o gestionezi. Lucrăm cu cele două emoții care blochează cel mai mult: rușinea și vinovăția.",
  },
  {
    nr: 3,
    title: "Claritatea deciziei",
    subtitle: "Cum să alegi și să începi, fără blocaje",
    desc: "Dezactivăm asocierea dintre decizie și pedeapsă. Eliberăm decizia de încărcătura care o blochează și creăm spațiu pentru alegeri aliniate.",
  },
  {
    nr: 4,
    title: "Rescrierea convingerilor limitative",
    subtitle: "Banii nu trebuie să fie o luptă",
    desc: "Rescriem regulile interioare. Nu mai confundăm tensiunea cu responsabilitatea, controlul cu siguranța. Creăm spațiu interior înainte de a crea spațiu în cont.",
  },
  {
    nr: 5,
    title: "Capacitatea de a primi",
    subtitle: "Deschiderea fluxului financiar",
    desc: "Creștem spațiul interior în care banii pot circula fără stres. Instalăm noi ancore NLP și lucrăm cu tehnica EFT pe atitudinea de prosperitate.",
  },
  {
    nr: 6,
    title: "Noua ta identitate",
    subtitle: "Cine ești tu dincolo de datorii?",
    desc: "Integrarea finală. O identitate stabilă și sigură, o relație matură cu banii, claritate și decizii puternice. De aici începe noua realitate.",
  },
];

const testimonials = [
  {
    name: "Ionela V.",
    before:
      "Sceptică, reacții negative, blocată în decizia de a…",
    after:
      "Liniștită, am încredere în mine și o claritate financiară. Încrederea și curajul pentru schimbare.",
    belief: "Ca oricât mă strădui să muncesc, banii cu timpul vor veni.",
  },
  {
    name: "Alina P.",
    before:
      "Simțeam un gol în stomac și aveam emoții legate de bani și decizii. Eram mai neliniștită și fără claritate.",
    after:
      "Mă simt mai liniștită și mai clară în gândire. Analizez mai mult înainte să decid. Am mai multă încredere în alegerile mele.",
    belief:
      "Acum cred mai mult în mine și în faptul că pot gestiona lucrurile, inclusiv partea financiară.",
  },
  {
    name: "Alexandra P.",
    before: "Acum trei săptămâni mă simțeam lipsită de speranță și confuză.",
    after:
      "Lucrurile încep să se așeze. Starea de spirit s-a schimbat.",
    belief: "Relația cu banii poate fi îmbunătățită.",
  },
  {
    name: "Petronela T.",
    before: "Mai pierdută, mai dezorganizată, mai temătoare.",
    after:
      "Sunt mai curajoasă și mai centrată pe mine și acțiune, fără emoții de teamă.",
    belief:
      "Banii vin la mine cu ușurință, bucurie și glorie.",
  },
  {
    name: "Maria M.",
    before: "Nu știam atâtea informații despre bani.",
    after:
      "E o diferență mare, sunt mai echilibrată în relația cu banii. Nu am cheltuit la fel de mult ca până acum.",
    belief: "Banii vin acolo unde sunt primiți cu bucurie.",
  },
  {
    name: "Eugenia B.",
    before:
      "Aveam masca de perfecționism, puține visuri și chiar un pic de confuzie în viața mea.",
    after:
      "Văd mai multă claritate, îmi dau voie să greșesc. Liniștea interioară, încrederea, claritatea și bucuria de a trăi.",
    belief:
      "Totul vine la noi cu ușurință, bucurie și glorie.",
  },
];

/* ──────────────────────────── FORM ──────────────────────────── */

function ContactForm() {
  return (
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSfDGZFWBogq-bPRhVjM2eXJBH7wZvxJjGTzr_IG4j0m3-2oQA/viewform?embedded=true"
      className="w-full border-0"
      style={{ height: "1200px" }}
      title="Formular de selecție"
    >
      Se încarcă…
    </iframe>
  );
}

/* ──────────────────────────── PAGE ──────────────────────────── */

export default function Home() {
  useEffect(() => {
    const els = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0f1e] text-white">
      {/* ─── HERO ─── */}
      <header className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        {/* bg pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #d4af37 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#d4af37]/5 rounded-full blur-[120px]" />

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <p className="text-[#d4af37] tracking-[0.3em] uppercase text-sm mb-6 font-medium">
            28 martie &ndash; 9 mai 2026
          </p>

          {/* TODO: update name */}
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6">
            <span className="gold-text">{PROGRAM_NAME}</span>
          </h1>

          <p className="text-xl sm:text-2xl text-white/70 mb-4 font-[family-name:var(--font-playfair)] italic">
            Un program unic &icirc;n Rom&acirc;nia
          </p>

          <p className="text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed">
            Primul program care combin&#259; numerologia cu instrumente din coaching
            pentru a transforma rela&#539;ia ta cu banii din interior spre exterior.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="cta-button px-10 py-4 rounded-lg text-[#0a0f1e] font-bold text-lg tracking-wide"
            >
              VREAU S&#258; M&#258; &Icirc;NSCRIU
            </a>
            <a
              href="#program"
              className="border border-[#d4af37]/40 px-10 py-4 rounded-lg text-[#d4af37] hover:bg-[#d4af37]/10 transition text-lg"
            >
              Detalii program
            </a>
          </div>

          <div className="mt-16 flex justify-center">
            <div className="inline-flex flex-col items-center gap-2 border border-[#d4af37]/40 rounded-xl px-8 py-4 opacity-80">
              <span className="font-[family-name:var(--font-playfair)] text-[#d4af37] text-xl tracking-wide">
                Un program unic &icirc;n Rom&acirc;nia
              </span>
              <span className="text-white/50 text-sm tracking-[0.15em] uppercase">
                numerologie &amp; instrumente de coaching
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* ─── PROBLEMA REALĂ ─── */}
      <Section className="py-20 sm:py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="gold-divider mb-16" />

          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl text-center mb-12 leading-tight">
            Nu sumele &icirc;n sine te blocheaz&#259;.
            <br />
            <span className="gold-text">Ci starea pe care o creeaz&#259;.</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: "&#128200;",
                title: "Economie instabil&#259;",
                text: "Cre&#537;teri de taxe, costuri de baz&#259; tot mai mari, incertitudine generalizat&#259;.",
              },
              {
                icon: "&#128188;",
                title: "Pia&#539;a muncii &icirc;n schimbare",
                text: "Impactul inteligen&#539;ei artificiale, restructur&#259;ri, locuri de munc&#259; nesigure.",
              },
              {
                icon: "&#128534;",
                title: "Presiune constant&#259;",
                text: "Cheltuieli lunare, rate, carduri de credit, responsabilitatea familiei.",
              },
            ].map((item, i) => (
              <div key={i} className="gold-border rounded-xl p-6 text-center">
                <div className="text-4xl mb-4" dangerouslySetInnerHTML={{ __html: item.icon }} />
                <h3
                  className="text-[#d4af37] font-semibold mb-2 text-lg"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
                <p
                  className="text-white/60 text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: item.text }}
                />
              </div>
            ))}
          </div>

          <div className="bg-[#111833] rounded-xl p-8 sm:p-10 text-center gold-border">
            <p className="font-[family-name:var(--font-playfair)] text-xl sm:text-2xl text-white/90 mb-6 leading-relaxed">
              Problema real&#259; nu este matematica.
              <br />
              <strong className="text-[#d4af37]">Este rela&#539;ia emo&#539;ional&#259; cu banii.</strong>
            </p>
            <p className="text-white/50 max-w-2xl mx-auto leading-relaxed">
              Am copiat un model care ast&#259;zi nu mai func&#539;ioneaz&#259;. &Icirc;nainte de a analiza cifrele,
              trebuie s&#259; sim&#539;im rela&#539;ia noastr&#259; cu banii. Anxietate, panic&#259;, tensiune,
              fric&#259; de viitor, vinov&#259;&#539;ie &mdash; aceast&#259; stare ne influen&#539;eaz&#259; deciziile &#537;i ne &#539;ine
              bloca&#539;i &icirc;n reac&#539;ie, nu &icirc;n claritate.
            </p>
          </div>
        </div>
      </Section>

      {/* ─── CE ESTE PROGRAMUL ─── */}
      <Section id="program" className="py-20 sm:py-28 px-6 bg-[#0d1425]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#d4af37] tracking-[0.2em] uppercase text-sm mb-4">
            Programul de 6 s&#259;pt&#259;m&acirc;ni
          </p>

          {/* TODO: update name */}
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl mb-8 leading-tight">
            <span className="gold-text">&laquo;{PROGRAM_NAME}&raquo;</span>
          </h2>

          <div className="grid sm:grid-cols-2 gap-6 text-left mb-12">
            {[
              "Pa&#537;i zilnici, simpli &#537;i aplica&#539;i, pentru a pune ordine f&#259;r&#259; cople&#537;ire",
              "Protocoale s&#259;pt&#259;m&acirc;nale de lucru emo&#539;ional (EFT, Theta Healing)",
              "&Icirc;nt&acirc;lniri s&#259;pt&#259;m&acirc;nale live de grup pentru sus&#539;inere &#537;i lucru profund",
              "Instrumente de claritate personalizat&#259; bazate pe numerologie",
              "&Icirc;ntreb&#259;ri zilnice deschise din tehnica Access Consciousness",
              "Exerci&#539;ii NLP de cunoa&#537;tere &#537;i introspec&#539;ie",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-[#d4af37] mt-1 flex-shrink-0">&#9670;</span>
                <p
                  className="text-white/70 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              </div>
            ))}
          </div>

          <div className="gold-border rounded-xl p-8 inline-block">
            <p className="font-[family-name:var(--font-playfair)] text-lg text-white/80 italic">
              Construim &icirc;mpreun&#259; o funda&#539;ie nou&#259;,
              <br />
              <span className="text-[#d4af37]">nu doar repar&#259;m fisurile vechi.</span>
            </p>
          </div>
        </div>
      </Section>

      {/* ─── 6 SĂPTĂMÂNI ─── */}
      <Section className="py-20 sm:py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl text-center mb-16">
            Cele <span className="gold-text">6 s&#259;pt&#259;m&acirc;ni</span> de transformare
          </h2>

          <div className="space-y-6">
            {weeks.map((w) => (
              <div key={w.nr} className="week-card rounded-xl p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center">
                    <span className="text-[#d4af37] font-bold">{w.nr}</span>
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-playfair)] text-xl sm:text-2xl text-white mb-1">
                      {w.title}
                    </h3>
                    <p className="text-[#d4af37]/80 text-sm italic mb-3">
                      {w.subtitle}
                    </p>
                    <p className="text-white/50 leading-relaxed text-sm">
                      {w.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ─── INSTRUMENTE NUMEROLOGICE ─── */}
      <Section className="py-20 sm:py-28 px-6 bg-[#0d1425]">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl text-center mb-6">
            Instrumente <span className="gold-text">numerologice</span>
          </h2>
          <p className="text-center text-white/50 max-w-2xl mx-auto mb-14 leading-relaxed">
            Instrumente personalizate, calculate pe baza datei tale de na&#537;tere, care te ajut&#259;
            s&#259; iei decizii mai clare &#537;i s&#259;-&#539;i &icirc;mbun&#259;t&#259;&#539;e&#537;ti situa&#539;ia financiar&#259;.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="gold-border rounded-xl overflow-hidden">
              <Image
                src="/images/triunghiul-patratele.jpg"
                alt="Triunghiul Banilor și Pătratele Magice — instrumente numerologice personalizate"
                width={640}
                height={450}
                className="w-full h-auto"
              />
              <div className="p-6">
                <h3 className="text-[#d4af37] font-semibold text-lg mb-2">
                  Triunghiul Banilor &amp; P&#259;tratele Magice
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  Cod numeric personalizat pe care &icirc;l po&#539;i folosi ca PIN la card sau telefon.
                  Se activeaz&#259; de fiecare dat&#259; c&acirc;nd &icirc;l tastezi, readuc&acirc;nd claritate
                  &#537;i disciplin&#259; financiar&#259;.
                </p>
              </div>
            </div>

            <div className="gold-border rounded-xl overflow-hidden">
              <Image
                src="/images/semnaturi-astrale.jpg"
                alt="Semnăturile Astrale — instrumente de realiniere energetică"
                width={640}
                height={450}
                className="w-full h-auto"
              />
              <div className="p-6">
                <h3 className="text-[#d4af37] font-semibold text-lg mb-2">
                  Semn&#259;turile Astrale
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  F&#259;cute personalizat dup&#259; data ta de na&#537;tere, pe situa&#539;iile pe care
                  vrei s&#259; le reglezi &icirc;n via&#539;a ta. Fiecare semn&#259;tur&#259; este unic&#259;
                  &#537;i lucreaz&#259; cu structura ta energetic&#259; personal&#259;.
                </p>
              </div>
            </div>
          </div>

          {/* Bonuses */}
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                title: "Triunghiul Banilor",
                desc: "Codul t&#259;u numeric personal pentru activarea fluxului financiar.",
              },
              {
                title: "Codul Secret al Banilor",
                desc: "Repere numerologice aliniate cu structura ta unic&#259;.",
              },
              {
                title: "P&#259;tratele Magice",
                desc: "Structuri numerice complexe construite pe Propor&#539;ia de Aur.",
              },
            ].map((b, i) => (
              <div key={i} className="bg-[#111833] rounded-xl p-5 text-center gold-border">
                <div className="text-[#d4af37] text-sm tracking-wider uppercase mb-2">
                  Bonus {i + 1}
                </div>
                <h4
                  className="font-[family-name:var(--font-playfair)] text-lg text-white mb-2"
                  dangerouslySetInnerHTML={{ __html: b.title }}
                />
                <p
                  className="text-white/50 text-sm"
                  dangerouslySetInnerHTML={{ __html: b.desc }}
                />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ─── TESTIMONIALE ─── */}
      <Section className="py-20 sm:py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl text-center mb-4">
            Ce spun <span className="gold-text">participantele</span>
          </h2>
          <p className="text-center text-white/40 mb-14 text-sm">
            Rezultate reale dup&#259; primele 3 s&#259;pt&#259;m&acirc;ni de program
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card rounded-xl p-6">
                <div className="text-[#d4af37] font-semibold mb-4">{t.name}</div>

                <div className="space-y-4">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-red-400/70 font-medium">
                      &Icirc;nainte
                    </span>
                    <p className="text-white/50 text-sm mt-1 italic">
                      &ldquo;{t.before}&rdquo;
                    </p>
                  </div>

                  <div className="gold-divider" />

                  <div>
                    <span className="text-xs uppercase tracking-wider text-emerald-400/70 font-medium">
                      Dup&#259; 3 s&#259;pt&#259;m&acirc;ni
                    </span>
                    <p className="text-white/70 text-sm mt-1">
                      &ldquo;{t.after}&rdquo;
                    </p>
                  </div>

                  <div className="bg-[#d4af37]/5 rounded-lg p-3 mt-3">
                    <p className="text-[#d4af37]/80 text-xs italic">
                      Credin&#539;a nou&#259;: &ldquo;{t.belief}&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ─── DESPRE NOI ─── */}
      <Section className="py-20 sm:py-28 px-6 bg-[#0d1425]">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl text-center mb-16">
            Cine <span className="gold-text">suntem</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Cristina */}
            <div className="text-center">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-2 border-[#d4af37]/30 mb-6">
                <Image
                  src="/images/cristina-cojocaru.jpg"
                  alt="Cristina Cojocaru — coach intuitiv-holistic"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-white mb-1">
                Cristina Cojocaru
              </h3>
              <p className="text-[#d4af37] text-sm mb-4">Coach intuitiv-holistic</p>
              <p className="text-white/50 text-sm leading-relaxed max-w-sm mx-auto">
                Lucreaz&#259; cu instrumente din NLP, EFT, Theta Healing &#537;i Access Consciousness
                pentru a transforma rela&#539;ia cu banii la nivel profund &mdash; de la credin&#539;e
                &#537;i emo&#539;ii, p&acirc;n&#259; la decizii &#537;i ac&#539;iuni concrete.
              </p>
            </div>

            {/* Violeta */}
            <div className="text-center">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-2 border-[#d4af37]/30 mb-6">
                <Image
                  src="/images/violeta-botezatu.jpg"
                  alt="Violeta Botezatu — expert numerolog"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-white mb-1">
                Violeta Botezatu
              </h3>
              <p className="text-[#d4af37] text-sm mb-4">Expert &icirc;n numerologie aplicat&#259;</p>
              <p className="text-white/50 text-sm leading-relaxed max-w-sm mx-auto">
                Aduce claritate personalizat&#259; prin instrumente numerologice construite pe
                Propor&#539;ia de Aur. Harta ta financiar&#259; personal&#259;, triunghiuri, p&#259;trate magice
                &#537;i semn&#259;turi astrale &mdash; toate adaptate structurii tale unice.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ─── ESTE / NU ESTE PENTRU TINE ─── */}
      <Section className="py-20 sm:py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl text-center mb-14">
            Acest proces <span className="gold-text">nu este pentru toat&#259; lumea</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#111833] rounded-xl p-8 gold-border">
              <h3 className="text-emerald-400 font-semibold mb-6 text-lg">
                Este pentru tine dac&#259;...
              </h3>
              <ul className="space-y-3">
                {[
                  "E&#537;ti dispus(&#259;) s&#259; te implici zilnic",
                  "Vrei s&#259; te ui&#539;i onest la situa&#539;ia ta financiar&#259;",
                  "&Icirc;n&#539;elegi c&#259; schimbarea financiar&#259; implic&#259; &#537;i schimbare interioar&#259;",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-emerald-400 mt-0.5">&#10003;</span>
                    <span
                      className="text-white/70 text-sm"
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#111833] rounded-xl p-8 gold-border">
              <h3 className="text-red-400 font-semibold mb-6 text-lg">
                NU este pentru tine dac&#259;...
              </h3>
              <ul className="space-y-3">
                {[
                  "Cau&#539;i solu&#539;ii rapide sau o formul&#259; magic&#259;",
                  "Vrei s&#259; &#539;i se rezolve problema f&#259;r&#259; implicare",
                  "Nu e&#537;ti dispus(&#259;) s&#259; lucrezi la nivel interior",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-red-400 mt-0.5">&#10007;</span>
                    <span
                      className="text-white/70 text-sm"
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* ─── FORMULAR DE CONTACT ─── */}
      <Section id="contact" className="py-20 sm:py-28 px-6 bg-[#0d1425]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#d4af37] tracking-[0.2em] uppercase text-sm mb-4">
              Formular de selec&#539;ie
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl mb-4">
              <span className="gold-text">Asumarea</span> propriei realit&#259;&#539;i financiare
              <br />
              este primul pas c&#259;tre a o schimba.
            </h2>
            <p className="text-white/50 max-w-xl mx-auto leading-relaxed">
              Acest formular nu este o formalitate. Ne ajut&#259; s&#259; &icirc;n&#539;elegem situa&#539;ia ta
              real&#259; &#537;i s&#259; ne asigur&#259;m c&#259; putem lucra personalizat.
              <br />
              <strong className="text-white/70">
                Locurile sunt limitate.
              </strong>
            </p>
          </div>

          <ContactForm />
        </div>
      </Section>

      {/* ─── FOOTER ─── */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-[family-name:var(--font-playfair)] text-[#d4af37] text-lg mb-2">
            Cristina Cojocaru &amp; Violeta Botezatu
          </p>
          <p className="text-white/30 text-sm mb-4">
            {/* TODO: update name */}
            {PROGRAM_NAME} &mdash; 28 martie &ndash; 9 mai 2026
          </p>
          <p className="text-white/20 text-xs">
            &copy; {new Date().getFullYear()} Toate drepturile rezervate.
          </p>
        </div>
      </footer>
    </div>
  );
}
