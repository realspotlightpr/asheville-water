import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ScrollToTop } from "./ScrollToTop";
import { TranslationNavigationGuard } from "./TranslationNavigationGuard";
import { CookieConsent } from "./CookieConsent";
import { GTranslateLoader } from "./GTranslateLoader";
import { MetaPixel } from "./MetaPixel";
import { GoogleAnalytics } from "./GoogleAnalytics";
import { LeadConnectorChat } from "./LeadConnectorChat";

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <ScrollToTop />
      <TranslationNavigationGuard />
      <GTranslateLoader />
      <MetaPixel />
      <GoogleAnalytics />
      <LeadConnectorChat />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}
