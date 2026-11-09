import { useEffect, useState, type ReactNode } from "react";
import { cn } from "../utils/cn";
import { Link, useLang, useRouter } from "../lib/app-context";
import { majors } from "../data/courses";
import { navLinks, siteConfig } from "../data/site";
import { Icon, type IconName } from "./Icons";
import { Logo, LogoMark } from "./Brand";

/* ---------------------------------------------------------------- */
export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { lang, setLang, t } = useLang();
  return (
    <div
      className={cn("inline-flex items-stretch border border-line bg-ink/95", compact ? "h-9" : "h-10")}
      role="group"
      aria-label={t("language")}
    >
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={cn(
          "px-2.5 font-display text-[11px] font-bold tracking-[0.08em] transition-colors",
          lang === "en" ? "bg-brand text-white" : "text-muted hover:text-white"
        )}
      >
        EN
      </button>
      <span className="w-px bg-line" aria-hidden />
      <button
        type="button"
        onClick={() => setLang("ar")}
        aria-pressed={lang === "ar"}
        className={cn(
          "px-2.5 font-arabic text-[11px] font-bold transition-colors",
          lang === "ar" ? "bg-brand text-white" : "text-muted hover:text-white"
        )}
      >
        ع
      </button>
    </div>
  );
}

export function FloatingLanguage() {
  return (
    <div className="fixed end-4 top-4 z-50 md:end-6 md:top-6">
      <LanguageSwitcher />
    </div>
  );
}

/* ---------------------------------------------------------------- */
function NavItem({
  label,
  active,
  onClick,
}: {
  label: string;
  active?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "relative py-2 text-[13px] font-semibold transition-colors",
        active ? "text-white" : "text-muted hover:text-white"
      )}
    >
      {label}
      <span
        className={cn(
          "absolute inset-x-0 -bottom-px h-[2px] bg-brand transition-opacity",
          active ? "opacity-100" : "opacity-0"
        )}
        aria-hidden
      />
    </button>
  );
}

export function Navbar() {
  const { t } = useLang();
  const { path, navigate } = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [path]);

  const go = (to: string, section?: string) => {
    setOpen(false);
    navigate(to, section);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line bg-ink/95 backdrop-blur-md">
      <div className="shell flex h-[68px] items-center justify-between gap-4">
        <Link to="/" ariaLabel="FASLA.DEV home" className="shrink-0">
          <Logo size={34} tagline={false} />
        </Link>

        <nav className="hidden items-center gap-5 lg:flex xl:gap-7" aria-label="Main">
          {navLinks.map((link) => (
            <NavItem
              key={link.key}
              label={t(link.key)}
              active={
                link.path === "/"
                  ? path === "/"
                  : link.path === "/about"
                    ? path === "/about"
                    : path === "/courses" || path.startsWith("/course/")
              }
              onClick={() => go(link.path, link.section)}
            />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <LanguageSwitcher compact />
          </div>
          <button type="button" onClick={() => go("/booking")} className="btn btn-primary btn-sm hidden md:inline-flex">
            {t("bookSeat")}
            <Icon name="arrowRight" size={15} className="flip-rtl" />
          </button>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={open ? t("close") : t("openMenu")}
            className="inline-flex h-10 w-10 items-center justify-center border border-line text-white transition-colors hover:border-brand lg:hidden"
          >
            <Icon name={open ? "close" : "menu"} size={18} />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-ink lg:hidden">
          <div className="shell flex flex-col py-3">
            {navLinks.map((link) => (
              <button
                key={link.key}
                type="button"
                onClick={() => go(link.path, link.section)}
                className="flex items-center justify-between border-b border-line/70 py-3.5 text-start text-sm font-semibold text-white"
              >
                {t(link.key)}
                <Icon name="arrowRight" size={15} className="flip-rtl text-brand" />
              </button>
            ))}
            <div className="mt-4 flex items-center justify-between gap-3">
              <LanguageSwitcher />
              <button type="button" onClick={() => go("/booking")} className="btn btn-primary btn-sm flex-1">
                {t("bookSeat")}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------------------------------------------------------------- */
function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h3 className="font-display text-[10px] font-bold uppercase tracking-[0.22em] text-brand">{title}</h3>
      <div className="mt-4 flex flex-col gap-2.5">{children}</div>
    </div>
  );
}

function FooterLink({ to, section, children }: { to: string; section?: string; children: ReactNode }) {
  return (
    <Link to={to} section={section} className="w-fit text-[13px] text-muted transition-colors hover:text-white">
      {children}
    </Link>
  );
}

const socialIcons: Record<string, IconName> = {
  Facebook: "facebook",
  Instagram: "instagram",
  YouTube: "youtube",
  WhatsApp: "whatsapp",
  Telegram: "telegram",
  TikTok: "tiktok",
  GitHub: "github",
  LinkedIn: "linkedin",
};

export function Footer() {
  const { t, pick } = useLang();

  return (
    <footer className="border-t border-line bg-ink">
      <div className="shell pt-14 md:pt-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Link to="/" ariaLabel="FASLA.DEV home">
              <Logo size={42} />
            </Link>
            <p className="mt-5 max-w-sm text-[13px] leading-relaxed text-muted">{t("footerAbout")}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(t("whatsappMessage"))}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary btn-sm"
              >
                <Icon name="whatsapp" size={15} />
                {t("whatsappChat")}
              </a>
              <a
                href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(t("emailSubject"))}&body=${encodeURIComponent(t("emailBody"))}`}
                className="btn btn-outline btn-sm"
              >
                <Icon name="mail" size={15} />
                {t("emailLabel")}
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <FooterColumn title={t("quickLinks")}>
              <FooterLink to="/">{t("navHome")}</FooterLink>
              <FooterLink to="/about">{t("navAbout")}</FooterLink>
              <FooterLink to="/courses">{t("navTracks")}</FooterLink>
              <FooterLink to="/" section="projects">
                {t("navProjects")}
              </FooterLink>
              <FooterLink to="/" section="reviews">
                {t("navReviews")}
              </FooterLink>
              <FooterLink to="/booking">{t("navBook")}</FooterLink>
            </FooterColumn>
          </div>

          <div className="lg:col-span-3">
            <FooterColumn title={t("learningTracks")}>
              {majors.map((major) => (
                <FooterLink key={major.slug} to={`/courses?major=${major.slug}`}>
                  {pick(major.name)}
                </FooterLink>
              ))}
            </FooterColumn>
          </div>

          <div className="lg:col-span-3">
            <FooterColumn title={t("contactInfo")}>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 break-all text-[13px] text-muted transition-colors hover:text-white"
              >
                <Icon name="mail" size={14} className="shrink-0 text-brand" />
                {siteConfig.email}
              </a>
              <a
                href={`tel:${siteConfig.phoneIntl}`}
                className="inline-flex items-center gap-2 text-[13px] text-muted transition-colors hover:text-white"
              >
                <Icon name="phone" size={14} className="shrink-0 text-brand" />
                {t("phoneLabel")}: <span dir="ltr">{siteConfig.phoneDisplay}</span>
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-[13px] text-muted transition-colors hover:text-white"
              >
                <Icon name="whatsapp" size={14} className="shrink-0 text-brand" />
                {t("whatsappLabel")}: <span dir="ltr">{siteConfig.whatsappDisplay}</span>
              </a>
              <span className="inline-flex items-center gap-2 text-[13px] text-muted">
                <Icon name="pin" size={14} className="shrink-0 text-brand" />
                {t("location")}: {pick(siteConfig.location)}
              </span>
            </FooterColumn>

            <div className="mt-6">
              <h3 className="font-display text-[10px] font-bold uppercase tracking-[0.22em] text-brand">
                {t("social")}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {siteConfig.socials.map((social) => {
                  const icon = socialIcons[social.label] ?? "globe";
                  const style = "inline-flex h-9 w-9 items-center justify-center border border-line text-muted";
                  return social.href ? (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                      className={cn(style, "transition-colors hover:border-brand hover:text-brand")}
                    >
                      <Icon name={icon} size={15} />
                    </a>
                  ) : (
                    <span
                      key={social.label}
                      aria-label={`${social.label} — ${t("socialNote")}`}
                      title={t("socialNote")}
                      className={cn(style, "cursor-default opacity-50")}
                    >
                      <Icon name={icon} size={15} />
                    </span>
                  );
                })}
              </div>
              <p className="mt-2.5 text-[10px] leading-relaxed text-muted/70">{t("socialNote")}</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line py-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <FooterLink to="/privacy">{t("privacy")}</FooterLink>
            <FooterLink to="/terms">{t("terms")}</FooterLink>
            <FooterLink to="/refund">{t("refund")}</FooterLink>
          </div>
          <p className="text-[11px] text-muted">{t("rights")}</p>
        </div>
      </div>

      <div className="overflow-hidden border-t border-line/60" aria-hidden>
        <div className="shell flex items-end justify-between gap-4 pt-4">
          <span className="select-none font-display text-[13vw] font-bold leading-[0.8] tracking-[-0.05em] text-white/[0.035] md:text-[10vw]">
            FASLA.DEV
          </span>
          <span className="mb-2 hidden shrink-0 items-center gap-2 md:flex">
            <LogoMark size={26} />
            <span className="font-display text-[9px] uppercase tracking-[0.24em] text-muted/60">
              {t("builtNote")}
            </span>
          </span>
        </div>
      </div>
    </footer>
  );
}

/* ---------------------------------------------------------------- */
export function FloatingWhatsApp() {
  const { t } = useLang();
  return (
    <a
      href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(t("whatsappMessage"))}`}
      target="_blank"
      rel="noreferrer"
      aria-label={t("whatsappChat")}
      title={t("whatsappChat")}
      className="fixed bottom-5 start-5 z-40 inline-flex h-12 w-12 items-center justify-center border border-brand bg-ink text-brand shadow-[0_0_24px_rgba(22,119,255,0.25)] transition-colors hover:bg-brand hover:text-white"
    >
      <Icon name="whatsapp" size={21} />
    </a>
  );
}

/* ---------------------------------------------------------------- */
export function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-5 end-5 z-40 inline-flex h-11 w-11 items-center justify-center border border-brand bg-ink text-brand transition-colors hover:bg-brand hover:text-white"
    >
      <Icon name="arrowUpRight" size={17} className="-rotate-45" />
    </button>
  );
}

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? Math.min(100, (window.scrollY / height) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-[2px] bg-transparent" aria-hidden>
      <div className="h-full bg-brand transition-[width] duration-150" style={{ width: `${progress}%` }} />
    </div>
  );
}

export function SiteLayout({ children, withNav = true }: { children: ReactNode; withNav?: boolean }) {
  const { t } = useLang();
  return (
    <div className="flex min-h-screen flex-col bg-ink">
      <a
        href="#main-content"
        onClick={(event) => {
          event.preventDefault();
          const main = document.getElementById("main-content");
          main?.focus();
          main?.scrollIntoView({ behavior: "smooth", block: "start" });
        }}
        className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[70] focus:bg-brand focus:px-4 focus:py-3 focus:text-sm focus:font-bold focus:text-white"
      >
        {t("skipToContent")}
      </a>
      <ScrollProgress />
      {withNav && <Navbar />}
      <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
        {children}
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ScrollTop />
    </div>
  );
}
