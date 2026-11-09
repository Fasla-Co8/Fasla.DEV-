import { useLang, Link } from "../lib/app-context";
import { stats } from "../data/site";
import { coursesByMajor, majors } from "../data/courses";
import { Badge, CtaBand, PageHero, SectionHead } from "../components/ui";
import { Icon } from "../components/Icons";

const approach = [
  {
    code: "01",
    title: { en: "Learn the fundamentals", ar: "أتقن الأساسيات" },
    text: {
      en: "Start with the concepts and vocabulary of each technology, explained in a practical context.",
      ar: "ابدأ بمفاهيم كل تقنية ومصطلحاتها، مشروحة في سياق عملي.",
    },
  },
  {
    code: "02",
    title: { en: "Build every week", ar: "ابنِ كل أسبوع" },
    text: {
      en: "Apply each concept in three projects or assignments, moving from small exercises to complete features.",
      ar: "طبق كل مفهوم في ثلاثة مشاريع أو واجبات، من تمارين صغيرة إلى ميزات متكاملة.",
    },
  },
  {
    code: "03",
    title: { en: "Review and refine", ar: "راجع وحسّن" },
    text: {
      en: "Review structure, edge cases and readability, then improve your work with clear feedback.",
      ar: "راجع الهيكل والحالات الحدّية وقابلية القراءة، ثم حسّن عملك بملاحظات واضحة.",
    },
  },
  {
    code: "04",
    title: { en: "Ship a portfolio", ar: "أطلق ملف أعمالك" },
    text: {
      en: "Finish with complete applications you can present, explain and continue developing.",
      ar: "أنهِ المسار بتطبيقات متكاملة يمكنك عرضها وشرحها وتطويرها.",
    },
  },
];

const values = [
  {
    icon: "target" as const,
    title: { en: "Clarity", ar: "الوضوح" },
    text: {
      en: "We explain why a solution works, not only how to type it.",
      ar: "نشرح سبب نجاح الحل، لا مجرد كيفية كتابته.",
    },
  },
  {
    icon: "code" as const,
    title: { en: "Practice", ar: "التطبيق" },
    text: {
      en: "Code is the primary learning material. Every week ends with something built.",
      ar: "الكود هو مادة التعلم الأساسية. كل أسبوع ينتهي بشيء مبني.",
    },
  },
  {
    icon: "shield" as const,
    title: { en: "Integrity", ar: "النزاهة" },
    text: {
      en: "We describe outcomes honestly and never promise guaranteed employment.",
      ar: "نصف النتائج بصدق ولا نعد أبدًا بتوظيف مضمون.",
    },
  },
  {
    icon: "route" as const,
    title: { en: "Growth", ar: "النمو" },
    text: {
      en: "We build long-term engineering judgment, not shortcuts around fundamentals.",
      ar: "نبني حكمًا هندسيًا طويل المدى، لا اختصارات تتجاوز الأساسيات.",
    },
  },
];

const promises = [
  {
    title: { en: "No employment guarantee", ar: "لا ضمان للتوظيف" },
    text: {
      en: "We prepare your skills and portfolio. Hiring decisions belong to employers and market conditions.",
      ar: "نجهز مهاراتك وملف أعمالك. قرارات التوظيف تعود لأصحاب العمل وظروف السوق.",
    },
  },
  {
    title: { en: "Honest reviews", ar: "آراء صادقة" },
    text: {
      en: "The reviews on this website are clearly labelled samples until verified student feedback is collected.",
      ar: "الآراء على هذا الموقع موضّحة كنماذج حتى يتم جمع آراء طلاب موثقة.",
    },
  },
  {
    title: { en: "No fake backend", ar: "لا خادم وهمي" },
    text: {
      en: "The booking form is frontend-only. It prepares your details; it does not store them on a server.",
      ar: "نموذج الحجز واجهة أمامية فقط. يجهز بياناتك ولا يخزنها على خادم.",
    },
  },
];

export default function About() {
  const { t, pick } = useLang();

  return (
    <>
      <PageHero
        eyebrow={t("aboutPageEyebrow")}
        title={t("aboutPageTitle")}
        description={t("aboutPageIntro")}
        breadcrumb={[{ label: t("breadcrumbHome"), to: "/" }, { label: t("navAbout") }]}
      >
        <div className="mt-7 flex flex-wrap items-center gap-3">
          <Badge variant="solid">FASLA.DEV</Badge>
          <Badge variant="outline">{t("brandTagline")}</Badge>
          <Badge variant="muted">{pick({ en: "Egypt", ar: "مصر" })}</Badge>
        </div>
      </PageHero>

      <section className="border-b border-line bg-ink">
        <div className="shell grid grid-cols-2 gap-px border-x border-line bg-line md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.value} className="bg-ink p-5 text-center md:p-6">
              <span className="block font-display text-3xl font-bold text-brand md:text-4xl">{stat.value}</span>
              <span className="mt-1.5 block text-[10px] leading-tight text-muted">{pick(stat.label)}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="border-b border-line bg-ink py-10 md:py-14">
        <div className="shell">
          <div className="relative overflow-hidden border border-line bg-panel">
            <img
              src="https://images.pexels.com/photos/34212896/pexels-photo-34212896.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
              alt={pick({
                en: "A dark software development workspace with code on monitors",
                ar: "مساحة عمل مظلمة لتطوير البرمجيات تعرض كودًا على الشاشات",
              })}
              loading="lazy"
              className="h-[240px] w-full object-cover opacity-70 grayscale md:h-[360px]"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
            <div className="pointer-events-none absolute inset-0 bg-brand/25 mix-blend-color" aria-hidden />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" aria-hidden />
            <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-3 p-5 md:p-6">
              <div>
                <span className="eyebrow">{t("aboutEyebrow")}</span>
                <p className="mt-2 font-display text-xl font-bold text-white md:text-2xl">
                  {pick({
                    en: "A professional environment for practical engineering.",
                    ar: "بيئة احترافية لهندسة عملية.",
                  })}
                </p>
              </div>
              <span className="border border-white/20 bg-ink/80 px-2.5 py-1 font-display text-[9px] font-bold uppercase tracking-[0.18em] text-white/70">
                FASLA.DEV / {pick({ en: "Learning Environment", ar: "بيئة التعلم" })}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-ink py-14 md:py-20">
        <div className="shell grid gap-10 lg:grid-cols-[1fr_360px] lg:gap-16">
          <div>
            <SectionHead eyebrow={t("aboutEyebrow")} title={t("aboutTitle")} />
            <div className="mt-6 space-y-4 text-[13px] leading-relaxed text-muted md:text-sm">
              <p>{t("aboutP1")}</p>
              <p>{t("aboutP2")}</p>
              <p>{t("aboutP3")}</p>
              <p>{t("aboutP4")}</p>
              <p className="border-s-2 border-brand ps-4 font-medium text-white/90">{t("aboutP5")}</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="border border-brand/50 bg-panel p-5">
              <span className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-brand">
                {t("aboutMissionLabel")}
              </span>
              <p className="mt-3 font-display text-xl font-bold leading-snug text-white">{t("aboutMission")}</p>
            </div>
            <div className="border border-line bg-panel p-5">
              <h3 className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-brand">
                {t("learningTracks")}
              </h3>
              <ul className="mt-3 divide-y divide-line">
                {majors.map((major) => (
                  <li key={major.slug}>
                    <Link
                      to={`/courses?major=${major.slug}`}
                      className="group flex items-center justify-between py-2 text-[12px]"
                    >
                      <span className="text-white/85 transition-colors group-hover:text-brand">{pick(major.name)}</span>
                      <span className="font-display text-[10px] font-bold text-muted">
                        {coursesByMajor(major.slug).length} {t("tracksLabel")}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-ink py-14 md:py-20">
        <div className="shell">
          <SectionHead
            eyebrow={t("aboutApproachTitle")}
            title={t("aboutApproach")}
            description={t("projectsHighlight")}
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {approach.map((step) => (
              <div key={step.code} className="group border border-line bg-panel p-5 transition-colors hover:border-brand/70">
                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl font-bold text-brand/40 transition-colors group-hover:text-brand">
                    {step.code}
                  </span>
                  <Icon name="arrowUpRight" size={15} className="text-muted/60" />
                </div>
                <h3 className="mt-4 font-display text-sm font-bold text-white">{pick(step.title)}</h3>
                <p className="mt-2 text-[11.5px] leading-relaxed text-muted">{pick(step.text)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-ink py-14 md:py-20">
        <div className="shell grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <SectionHead eyebrow={t("aboutValuesTitle")} title={t("aboutValues")} />
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {values.map((value) => (
                <div key={value.title.en} className="border border-line bg-panel p-4">
                  <span className="flex h-9 w-9 items-center justify-center border border-line bg-ink text-brand">
                    <Icon name={value.icon} size={16} />
                  </span>
                  <h3 className="mt-3 font-display text-[13px] font-bold text-white">{pick(value.title)}</h3>
                  <p className="mt-1.5 text-[11px] leading-relaxed text-muted">{pick(value.text)}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="border border-line bg-panel p-5 md:p-6">
            <div className="flex items-center gap-2">
              <Icon name="info" size={15} className="text-brand" />
              <h3 className="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-brand">
                {t("honestyTitle")}
              </h3>
            </div>
            <p className="mt-3 text-[13px] leading-relaxed text-muted">
              {pick({
                en: "We prefer to be explicit about what an educational platform can and cannot do.",
                ar: "نفضل أن نكون واضحين بشأن ما يمكن أن تقدمه منصة تعليمية وما لا يمكنها تقديمه.",
              })}
            </p>
            <div className="mt-4 divide-y divide-line border-y border-line">
              {promises.map((item) => (
                <div key={item.title.en} className="flex items-start gap-3 py-3">
                  <Icon name="close" size={13} className="mt-0.5 shrink-0 text-brand" />
                  <div>
                    <p className="text-[12px] font-semibold text-white">{pick(item.title)}</p>
                    <p className="mt-0.5 text-[11px] leading-relaxed text-muted">{pick(item.text)}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <Link to="/privacy" className="btn btn-ghost btn-sm flex-1">
                {t("privacy")}
              </Link>
              <Link to="/terms" className="btn btn-ghost btn-sm flex-1">
                {t("terms")}
              </Link>
            </div>
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
