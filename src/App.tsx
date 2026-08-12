import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { AboutPage } from "./pages/AboutPage";
import { CityPage } from "./pages/CityPage";
import { ContactPage } from "./pages/ContactPage";
import { GalleryPage } from "./pages/GalleryPage";
import { Home } from "./pages/Home";
import { LegalPage } from "./pages/LegalPage";
import { NotFound } from "./pages/NotFound";
import { ProductDetailPage } from "./pages/ProductDetailPage";
import { ProductsPage } from "./pages/ProductsPage";
import { RankingPage } from "./pages/RankingPage";
import { ResourceArticlePage } from "./pages/ResourceArticlePage";
import { ResourcesPage } from "./pages/ResourcesPage";
import { ServiceAreasPage } from "./pages/ServiceAreasPage";
import { ServicesPage } from "./pages/ServicesPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="products/:slug" element={<ProductDetailPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="service-areas" element={<ServiceAreasPage />} />
        <Route path="service-areas/:slug" element={<CityPage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="resources" element={<ResourcesPage />} />
        <Route path="resources/:slug" element={<ResourceArticlePage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="privacy-policy" element={<LegalPage document="privacy" />} />
        <Route path="terms-of-service" element={<LegalPage document="terms" />} />
        <Route path="cookie-policy" element={<LegalPage document="cookies" />} />
        <Route path="accessibility" element={<LegalPage document="accessibility" />} />
        <Route path="warranty" element={<LegalPage document="warranty" />} />
        <Route path=":slug" element={<RankingPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
