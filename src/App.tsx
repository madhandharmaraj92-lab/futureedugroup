'use client';

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { InquiryModal } from './components/InquiryModal';
import { FloatingEducationBackground } from './components/FloatingEducationBackground';
import { InquiryProvider } from './contexts/InquiryContext';

interface SiteLayoutProps {
  children: React.ReactElement;
}

export const SiteLayout: React.FC<SiteLayoutProps> = ({ children }) => {
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
    <InquiryProvider value={handleOpenInquiry}>
      <div className="app-root" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      {/* Global Interactive Educational 2D Illustration Animation across All Screens */}
      <FloatingEducationBackground fixed={true} density="ultra" interactive={true} />

      <Navbar onOpenInquiry={handleOpenInquiry} />

      <div style={{ flex: 1, position: 'relative', zIndex: 1 }}>
        {children}
      </div>

      <Footer />

      <InquiryModal
        isOpen={isInquiryModalOpen}
        onClose={handleCloseInquiry}
        defaultDivision={selectedDivisionForModal}
      />
      </div>
    </InquiryProvider>
  );
};
