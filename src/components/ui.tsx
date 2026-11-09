import type { ReactNode } from "react";
import { cn } from "../utils/cn";
import { useLang, Link } from "../lib/app-context";
import {
  coursesByMajor,
  formatEGP,
  getMajor,
  type Course,
  type Major,
} from "../data/courses";
import { Icon, Stars, TechGlyph, type IconName } from "./Icons";
import { Logo } from "./Brand";

/* ---------------------------------------------------------------- */
export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn("eyebrow inline-flex items-center gap-3", className)}>
      <span className="inline-block h-2 w-2 bg-brand" aria-hidden />
      {children}
    </span>
  );
}

export function SectionHead({
  eyebrow,
  title,
  description,
  align = "start",
  className,
  titleClass,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "start" | "center";
  className?: string;
  titleClass?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" ? "items-center text-center" : "items-start text-start",
        className
      )}
    >
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className={cn("display text-balance text-3xl text-white sm:text-4xl md:text-[44px]", titleClass)}>
        {title}
      </h2>
      {description && (
        <p className={cn("max-w-2xl text-sm leading-relaxed text-muted md:text-base", align === "center" && "mx-auto")}>
          {description}
        </p>
      )}
    </div>
  );
}

export function Badge({
  children,
  variant = "outline",
  className,
}: {
  children: ReactNode;
  variant?: "outline" | "solid" | "muted";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 border px-2.5 py-1 font-display text-[10px] font-bold uppercase leading-none tracking-[0.14em]",
        variant === "solid" && "border-brand bg-brand text-white",
        variant === "outline" && "border-brand/50 bg-brand/10 text-bright",
        variant === "muted" && "border-line bg-white/[0.02] text-muted",
        className
      )}
    >
      {children}
    </span>
  );
}

export function ButtonLink({
  to,
  section,
  children,
  variant = "primary",
  className,
  onClick,
}: {
  to: string;
  section?: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Link
      to={to}
      section={section}
      onClick={onClick}
      className={cn("btn", variant === "primary" && "btn-primary", variant === "outline" && "btn-outline", variant === "ghost" && "btn-ghost", className)}
    >
      {children}
    </Link>
  );
}

/* ---------------------------------------------------------------- */
export function PriceRange({
  course,
  size = "md",
  showNote = true,
}: {
  course: Course;
  size?: "sm" | "md" | "lg";
  showNote?: boolean;
}) {
  const { t } = useLang();
  return (
    <div className="w-full">
      <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-muted">
        {t("priceRange")} · EGP
      </span>
      <div className="mt-1 flex flex-wrap items-baseline gap-x-2">
        <span
          className={cn(
            "font-display font-bold leading-none text-brand",
            size === "lg" ? "text-3xl md:text-4xl" : size === "sm" ? "text-xl" : "text-2xl md:text-[28px]"
          )}
        >
          {formatEGP(course.priceMin)} – {formatEGP(course.priceMax)}
        </span>
        <span className="font-display text-xs font-bold uppercase tracking-widest text-white/70">EGP</span>
      </div>
      {showNote && <p className="mt-2 text-[10px] leading-relaxed text-muted">{t("priceRangeNote")}</p>}
    </div>
  );
}

/* ---------------------------------------------------------------- */
export function CourseCard({ course }: { course: Course }) {
  const { t, pick } = useLang();
  const major = getMajor(course.major);
  const featured = Boolean(course.featured);

  return (
    <article
      className={cn(
        "course-card group relative flex flex-col border bg-panel transition-colors duration-300",
        featured ? "border-brand/70 hover:border-brand" : "border-line hover:border-brand/70"
      )}
    >
      <span className="absolute inset-x-0 top-0 h-[2px] bg-brand opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden />
      {featured && (
        <div className="flex items-center justify-between gap-2 border-b border-brand/40 bg-brand/[0.08] px-5 py-2.5">
          <span className="inline-flex items-center gap-2 font-display text-[10px] font-bold uppercase tracking-[0.18em] text-bright">
            <Icon name="spark" size={13} />
            {t("featuredBadge")}
          </span>
          <span className="font-display text-[10px] font-bold uppercase tracking-[0.18em] text-muted">
            {t("trackLabel")} {course.index}
          </span>
        </div>
      )}

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-line bg-ink text-brand transition-colors group-hover:border-brand/60">
              <Icon name={course.icon as IconName} size={22} />
            </span>
            <div className="min-w-0">
              <span className="font-display text-[10px] font-bold uppercase tracking-[0.18em] text-muted">
                {pick(major.name)} · {course.index}
              </span>
              <h3 className="mt-1 font-display text-lg font-bold leading-tight text-white md:text-xl">
                {pick(course.name)}
              </h3>
            </div>
          </div>
          <span className="shrink-0 border border-line bg-ink px-2 py-1 font-display text-[9px] font-bold uppercase tracking-[0.1em] text-bright">
            {pick(course.level)}
          </span>
        </div>

        <p className="mt-4 text-[13px] leading-relaxed text-muted">{pick(course.description)}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {course.technologies.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center gap-1.5 border border-line bg-ink px-2 py-1 text-[10px] font-medium text-white/80"
            >
              <TechGlyph tech={tech} size={11} />
              {tech}
            </span>
          ))}
        </div>

        <dl className="mt-5 grid grid-cols-3 gap-x-3 gap-y-3 border-t border-line pt-4">
          <div>
            <dt className="flex items-center gap-1.5 text-[9px] uppercase tracking-[0.12em] text-muted">
              <Icon name="grid" size={11} /> {t("skillsCovered")}
            </dt>
            <dd className="mt-1 text-xs font-semibold text-white">
              {course.technologies.length} {t("topics")}
            </dd>
          </div>
          <div>
            <dt className="flex items-center gap-1.5 text-[9px] uppercase tracking-[0.12em] text-muted">
              <Icon name="briefcase" size={11} /> {t("projects")}
            </dt>
            <dd className="mt-1 text-xs font-semibold text-white">
              {course.projects.length} {t("projectsCount")}
            </dd>
          </div>
          <div>
            <dt className="flex items-center gap-1.5 text-[9px] uppercase tracking-[0.12em] text-muted">
              <Icon name="calendar" size={11} /> {t("weeklyProjects")}
            </dt>
            <dd className="mt-1 text-xs font-semibold text-white">
              {course.weeklyProjects} {t("perWeek")}
            </dd>
          </div>
        </dl>

        <div className="mt-4 border border-line bg-ink/60 p-3">
          <p className="text-[11px] leading-relaxed text-muted">
            <span className="font-semibold text-white">{t("projects")}: </span>
            {course.projects.map((project) => pick(project)).join(" · ")}
          </p>
        </div>
      </div>

      <div className="border-t border-line p-5 md:p-6">
        <PriceRange course={course} showNote={false} />
        <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
          <Link to={`/booking?track=${course.slug}`} className="btn btn-primary btn-sm w-full">
            {t("bookSeat")}
          </Link>
          <Link to={`/course/${course.slug}`} className="btn btn-outline btn-sm w-full">
            {t("viewCourse")}
          </Link>
        </div>
      </div>
    </article>
  );
}

/* ---------------------------------------------------------------- */
export function MajorCard({ major }: { major: Major }) {
  const { t, pick } = useLang();
  const tracks = coursesByMajor(major.slug);
  const minPrice = Math.min(...tracks.map((track) => track.priceMin));

  return (
    <article className="group relative flex flex-col border border-line bg-panel p-5 transition-colors duration-300 hover:border-brand/70 md:p-6">
      <span className="absolute inset-x-0 top-0 h-[2px] bg-brand opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden />
      <div className="flex items-start justify-between gap-3">
        <span className="flex h-12 w-12 items-center justify-center border border-line bg-ink text-brand transition-colors group-hover:border-brand/60">
          <Icon name={major.icon as IconName} size={24} />
        </span>
        <span className="font-display text-[10px] font-bold tracking-[0.18em] text-muted/60">
          {t("specialization")} {major.index}
        </span>
      </div>

      <h3 className="mt-4 font-display text-xl font-bold leading-tight text-white">{pick(major.name)}</h3>
      <p className="mt-2 text-[12px] leading-relaxed text-muted">{pick(major.concept)}</p>

      <ul className="mt-4 divide-y divide-line border-y border-line">
        {tracks.map((track) => (
          <li key={track.slug}>
            <Link
              to={`/course/${track.slug}`}
              className="group/item flex items-center justify-between gap-3 py-2.5"
            >
              <span className="flex min-w-0 items-center gap-2">
                <span className="font-display text-[10px] font-bold text-brand">{track.index}</span>
                <span className="truncate text-[12px] font-medium text-white/85 transition-colors group-hover/item:text-brand">
                  {pick(track.name)}
                </span>
              </span>
              <span className="shrink-0 font-display text-[10px] font-bold text-white/70">
                {formatEGP(track.priceMin)}–{formatEGP(track.priceMax)}
                <span className="ms-1 text-[8px] font-normal text-muted">EGP</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-4 flex items-center justify-between gap-3">
        <span className="text-[10px] text-muted">
          {tracks.length} {t("tracksLabel")} · {t("fromPrice")}{" "}
          <span className="font-display font-bold text-brand">{formatEGP(minPrice)} EGP</span>
        </span>
        <Link
          to={`/courses?major=${major.slug}`}
          className="inline-flex items-center gap-1.5 text-[11px] font-bold text-brand transition-colors hover:text-bright"
        >
          {t("viewSpecialization")}
          <Icon name="arrowRight" size={13} className="flip-rtl" />
        </Link>
      </div>
    </article>
  );
}

/* ---------------------------------------------------------------- */
export function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, index) => (
        <details key={index} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-start">
            <span className="flex items-start gap-3">
              <span className="mt-0.5 font-display text-[11px] font-bold text-brand">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-sm font-semibold text-white md:text-[15px]">{item.q}</span>
            </span>
            <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-line text-brand transition-colors group-hover:border-brand group-open:bg-brand group-open:text-white">
              <Icon name="plus" size={14} className="group-open:hidden" />
              <Icon name="minus" size={14} className="hidden group-open:block" />
            </span>
          </summary>
          <p className="pb-5 ps-8 pe-10 text-[13px] leading-relaxed text-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}

/* ---------------------------------------------------------------- */
export function CtaBand({
  title,
  text,
  primaryLabel,
  primaryTo,
  secondaryLabel,
  secondaryTo,
}: {
  title: string;
  text: string;
  primaryLabel: string;
  primaryTo: string;
  secondaryLabel?: string;
  secondaryTo?: string;
}) {
  return (
    <section className="shell py-16 md:py-24">
      <div className="relative overflow-hidden border border-line bg-panel">
        <div className="absolute inset-0 grid-surface opacity-40" aria-hidden />
        <div className="absolute -top-24 end-0 h-64 w-64 bg-brand/10 blur-3xl" aria-hidden />
        <div className="relative flex flex-col items-start justify-between gap-8 p-6 md:flex-row md:items-center md:p-12">
          <div className="max-w-2xl">
            <Eyebrow>FASLA.DEV</Eyebrow>
            <h2 className="display mt-4 text-2xl text-white md:text-4xl">{title}</h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">{text}</p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link to={primaryTo} className="btn btn-primary">
              {primaryLabel}
              <Icon name="arrowRight" size={16} className="flip-rtl" />
            </Link>
            {secondaryLabel && secondaryTo && (
              <Link to={secondaryTo} className="btn btn-outline">
                {secondaryLabel}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  breadcrumb?: { label: string; to?: string }[];
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-ink pt-28 md:pt-32">
      <div className="absolute inset-0 grid-surface opacity-50" aria-hidden />
      <div className="absolute inset-x-0 top-0 h-64 blue-glow" aria-hidden />
      <div className="shell relative pb-12 md:pb-16">
        {breadcrumb && (
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-[11px] text-muted">
            {breadcrumb.map((item, index) => (
              <span key={index} className="inline-flex items-center gap-2">
                {item.to ? (
                  <Link to={item.to} className="transition-colors hover:text-brand">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-white">{item.label}</span>
                )}
                {index < breadcrumb.length - 1 && <span className="text-line">/</span>}
              </span>
            ))}
          </nav>
        )}
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="display mt-5 max-w-4xl text-balance text-4xl text-white md:text-6xl">{title}</h1>
        {description && (
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted md:text-base">{description}</p>
        )}
        {children}
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
export function StarsRow({ rating }: { rating: number }) {
  return <Stars rating={rating} />;
}

export function LogoFooter() {
  return <Logo size={38} />;
}
