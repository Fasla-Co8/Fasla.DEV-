import { useLang, Link } from "../lib/app-context";
import {
  courses,
  coursesByMajor,
  formatEGP,
  getCourse,
  getMajor,
  priceRangeLabel,
  type Bi,
  type Course,
} from "../data/courses";
import { siteConfig } from "../data/site";
import { Badge, CtaBand, FaqAccordion, PageHero, PriceRange, SectionHead } from "../components/ui";
import { Icon, TechGlyph, type IconName } from "../components/Icons";

const weeklyStructure: { icon: "code" | "calendar" | "users"; title: Bi; text: Bi }[] = [
  {
    icon: "code",
    title: { en: "Live Learning Session", ar: "جلسة تعلم مباشرة" },
    text: {
      en: "A focused session introducing the week's concepts with live, practical examples.",
      ar: "جلسة مركزة تقدم مفاهيم الأسبوع بأمثلة عملية مباشرة.",
    },
  },
  {
    icon: "calendar",
    title: { en: "Practical Projects", ar: "مشاريع عملية" },
    text: {
      en: "Three projects or assignments that apply the week's concepts to realistic tasks.",
      ar: "ثلاثة مشاريع أو واجبات تطبق مفاهيم الأسبوع على مهام واقعية.",
    },
  },
  {
    icon: "users",
    title: { en: "Review & Feedback", ar: "مراجعة وملاحظات" },
    text: {
      en: "Structured review of your work with corrections, improvements and clear next steps.",
      ar: "مراجعة منظمة لعملك مع تصحيحات وتحسينات وخطوات واضحة تالية.",
    },
  },
];

function CourseNotFound() {
  const { t } = useLang();
  return (
    <PageHero
      eyebrow="FASLA.DEV"
      title={t("notFoundTitle")}
      description={t("notFoundText")}
      breadcrumb={[{ label: t("breadcrumbHome"), to: "/" }, { label: t("breadcrumbCourses"), to: "/courses" }]}
    >
      <Link to="/courses" className="btn btn-primary mt-6">
        {t("backToCourses")}
      </Link>
    </PageHero>
  );
}

function buildFaqs(course: Course, t: (key: string) => string, pick: (value: Bi) => string) {
  const range = priceRangeLabel(course);
  return [
    {
      q: t("faqLearnQ"),
      a: course.technologies.join(" · "),
    },
    {
      q: t("faqBuildQ"),
      a: course.projects.map((project) => pick(project)).join(" · "),
    },
    {
      q: t("faqPriceQ"),
      a: t("faqPriceA").replace("{range}", range),
    },
    {
      q: t("faqExpQ"),
      a: t("faqExpA").replace("{level}", pick(course.level)),
    },
    { q: t("faqWeeklyQ"), a: t("faqWeeklyA") },
    { q: t("faqBookQ"), a: t("faqBookA") },
  ];
}

export default function CourseDetails({ slug }: { slug: string }) {
  const { t, pick } = useLang();
  const course = getCourse(slug);

  if (!course) return <CourseNotFound />;

  const major = getMajor(course.major);
  const modules: { title: string; items: { text: string; number: number }[] }[] = [];
  for (let index = 0; index < course.technologies.length; index += 4) {
    const chunk = course.technologies.slice(index, index + 4);
    modules.push({
      title: `${t("module")} ${String(modules.length + 1).padStart(2, "0")}`,
      items: chunk.map((item, itemIndex) => ({ text: item, number: index + itemIndex + 1 })),
    });
  }

  const sameMajor = coursesByMajor(course.major).filter((item) => item.slug !== course.slug);
  const others = courses.filter((item) => item.slug !== course.slug && item.major !== course.major);
  const otherTracks = [...sameMajor, ...others].slice(0, 4);
  const faqs = buildFaqs(course, t, pick);
  const whatsappText = encodeURIComponent(
    `${t("whatsappMessage")}\n${pick(course.name)} — ${priceRangeLabel(course)}`
  );

  return (
    <>
      <PageHero
        eyebrow={`${t("specialization")} ${major.index} · ${pick(major.name)}`}
        title={pick(course.name)}
        description={pick(course.description)}
        breadcrumb={[
          { label: t("breadcrumbHome"), to: "/" },
          { label: t("breadcrumbCourses"), to: "/courses" },
          { label: pick(major.name), to: `/courses?major=${major.slug}` },
          { label: pick(course.name) },
        ]}
      >
        <div className="mt-7 grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          <div>
            <p className="max-w-2xl text-[13px] leading-relaxed text-muted">{pick(major.concept)}</p>
            <div className="mt-5 grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-4">
              {[
                { icon: "layers" as IconName, label: t("level"), value: pick(course.level) },
                { icon: "grid" as IconName, label: t("skillsCovered"), value: `${course.technologies.length} ${t("topics")}` },
                { icon: "briefcase" as IconName, label: t("projects"), value: `${course.projects.length} ${t("projectsCount")}` },
                { icon: "calendar" as IconName, label: t("weeklyProjects"), value: `${course.weeklyProjects} ${t("perWeek")}` },
              ].map((item) => (
                <div key={item.label} className="bg-ink p-3.5">
                  <span className="flex items-center gap-1.5 text-[9px] uppercase tracking-[0.14em] text-muted">
                    <Icon name={item.icon} size={11} className="text-brand" />
                    {item.label}
                  </span>
                  <span className="mt-1.5 block text-[12px] font-semibold text-white">{item.value}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {course.technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1.5 border border-line bg-panel px-2 py-1 text-[10px] text-white/80"
                >
                  <TechGlyph tech={tech} size={11} />
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="relative border border-brand/60 bg-panel p-5">
            <span className="absolute inset-x-0 top-0 h-[2px] bg-brand" aria-hidden />
            <div className="flex items-center justify-between gap-2">
              <Badge variant="solid">{pick(major.name)}</Badge>
              <span className="font-display text-[10px] font-bold uppercase tracking-[0.16em] text-muted">
                {t("trackLabel")} {course.index}
              </span>
            </div>
            <div className="mt-4">
              <PriceRange course={course} size="lg" />
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-line pt-3 text-[11px]">
              <span className="text-muted">{t("duration")}</span>
              <span className="text-end font-semibold text-white">{t("durationTbd")}</span>
            </div>
            <div className="mt-2 flex items-center justify-between text-[11px]">
              <span className="text-muted">{t("weeklyProjects")}</span>
              <span className="font-semibold text-white">
                {course.weeklyProjects} {t("projectsCount")} {t("perWeek")}
              </span>
            </div>
            <Link to={`/booking?track=${course.slug}`} className="btn btn-primary mt-4 w-full">
              {t("bookSeat")}
              <Icon name="arrowRight" size={15} className="flip-rtl" />
            </Link>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=${whatsappText}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline mt-2 w-full"
            >
              <Icon name="whatsapp" size={15} />
              {t("askAboutTrack")}
            </a>
            <p className="mt-2.5 text-center text-[10px] leading-relaxed text-muted">{t("priceRangeNote")}</p>
          </div>
        </div>
      </PageHero>

      <div className="border-b border-line bg-ink py-12 md:py-16">
        <div className="shell grid gap-10 lg:grid-cols-[1fr_320px] lg:gap-12">
          <div className="min-w-0 space-y-12">
            {/* Overview */}
            <section>
              <SectionHead eyebrow="01" title={t("overview")} />
              <p className="mt-5 text-[13px] leading-relaxed text-muted md:text-sm">{pick(course.description)}</p>
              <p className="mt-3 text-[13px] leading-relaxed text-muted md:text-sm">{pick(major.concept)}</p>
              <div className="mt-6 border border-line bg-panel p-5">
                <h3 className="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-brand">
                  {t("objectives")}
                </h3>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {major.objectives.map((objective) => (
                    <li key={objective.en} className="flex items-start gap-2.5 text-[12px] leading-relaxed text-white/80">
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center border border-brand/50 text-brand">
                        <Icon name="check" size={10} />
                      </span>
                      {pick(objective)}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Curriculum / skills roadmap */}
            <section>
              <SectionHead
                eyebrow="02"
                title={t("curriculum")}
                description={`${course.technologies.length} ${t("topics")} · ${pick(course.level)}`}
              />
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {modules.map((module, moduleIndex) => (
                  <div key={module.title} className="border border-line bg-panel">
                    <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
                      <span className="font-display text-[10px] font-bold uppercase tracking-[0.18em] text-brand">
                        {module.title}
                      </span>
                      <span className="font-display text-[10px] text-muted">
                        {String(moduleIndex + 1).padStart(2, "0")} / {String(modules.length).padStart(2, "0")}
                      </span>
                    </div>
                    <ul className="divide-y divide-line/70">
                      {module.items.map((item) => (
                        <li key={item.number} className="flex items-start gap-2.5 px-4 py-2.5">
                          <span className="mt-px font-display text-[10px] font-bold text-brand">
                            {String(item.number).padStart(2, "0")}
                          </span>
                          <span className="text-[12px] leading-relaxed text-white/80">{item.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Weekly structure */}
            <section>
              <SectionHead eyebrow="03" title={t("weeklyProjects")} description={t("projectsHighlight")} />
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {weeklyStructure.map((item, index) => (
                  <div key={item.title.en} className="border border-line bg-panel p-4">
                    <div className="flex items-center justify-between">
                      <span className="flex h-9 w-9 items-center justify-center border border-line bg-ink text-brand">
                        <Icon name={item.icon} size={16} />
                      </span>
                      <span className="font-display text-[10px] font-bold text-muted/60">0{index + 1}</span>
                    </div>
                    <h3 className="mt-3 font-display text-[13px] font-bold text-white">{pick(item.title)}</h3>
                    <p className="mt-1.5 text-[11px] leading-relaxed text-muted">{pick(item.text)}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Projects */}
            <section>
              <SectionHead eyebrow="04" title={t("projects")} description={t("projectsDisclaimer")} />
              <div className="mt-6 grid gap-2 sm:grid-cols-2">
                {course.projects.map((project, index) => (
                  <div key={project.en} className="flex items-start gap-3 border border-line bg-panel p-4">
                    <span className="font-display text-lg font-bold leading-none text-brand/70">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="text-[12px] font-semibold text-white">{pick(project)}</p>
                      <p className="mt-1 text-[10px] text-muted">
                        {pick(major.name)} · {pick(course.name)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Skills after completion */}
            <section>
              <SectionHead eyebrow="05" title={t("skills")} />
              <div className="mt-6 grid gap-2 sm:grid-cols-2">
                {course.technologies.map((skill) => (
                  <div key={skill} className="flex items-center gap-2.5 border border-line bg-panel px-4 py-3">
                    <Icon name="check" size={13} className="shrink-0 text-brand" />
                    <span className="text-[12px] text-white/85">{skill}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section>
              <SectionHead eyebrow="06" title={t("faqs")} />
              <div className="mt-6">
                <FaqAccordion items={faqs} />
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
            <div className="border border-line bg-panel p-5">
              <span className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-brand">
                {t("summaryTrack")}
              </span>
              <h3 className="mt-2 font-display text-lg font-bold text-white">{pick(course.name)}</h3>
              <p className="mt-1 text-[11px] text-muted">{pick(major.name)}</p>
              <div className="mt-4">
                <PriceRange course={course} />
              </div>
              <Link to={`/booking?track=${course.slug}`} className="btn btn-primary mt-4 w-full">
                {t("bookSeat")}
              </Link>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=${whatsappText}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline mt-2 w-full"
              >
                <Icon name="whatsapp" size={15} />
                {t("whatsappChat")}
              </a>
              <Link to={`/courses?major=${major.slug}`} className="btn btn-ghost mt-2 w-full">
                {t("backToCourses")}
              </Link>
              <p className="mt-3 text-center text-[10px] text-muted">{t("seatsNote")}</p>
            </div>

            <div className="border border-line bg-panel p-5">
              <h3 className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-brand">
                {t("otherTracks")}
              </h3>
              <div className="mt-3 divide-y divide-line">
                {otherTracks.map((item) => (
                  <Link
                    key={item.slug}
                    to={`/course/${item.slug}`}
                    className="group flex items-center justify-between gap-3 py-2.5"
                  >
                    <span className="flex min-w-0 items-center gap-2">
                      <span className="font-display text-[10px] text-brand">{item.index}</span>
                      <span className="truncate text-[12px] font-medium text-white/85 transition-colors group-hover:text-brand">
                        {pick(item.name)}
                      </span>
                    </span>
                    <span className="shrink-0 font-display text-[10px] font-bold text-white">
                      {formatEGP(item.priceMin)}–{formatEGP(item.priceMax)}
                      <span className="ms-1 text-[8px] font-normal text-muted">EGP</span>
                    </span>
                  </Link>
                ))}
              </div>
              <Link to="/courses" className="mt-2 inline-flex items-center gap-1.5 text-[11px] font-bold text-brand">
                {t("viewAllCourses")}
                <Icon name="arrowRight" size={12} className="flip-rtl" />
              </Link>
            </div>

            <div className="border border-line bg-panel p-5">
              <div className="flex items-center gap-2">
                <Icon name="shield" size={14} className="text-brand" />
                <h3 className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-brand">FASLA.DEV</h3>
              </div>
              <p className="mt-2 text-[11px] leading-relaxed text-muted">{t("priceRangeNote")}</p>
              <p className="mt-2 text-[11px] leading-relaxed text-muted">{t("formNote")}</p>
            </div>
          </aside>
        </div>
      </div>

      <CtaBand
        title={t("aboutCtaTitle")}
        text={t("coursesCtaText")}
        primaryLabel={t("bookSeat")}
        primaryTo={`/booking?track=${course.slug}`}
        secondaryLabel={t("viewAllCourses")}
        secondaryTo="/courses"
      />
    </>
  );
}
