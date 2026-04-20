import deloitte from "@/assets/logos/deloitte.png";
import cyngn from "@/assets/logos/cyngn.png";
import hlth from "@/assets/logos/hlth.png";
import mongodb from "@/assets/logos/mongodb.png";
import lemlist from "@/assets/logos/lemlist.png";
import tangentia from "@/assets/logos/tangentia.png";
import barbri from "@/assets/logos/barbri.jpg";
import unknownLogo from "@/assets/logos/unknown.avif";
import qlerify from "@/assets/logos/qlerify.png";
import luminai from "@/assets/logos/luminai.png";
import growthlabz from "@/assets/logos/growthlabz.jpg";

type LogoItem =
  | { type: "image"; src: string; alt: string; className?: string; caseStudy?: boolean }
  | { type: "text"; label: string; alt: string; className?: string; caseStudy?: boolean };

const row1: LogoItem[] = [
  { type: "text", label: "CLOUDERA", alt: "Cloudera", className: "font-extrabold tracking-[0.15em] text-foreground/80 text-sm md:text-base" },
  { type: "image", src: hlth, alt: "HLTH", className: "h-7 md:h-8", caseStudy: true },
  { type: "text", label: "ElevenLabs", alt: "ElevenLabs", className: "font-semibold tracking-tight text-foreground/80 text-base md:text-lg" },
  { type: "image", src: lemlist, alt: "Lemlist", className: "h-8 md:h-9" },
  { type: "text", label: "BD", alt: "BD", className: "font-extrabold italic text-[#CC0033] text-xl md:text-2xl tracking-tight", caseStudy: true },
  { type: "image", src: deloitte, alt: "Deloitte", className: "h-6 md:h-7" },
  { type: "image", src: mongodb, alt: "MongoDB", className: "h-6 md:h-7" },
  { type: "image", src: cyngn, alt: "CYNGN", className: "h-6 md:h-7" },
  { type: "text", label: "ORACLE", alt: "Oracle", className: "font-bold tracking-[0.2em] text-[#C74634] text-sm md:text-base" },
];

const row2: LogoItem[] = [
  { type: "image", src: tangentia, alt: "Tangentia", className: "h-7 md:h-8" },
  { type: "image", src: barbri, alt: "Barbri", className: "h-9 md:h-10 rounded" },
  { type: "image", src: unknownLogo, alt: "Customer logo", className: "h-7 md:h-8" },
  { type: "image", src: qlerify, alt: "Qlerify", className: "h-6 md:h-7" },
  { type: "image", src: luminai, alt: "Lumin.ai", className: "h-7 md:h-8" },
  { type: "image", src: growthlabz, alt: "Growth Labz", className: "h-9 md:h-10 rounded", caseStudy: true },
];

const CaseStudyBadge = () => (
  <span className="mt-3 inline-flex items-center rounded-full bg-[#EEF2FF] px-3 py-1 text-xs font-semibold text-[#3C73E7]">
    Case study
  </span>
);

const renderItem = (logo: LogoItem) => (
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
);

const LogoStrip = () => {
  return (
    <section className="w-full border-y border-border/50 bg-background py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-10 text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Trusted by teams at leading companies
        </p>
        <div className="flex flex-col gap-y-10">
          <div className="flex flex-nowrap items-start justify-center gap-x-5 md:gap-x-7 lg:gap-x-9 overflow-x-auto md:overflow-visible">
            {row1.map(renderItem)}
          </div>
          <div className="flex flex-nowrap items-start justify-center gap-x-6 md:gap-x-10 lg:gap-x-14 overflow-x-auto md:overflow-visible">
            {row2.map(renderItem)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoStrip;
