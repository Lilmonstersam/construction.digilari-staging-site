import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import ServicePage from './pages/ServicePage';
import CaseStudyPage from './pages/CaseStudyPage';
import CaseStudiesHub from './pages/CaseStudiesHub';
import Contact from './pages/Contact';
import StandardPage from './pages/StandardPage';
import FaqPage from './pages/FaqPage';
import LocalServicePage from './pages/LocalServicePage';
import ScrollToTop from './components/ScrollToTop';
import Pricing from './pages/Pricing';
import LeadGeneration from './pages/LeadGeneration';
import ArticlePage from './pages/ArticlePage';
import AccountBasedMarketing from './pages/AccountBasedMarketing';
import EmailMarketing from './pages/EmailMarketing';
import CompetitorReview from './pages/CompetitorReview';
import ArticlesHub from './pages/ArticlesHub';
import TeamMemberPage from './pages/TeamMemberPage';
import { articlesData } from './data/articles';

const routerBasename = import.meta.env.BASE_URL.replace(/\/$/, '');

// Routes article slugs that have full content to ArticlePage; others fall back
// to the standard placeholder so existing links don't break.
function ArticleRouter() {
  const { slug } = useParams();
  if (articlesData[slug]) return <ArticlePage />;
  return <StandardPage pageId="article-placeholder" />;
}

function App() {
  return (
    <Router basename={routerBasename}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          
          {/* Core Services */}
          <Route path="services/lead-generation" element={<LeadGeneration />} />
          <Route path="services/account-based-marketing" element={<AccountBasedMarketing />} />
          <Route path="services/email-marketing" element={<EmailMarketing />} />
          <Route path="services/:serviceId" element={<ServicePage />} />
          <Route path="services/:categoryId/:serviceId" element={<ServicePage />} />
          
          {/* Case Studies */}
          <Route path="case-studies" element={<CaseStudiesHub />} />
          <Route path="case-studies/:studyId" element={<CaseStudyPage />} />
          
          {/* Contact & Pricing */}
          <Route path="contact" element={<Contact />} />
          <Route path="pricing" element={<Pricing />} />
          
          {/* Internal Hubs & Articles */}
          <Route path="articles" element={<ArticlesHub />} />
          <Route path="articles/:slug" element={<ArticleRouter />} />

          {/* Free Tools */}
          <Route path="tools/competitor-review" element={<CompetitorReview />} />

          {/* Team Member Bios */}
          <Route path="team/:memberId" element={<TeamMemberPage />} />

          {/* Standard Pages */}
          <Route path="faqs" element={<FaqPage />} />
          <Route path="why-digilari" element={<StandardPage pageId="why-digilari" />} />
          <Route path="digital-marketing-partner-program" element={<StandardPage pageId="digital-marketing-partner-program" />} />
          <Route path="digital-results-guarantee" element={<StandardPage pageId="digital-results-guarantee" />} />
          <Route path="marketing-terms" element={<StandardPage pageId="marketing-terms" />} />
          <Route path="our-process" element={<StandardPage pageId="our-process" />} />
          <Route path="privacy-policy" element={<StandardPage pageId="privacy-policy" />} />
          <Route path="terms-of-service" element={<StandardPage pageId="terms-of-service" />} />
          
          {/* Route generic :pageId to StandardPage as a fallback, with internal 404/redirect if not exist */}
          <Route path="page/:pageId" element={<StandardPage />} />

          {/* Programmatic SEO Location Template */}
          <Route path="local/:city/:service" element={<LocalServicePage />} />
          
          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
