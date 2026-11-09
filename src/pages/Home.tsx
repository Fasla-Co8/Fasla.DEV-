import { useLang, Link, scrollToSection } from "../lib/app-context";
import { majors } from "../data/courses";
import {
  projectExamples,
  projectLevels,
  stats,
  testimonials,
  whyFeatures,
} from "../data/site";
import { Icon, Stars, type IconName } from "../components/Icons";
import { Logo } from "../components/Brand";
import { Badge, CtaBand, MajorCard, SectionHead } from "../components/ui";
import { FloatingLanguage } from "../components/Layout";

const marqueeTech = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "SQL",
  "Flutter",
  "Dart",
  "Kotlin",
  "Swift",
  "Firebase",
  "Git",
  "GitHub",
  "Tailwind CSS",
];

const aboutHighlights: { icon: IconName; title: { en: string; ar: string }; text: { en: string; ar: string } }[] = [
  {
    icon: "target",
    title: { en: "Industry-Oriented Learning", ar: "تعلم موجّه للسوق" },
    text: {
      en: "Curricula built around the technologies, workflows and expectations of professional software teams.",
      ar: "مناهج مبنية على التقنيات وسير العمل وتوقعات فرق البرمجيات الاحترافية.",
    },
  },
  {
    icon: "briefcase",
    title: { en: "Real-World Projects", ar: "مشاريع واقعية" },
    text: {
      en: "Weekly builds that simulate real product work instead of isolated tutorial exercises.",
      ar: "مشاريع أسبوعية تحاكي العمل على منتجات حقيقية بدلًا من تمارين الدروس المنفصلة.",
    },
  },
  {
    icon: "layers",
    title: { en: "Multiple Development Tracks", ar: "مسارات تطوير متعددة" },
    text: {
      en: "Nine specializations and 35 tracks, from web and mobile to AI, cybersecurity and game development.",
      ar: "تسعة تخصصات و35 مسارًا، من الويب والموبايل إلى الذكاء الاصطناعي والأمن السيبراني وتطوير الألعاب.",
    },
  },
  {
    icon: "code",
    title: { en: "Practical Engineering Skills", ar: "مهارات هندسية عملية" },
    text: {
      en: "Clean structure, debugging, problem solving and code you can defend in a real review.",
      ar: "هيكل نظيف وتصحيح أخطاء وحل مشكلات وكود يمكنك الدفاع عنه في مراجعة حقيقية.",
    },
  },
];

const methodSteps = [
  {
    code: "01",
    title: { en: "Learn", ar: "تعلّم" },
    text: {
      en: "Understand the concept and see it applied in a professional context.",
      ar: "افهم المفهوم وشاهده مطبقًا في سياق احترافي.",
    },
  },
  {
    code: "02",
    title: { en: "Build", ar: "ابنِ" },
    text: {
      en: "Turn the concept into working code through weekly practical projects.",
      ar: "حوّل المفهوم إلى كود عامل عبر مشاريع عملية أسبوعية.",
    },
  },
  {
    code: "03",
    title: { en: "Review", ar: "راجع" },
    text: {
      en: "Improve structure, edge cases and clarity with structured feedback.",
      ar: "حسّن الهيكل والحالات الحدّية والوضوح بملاحظات منظمة.",
    },
  },
];

function SystemMap() {
  return (
    <svg viewBox="0 0 360 200" className="h-full w-full" role="img" aria-label="FASLA.DEV learning system">
      <g stroke="#292929" strokeWidth="1" fill="none">
        <path d="M60 40H150V90H60Z" fill="#0B0B0B" />
        <path d="M210 40H300V90H210Z" fill="#0B0B0B" />
        <path d="M135 140H225V180H135Z" fill="#0B0B0B" />
        <path d="M150 65H210M105 90V140H135M255 90V140H225" stroke="#1677FF" strokeWidth="1" />
        <path d="M60 40V20H300V40" stroke="#292929" />
      </g>
      <g fill="#2585FF" fontFamily="Space Grotesk, sans-serif" fontSize="8" letterSpacing="1.5">
        <text x="72" y="60">LEARN</text>
        <text x="222" y="60">BUILD</text>
        <text x="147" y="156">SHIP</text>
      </g>
      <g fill="#A7A7A7" fontFamily="Inter, sans-serif" fontSize="6">
        <text x="72" y="72">CONCEPTS</text>
        <text x="222" y="72">PROJECTS</text>
        <text x="147" y="168">PORTFOLIO</text>
      </g>
      <g fill="#1677FF">
        <rect x="150" y="62" width="3" height="3" />
        <rect x="102" y="137" width="3" height="3" />
        <rect x="252" y="137" width="3" height="3" />
      </g>
    </svg>
  );
}

function TestimonialCard({ index }: { index: number }) {
  const { pick, t } = useLang();
  const item = testimonials[index % testimonials.length];
  const initials = pick(item.name)
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");

  return (
    <article className="testimonial-card flex w-[300px] shrink-0 flex-col justify-between border border-line bg-panel p-5 transition-colors hover:border-brand/60 sm:w-[350px]">
      <div>
        <div className="flex items-center justify-between gap-3">
          <Stars rating={item.rating} />
          <span className="border border-line px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.14em] text-muted">
            {t("reviewsPlaceholder")}
          </span>
        </div>
        <p className="mt-4 text-[13px] leading-relaxed text-white/85">“{pick(item.review)}”</p>
      </div>
      <div className="mt-5 flex items-center gap-3 border-t border-line pt-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-brand/40 bg-brand/10 font-display text-xs font-bold text-bright">
          {initials}
        </span>
        <div className="min-w-0">
          <p className="truncate text-[13px] font-bold text-white">{pick(item.name)}</p>
          <p className="truncate text-[10px] text-muted">{pick(item.track)}</p>
        </div>
      </div>
    </article>
  );
}

function TestimonialRow({ reverse = false, offset = 0 }: { reverse?: boolean; offset?: number }) {
  const items = Array.from({ length: 6 }).map((_, index) => (index + offset) % testimonials.length);
  return (
    <div className="marquee">
      <div className={`marquee-track py-1 ${reverse ? "reverse" : ""}`}>
        {[0, 1].map((group) => (
          <div key={group} className="flex shrink-0 gap-4 pe-4" aria-hidden={group === 1}>
            {items.map((itemIndex) => (
              <TestimonialCard key={`${group}-${itemIndex}`} index={itemIndex} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const { t, pick } = useLang();

  return (
    <>
      {/* ---------------------------------------------------------- HERO */}
      <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-ink">
        <div className="absolute inset-0 grid-surface opacity-60" aria-hidden />
        <div className="absolute inset-0 blue-glow" aria-hidden />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/50 to-transparent" aria-hidden />
        <div className="pointer-events-none absolute start-6 top-1/3 hidden h-40 w-px bg-gradient-to-b from-transparent via-brand/30 to-transparent lg:block" aria-hidden />
        <div className="pointer-events-none absolute end-6 top-1/4 hidden h-56 w-px bg-gradient-to-b from-transparent via-line to-transparent lg:block" aria-hidden />

        <FloatingLanguage />

        <div className="relative flex flex-1 items-center pb-14 pt-28 md:pb-20 md:pt-32">
          <div className="shell w-full">
            <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
              <div className="rise-in flex justify-center">
                <Logo size={56} />
              </div>

              <div className="rise-in rise-in-1 mt-9 inline-flex items-center gap-3 border border-line bg-panel/70 px-3 py-1.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full bg-brand opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 bg-brand" />
                </span>
                <span className="font-display text-[9px] font-bold uppercase tracking-[0.22em] text-white/80 sm:text-[10px]">
                  {t("heroKicker")}
                </span>
              </div>

              <h1 className="rise-in rise-in-2 display mt-7 text-balance text-[38px] leading-[1.08] text-white sm:text-6xl md:text-7xl lg:text-[82px]">
                {t("heroTitleBefore")}
                <span className="relative inline-block text-brand">
                  {t("heroTitleAccent")}
                  <span className="absolute inset-x-0 -bottom-1 h-[3px] bg-brand/70" aria-hidden />
                </span>
                {t("heroTitleAfter")}
              </h1>

              <p className="rise-in rise-in-2 mt-6 font-display text-base font-bold text-white sm:text-xl md:text-2xl">
                {t("heroSubtitle")}
              </p>
              <p className="rise-in rise-in-3 mt-4 max-w-2xl text-balance text-[13px] leading-relaxed text-muted sm:text-sm md:text-[15px]">
                {t("heroDescription")}
              </p>

              <div className="rise-in rise-in-3 mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row">
                <Link to="/booking" className="btn btn-primary group">
                  {t("bookSeat")}
                  <Icon name="arrowRight" size={16} className="flip-rtl transition-transform group-hover:translate-x-1" />
                </Link>
                <button
                  type="button"
                  onClick={() => scrollToSection("courses")}
                  className="btn btn-outline group"
                >
                  {t("exploreCourses")}
                  <Icon name="chevronDown" size={16} className="transition-transform group-hover:translate-y-0.5" />
                </button>
              </div>

              <div className="rise-in rise-in-4 mt-10 grid w-full max-w-2xl grid-cols-3 divide-x divide-line border-y border-line py-4 rtl:divide-x-reverse">
                {stats.slice(0, 3).map((stat) => (
                  <div key={stat.value} className="px-2 text-center">
                    <span className="block font-display text-xl font-bold text-brand sm:text-2xl">{stat.value}</span>
                    <span className="mt-1 block text-[9px] leading-tight text-muted sm:text-[10px]">
                      {pick(stat.label)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative border-y border-line bg-ink/80">
          <div className="marquee">
            <div className="marquee-track items-center gap-0 py-3">
              {[...marqueeTech, ...marqueeTech].map((tech, index) => (
                <span key={`${tech}-${index}`} className="flex items-center">
                  <span className="px-5 font-display text-[10px] font-semibold uppercase tracking-[0.2em] text-muted/80">
                    {tech}
                  </span>
                  <span className="h-1 w-1 bg-brand/70" aria-hidden />
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- ABOUT */}
      <section id="about" className="scroll-mt-20 border-b border-line bg-ink py-16 md:py-24">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHead
                eyebrow={t("aboutEyebrow")}
                title={t("aboutTitle")}
                description={t("aboutP1")}
              />
              <div className="mt-7 space-y-4 text-[13px] leading-relaxed text-muted">
                <p>{t("aboutP2")}</p>
                <p>{t("aboutP3")}</p>
              </div>
              <div className="mt-8 border border-line bg-panel p-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-brand">
                    {t("aboutMissionLabel")}
                  </span>
                  <Icon name="arrowUpRight" size={15} className="text-brand" />
                </div>
                <p className="mt-3 font-display text-lg font-bold leading-snug text-white">
                  {t("aboutMission")}
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid gap-3 sm:grid-cols-2">
                {aboutHighlights.map((item, index) => (
                  <div
                    key={item.title.en}
                    className="feature-card group border border-line bg-panel p-5 transition-colors hover:border-brand/70"
                  >
                    <div className="flex items-start justify-between">
                      <span className="flex h-10 w-10 items-center justify-center border border-line bg-ink text-brand transition-colors group-hover:border-brand/60">
                        <Icon name={item.icon} size={18} />
                      </span>
                      <span className="font-display text-[10px] font-bold tracking-[0.16em] text-muted/60">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-[15px] font-bold text-white">{pick(item.title)}</h3>
                    <p className="mt-2 text-[12px] leading-relaxed text-muted">{pick(item.text)}</p>
                  </div>
                ))}
              </div>

              <div className="mt-3 grid gap-3 border border-line bg-panel p-5 sm:grid-cols-[1fr_200px] sm:items-center">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 bg-brand" aria-hidden />
                    <span className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-brand">
                      {t("aboutApproachTitle")}
                    </span>
                  </div>
                  <div className="mt-4 grid gap-4 sm:grid-cols-3">
                    {methodSteps.map((step) => (
                      <div key={step.code}>
                        <span className="font-display text-[10px] font-bold text-brand">{step.code}</span>
                        <p className="mt-1 font-display text-sm font-bold text-white">{pick(step.title)}</p>
                        <p className="mt-1 text-[11px] leading-relaxed text-muted">{pick(step.text)}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="hidden h-[140px] border border-line bg-ink p-2 sm:block">
                  <SystemMap />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-6 border-t border-line pt-8 md:grid-cols-[1.2fr_1fr] md:items-center">
            <div>
              <p className="text-[13px] leading-relaxed text-muted">{t("aboutP4")}</p>
              <p className="mt-3 text-[13px] font-medium leading-relaxed text-white/85">{t("aboutP5")}</p>
            </div>
            <div className="grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.value} className="bg-panel p-4 text-center">
                  <span className="block font-display text-2xl font-bold text-brand">{stat.value}</span>
                  <span className="mt-1 block text-[9px] leading-tight text-muted">{pick(stat.label)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- COURSES */}
      <section id="courses" className="scroll-mt-20 border-b border-line bg-ink py-16 md:py-24">
        <div className="shell">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHead
              eyebrow={t("majorsEyebrow")}
              title={t("majorsTitle")}
              description={t("majorsSubtitle")}
              className="max-w-3xl"
            />
            <div className="flex shrink-0 flex-col items-start gap-3 lg:items-end">
              <Badge variant="outline">
                <Icon name="spark" size={11} /> {majors.length} {t("majorsEyebrow")} · 39 {t("tracksLabel")}
              </Badge>
              <p className="max-w-xs text-[11px] leading-relaxed text-muted lg:text-end">{t("coursesNote")}</p>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {majors.map((major) => (
              <MajorCard key={major.slug} major={major} />
            ))}
          </div>

          <div className="mt-8 flex flex-col items-start justify-between gap-4 border border-line bg-panel p-5 sm:flex-row sm:items-center">
            <p className="max-w-xl text-[12px] leading-relaxed text-muted">
              <span className="font-semibold text-white">{t("paymentNote")}</span>{" "}
              {t("seatsNote")}.
            </p>
            <Link to="/courses" className="btn btn-outline btn-sm group w-full sm:w-auto">
              {t("viewAllCourses")}
              <Icon name="arrowRight" size={15} className="flip-rtl transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- PROJECTS */}
      <section id="projects" className="relative scroll-mt-20 overflow-hidden border-b border-line bg-ink py-16 md:py-24">
        <div className="absolute inset-0 grid-surface-fine opacity-30" aria-hidden />
        <div className="shell relative">
          <SectionHead
            eyebrow={t("projectsEyebrow")}
            title={t("projectsTitle")}
            description={t("projectsDescription")}
            align="center"
            className="mx-auto"
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-[1.1fr_1fr]">
            <div className="relative overflow-hidden border border-brand/50 bg-panel p-6 md:p-8">
              <div className="absolute inset-0 blue-glow-soft" aria-hidden />
              <div className="relative">
                <span className="font-display text-[10px] font-bold uppercase tracking-[0.22em] text-bright">
                  {t("weeklyProjects")}
                </span>
                <div className="mt-3 flex items-end gap-4">
                  <span className="font-display text-7xl font-bold leading-none text-brand md:text-8xl">3</span>
                  <span className="mb-2 max-w-[220px] font-display text-lg font-bold leading-tight text-white md:text-xl">
                    {t("projectsHighlight")}
                  </span>
                </div>
                <p className="mt-5 max-w-lg text-[13px] leading-relaxed text-muted">{t("projectsHighlightText")}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {majors.slice(0, 5).map((major) => (
                    <span key={major.slug} className="border border-line bg-ink px-2.5 py-1 text-[10px] font-semibold text-white/80">
                      {pick(major.name)}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="border border-line bg-panel">
              <div className="flex items-center justify-between border-b border-line px-5 py-3">
                <span className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-brand">
                  {t("projectsLevelsTitle")}
                </span>
                <span className="font-display text-[10px] text-muted">01 — 04</span>
              </div>
              <div className="grid gap-px bg-line sm:grid-cols-2">
                {projectLevels.map((level) => (
                  <div key={level.code} className="bg-panel p-4">
                    <div className="flex items-center justify-between">
                      <span className="font-display text-[10px] font-bold text-brand">
                        {t("level")} {level.code}
                      </span>
                      <Icon name="arrowUpRight" size={13} className="text-muted/60" />
                    </div>
                    <h3 className="mt-2 font-display text-sm font-bold text-white">{pick(level.title)}</h3>
                    <p className="mt-1 text-[11px] leading-relaxed text-muted">{pick(level.text)}</p>
                    <ul className="mt-3 space-y-1.5">
                      {level.points.map((point) => (
                        <li key={point.en} className="flex items-start gap-2 text-[11px] text-white/75">
                          <Icon name="check" size={11} className="mt-0.5 shrink-0 text-brand" />
                          {pick(point)}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 border border-line bg-panel p-5 md:p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="font-display text-sm font-bold text-white">{t("projectsExamplesTitle")}</h3>
              <span className="font-display text-[10px] uppercase tracking-[0.18em] text-muted">
                {projectExamples.length} {t("projectsCount")}
              </span>
            </div>
            <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {projectExamples.map((example) => (
                <div key={example.en} className="flex items-center gap-2.5 border border-line bg-ink px-3 py-2.5">
                  <Icon name="plus" size={12} className="shrink-0 text-brand" />
                  <span className="text-[11px] font-medium text-white/85">{pick(example)}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 flex items-start gap-2 text-[10px] leading-relaxed text-muted/80">
              <Icon name="info" size={12} className="mt-0.5 shrink-0" />
              {t("projectsDisclaimer")}
            </p>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- WHY */}
      <section id="why" className="scroll-mt-20 border-b border-line bg-ink py-16 md:py-24">
        <div className="shell">
          <SectionHead
            eyebrow={t("whyEyebrow")}
            title={t("whyTitle")}
            description={t("whySubtitle")}
            align="center"
            className="mx-auto"
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {whyFeatures.map((feature, index) => (
              <div
                key={feature.title.en}
                className="feature-card group relative border border-line bg-panel p-5 transition-colors hover:border-brand/70"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-10 w-10 items-center justify-center border border-line bg-ink text-brand transition-colors group-hover:border-brand/60">
                    <Icon name={feature.icon as IconName} size={18} />
                  </span>
                  <span className="font-display text-[10px] font-bold tracking-[0.16em] text-muted/50">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-[14px] font-bold leading-snug text-white">
                  {pick(feature.title)}
                </h3>
                <p className="mt-2 text-[11.5px] leading-relaxed text-muted">{pick(feature.text)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- REVIEWS */}
      <section id="reviews" className="relative scroll-mt-20 overflow-hidden border-b border-line bg-ink py-16 md:py-24">
        <div className="shell">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHead
              eyebrow={t("reviewsTitle")}
              title={t("reviewsHeadline")}
              description={t("reviewsSubtitle")}
            />
            <div className="flex items-center gap-2 border border-line bg-panel px-3 py-2">
              <Icon name="info" size={13} className="text-brand" />
              <span className="text-[10px] text-muted">{t("reviewsNote")}</span>
            </div>
          </div>
        </div>

        <div className="mt-9 space-y-4">
          <TestimonialRow />
          <TestimonialRow offset={6} />
        </div>

        <div className="shell mt-8">
          <div className="flex items-start gap-3 border border-line bg-panel p-4">
            <Icon name="info" size={15} className="mt-0.5 shrink-0 text-brand" />
            <p className="text-[11px] leading-relaxed text-muted">{t("reviewsDisclaimer")}</p>
          </div>
        </div>
      </section>

      <CtaBand
        title={t("aboutCtaTitle")}
        text={t("aboutCtaText")}
        primaryLabel={t("bookSeat")}
        primaryTo="/booking"
        secondaryLabel={t("navTracks")}
        secondaryTo="/courses"
      />
    </>
  );
}
