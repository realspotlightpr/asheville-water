import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { ProductsPage } from "./pages/ProductsPage";
import { ProductDetailPage } from "./pages/ProductDetailPage";
import { ServiceAreasPage } from "./pages/ServiceAreasPage";
import { CityPage } from "./pages/CityPage";
import { GalleryPage } from "./pages/GalleryPage";
import { AboutPage } from "./pages/AboutPage";
import { ResourcesPage } from "./pages/ResourcesPage";
import { ResourceArticlePage } from "./pages/ResourceArticlePage";
import { ContactPage } from "./pages/ContactPage";
import { SpanishPage } from "./pages/SpanishPage";
import { LegalPage } from "./pages/LegalPage";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="products" element={<ProductsPage />} />
        <Route path="products/:slug" element={<ProductDetailPage />} />

        <Route path="service-areas" element={<ServiceAreasPage />} />
        <Route path="service-areas/:slug" element={<CityPage />} />

        <Route path="gallery" element={<GalleryPage />} />
        <Route path="about" element={<AboutPage />} />

        <Route path="resources" element={<ResourcesPage />} />
        <Route path="resources/:slug" element={<ResourceArticlePage />} />

        <Route path="contact" element={<ContactPage />} />
        <Route path="es" element={<SpanishPage />} />

        <Route
          path="privacy-policy"
          element={
            <LegalPage
              title="Privacy Policy"
              intro="How we collect, use, and protect your information."
            />
          }
        />
        <Route
          path="terms-of-service"
          element={
            <LegalPage
              title="Terms of Service"
              intro="The terms that govern use of our website and services."
            />
          }
        />
        <Route
          path="warranty"
          element={
            <LegalPage
              title="Warranty"
              intro="Coverage details for our systems — lifetime valve, multi-year media, and RO."
            />
          }
        />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
