import deloitte from "@/assets/logos/deloitte.png";
import cyngn from "@/assets/logos/cyngn.png";
import hlth from "@/assets/logos/hlth.png";
import mongodb from "@/assets/logos/mongodb.png";
import lemlist from "@/assets/logos/lemlist.png";

type LogoItem =
  | { type: "image"; src: string; alt: string; className?: string; caseStudy?: boolean }
  | { type: "text"; label: string; alt: string; className?: string; caseStudy?: boolean };

const logos: LogoItem[] = [
  { type: "image", src: lemlist, alt: "Lemlist", className: "h-8 md:h-9" },
  { type: "image", src: hlth, alt: "HLTH", className: "h-7 md:h-8", caseStudy: true },
  { type: "text", label: "ElevenLabs", alt: "ElevenLabs", className: "font-semibold tracking-tight text-foreground/80 text-base md:text-lg" },
  { type: "text", label: "CLOUDERA", alt: "Cloudera", className: "font-extrabold tracking-[0.15em] text-foreground/80 text-sm md:text-base" },
  { type: "text", label: "BD", alt: "BD", className: "font-extrabold italic text-[#CC0033] text-xl md:text-2xl tracking-tight", caseStudy: true },
  { type: "image", src: deloitte, alt: "Deloitte", className: "h-6 md:h-7" },
  { type: "image", src: mongodb, alt: "MongoDB", className: "h-6 md:h-7" },
  { type: "image", src: cyngn, alt: "CYNGN", className: "h-6 md:h-7" },
  { type: "text", label: "ORACLE", alt: "Oracle", className: "font-bold tracking-[0.2em] text-[#C74634] text-sm md:text-base" },
];

const CaseStudyBadge = () => (
  <span className="mt-3 inline-flex items-center rounded-full bg-[#EEF2FF] px-3 py-1 text-xs font-semibold text-[#3C73E7]">
    Case study
  </span>
);

const LogoStrip = () => {
  return (
    <section className="w-full border-y border-border/50 bg-background py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-10 text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Trusted by teams at leading companies
        </p>
        <div className="flex flex-wrap items-start justify-center gap-x-10 gap-y-8 md:gap-x-14">
          {logos.map((logo) => (
            <div key={logo.alt} className="flex flex-col items-center">
              <div className="flex h-10 items-center justify-center">
                {logo.type === "image" ? (
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className={`w-auto object-contain opacity-80 transition hover:opacity-100 ${logo.className ?? ""}`}
                    loading="lazy"
                  />
                ) : (
                  <span
                    aria-label={logo.alt}
                    className={`opacity-80 transition hover:opacity-100 ${logo.className ?? ""}`}
                  >
                    {logo.label}
                  </span>
                )}
              </div>
              {logo.caseStudy && <CaseStudyBadge />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoStrip;
