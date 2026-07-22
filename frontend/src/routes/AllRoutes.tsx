import { Routes, Route } from "react-router-dom";
import { MainLayout } from "../components/layouts/MainLayout";
import { HomeComponent } from "../components/pages/home/HomeComponent";
import { AboutComponent } from "../components/pages/about/AboutComponent";
import { ServiceComponent } from "../components/pages/service/ServiceComponent";
import { CareerComponent } from "../components/pages/career/CareerComponent";
import { CaseStudyComponent } from "../components/pages/casestudy/CaseStudyComponent";
import { ContactComponent } from "../components/pages/contact/ContactComponent";
import { PortfolioComponent } from "../components/pages/portfolio/PortfolioComponent";
import { BlogComponent } from "../components/pages/blog/BlogComponent";
import { SolutionComponent } from "../components/pages/solution/SolutionComponent";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
      <Route path="/" element={<HomeComponent />} />
      <Route path="/about-us" element={<AboutComponent />} />
      <Route path="/service" element={<ServiceComponent />} />
      <Route path="/blog" element={<BlogComponent />} />
      <Route path="/portfolio" element={<PortfolioComponent/>} />
      <Route path="/solution" element={<SolutionComponent />} />
      <Route path="/career" element={<CareerComponent />} />
      <Route path="/case-study" element={<CaseStudyComponent />} />
      <Route path="/contact-us" element={<ContactComponent />} />
      </Route>
    </Routes>
  );
};
