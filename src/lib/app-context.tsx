import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { dict, type TKey } from "../i18n/translations";
import type { Bi } from "../data/courses";

/* ------------------------------------------------------------------
   Language
------------------------------------------------------------------- */
export type Lang = "ar" | "en";
const LANG_KEY = "fasla:lang";

type LanguageCtx = {
  lang: Lang;
  dir: "rtl" | "ltr";
  isRTL: boolean;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  t: (key: TKey | string) => string;
  pick: (value: Bi) => string;
};

const LanguageContext = createContext<LanguageCtx | null>(null);

const readStoredLang = (): Lang => {
  try {
    const stored = localStorage.getItem(LANG_KEY);
    if (stored === "ar" || stored === "en") return stored;
  } catch {
    /* ignore */
  }
  return "en";
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readStoredLang);

  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = lang === "ar" ? "rtl" : "ltr";
    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  const setLang = useCallback((next: Lang) => setLangState(next), []);
  const toggleLang = useCallback(
    () => setLangState((current) => (current === "ar" ? "en" : "ar")),
    []
  );

  const value = useMemo<LanguageCtx>(() => {
    const t = (key: TKey | string) => {
      const entry = dict[key as TKey];
      return entry ? entry[lang] : key;
    };
    return {
      lang,
      dir: lang === "ar" ? "rtl" : "ltr",
      isRTL: lang === "ar",
      setLang,
      toggleLang,
      t,
      pick: (value: Bi) => value[lang],
    };
  }, [lang, setLang, toggleLang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang(): LanguageCtx {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
}

/* ------------------------------------------------------------------
   Tiny hash router
------------------------------------------------------------------- */
type Route = { path: string; query: URLSearchParams };

const parseHash = (): Route => {
  const raw = window.location.hash.replace(/^#/, "");
  const clean = raw.length > 0 ? raw : "/";
  const [pathPart, queryPart] = clean.split("?");
  return {
    path: pathPart.length > 0 ? pathPart : "/",
    query: new URLSearchParams(queryPart ?? ""),
  };
};

type RouterCtx = {
  path: string;
  query: URLSearchParams;
  navigate: (to: string, section?: string) => void;
};

const RouterContext = createContext<RouterCtx | null>(null);

export function RouterProvider({ children }: { children: ReactNode }) {
  const [route, setRoute] = useState<Route>(() =>
    typeof window === "undefined" ? { path: "/", query: new URLSearchParams() } : parseHash()
  );
  const pendingSection = useRef<string | null>(null);
  const firstRender = useRef(true);

  useEffect(() => {
    const onChange = () => setRoute(parseHash());
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  useEffect(() => {
    const section = pendingSection.current;
    pendingSection.current = null;
    if (section) {
      const timer = window.setTimeout(() => {
        document.getElementById(section)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 80);
      return () => window.clearTimeout(timer);
    }
    if (!firstRender.current) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
    firstRender.current = false;
  }, [route.path, route.query]);

  const navigate = useCallback((to: string, section?: string) => {
    const target = to.startsWith("/") ? to : `/${to}`;
    if (section) pendingSection.current = section;
    const nextHash = `#${target}`;
    if (window.location.hash === nextHash) {
      if (section) {
        document.getElementById(section)?.scrollIntoView({ behavior: "smooth", block: "start" });
        pendingSection.current = null;
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }
      setRoute(parseHash());
      return;
    }
    window.location.hash = target;
  }, []);

  const value = useMemo<RouterCtx>(
    () => ({ path: route.path, query: route.query, navigate }),
    [route.path, route.query, navigate]
  );

  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
}

export function useRouter(): RouterCtx {
  const ctx = useContext(RouterContext);
  if (!ctx) throw new Error("useRouter must be used inside RouterProvider");
  return ctx;
}

export function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* ------------------------------------------------------------------
   Link
------------------------------------------------------------------- */
export function Link({
  to,
  section,
  className,
  children,
  onClick,
  ariaLabel,
}: {
  to: string;
  section?: string;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
  ariaLabel?: string;
}) {
  const { navigate } = useRouter();
  return (
    <a
      href={`#${to}`}
      aria-label={ariaLabel}
      className={className}
      onClick={(event) => {
        event.preventDefault();
        onClick?.();
        navigate(to, section);
      }}
    >
      {children}
    </a>
  );
}
