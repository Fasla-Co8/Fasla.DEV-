import { useLang, Link } from "../lib/app-context";
import { legalPages, siteConfig, type LegalKey } from "../data/site";
import { PageHero } from "../components/ui";
import { Icon } from "../components/Icons";

const legalNav: { key: LegalKey; labelKey: string }[] = [
  { key: "privacy", labelKey: "privacy" },
  { key: "terms", labelKey: "terms" },
  { key: "refund", labelKey: "refund" },
];

export default function Legal({ page }: { page: LegalKey }) {
  const { t, pick } = useLang();
  const content = legalPages[page];

  return (
    <>
      <PageHero
        eyebrow={t("legal")}
        title={pick(content.title)}
        description={pick(content.intro)}
        breadcrumb={[{ label: t("breadcrumbHome"), to: "/" }, { label: pick(content.title) }]}
      >
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 border border-line bg-panel px-3 py-1.5 text-[10px] text-muted">
            <Icon name="clock" size={12} className="text-brand" />
            {pick(content.updated)}
          </span>
          <span className="inline-flex items-center gap-2 border border-line bg-panel px-3 py-1.5 text-[10px] text-muted">
            <Icon name="shield" size={12} className="text-brand" />
            FASLA.DEV
          </span>
        </div>
      </PageHero>

      <div className="border-b border-line bg-ink py-12 md:py-16">
        <div className="shell grid gap-8 lg:grid-cols-[1fr_300px] lg:gap-12">
          <article className="min-w-0">
            <div className="space-y-8">
              {content.sections.map((section, index) => (
                <section key={index} className="border border-line bg-panel">
                  <div className="flex items-center gap-3 border-b border-line px-5 py-3">
                    <span className="font-display text-[10px] font-bold text-brand">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h2 className="font-display text-[14px] font-bold text-white">{pick(section.heading)}</h2>
                  </div>
                  <div className="space-y-3 p-5">
                    {section.body.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-[12.5px] leading-relaxed text-muted">
                        {pick(paragraph)}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-6 flex items-start gap-3 border border-line bg-panel p-4">
              <Icon name="info" size={15} className="mt-0.5 shrink-0 text-brand" />
              <p className="text-[11px] leading-relaxed text-muted">
                {pick({
                  en: "This document is provided for the FASLA.DEV website and should be reviewed by a qualified legal advisor before publication.",
                  ar: "هذه الوثيقة مقدمة لموقع FASLA.DEV ويجب مراجعتها من مستشار قانوني مؤهل قبل النشر.",
                })}
              </p>
            </div>
          </article>

          <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
            <div className="border border-line bg-panel p-4">
              <h2 className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-brand">
                {t("legal")}
              </h2>
              <div className="mt-3 flex flex-col divide-y divide-line">
                {legalNav.map((item) => (
                  <Link
                    key={item.key}
                    to={`/${item.key}`}
                    className={`flex items-center justify-between py-2.5 text-[12px] transition-colors ${
                      item.key === page ? "font-bold text-brand" : "text-muted hover:text-white"
                    }`}
                  >
                    {t(item.labelKey)}
                    <Icon name="arrowRight" size={12} className="flip-rtl" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="border border-line bg-panel p-4">
              <h2 className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-brand">
                {t("contactInfo")}
              </h2>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-3 flex items-center gap-2 break-all text-[12px] text-white hover:text-brand"
              >
                <Icon name="mail" size={14} className="shrink-0 text-brand" />
                {siteConfig.email}
              </a>
              <p className="mt-2 flex items-center gap-2 text-[12px] text-muted">
                <Icon name="pin" size={14} className="shrink-0 text-brand" />
                {pick(siteConfig.location)}
              </p>
              <p className="mt-3 text-[11px] leading-relaxed text-muted">{t("legalContact")}</p>
            </div>

            <Link to="/" className="btn btn-outline w-full">
              {t("legalBack")}
            </Link>
          </aside>
        </div>
      </div>

      <div className="bg-ink py-8">
        <div className="shell flex flex-wrap items-center justify-between gap-3">
          <p className="text-[10px] text-muted">{t("rights")}</p>
          <div className="flex flex-wrap gap-4">
            {legalNav.map((item) => (
              <Link
                key={item.key}
                to={`/${item.key}`}
                className="text-[10px] text-muted transition-colors hover:text-brand"
              >
                {t(item.labelKey)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
