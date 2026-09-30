import React from "react";
import { InquiryForm } from "./InquiryForm";

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultDivision?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  defaultDivision,
}) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.65)",
        zIndex: 99999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        backdropFilter: "blur(4px)",
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "650px",
          maxHeight: "90vh",
          overflowY: "auto",
          position: "relative",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          style={{
            position: "absolute",
            top: "15px",
            right: "15px",
            background: "#f0f0f0",
            border: "none",
            borderRadius: "50%",
            width: "32px",
            height: "32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "18px",
            cursor: "pointer",
            zIndex: 10,
          }}
          aria-label="Close"
        >
          ✕
        </button>
        <InquiryForm
          initialDivision={defaultDivision}
          onSuccess={onClose}
          title="Connect with Future Edu Group"
          subtitle="Admissions & Institutional Inquiries"
        />
      </div>
    </div>
  );
};
