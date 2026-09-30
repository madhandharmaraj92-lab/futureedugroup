"use client";

import React from "react";
import { SEO } from "../components/SEO";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { InquiryForm } from "../components/InquiryForm";
import { SITE_CONFIG } from "../data/siteData";
import {
  getBreadcrumbSchema,
  getOrganizationSchema,
} from "../utils/schemaGenerator";

export const ContactUsPage: React.FC = () => {
  const breadcrumbs = [{ name: "Contact Us", path: "/contact-us" }];

  const pageSchema = [
    getBreadcrumbSchema(breadcrumbs),
    getOrganizationSchema(),
  ];

  return (
    <main>
      {/* SEO */}
      <SEO
        title="Contact Future Edu Group | Admissions & Partner Support"
        description="Contact Future Edu Group for admissions inquiries, academic counselling, school partnerships, and program details. Reach our Bangalore offices via phone, email, or direct message."
        canonicalPath="/contact-us"
        keywords={[
          "Contact Future Edu Group",
          "Future Edu Group Phone Number",
          "Future Edu Group Email Address",
          "Future Edu Group Bangalore",
          "Future Edu Group Branches",
          "Admission Enquiry Bangalore",
          "Future Edu Group Mysore",
          "Future Edu Group Mandya",
          "Future Edu Group Madanapalli",
        ]}
        schema={pageSchema}
      />

      {/* Breadcrumbs */}
      <Breadcrumbs
        items={breadcrumbs}
        subtitle="Get in Touch"
        title="Contact Future Edu Group"
      />

      {/* Contact Section */}
      <section
        style={{
          padding: "80px 0",
          background: "#fff",
        }}
      >
        <div className="container">
          <div className="row">
            {/* =========================
                CONTACT INFORMATION
            ========================== */}
            <div className="col-lg-5 mb-5 mb-lg-0">
              <div className="section-heading" style={{ textAlign: "left" }}>
                <h6>We are here to assist</h6>

                <h4>
                  Reach Out to Our <em>Academic Advisors</em>
                </h4>
              </div>

              <div
                style={{
                  marginTop: "30px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {/* =========================
                    REGISTERED OFFICE
                ========================== */}
                <div
                  style={{
                    background: "#f8fafc",
                    padding: "20px",
                    borderRadius: "14px",
                    border: "1px solid #e2e8f0",
                    display: "flex",
                    gap: "15px",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      minWidth: "48px",
                      width: "48px",
                      height: "48px",
                      borderRadius: "12px",
                      background: "rgba(37, 99, 235, 0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#2563eb",
                      fontSize: "20px",
                    }}
                  >
                    <i className="fa fa-building"></i>
                  </div>

                  <div>
                    <h5
                      style={{
                        fontSize: "15px",
                        fontWeight: 700,
                        margin: 0,
                        color: "#0f172a",
                      }}
                    >
                      Registered Office
                    </h5>

                    <p
                      style={{
                        fontSize: "13px",
                        color: "#475569",
                        margin: "6px 0 0 0",
                        lineHeight: 1.7,
                      }}
                    >
                      Unit No. TE-04, 3rd Floor, 38/17, #1678, SMART AVENUE,
                      Nehru Road, Kammanahalli, HRBR Layout, Bangalore - 560043
                    </p>
                  </div>
                </div>

                {/* =========================
                    CORPORATE OFFICE
                ========================== */}
                <div
                  style={{
                    background: "#f8fafc",
                    padding: "20px",
                    borderRadius: "14px",
                    border: "1px solid #e2e8f0",
                    display: "flex",
                    gap: "15px",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      minWidth: "48px",
                      width: "48px",
                      height: "48px",
                      borderRadius: "12px",
                      background: "rgba(37, 99, 235, 0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#2563eb",
                      fontSize: "20px",
                    }}
                  >
                    <i className="fa fa-building-o"></i>
                  </div>

                  <div>
                    <h5
                      style={{
                        fontSize: "15px",
                        fontWeight: 700,
                        margin: 0,
                        color: "#0f172a",
                      }}
                    >
                      Corporate Office
                    </h5>

                    <p
                      style={{
                        fontSize: "13px",
                        color: "#475569",
                        margin: "6px 0 0 0",
                        lineHeight: 1.7,
                      }}
                    >
                      #91, Office No. 8, Sierra Cartel, HSR Layout, Bangalore -
                      560102
                    </p>
                  </div>
                </div>

                {/* =========================
                    PHONE / WHATSAPP
                ========================== */}
                <div
                  style={{
                    background: "#f8fafc",
                    padding: "20px",
                    borderRadius: "14px",
                    border: "1px solid #e2e8f0",
                    display: "flex",
                    gap: "15px",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      minWidth: "48px",
                      width: "48px",
                      height: "48px",
                      borderRadius: "12px",
                      background: "rgba(37, 99, 235, 0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#2563eb",
                      fontSize: "20px",
                    }}
                  >
                    <i className="fa fa-phone"></i>
                  </div>

                  <div>
                    <h5
                      style={{
                        fontSize: "15px",
                        fontWeight: 700,
                        margin: 0,
                        color: "#0f172a",
                      }}
                    >
                      Phone & WhatsApp
                    </h5>

                    <a
                      href="tel:+919632762017"
                      style={{
                        fontSize: "14px",
                        color: "#2563eb",
                        fontWeight: 600,
                        textDecoration: "none",
                      }}
                    >
                      +91 963 276 2017
                    </a>
                  </div>
                </div>

                {/* =========================
                    EMAIL
                ========================== */}
                <div
                  style={{
                    background: "#f8fafc",
                    padding: "20px",
                    borderRadius: "14px",
                    border: "1px solid #e2e8f0",
                    display: "flex",
                    gap: "15px",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      minWidth: "48px",
                      width: "48px",
                      height: "48px",
                      borderRadius: "12px",
                      background: "rgba(37, 99, 235, 0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#2563eb",
                      fontSize: "20px",
                    }}
                  >
                    <i className="fa fa-envelope"></i>
                  </div>

                  <div>
                    <h5
                      style={{
                        fontSize: "15px",
                        fontWeight: 700,
                        margin: 0,
                        color: "#0f172a",
                      }}
                    >
                      Admissions & Support Email
                    </h5>

                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      style={{
                        fontSize: "14px",
                        color: "#2563eb",
                        fontWeight: 600,
                        textDecoration: "none",
                      }}
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>

                {/* =========================
                    BRANCHES
                ========================== */}
                <div
                  style={{
                    background: "#f8fafc",
                    padding: "20px",
                    borderRadius: "14px",
                    border: "1px solid #e2e8f0",
                    display: "flex",
                    gap: "15px",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      minWidth: "48px",
                      width: "48px",
                      height: "48px",
                      borderRadius: "12px",
                      background: "rgba(37, 99, 235, 0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#2563eb",
                      fontSize: "20px",
                    }}
                  >
                    <i className="fa fa-map-marker"></i>
                  </div>

                  <div>
                    <h5
                      style={{
                        fontSize: "15px",
                        fontWeight: 700,
                        margin: 0,
                        color: "#0f172a",
                      }}
                    >
                      Our Branches
                    </h5>

                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "8px",
                        marginTop: "10px",
                      }}
                    >
                      {["Mysore", "Mandya", "Madanapalli"].map((branch) => (
                        <span
                          key={branch}
                          style={{
                            display: "inline-block",
                            padding: "7px 13px",
                            background: "#fff",
                            border: "1px solid #dbeafe",
                            borderRadius: "20px",
                            color: "#2563eb",
                            fontSize: "13px",
                            fontWeight: 600,
                          }}
                        >
                          {branch}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* =========================
                INQUIRY FORM
            ========================== */}
            <div className="col-lg-7">
              <InquiryForm
                title="Send Us a Direct Message"
                subtitle="Inquiry Form"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
