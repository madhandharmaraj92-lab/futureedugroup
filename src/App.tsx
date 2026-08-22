import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { InquiryModal } from './components/InquiryModal';
import { FloatingEducationBackground } from './components/FloatingEducationBackground';

import { HomePage } from './pages/HomePage';
import { TourismHospitalityPage } from './pages/TourismHospitalityPage';
import { EduSolutionsPage } from './pages/EduSolutionsPage';
import { GenLearningSolutionsPage } from './pages/GenLearningSolutionsPage';
import { AboutUsPage } from './pages/AboutUsPage';
import { OurServicesPage } from './pages/OurServicesPage';
import { ContactUsPage } from './pages/ContactUsPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const App: React.FC = () => {
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const [selectedDivisionForModal, setSelectedDivisionForModal] = useState<string | undefined>(undefined);

  const handleOpenInquiry = (division?: string) => {
    setSelectedDivisionForModal(division);
    setIsInquiryModalOpen(true);
  };

  const handleCloseInquiry = () => {
    setIsInquiryModalOpen(false);
    setSelectedDivisionForModal(undefined);
  };

  return (
    <div className="app-root" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      {/* Global Interactive Educational 2D Illustration Animation across All Screens */}
      <FloatingEducationBackground fixed={true} density="ultra" interactive={true} />

      <Navbar onOpenInquiry={handleOpenInquiry} />

      <div style={{ flex: 1, position: 'relative', zIndex: 1 }}>
        <Routes>
          <Route path="/" element={<HomePage onOpenInquiry={handleOpenInquiry} />} />
          <Route path="/tourism-hospitality" element={<TourismHospitalityPage onOpenInquiry={handleOpenInquiry} />} />
          <Route path="/edu-solutions" element={<EduSolutionsPage onOpenInquiry={handleOpenInquiry} />} />
          <Route path="/gen-learning-solutions" element={<GenLearningSolutionsPage onOpenInquiry={handleOpenInquiry} />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/our-services" element={<OurServicesPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>

      <Footer />

      <InquiryModal
        isOpen={isInquiryModalOpen}
        onClose={handleCloseInquiry}
        defaultDivision={selectedDivisionForModal}
      />
    </div>
  );
};
