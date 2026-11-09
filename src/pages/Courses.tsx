import { useEffect, useState } from "react";
import { useLang, useRouter, Link } from "../lib/app-context";
import { courses, coursesByMajor, majors } from "../data/courses";
import { Badge, CourseCard, CtaBand, Eyebrow, PageHero } from "../components/ui";
import { Icon, type IconName } from "../components/Icons";
import { cn } from "../utils/cn";

export default function Courses() {
  const { t, pick } = useLang();
  const { query } = useRouter();
  const majorParam = query.get("major") ?? "";
  const [filter, setFilter] = useState<string>(
    majorParam && majors.some((major) => major.slug === majorParam) ? majorParam : "all"
  );

  useEffect(() => {
    if (majorParam && majors.some((major) => major.slug === majorParam)) {
      setFilter(majorParam);
    }
  }, [majorParam]);

  const visibleMajors = filter === "all" ? majors : majors.filter((major) => major.slug === filter);

  return (
    <>
      <PageHero
        eyebrow={t("majorsEyebrow")}
        title={t("coursesHeadline")}
        description={t("coursesSubtitle")}
        breadcrumb={[{ label: t("breadcrumbHome"), to: "/" }, { label: t("breadcrumbCourses") }]}
      >
        <div className="mt-7 flex flex-wrap items-center gap-3">
          <Badge variant="solid">
            {majors.length} {t("majorsEyebrow")}
          </Badge>
          <Badge variant="outline">
            {courses.length} {t("tracksLabel")}
          </Badge>
          <Badge variant="muted">
            3 {t("projectsCount")} {t("perWeek")}
          </Badge>
          <span className="text-[11px] text-muted">{t("coursesNote")}</span>
        </div>
      </PageHero>

      <section className="border-b border-line bg-ink py-10 md:py-12">
        <div className="shell">
          <div className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 py-1">
            <button
              type="button"
              onClick={() => setFilter("all")}
              aria-pressed={filter === "all"}
              className={cn(
                "inline-flex shrink-0 items-center gap-2 border px-3.5 py-2.5 text-[12px] font-bold transition-colors",
                filter === "all"
                  ? "border-brand bg-brand text-white"
                  : "border-line bg-panel text-muted hover:border-brand/60 hover:text-white"
              )}
            >
              {t("filterAll")}
              <span className={cn("font-display text-[10px]", filter === "all" ? "text-white/80" : "text-muted/70")}>
                {courses.length}
              </span>
            </button>
            {majors.map((major) => {
              const count = coursesByMajor(major.slug).length;
              const active = filter === major.slug;
              return (
                <button
                  key={major.slug}
                  type="button"
                  onClick={() => setFilter(major.slug)}
                  aria-pressed={active}
                  className={cn(
                    "inline-flex shrink-0 items-center gap-2 border px-3.5 py-2.5 text-[12px] font-bold transition-colors",
                    active
                      ? "border-brand bg-brand text-white"
                      : "border-line bg-panel text-muted hover:border-brand/60 hover:text-white"
                  )}
                >
                  <Icon name={major.icon as IconName} size={13} />
                  {pick(major.name)}
                  <span className={cn("font-display text-[10px]", active ? "text-white/80" : "text-muted/70")}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {visibleMajors.map((major) => {
        const tracks = coursesByMajor(major.slug);
        return (
          <section key={major.slug} className="border-b border-line bg-ink py-12 md:py-16">
            <div className="shell">
              <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                <div className="max-w-2xl">
                  <Eyebrow>
                    {t("specialization")} {major.index}
                  </Eyebrow>
                  <h2 className="display mt-3 text-2xl text-white md:text-4xl">{pick(major.name)}</h2>
                  <p className="mt-3 text-[13px] leading-relaxed text-muted">{pick(major.concept)}</p>
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  <span className="flex h-11 w-11 items-center justify-center border border-line bg-panel text-brand">
                    <Icon name={major.icon as IconName} size={20} />
                  </span>
                  <div>
                    <span className="block font-display text-lg font-bold leading-none text-white">
                      {tracks.length}
                    </span>
                    <span className="mt-1 block text-[9px] uppercase tracking-[0.16em] text-muted">
                      {t("tracksLabel")}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {tracks.map((course) => (
                  <CourseCard key={course.slug} course={course} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="border-b border-line bg-ink py-12 md:py-16">
        <div className="shell flex flex-col items-start justify-between gap-5 border border-line bg-panel p-6 md:flex-row md:items-center md:p-8">
          <div className="max-w-xl">
            <Eyebrow>{t("whatsappLabel")}</Eyebrow>
            <h2 className="display mt-3 text-xl text-white md:text-2xl">{t("coursesCtaTitle")}</h2>
            <p className="mt-2 text-[12px] leading-relaxed text-muted">{t("coursesCtaText")}</p>
          </div>
          <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
            <a
              href={`https://wa.me/201201847164?text=${encodeURIComponent(t("whatsappMessage"))}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              <Icon name="whatsapp" size={16} />
              {t("whatsappChat")}
            </a>
            <Link to="/booking" className="btn btn-outline">
              {t("bookSeat")}
            </Link>
          </div>
        </div>
      </section>

      <CtaBand
        title={t("aboutCtaTitle")}
        text={t("aboutCtaText")}
        primaryLabel={t("bookSeat")}
        primaryTo="/booking"
        secondaryLabel={t("navAbout")}
        secondaryTo="/about"
      />
    </>
  );
}
