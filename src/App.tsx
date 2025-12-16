import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Index from './pages/Index'
import PlansPage from './pages/PlansPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import CoveragePage from './pages/CoveragePage'
import { PrivacyPolicy } from './pages/PrivacyPolicy'
import { RefundPolicy } from './pages/RefundPolicy'
import { TermsConditions } from './pages/TermsConditions'
import DisclaimerPage from './pages/DisclaimerPage'
import NotFound from './pages/NotFound'
import { ScrollToTop } from './components/ScrollToTop'

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/plans" element={<PlansPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/coverage" element={<CoveragePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/disclaimer" element={<DisclaimerPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}
