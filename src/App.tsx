import { LanguageProvider, RouterProvider, useRouter, Link, useLang } from "./lib/app-context";
import { SiteLayout } from "./components/Layout";
import { PageHero } from "./components/ui";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import Booking from "./pages/Booking";
import About from "./pages/About";
import Legal from "./pages/Legal";
import type { LegalKey } from "./data/site";

function NotFound() {
  const { t } = useLang();
  return (
    <PageHero
      eyebrow="FASLA.DEV"
      title={t("notFoundTitle")}
      description={t("notFoundText")}
      breadcrumb={[{ label: t("breadcrumbHome"), to: "/" }]}
    >
      <div className="mt-7 flex flex-wrap gap-3">
        <Link to="/" className="btn btn-primary">
          {t("notFoundButton")}
        </Link>
        <Link to="/courses" className="btn btn-outline">
          {t("navTracks")}
        </Link>
      </div>
    </PageHero>
  );
}

function Routes() {
  const { path } = useRouter();

  if (path === "/" || path === "") {
    return (
      <SiteLayout withNav={false}>
        <Home />
      </SiteLayout>
    );
  }

  if (path === "/courses") {
    return (
      <SiteLayout>
        <Courses />
      </SiteLayout>
    );
  }

  if (path.startsWith("/course/")) {
    const slug = path.replace("/course/", "").replace(/\/$/, "");
    return (
      <SiteLayout>
        <CourseDetails slug={slug} />
      </SiteLayout>
    );
  }

  if (path === "/booking") {
    return (
      <SiteLayout>
        <Booking />
      </SiteLayout>
    );
  }

  if (path === "/about") {
    return (
      <SiteLayout>
        <About />
      </SiteLayout>
    );
  }

  if (path === "/privacy" || path === "/terms" || path === "/refund") {
    return (
      <SiteLayout>
        <Legal page={path.replace("/", "") as LegalKey} />
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <NotFound />
    </SiteLayout>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <RouterProvider>
        <Routes />
      </RouterProvider>
    </LanguageProvider>
  );
}
