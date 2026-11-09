import { useEffect, useMemo, useRef, useState, type FormEvent, type ReactNode } from "react";
import { useLang, useRouter, Link } from "../lib/app-context";
import {
  coursesByMajor,
  getCourse,
  getMajor,
  majors,
  priceRangeLabel,
  type Bi,
} from "../data/courses";
import {
  contactTimes,
  educationLevels,
  experienceLevels,
  governorates,
  siteConfig,
} from "../data/site";
import { Badge, PageHero } from "../components/ui";
import { Icon } from "../components/Icons";
import { cn } from "../utils/cn";

const DRAFT_KEY = "fasla:bookingDraft";

type FormState = {
  fullName: string;
  age: string;
  gender: string;
  governorate: string;
  city: string;
  phone: string;
  whatsapp: string;
  email: string;
  education: string;
  experience: string;
  track: string;
  whyProgram: string;
  goals: string;
  contactTime: string;
  notes: string;
};

const emptyForm: FormState = {
  fullName: "",
  age: "",
  gender: "",
  governorate: "",
  city: "",
  phone: "",
  whatsapp: "",
  email: "",
  education: "",
  experience: "",
  track: "",
  whyProgram: "",
  goals: "",
  contactTime: "",
  notes: "",
};

const nextSteps: { title: Bi; text: Bi }[] = [
  {
    title: { en: "Submit your details", ar: "أرسل بياناتك" },
    text: {
      en: "Complete the form and your registration opens directly in WhatsApp.",
      ar: "أكمل النموذج وسيتم فتح تسجيلك مباشرة في واتساب.",
    },
  },
  {
    title: { en: "Confirm with the team", ar: "أكد مع الفريق" },
    text: {
      en: "The FASLA.DEV team confirms your seat, exact price and schedule on WhatsApp.",
      ar: "يؤكد فريق FASLA.DEV مقعدك والسعر النهائي والجدول عبر واتساب.",
    },
  },
  {
    title: { en: "Start building", ar: "ابدأ البناء" },
    text: {
      en: "Join your track and begin with the first practical week.",
      ar: "انضم إلى مسارك وابدأ بالأسبوع العملي الأول.",
    },
  },
];

function Field({
  label,
  htmlFor,
  required,
  error,
  hint,
  children,
  className,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={`field-${htmlFor}`} className="field-label">
        {label} {required && <span className="text-brand">*</span>}
      </label>
      {children}
      {hint && !error && <p className="mt-1.5 text-[10px] text-muted">{hint}</p>}
      {error && (
        <p id={`field-${htmlFor}-error`} className="mt-1.5 text-[11px] font-medium text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}

function FormSection({
  number,
  title,
  icon,
  children,
  description,
}: {
  number: string;
  title: string;
  icon: "users" | "phone" | "briefcase" | "layers" | "code";
  children: ReactNode;
  description?: string;
}) {
  return (
    <section className="border border-line bg-panel">
      <div className="flex items-center justify-between gap-3 border-b border-line px-5 py-3.5">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center border border-line bg-ink text-brand">
            <Icon name={icon} size={15} />
          </span>
          <div>
            <h2 className="font-display text-[13px] font-bold text-white">{title}</h2>
            {description && <p className="mt-0.5 text-[10px] text-muted">{description}</p>}
          </div>
        </div>
        <span className="font-display text-[10px] font-bold tracking-[0.16em] text-muted/60">{number}</span>
      </div>
      <div className="p-5">{children}</div>
    </section>
  );
}

export default function Booking() {
  const { t, pick, lang } = useLang();
  const { query } = useRouter();
  const trackParam = query.get("track") ?? "";

  const [form, setForm] = useState<FormState>(() => {
    const base: FormState = { ...emptyForm };
    if (trackParam && getCourse(trackParam)) base.track = trackParam;
    try {
      const raw = localStorage.getItem(DRAFT_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<FormState>;
        const merged: FormState = { ...base, ...parsed, track: base.track || parsed.track || "" };
        const normalize = (list: Bi[], value: string) =>
          list.find((item) => item.en === value || item.ar === value)?.en ?? value;
        merged.governorate = normalize(governorates, merged.governorate);
        merged.education = normalize(educationLevels, merged.education);
        merged.experience = normalize(experienceLevels, merged.experience);
        merged.contactTime = normalize(contactTimes, merged.contactTime);
        if (merged.gender === "ذكر") merged.gender = "male";
        if (merged.gender === "أنثى") merged.gender = "female";
        if (!getCourse(merged.track)) merged.track = "";
        return merged;
      }
    } catch {
      /* ignore */
    }
    return base;
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [hadDraft, setHadDraft] = useState(() => {
    try {
      return Boolean(localStorage.getItem(DRAFT_KEY));
    } catch {
      return false;
    }
  });
  const [draftState, setDraftState] = useState<"idle" | "saving" | "saved">("idle");
  const [submitted, setSubmitted] = useState<{ reference: string; message: string } | null>(null);
  const [copied, setCopied] = useState(false);
  const firstRender = useRef(true);

  const selectedCourse = form.track ? getCourse(form.track) : undefined;
  const selectedMajor = selectedCourse ? getMajor(selectedCourse.major) : undefined;
  const whatsappNumber = siteConfig.whatsapp.replace(/[^\d]/g, "");

  const labelFor = (list: Bi[], value: string) => {
    if (!value) return "—";
    const found = list.find((item) => item.en === value || item.ar === value);
    return found ? pick(found) : value;
  };
  const genderLabel = form.gender === "male" ? t("male") : form.gender === "female" ? t("female") : "—";
  const contactTimeLabel = labelFor(contactTimes, form.contactTime);

  useEffect(() => {
    if (trackParam && getCourse(trackParam)) {
      setForm((current) => (current.track === trackParam ? current : { ...current, track: trackParam }));
    }
  }, [trackParam]);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    setDraftState("saving");
    const timer = window.setTimeout(() => {
      try {
        const isEmpty = Object.values(form).every((value) => value.trim() === "");
        if (isEmpty) {
          localStorage.removeItem(DRAFT_KEY);
          setDraftState("idle");
          return;
        }
        localStorage.setItem(DRAFT_KEY, JSON.stringify(form));
        setDraftState("saved");
      } catch {
        setDraftState("idle");
      }
    }, 500);
    return () => window.clearTimeout(timer);
  }, [form]);

  const update = (key: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [key]: value }));
    setErrors((current) => {
      if (!current[key]) return current;
      const next = { ...current };
      delete next[key];
      return next;
    });
  };

  const validate = () => {
    const next: Record<string, string> = {};
    if (form.fullName.trim().length < 3) next.fullName = "validationName";
    const age = Number(form.age);
    if (!form.age || Number.isNaN(age) || age < 12 || age > 100) next.age = "validationAge";
    if (!form.gender) next.gender = "validationGender";
    if (!form.governorate) next.governorate = "validationGov";
    if (form.city.trim().length < 2) next.city = "validationRequired";
    const digits = form.phone.replace(/[^\d]/g, "");
    if (digits.length < 8) next.phone = "validationPhone";
    if (form.whatsapp && form.whatsapp.replace(/[^\d]/g, "").length < 8) next.whatsapp = "validationPhone";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) next.email = "validationEmail";
    if (!form.education) next.education = "validationEducation";
    if (!form.experience) next.experience = "validationExperience";
    if (!form.track) next.track = "validationTrack";
    return next;
  };

  const buildMessage = (reference: string) => {
    const course = selectedCourse;
    const lines = [
      `FASLA.DEV — ${t("bookingTitle")}`,
      `${t("reference")}: ${reference}`,
      "",
      `${t("specialization")}: ${selectedMajor ? pick(selectedMajor.name) : "—"}`,
      `${t("summaryTrack")}: ${course ? pick(course.name) : "—"}`,
      `${t("priceRange")}: ${course ? priceRangeLabel(course) : "—"}`,
      `${t("level")}: ${course ? pick(course.level) : "—"}`,
      "",
      `${t("fullName")}: ${form.fullName}`,
      `${t("age")}: ${form.age}`,
      `${t("gender")}: ${genderLabel}`,
      `${t("governorate")}: ${labelFor(governorates, form.governorate)}`,
      `${t("city")}: ${form.city}`,
      `${t("phone")}: ${form.phone}`,
      `${t("whatsappNumber")}: ${form.whatsapp || "—"}`,
      `${t("email")}: ${form.email}`,
      "",
      `${t("educationLevel")}: ${labelFor(educationLevels, form.education)}`,
      `${t("experience")}: ${labelFor(experienceLevels, form.experience)}`,
      `${t("preferredContact")}: ${contactTimeLabel}`,
      "",
      `${t("whyProgram")}: ${form.whyProgram || "—"}`,
      `${t("learningGoals")}: ${form.goals || "—"}`,
      `${t("additionalNotes")}: ${form.notes || "—"}`,
    ];
    return lines.join("\n");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) {
      const firstKey = Object.keys(next)[0];
      document.getElementById(`field-${firstKey}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    const reference = `FASLA-${Date.now().toString(36).toUpperCase().slice(-6)}`;
    const message = buildMessage(reference);
    setSubmitted({ reference, message });
    setDraftState("idle");
    try {
      localStorage.removeItem(DRAFT_KEY);
    } catch {
      /* ignore */
    }
    /* All bookings & inquiries are sent to the official WhatsApp number. */
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCopy = async () => {
    if (!submitted) return;
    try {
      await navigator.clipboard.writeText(submitted.message);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  const resetForm = () => {
    setForm({ ...emptyForm });
    setSubmitted(null);
    setErrors({});
    setHadDraft(false);
    setDraftState("idle");
    try {
      localStorage.removeItem(DRAFT_KEY);
    } catch {
      /* ignore */
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const summaryRows = useMemo(
    () => [
      { label: t("specialization"), value: selectedMajor ? pick(selectedMajor.name) : "—" },
      { label: t("level"), value: selectedCourse ? pick(selectedCourse.level) : "—" },
      {
        label: t("weeklyProjects"),
        value: selectedCourse ? `${selectedCourse.weeklyProjects} ${t("projectsCount")} ${t("perWeek")}` : "—",
      },
    ],
    [selectedCourse, selectedMajor, t, pick]
  );

  return (
    <>
      <PageHero
        eyebrow={t("bookingEyebrow")}
        title={t("bookingTitle")}
        description={t("bookingSubtitle")}
        breadcrumb={[{ label: t("breadcrumbHome"), to: "/" }, { label: t("navBook") }]}
      >
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Badge variant="solid">
            <Icon name="whatsapp" size={11} /> {t("whatsappChat")}
          </Badge>
          <Badge variant="outline">{t("seatsNote")}</Badge>
          <span className="inline-flex items-center gap-1.5 text-[11px] text-muted">
            <Icon name="info" size={12} className="text-brand" />
            {t("formNote")}
          </span>
        </div>
      </PageHero>

      <div className="border-b border-line bg-ink py-10 md:py-14">
        <div className="shell">
          {submitted ? (
            <div className="mx-auto max-w-3xl">
              <div className="border border-brand/60 bg-panel">
                <div className="flex items-center gap-3 border-b border-line bg-brand/[0.08] px-5 py-4">
                  <span className="flex h-9 w-9 items-center justify-center bg-brand text-white">
                    <Icon name="check" size={18} />
                  </span>
                  <div>
                    <h2 className="font-display text-lg font-bold text-white">{t("bookingSuccessTitle")}</h2>
                    <p className="mt-0.5 text-[11px] text-muted">
                      {t("reference")}: <span className="font-display font-bold text-brand">{submitted.reference}</span>
                    </p>
                  </div>
                </div>
                <div className="p-5 md:p-6">
                  <p className="text-[13px] leading-relaxed text-muted">{t("bookingSuccessText")}</p>

                  <div className="mt-5 grid gap-px border border-line bg-line sm:grid-cols-2">
                    <div className="bg-ink p-4">
                      <span className="text-[10px] uppercase tracking-[0.14em] text-muted">{t("summaryTrack")}</span>
                      <p className="mt-1 text-sm font-bold text-white">{selectedCourse ? pick(selectedCourse.name) : "—"}</p>
                      <p className="mt-1 text-[11px] text-muted">{selectedMajor ? pick(selectedMajor.name) : "—"}</p>
                    </div>
                    <div className="bg-ink p-4">
                      <span className="text-[10px] uppercase tracking-[0.14em] text-muted">{t("priceRange")}</span>
                      <p className="mt-1 font-display text-lg font-bold text-brand">
                        {selectedCourse ? priceRangeLabel(selectedCourse) : "—"}
                      </p>
                      <p className="mt-1 text-[10px] text-muted">{t("priceRangeNote")}</p>
                    </div>
                  </div>

                  <div className="mt-5 border border-line bg-ink p-4">
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-display text-[10px] font-bold uppercase tracking-[0.18em] text-brand">
                        {t("summaryStudent")}
                      </span>
                      <button
                        type="button"
                        onClick={handleCopy}
                        className="inline-flex items-center gap-1.5 border border-line px-2.5 py-1.5 text-[10px] font-bold text-white transition-colors hover:border-brand hover:text-brand"
                      >
                        <Icon name={copied ? "check" : "copy"} size={12} />
                        {copied ? t("copied") : t("copyDetails")}
                      </button>
                    </div>
                    <dl className="mt-3 grid gap-2 text-[12px] sm:grid-cols-2">
                      <div className="flex justify-between gap-3 border-b border-line/60 pb-1.5">
                        <dt className="text-muted">{t("summaryName")}</dt>
                        <dd className="font-medium text-white">{form.fullName}</dd>
                      </div>
                      <div className="flex justify-between gap-3 border-b border-line/60 pb-1.5">
                        <dt className="text-muted">{t("phone")}</dt>
                        <dd className="font-medium text-white">{form.phone}</dd>
                      </div>
                      <div className="flex justify-between gap-3 border-b border-line/60 pb-1.5">
                        <dt className="text-muted">{t("summaryEmail")}</dt>
                        <dd className="truncate font-medium text-white">{form.email}</dd>
                      </div>
                      <div className="flex justify-between gap-3 border-b border-line/60 pb-1.5">
                        <dt className="text-muted">{t("preferredContactLabel")}</dt>
                        <dd className="font-medium text-white">{contactTimeLabel}</dd>
                      </div>
                    </dl>
                  </div>

                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(submitted.message)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary mt-5 w-full"
                  >
                    <Icon name="whatsapp" size={17} />
                    {t("continueWhatsapp")}
                  </a>
                  <p className="mt-2 text-center text-[10px] text-muted">
                    {t("whatsappLabel")}: <span dir="ltr">{siteConfig.whatsappDisplay}</span>
                  </p>

                  <div className="mt-5 flex flex-col gap-2 sm:flex-row">
                    <button type="button" onClick={resetForm} className="btn btn-outline flex-1">
                      {t("newBooking")}
                    </button>
                    <Link to="/courses" className="btn btn-ghost flex-1">
                      {t("backToCourses")}
                    </Link>
                  </div>
                  <p className="mt-4 text-[10px] leading-relaxed text-muted">{t("formNote")}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid gap-6 lg:grid-cols-[1fr_340px] lg:gap-8">
              <form id="booking-form" onSubmit={handleSubmit} noValidate className="space-y-4">
                {hadDraft && (
                  <div className="flex flex-wrap items-center justify-between gap-3 border border-brand/40 bg-brand/[0.06] px-4 py-3">
                    <span className="inline-flex items-center gap-2 text-[11px] text-white">
                      <Icon name="info" size={13} className="text-brand" />
                      {t("draftRestored")}
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        setHadDraft(false);
                        resetForm();
                      }}
                      className="text-[10px] font-bold text-brand hover:underline"
                    >
                      {t("clearDraft")}
                    </button>
                  </div>
                )}

                <FormSection number="01" title={t("bookingStep1")} icon="users">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label={t("fullName")} htmlFor="fullName" required error={errors.fullName && t(errors.fullName)} className="sm:col-span-2">
                      <input
                        id="field-fullName"
                        className={cn("field-input", errors.fullName && "invalid")}
                        value={form.fullName}
                        onChange={(event) => update("fullName", event.target.value)}
                        placeholder={lang === "ar" ? "مثال: أحمد حسن" : "e.g. Ahmed Hassan"}
                        autoComplete="name"
                        aria-invalid={Boolean(errors.fullName)}
                        aria-describedby={errors.fullName ? "field-fullName-error" : undefined}
                      />
                    </Field>
                    <Field label={t("age")} htmlFor="age" required error={errors.age && t(errors.age)}>
                      <input
                        id="field-age"
                        type="number"
                        min={12}
                        max={100}
                        inputMode="numeric"
                        className={cn("field-input", errors.age && "invalid")}
                        value={form.age}
                        onChange={(event) => update("age", event.target.value)}
                        placeholder={lang === "ar" ? "مثال: 21" : "e.g. 21"}
                        aria-invalid={Boolean(errors.age)}
                      />
                    </Field>
                    <Field label={t("gender")} htmlFor="gender" required error={errors.gender && t(errors.gender)}>
                      <select
                        id="field-gender"
                        className={cn("field-input", errors.gender && "invalid")}
                        value={form.gender}
                        onChange={(event) => update("gender", event.target.value)}
                        aria-invalid={Boolean(errors.gender)}
                      >
                        <option value="">{lang === "ar" ? "اختر الجنس" : "Select gender"}</option>
                        <option value="male">{t("male")}</option>
                        <option value="female">{t("female")}</option>
                      </select>
                    </Field>
                    <Field label={t("governorate")} htmlFor="governorate" required error={errors.governorate && t(errors.governorate)}>
                      <select
                        id="field-governorate"
                        className={cn("field-input", errors.governorate && "invalid")}
                        value={form.governorate}
                        onChange={(event) => update("governorate", event.target.value)}
                        aria-invalid={Boolean(errors.governorate)}
                      >
                        <option value="">{lang === "ar" ? "اختر المحافظة" : "Select governorate"}</option>
                        {governorates.map((gov) => (
                          <option key={gov.en} value={gov.en}>
                            {pick(gov)}
                          </option>
                        ))}
                      </select>
                    </Field>
                    <Field label={t("city")} htmlFor="city" required error={errors.city && t(errors.city)}>
                      <input
                        id="field-city"
                        className={cn("field-input", errors.city && "invalid")}
                        value={form.city}
                        onChange={(event) => update("city", event.target.value)}
                        placeholder={lang === "ar" ? "مثال: مدينة نصر" : "e.g. Nasr City"}
                        autoComplete="address-level2"
                        aria-invalid={Boolean(errors.city)}
                      />
                    </Field>
                  </div>
                </FormSection>

                <FormSection number="02" title={t("bookingStep2")} icon="phone">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label={t("phone")} htmlFor="phone" required error={errors.phone && t(errors.phone)}>
                      <input
                        id="field-phone"
                        type="tel"
                        inputMode="tel"
                        className={cn("field-input", errors.phone && "invalid")}
                        value={form.phone}
                        onChange={(event) => update("phone", event.target.value)}
                        placeholder="+20 1XX XXX XXXX"
                        autoComplete="tel"
                        aria-invalid={Boolean(errors.phone)}
                      />
                    </Field>
                    <Field label={t("whatsappNumber")} htmlFor="whatsapp" error={errors.whatsapp && t(errors.whatsapp)} hint={t("phoneOptionalHint")}>
                      <input
                        id="field-whatsapp"
                        type="tel"
                        inputMode="tel"
                        className={cn("field-input", errors.whatsapp && "invalid")}
                        value={form.whatsapp}
                        onChange={(event) => update("whatsapp", event.target.value)}
                        placeholder="+20 1XX XXX XXXX"
                        aria-invalid={Boolean(errors.whatsapp)}
                      />
                    </Field>
                    <Field label={t("email")} htmlFor="email" required error={errors.email && t(errors.email)} className="sm:col-span-2">
                      <input
                        id="field-email"
                        type="email"
                        className={cn("field-input", errors.email && "invalid")}
                        value={form.email}
                        onChange={(event) => update("email", event.target.value)}
                        placeholder="name@example.com"
                        autoComplete="email"
                        aria-invalid={Boolean(errors.email)}
                      />
                    </Field>
                  </div>
                </FormSection>

                <FormSection number="03" title={t("bookingStep3")} icon="briefcase">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label={t("educationLevel")} htmlFor="education" required error={errors.education && t(errors.education)}>
                      <select
                        id="field-education"
                        className={cn("field-input", errors.education && "invalid")}
                        value={form.education}
                        onChange={(event) => update("education", event.target.value)}
                        aria-invalid={Boolean(errors.education)}
                      >
                        <option value="">{lang === "ar" ? "اختر المستوى" : "Select level"}</option>
                        {educationLevels.map((level) => (
                          <option key={level.en} value={level.en}>
                            {pick(level)}
                          </option>
                        ))}
                      </select>
                    </Field>
                    <Field label={t("experience")} htmlFor="experience" required error={errors.experience && t(errors.experience)}>
                      <select
                        id="field-experience"
                        className={cn("field-input", errors.experience && "invalid")}
                        value={form.experience}
                        onChange={(event) => update("experience", event.target.value)}
                        aria-invalid={Boolean(errors.experience)}
                      >
                        <option value="">{lang === "ar" ? "اختر الخبرة" : "Select experience"}</option>
                        {experienceLevels.map((level) => (
                          <option key={level.en} value={level.en}>
                            {pick(level)}
                          </option>
                        ))}
                      </select>
                    </Field>
                  </div>
                </FormSection>

                <FormSection number="04" title={t("bookingStep4")} icon="layers" description={t("selectTrackHint")}>
                  <Field label={t("selectTrack")} htmlFor="track" required error={errors.track && t(errors.track)}>
                    <select
                      id="field-track"
                      className={cn("field-input", errors.track && "invalid")}
                      value={form.track}
                      onChange={(event) => update("track", event.target.value)}
                      aria-invalid={Boolean(errors.track)}
                    >
                      <option value="">{lang === "ar" ? "اختر التخصص والمسار" : "Select specialization & track"}</option>
                      {majors.map((major) => (
                        <optgroup key={major.slug} label={pick(major.name)}>
                          {coursesByMajor(major.slug).map((course) => (
                            <option key={course.slug} value={course.slug}>
                              {pick(course.name)} — {priceRangeLabel(course)}
                            </option>
                          ))}
                        </optgroup>
                      ))}
                    </select>
                  </Field>

                  {selectedCourse && selectedMajor && (
                    <div className="mt-4 border border-brand/40 bg-brand/[0.06] p-4">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <span className="font-display text-[9px] font-bold uppercase tracking-[0.18em] text-brand">
                            {pick(selectedMajor.name)}
                          </span>
                          <p className="mt-1 font-display text-base font-bold text-white">{pick(selectedCourse.name)}</p>
                          <p className="mt-1 text-[11px] text-muted">
                            {pick(selectedCourse.level)} · {selectedCourse.technologies.length} {t("topics")} ·{" "}
                            {selectedCourse.projects.length} {t("projectsCount")}
                          </p>
                        </div>
                        <div className="text-end">
                          <span className="block text-[9px] uppercase tracking-[0.14em] text-muted">{t("priceRange")}</span>
                          <span className="font-display text-base font-bold text-brand">{priceRangeLabel(selectedCourse)}</span>
                        </div>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {selectedCourse.technologies.slice(0, 6).map((tech) => (
                          <span key={tech} className="border border-line bg-ink px-2 py-1 text-[9px] text-white/75">
                            {tech}
                          </span>
                        ))}
                        {selectedCourse.technologies.length > 6 && (
                          <span className="border border-line bg-ink px-2 py-1 text-[9px] text-muted">
                            +{selectedCourse.technologies.length - 6}
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </FormSection>

                <FormSection number="05" title={t("bookingStep5")} icon="code" description={t("additionalInfoNote")}>
                  <div className="grid gap-4">
                    <Field label={t("whyProgram")} htmlFor="whyProgram">
                      <textarea
                        id="field-whyProgram"
                        className="field-input"
                        value={form.whyProgram}
                        onChange={(event) => update("whyProgram", event.target.value)}
                        placeholder={lang === "ar" ? "اكتب سبب رغبتك في تعلم هذا المجال..." : "Tell us why you want to learn this field…"}
                      />
                    </Field>
                    <Field label={t("learningGoals")} htmlFor="goals">
                      <textarea
                        id="field-goals"
                        className="field-input"
                        value={form.goals}
                        onChange={(event) => update("goals", event.target.value)}
                        placeholder={lang === "ar" ? "ما الذي تأمل في تحقيقه بعد المسار؟" : "What do you hope to achieve after the track?"}
                      />
                    </Field>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field label={t("preferredContact")} htmlFor="contactTime">
                        <select
                          id="field-contactTime"
                          className="field-input"
                          value={form.contactTime}
                          onChange={(event) => update("contactTime", event.target.value)}
                        >
                          <option value="">{lang === "ar" ? "اختر الوقت" : "Select time"}</option>
                          {contactTimes.map((time) => (
                            <option key={time.en} value={time.en}>
                              {pick(time)}
                            </option>
                          ))}
                        </select>
                      </Field>
                      <Field label={t("additionalNotes")} htmlFor="notes">
                        <input
                          id="field-notes"
                          className="field-input"
                          value={form.notes}
                          onChange={(event) => update("notes", event.target.value)}
                          placeholder={lang === "ar" ? "أي ملاحظات أخرى…" : "Any other notes…"}
                        />
                      </Field>
                    </div>
                  </div>
                </FormSection>

                <div className="flex flex-col gap-3 border border-line bg-panel p-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-2 text-[10px] text-muted">
                    <Icon name="info" size={12} className="text-brand" />
                    {t("requiredFieldsNote")}
                    <span className="mx-1 h-3 w-px bg-line" aria-hidden />
                    <span className={cn(draftState === "saved" ? "text-brand" : "text-muted")}>
                      {draftState === "saved" ? t("draftSaved") : draftState === "saving" ? t("draftSaving") : t("formNote")}
                    </span>
                  </div>
                  <button type="submit" className="btn btn-primary w-full sm:w-auto">
                    <Icon name="whatsapp" size={16} />
                    {t("submitBooking")}
                  </button>
                </div>
              </form>

              <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
                <div className="border border-brand/50 bg-panel">
                  <div className="flex items-center justify-between border-b border-line px-4 py-3">
                    <span className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-brand">
                      {t("bookingSummary")}
                    </span>
                    <Badge variant="outline">EGP</Badge>
                  </div>
                  <div className="p-4">
                    <span className="text-[10px] uppercase tracking-[0.14em] text-muted">{t("summaryTrack")}</span>
                    {selectedCourse ? (
                      <>
                        <p className="mt-1 font-display text-base font-bold text-white">{pick(selectedCourse.name)}</p>
                        <p className="mt-1 text-[11px] text-muted">{selectedMajor ? pick(selectedMajor.name) : ""}</p>
                      </>
                    ) : (
                      <p className="mt-1 text-[12px] text-muted">{t("summaryTrackEmpty")}</p>
                    )}

                    <div className="mt-4 space-y-2 border-t border-line pt-3">
                      {summaryRows.map((row) => (
                        <div key={row.label} className="flex items-center justify-between gap-3 text-[11px]">
                          <span className="text-muted">{row.label}</span>
                          <span className="text-end font-medium text-white">{row.value}</span>
                        </div>
                      ))}
                      <div className="flex items-end justify-between gap-3 border-t border-line pt-3">
                        <span className="text-[11px] font-semibold text-white">{t("priceRange")}</span>
                        <span className="text-end font-display text-lg font-bold leading-none text-brand">
                          {selectedCourse ? priceRangeLabel(selectedCourse) : "—"}
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 border-t border-line pt-3">
                      <span className="text-[10px] uppercase tracking-[0.14em] text-muted">{t("summaryStudent")}</span>
                      <dl className="mt-2 space-y-1.5 text-[11px]">
                        <div className="flex justify-between gap-3">
                          <dt className="text-muted">{t("summaryName")}</dt>
                          <dd className="max-w-[60%] truncate text-end font-medium text-white">{form.fullName || "—"}</dd>
                        </div>
                        <div className="flex justify-between gap-3">
                          <dt className="text-muted">{t("phone")}</dt>
                          <dd className="font-medium text-white">{form.phone || "—"}</dd>
                        </div>
                        <div className="flex justify-between gap-3">
                          <dt className="text-muted">{t("summaryEmail")}</dt>
                          <dd className="max-w-[60%] truncate text-end font-medium text-white">{form.email || "—"}</dd>
                        </div>
                      </dl>
                    </div>

                    <button type="submit" form="booking-form" className="btn btn-primary mt-4 w-full">
                      <Icon name="whatsapp" size={16} />
                      {t("submitBooking")}
                    </button>
                    <p className="mt-2.5 text-center text-[10px] leading-relaxed text-muted">{t("summaryNote")}</p>
                  </div>
                </div>

                <div className="border border-line bg-panel p-4">
                  <h3 className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-brand">
                    {t("nextStepsTitle")}
                  </h3>
                  <ol className="mt-3 space-y-3">
                    {nextSteps.map((step, index) => (
                      <li key={step.title.en} className="flex items-start gap-2.5">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center border border-line font-display text-[9px] font-bold text-brand">
                          {index + 1}
                        </span>
                        <div>
                          <p className="text-[11px] font-semibold text-white">{pick(step.title)}</p>
                          <p className="mt-0.5 text-[10px] leading-relaxed text-muted">{pick(step.text)}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="border border-line bg-panel p-4">
                  <div className="flex items-center gap-2">
                    <Icon name="whatsapp" size={14} className="text-brand" />
                    <span className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-brand">
                      {t("contactDirectly")}
                    </span>
                  </div>
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(t("whatsappMessage"))}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 block text-[12px] font-medium text-white hover:text-brand"
                  >
                    {t("whatsappLabel")}: <span dir="ltr">{siteConfig.whatsappDisplay}</span>
                  </a>
                  <a href={`mailto:${siteConfig.email}`} className="mt-1.5 block break-all text-[12px] font-medium text-white hover:text-brand">
                    {siteConfig.email}
                  </a>
                  <p className="mt-1.5 text-[10px] leading-relaxed text-muted">{t("formNote")}</p>
                </div>
              </aside>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
