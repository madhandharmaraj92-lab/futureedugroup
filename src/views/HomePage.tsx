"use client";

import React, { useEffect, useState } from "react";
import { Link } from "../components/Link";
import { SEO } from "../components/SEO";
import {
  DIVISIONS,
  PROGRAMS,
  TESTIMONIALS,
  FAQS,
  SITE_CONFIG,
} from "../data/siteData";
import { getOrganizationSchema, getFAQSchema } from "../utils/schemaGenerator";
import { InquiryForm } from "../components/InquiryForm";
import { PageHeroCarousel } from "../components/PageHeroCarousel";
import { useInquiry } from "../contexts/InquiryContext";

interface HomePageProps {
  onOpenInquiry?: (division?: string) => void;
}

const PROGRAM_IMAGE_DIMENSIONS: Record<string, { width: number; height: number }> = {
  "/assets/images/courses-01.jpg": { width: 300, height: 363 },
  "/assets/images/courses-02.jpg": { width: 300, height: 363 },
  "/assets/images/courses-03.jpg": { width: 300, height: 363 },
  "/assets/images/courses-04.jpg": { width: 300, height: 363 },
  "/assets/images/team-member-01.jpg": { width: 370, height: 342 },
  "/assets/images/team-member-02.jpg": { width: 370, height: 342 },
};

export const HomePage: React.FC<HomePageProps> = () => {
  const onOpenInquiry = useInquiry();
  const [activeTab, setActiveTab] = useState<number>(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [partnerStart, setPartnerStart] = useState(0);
  const partners = [
    {
      name: "Asian International University",
      src: "/assets/images/logos/aiu%20logo.png",
      width: 832,
      height: 275,
    },
    {
      name: "Sikkim Skill University",
      src: "/assets/images/logos/new-ssu-logo.png",
      width: 2262,
      height: 678,
    },
    {
      name: "Shri Rukmini Dwarkadhish University",
      src: "/assets/images/logos/2%20logo.png",
      width: 572,
      height: 272,
    },
    {
      name: "Swaminarayan University",
      src: "/assets/images/logos/SN.png",
      width: 1599,
      height: 773,
    },
    {
      name: "Vivekananda Global University",
      src: "/assets/images/logos/gdoe.png",
      width: 1600,
      height: 623,
    },
  ];

  useEffect(() => {
    const timer = window.setInterval(
      () => setPartnerStart((current) => (current + 3) % partners.length),
      4200,
    );
    return () => window.clearInterval(timer);
  }, [partners.length]);

  const displayedPartners = Array.from(
    { length: 3 },
    (_, index) => partners[(partnerStart + index) % partners.length],
  );

  const homeSchema = [
    getOrganizationSchema(),
    getFAQSchema(FAQS),
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.siteUrl,
      potentialAction: {
        "@type": "SearchAction",
        target: `${SITE_CONFIG.siteUrl}/our-services?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
  ];

  return (
    <main>
      <SEO
        title="Future Edu Group | Learn. Experience. Explore. Build a Global Career."
        description="Future Edu Group powers world-class Tourism & Hospitality education, Higher Education degree admissions (UG/PG), and K-12 school solutions including IIT Foundation books and AI English Language Labs."
        canonicalPath="/"
        keywords={[
          "Future Edu Group",
          "Tourism and Hospitality Academy",
          "Hotel Management Admissions",
          "Cruise Careers Training",
          "Higher Education Solutions",
          "UG PG Admissions for Working Professionals",
          "IIT Foundation Books",
          "AI English Language Lab for Schools",
        ]}
        schema={homeSchema}
      />

      <PageHeroCarousel variant="home" />

      <section
        className="home-partners-section"
        style={{ padding: "58px 0", background: "#f8fafc" }}
      >
        <div className="container">
          <div
            style={{
              maxWidth: "1000px",
              margin: "0 auto",
              background: "#fff",
              border: "1px solid #dbeafe",
              borderRadius: "20px",
              padding: "34px 28px",
              boxShadow: "0 8px 24px rgba(15, 23, 42, 0.05)",
              textAlign: "center",
            }}
          >
            <span
              style={{
                display: "inline-block",
                color: "#0284c7",
                fontSize: "13px",
                fontWeight: 800,
                letterSpacing: "1px",
                textTransform: "uppercase",
                marginBottom: "8px",
              }}
            >
              Authorised Admission Partner for
            </span>
            <div
              className="partner-logo-strip"
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "18px",
                flexWrap: "wrap",
                marginTop: "18px",
              }}
            >
              {displayedPartners.map((university) => (
                <div
                  className="partner-logo-card"
                  key={university.name}
                  style={{
                    width: "250px",
                    maxWidth: "100%",
                    minHeight: "124px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "14px",
                    background: "#fff",
                    border: "1px solid #bae6fd",
                    borderRadius: "14px",
                  }}
                >
                  <img
                    src={university.src}
                    alt={university.name}
                    width={university.width}
                    height={university.height}
                    loading="lazy"
                    decoding="async"
                    style={{
                      width: "100%",
                      height: "66px",
                      objectFit: "contain",
                      display: "block",
                    }}
                  />
                  <span
                    style={{
                      color: "#0f172a",
                      fontSize: "13px",
                      fontWeight: 700,
                      marginTop: "8px",
                      textAlign: "center",
                    }}
                  >
                    {university.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="founder-card-section"
        style={{ padding: "48px 0", background: "#fff" }}
      >
        <div className="container">
          <div className="founder-card">
            <picture>
              <source
                type="image/webp"
                srcSet="/assets/images/founder-naresh-sampara-205.webp 205w, /assets/images/founder-naresh-sampara-410.webp 410w"
                sizes="(max-width: 576px) 145px, 205px"
              />
              <img
                src="/assets/images/founder-naresh-sampara.png"
                alt="Dr. Naresh Sampara"
                width={410}
                height={723}
                loading="lazy"
                decoding="async"
              />
            </picture>
            <div>
              <h2>Dr. Naresh Sampara</h2>
              <p>Founder &amp; Chairman</p>
            </div>
          </div>
        </div>
      </section>

      {/* ***** Three Flagship Divisions Section ***** */}
      <section
        className="our-courses home-section-pattern home-pattern-one"
        id="divisions"
        style={{ padding: "90px 0", background: "#f8fafc" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="section-heading">
                <h6>Specialized Verticals</h6>
                <h4>
                  Our Three Distinct <em>Educational Pillars</em>
                </h4>
                <p>
                  Designed to serve students aspiring for global careers,
                  professionals seeking higher degrees, and forward-thinking
                  schools.
                </p>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="row">
                {DIVISIONS.map((division) => (
                  <div key={division.id} className="col-lg-4 col-md-6 mb-4">
                    <div
                      className="service-item"
                      style={{
                        height: "100%",
                        borderRadius: "18px",
                        padding: "38px 28px",
                        boxShadow: "0 12px 30px rgba(15, 23, 42, 0.06)",
                        background: "#fff",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        border: "1px solid #e2e8f0",
                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      }}
                    >
                      <div>
                        <div className="icon" style={{ marginBottom: "20px" }}>
                          <img
                            src={division.icon}
                            alt={division.title}
                            width={56}
                            height={56}
                            loading="lazy"
                            decoding="async"
                            style={{ width: "56px", height: "56px" }}
                          />
                        </div>
                        <span
                          style={{
                            fontSize: "11px",
                            fontWeight: 800,
                            color: "#2563eb",
                            textTransform: "uppercase",
                            letterSpacing: "1px",
                            background: "rgba(37, 99, 235, 0.1)",
                            padding: "4px 10px",
                            borderRadius: "12px",
                          }}
                        >
                          {division.badge}
                        </span>
                        <h3
                          style={{
                            fontSize: "21px",
                            fontWeight: 700,
                            margin: "14px 0 10px 0",
                            color: "#0f172a",
                          }}
                        >
                          {division.title}
                        </h3>
                        <p
                          style={{
                            fontSize: "14px",
                            lineHeight: "1.7",
                            color: "#475569",
                            marginBottom: "20px",
                          }}
                        >
                          {division.description}
                        </p>

                        {/* Feature bullets */}
                        <ul
                          style={{
                            listStyle: "none",
                            padding: 0,
                            margin: "0 0 20px 0",
                          }}
                        >
                          {division.features.slice(0, 3).map((feat, idx) => (
                            <li
                              key={idx}
                              style={{
                                fontSize: "13px",
                                color: "#334155",
                                marginBottom: "8px",
                                display: "flex",
                                alignItems: "flex-start",
                                gap: "8px",
                              }}
                            >
                              <i
                                className="fa fa-check-circle"
                                style={{ color: "#2563eb", marginTop: "3px" }}
                              ></i>
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div
                        style={{
                          paddingTop: "15px",
                          borderTop: "1px solid #f1f5f9",
                        }}
                      >
                        <Link
                          to={division.path}
                          className="main-gradient-button"
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "8px",
                            fontSize: "14px",
                            padding: "10px 22px",
                            textDecoration: "none",
                          }}
                        >
                          <span>Explore Vertical</span>
                          <i className="fa fa-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ***** Interactive Programs & Pathways Explorer ***** */}
      <section
        className="our-courses home-section-pattern home-pattern-two"
        id="courses"
        style={{ padding: "90px 0" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="section-heading">
                <h6>Curriculum & Solutions</h6>
                <h4>
                  Explore Our <em>Featured Programs</em>
                </h4>
                <p>
                  Click on any vertical below to preview curriculum highlights,
                  durations, and career pathways:
                </p>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="row">
                {/* Vertical Tabs */}
                <div className="col-lg-4 mb-4 mb-lg-0">
                  <div
                    className="menu"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                    }}
                  >
                    {PROGRAMS.map((prog, index) => (
                      <button
                        key={prog.id}
                        type="button"
                        onClick={() => setActiveTab(index)}
                        className={`gradient-border ${activeTab === index ? "active" : ""}`}
                        style={{
                          width: "100%",
                          textAlign: "left",
                          padding: "18px 22px",
                          borderRadius: "12px",
                          border:
                            activeTab === index
                              ? "2px solid #2563eb"
                              : "1px solid #e2e8f0",
                          background: activeTab === index ? "#eff6ff" : "#fff",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          transition: "all 0.2s",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "15px",
                            fontWeight: 600,
                            color: activeTab === index ? "#2563eb" : "#1e293b",
                          }}
                        >
                          {prog.title}
                        </span>
                        <i
                          className="fa fa-angle-right"
                          style={{
                            color: activeTab === index ? "#2563eb" : "#94a3b8",
                          }}
                        ></i>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tab Detail Content */}
                <div className="col-lg-8">
                  {PROGRAMS[activeTab] && (
                    <div
                      style={{
                        background: "#fff",
                        borderRadius: "20px",
                        padding: "35px",
                        boxShadow: "0 10px 30px rgba(15, 23, 42, 0.06)",
                        border: "1px solid #e2e8f0",
                      }}
                    >
                      <div className="row">
                        <div className="col-md-5 mb-4 mb-md-0">
                          <img
                            src={PROGRAMS[activeTab].image}
                            alt={PROGRAMS[activeTab].title}
                            width={
                              PROGRAM_IMAGE_DIMENSIONS[PROGRAMS[activeTab].image]
                                .width
                            }
                            height={
                              PROGRAM_IMAGE_DIMENSIONS[PROGRAMS[activeTab].image]
                                .height
                            }
                            loading="lazy"
                            decoding="async"
                            style={{
                              width: "100%",
                              borderRadius: "14px",
                              objectFit: "cover",
                              height: "240px",
                            }}
                          />
                          <div
                            style={{
                              marginTop: "18px",
                              background: "#f0f7ff",
                              padding: "14px",
                              borderRadius: "10px",
                            }}
                          >
                            <div
                              style={{
                                fontSize: "12px",
                                color: "#64748b",
                                textTransform: "uppercase",
                                fontWeight: 700,
                              }}
                            >
                              Format & Duration
                            </div>
                            <div
                              style={{
                                fontSize: "14px",
                                fontWeight: 600,
                                color: "#0f172a",
                                marginTop: "4px",
                              }}
                            >
                              {PROGRAMS[activeTab].duration}
                            </div>
                            <div
                              style={{
                                fontSize: "12px",
                                color: "#2563eb",
                                marginTop: "4px",
                                fontWeight: 600,
                              }}
                            >
                              {PROGRAMS[activeTab].mode}
                            </div>
                          </div>
                        </div>

                        <div className="col-md-7">
                          <span
                            style={{
                              fontSize: "11px",
                              color: "#2563eb",
                              fontWeight: 800,
                              textTransform: "uppercase",
                              letterSpacing: "1px",
                            }}
                          >
                            {PROGRAMS[activeTab].certification}
                          </span>
                          <h3
                            style={{
                              fontSize: "22px",
                              fontWeight: 700,
                              margin: "8px 0 14px 0",
                              color: "#0f172a",
                            }}
                          >
                            {PROGRAMS[activeTab].title}
                          </h3>
                          <p
                            style={{
                              fontSize: "14px",
                              lineHeight: "1.7",
                              color: "#475569",
                              marginBottom: "20px",
                            }}
                          >
                            {PROGRAMS[activeTab].description}
                          </p>

                          <h5
                            style={{
                              fontSize: "14px",
                              fontWeight: 700,
                              color: "#1e293b",
                              marginBottom: "10px",
                            }}
                          >
                            Key Learning Highlights:
                          </h5>
                          <ul
                            style={{
                              listStyle: "none",
                              padding: 0,
                              margin: "0 0 25px 0",
                            }}
                          >
                            {PROGRAMS[activeTab].highlights.map((h, i) => (
                              <li
                                key={i}
                                style={{
                                  fontSize: "13px",
                                  color: "#334155",
                                  marginBottom: "6px",
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "8px",
                                }}
                              >
                                <i
                                  className="fa fa-star"
                                  style={{ color: "#f59e0b", fontSize: "11px" }}
                                ></i>
                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>

                          <div
                            style={{
                              display: "flex",
                              gap: "12px",
                              flexWrap: "wrap",
                            }}
                          >
                            <Link
                              to={
                                PROGRAMS[activeTab].division === "tourism"
                                  ? "/tourism-hospitality"
                                  : PROGRAMS[activeTab].division === "higher-ed"
                                    ? "/edu-solutions"
                                    : "/gen-learning-solutions"
                              }
                              className="main-gradient-button"
                              style={{
                                display: "inline-block",
                                padding: "10px 24px",
                                fontSize: "14px",
                              }}
                            >
                              Full Program Details
                            </Link>
                            <button
                              type="button"
                              onClick={() =>
                                onOpenInquiry &&
                                onOpenInquiry(PROGRAMS[activeTab].title)
                              }
                              style={{
                                padding: "10px 20px",
                                borderRadius: "25px",
                                border: "1px solid #cbd5e1",
                                background: "#fff",
                                color: "#1e293b",
                                fontSize: "14px",
                                fontWeight: 600,
                                cursor: "pointer",
                              }}
                            >
                              Apply / Inquire
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Comprehensive Curriculum Solutions Showcase */}
            <div className="col-lg-12 mt-5">
              <div
                style={{
                  background:
                    "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #eff6ff 100%)",
                  borderRadius: "24px",
                  padding: "40px 35px",
                  border: "2px solid #bae6fd",
                  boxShadow: "0 15px 35px rgba(2, 132, 199, 0.08)",
                }}
              >
                <div className="row align-items-center">
                  <div className="col-lg-5 text-center mb-4 mb-lg-0">
                    <picture>
                      <source
                        type="image/webp"
                        srcSet="/assets/images/video-thumb-430.webp 430w, /assets/images/video-thumb.webp 770w"
                        sizes="(max-width: 991px) 100vw, 430px"
                      />
                      <img
                        src="/assets/images/video-thumb.jpg"
                        alt="Curriculum Solutions & Academic Career Pathways"
                        width={770}
                        height={470}
                        loading="lazy"
                        decoding="async"
                        style={{
                          maxWidth: "100%",
                          maxHeight: "340px",
                          width: "auto",
                          display: "block",
                          margin: "0 auto",
                          filter:
                            "drop-shadow(0 12px 25px rgba(2, 132, 199, 0.18))",
                        }}
                      />
                    </picture>
                  </div>

                  <div className="col-lg-7">
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: 800,
                        color: "#0284c7",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        background: "rgba(2, 132, 199, 0.12)",
                        padding: "5px 14px",
                        borderRadius: "20px",
                        display: "inline-block",
                        marginBottom: "12px",
                      }}
                    >
                      End-to-End Curriculum Solutions
                    </span>
                    <h3
                      style={{
                        fontSize: "28px",
                        fontWeight: 800,
                        color: "#0f172a",
                        marginBottom: "14px",
                        lineHeight: "1.3",
                      }}
                    >
                      Empowering Institutions &amp; Students with{" "}
                      <span style={{ color: "#0284c7" }}>
                        Modern Academic Frameworks
                      </span>
                    </h3>
                    <p
                      style={{
                        color: "#475569",
                        fontSize: "15px",
                        lineHeight: "1.7",
                        marginBottom: "20px",
                      }}
                    >
                      From accredited university degree pathways (BBA, BCA,
                      B.Com, MBA, MCA) to K-12 STEM curriculum design and
                      AI-driven English communication labs, we provide turnkey
                      curriculum implementation for schools, colleges, and
                      working professionals.
                    </p>

                    <div className="row g-3 mb-4">
                      <div className="col-sm-6">
                        <div
                          style={{
                            background: "#ffffff",
                            padding: "12px 16px",
                            borderRadius: "12px",
                            border: "1px solid #e0f2fe",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                        >
                          <i
                            className="fa fa-university"
                            style={{ color: "#0284c7", fontSize: "18px" }}
                          ></i>
                          <div>
                            <div
                              style={{
                                fontSize: "13px",
                                fontWeight: 700,
                                color: "#0f172a",
                              }}
                            >
                              UGC &amp; NAAC Recognized
                            </div>
                            <div style={{ fontSize: "11px", color: "#64748b" }}>
                              Accredited university partners
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-sm-6">
                        <div
                          style={{
                            background: "#ffffff",
                            padding: "12px 16px",
                            borderRadius: "12px",
                            border: "1px solid #e0f2fe",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                        >
                          <i
                            className="fa fa-book"
                            style={{ color: "#0284c7", fontSize: "18px" }}
                          ></i>
                          <div>
                            <div
                              style={{
                                fontSize: "13px",
                                fontWeight: 700,
                                color: "#0f172a",
                              }}
                            >
                              IIT &amp; NEET Foundation
                            </div>
                            <div style={{ fontSize: "11px", color: "#64748b" }}>
                              Customized school syllabus
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-sm-6">
                        <div
                          style={{
                            background: "#ffffff",
                            padding: "12px 16px",
                            borderRadius: "12px",
                            border: "1px solid #e0f2fe",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                        >
                          <i
                            className="fa fa-language"
                            style={{ color: "#0284c7", fontSize: "18px" }}
                          ></i>
                          <div>
                            <div
                              style={{
                                fontSize: "13px",
                                fontWeight: 700,
                                color: "#0f172a",
                              }}
                            >
                              AI English Language Lab
                            </div>
                            <div style={{ fontSize: "11px", color: "#64748b" }}>
                              CEFR-aligned phonetics
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-sm-6">
                        <div
                          style={{
                            background: "#ffffff",
                            padding: "12px 16px",
                            borderRadius: "12px",
                            border: "1px solid #e0f2fe",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                        >
                          <i
                            className="fa fa-handshake-o"
                            style={{ color: "#0284c7", fontSize: "18px" }}
                          ></i>
                          <div>
                            <div
                              style={{
                                fontSize: "13px",
                                fontWeight: 700,
                                color: "#0f172a",
                              }}
                            >
                              Industry Placement Tie-ups
                            </div>
                            <div style={{ fontSize: "11px", color: "#64748b" }}>
                              Global corporate network
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}
                    >
                      <Link
                        to="/edu-solutions"
                        className="main-gradient-button"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "8px",
                          padding: "12px 26px",
                          fontSize: "14px",
                        }}
                      >
                        <span>Higher Ed Solutions</span>
                        <i className="fa fa-arrow-right"></i>
                      </Link>

                      <Link
                        to="/gen-learning-solutions"
                        style={{
                          padding: "12px 24px",
                          borderRadius: "25px",
                          border: "2px solid #0284c7",
                          background: "#ffffff",
                          color: "#0284c7",
                          fontSize: "14px",
                          fontWeight: 700,
                          textDecoration: "none",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "8px",
                          transition: "all 0.2s",
                        }}
                      >
                        <span>K-12 STEM &amp; AI Labs</span>
                        <i
                          className="fa fa-chevron-right"
                          style={{ fontSize: "11px" }}
                        ></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ***** Why Choose Future Edu Group ***** */}
      <section
        className="home-section-pattern home-pattern-three"
        style={{
          padding: "80px 0",
          background:
            "linear-gradient(135deg, #091e42 0%, #1e3a8a 60%, #1d4ed8 100%)",
          color: "#fff",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 mb-4 mb-lg-0">
              <span
                style={{
                  fontSize: "13px",
                  color: "#60a5fa",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                Why Choose Us
              </span>
              <h2
                style={{
                  fontSize: "36px",
                  fontWeight: 800,
                  color: "#fff",
                  marginTop: "10px",
                  marginBottom: "20px",
                }}
              >
                Building Future-Ready Leaders with Real Industry Impact
              </h2>
              <p
                style={{
                  color: "#cbd5e1",
                  fontSize: "15px",
                  lineHeight: "1.8",
                  marginBottom: "25px",
                }}
              >
                We combine hands-on practical vocational training,
                UGC-recognized university partnerships, and innovative K-12
                curricula into a comprehensive education ecosystem.
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "20px",
                }}
              >
                <div
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    padding: "18px",
                    borderRadius: "12px",
                    border: "1px solid rgba(255,255,255,0.15)",
                  }}
                >
                  <div
                    style={{
                      fontSize: "28px",
                      fontWeight: 800,
                      color: "#38bdf8",
                    }}
                  >
                    15,000+
                  </div>
                  <div style={{ fontSize: "13px", color: "#cbd5e1" }}>
                    Students Guided
                  </div>
                </div>
                <div
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    padding: "18px",
                    borderRadius: "12px",
                    border: "1px solid rgba(255,255,255,0.15)",
                  }}
                >
                  <div
                    style={{
                      fontSize: "28px",
                      fontWeight: 800,
                      color: "#38bdf8",
                    }}
                  >
                    120+
                  </div>
                  <div style={{ fontSize: "13px", color: "#cbd5e1" }}>
                    Partner Schools
                  </div>
                </div>
                <div
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    padding: "18px",
                    borderRadius: "12px",
                    border: "1px solid rgba(255,255,255,0.15)",
                  }}
                >
                  <div
                    style={{
                      fontSize: "28px",
                      fontWeight: 800,
                      color: "#38bdf8",
                    }}
                  >
                    100%
                  </div>
                  <div style={{ fontSize: "13px", color: "#cbd5e1" }}>
                    Placement Guidance
                  </div>
                </div>
                <div
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    padding: "18px",
                    borderRadius: "12px",
                    border: "1px solid rgba(255,255,255,0.15)",
                  }}
                >
                  <div
                    style={{
                      fontSize: "28px",
                      fontWeight: 800,
                      color: "#38bdf8",
                    }}
                  >
                    30+
                  </div>
                  <div style={{ fontSize: "13px", color: "#cbd5e1" }}>
                    University Pathways
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <div
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      padding: "25px",
                      borderRadius: "14px",
                      height: "100%",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    <i
                      className="fa fa-ship"
                      style={{
                        fontSize: "28px",
                        color: "#38bdf8",
                        marginBottom: "15px",
                      }}
                    ></i>
                    <h4
                      style={{
                        fontSize: "18px",
                        fontWeight: 700,
                        color: "#fff",
                        marginBottom: "10px",
                      }}
                    >
                      Global Cruise & Hotel Placement
                    </h4>
                    <p
                      style={{
                        fontSize: "13px",
                        color: "#cbd5e1",
                        lineHeight: "1.7",
                        margin: 0,
                      }}
                    >
                      Direct recruitment ties with international luxury cruise
                      lines and leading 5-star hotel chains.
                    </p>
                  </div>
                </div>

                <div className="col-md-6 mb-3">
                  <div
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      padding: "25px",
                      borderRadius: "14px",
                      height: "100%",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    <i
                      className="fa fa-briefcase"
                      style={{
                        fontSize: "28px",
                        color: "#38bdf8",
                        marginBottom: "15px",
                      }}
                    ></i>
                    <h4
                      style={{
                        fontSize: "18px",
                        fontWeight: 700,
                        color: "#fff",
                        marginBottom: "10px",
                      }}
                    >
                      Working Professional Support
                    </h4>
                    <p
                      style={{
                        fontSize: "13px",
                        color: "#cbd5e1",
                        lineHeight: "1.7",
                        margin: 0,
                      }}
                    >
                      Tailored higher education degree admissions with flexible
                      online/distance learning formats.
                    </p>
                  </div>
                </div>

                <div className="col-md-6 mb-3">
                  <div
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      padding: "25px",
                      borderRadius: "14px",
                      height: "100%",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    <i
                      className="fa fa-book"
                      style={{
                        fontSize: "28px",
                        color: "#38bdf8",
                        marginBottom: "15px",
                      }}
                    ></i>
                    <h4
                      style={{
                        fontSize: "18px",
                        fontWeight: 700,
                        color: "#fff",
                        marginBottom: "10px",
                      }}
                    >
                      Concept-Based STEM Pedagogy
                    </h4>
                    <p
                      style={{
                        fontSize: "13px",
                        color: "#cbd5e1",
                        lineHeight: "1.7",
                        margin: 0,
                      }}
                    >
                      Rigorous IIT Foundation curricula and graded books for
                      school students in Grades 6–10.
                    </p>
                  </div>
                </div>

                <div className="col-md-6 mb-3">
                  <div
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      padding: "25px",
                      borderRadius: "14px",
                      height: "100%",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    <i
                      className="fa fa-microphone"
                      style={{
                        fontSize: "28px",
                        color: "#38bdf8",
                        marginBottom: "15px",
                      }}
                    ></i>
                    <h4
                      style={{
                        fontSize: "18px",
                        fontWeight: 700,
                        color: "#fff",
                        marginBottom: "10px",
                      }}
                    >
                      AI-Powered Language Labs
                    </h4>
                    <p
                      style={{
                        fontSize: "13px",
                        color: "#cbd5e1",
                        lineHeight: "1.7",
                        margin: 0,
                      }}
                    >
                      Real-time voice evaluation and CEFR-mapped speech
                      analytics for partner schools.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ***** Testimonials Area ***** */}
      <section
        className="testimonials home-section-pattern home-pattern-four"
        id="testimonials"
        style={{ padding: "90px 0" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="section-heading">
                <h6>Success Stories</h6>
                <h4>
                  What Our Students & Partners <em>Say</em>
                </h4>
                <p>
                  Real experiences from graduates, working professionals, and
                  partner school principals.
                </p>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="row">
                {TESTIMONIALS.map((testi) => (
                  <div key={testi.id} className="col-lg-6 mb-4">
                    <div
                      style={{
                        background: "#fff",
                        borderRadius: "16px",
                        padding: "35px",
                        boxShadow: "0 10px 25px rgba(15, 23, 42, 0.05)",
                        border: "1px solid #e2e8f0",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "15px",
                          lineHeight: "1.8",
                          color: "#475569",
                          fontStyle: "italic",
                          marginBottom: "20px",
                        }}
                      >
                        “{testi.quote}”
                      </p>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "15px",
                        }}
                      >
                        <div
                          style={{
                            width: "48px",
                            height: "48px",
                            borderRadius: "50%",
                            background:
                              "linear-gradient(135deg, #1d4ed8 0%, #0ea5e9 100%)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#fff",
                            fontWeight: 700,
                          }}
                        >
                          {testi.name.charAt(0)}
                        </div>
                        <div>
                          <h4
                            style={{
                              fontSize: "16px",
                              fontWeight: 700,
                              margin: 0,
                              color: "#0f172a",
                            }}
                          >
                            {testi.name}
                          </h4>
                          <span style={{ fontSize: "13px", color: "#64748b" }}>
                            {testi.role} • {testi.organization}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ***** FAQ Accordion Section (with Schema.org Support) ***** */}
      <section
        className="home-section-pattern home-pattern-five"
        style={{ padding: "80px 0", background: "#f8fafc" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="section-heading">
                <h6>Frequently Asked Questions</h6>
                <h4>
                  Everything You Need to <em>Know</em>
                </h4>
                <p>
                  Find quick answers to common queries regarding our hospitality
                  academy, degree admissions, and school solutions.
                </p>
              </div>
            </div>

            <div className="col-lg-10 offset-lg-1">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "15px",
                }}
              >
                {FAQS.map((faq, index) => {
                  const isOpen = openFaqIndex === index;
                  return (
                    <div
                      key={index}
                      style={{
                        background: "#fff",
                        borderRadius: "12px",
                        border: isOpen
                          ? "1px solid #93c5fd"
                          : "1px solid #e2e8f0",
                        overflow: "hidden",
                        boxShadow: "0 4px 12px rgba(15, 23, 42, 0.03)",
                      }}
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                        style={{
                          width: "100%",
                          textAlign: "left",
                          padding: "20px 24px",
                          background: isOpen ? "#f0f7ff" : "none",
                          border: "none",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          cursor: "pointer",
                          fontWeight: 700,
                          fontSize: "16px",
                          color: isOpen ? "#2563eb" : "#0f172a",
                        }}
                      >
                        <span>{faq.question}</span>
                        <i
                          className={`fa ${isOpen ? "fa-minus" : "fa-plus"}`}
                          style={{ color: "#2563eb", fontSize: "14px" }}
                        ></i>
                      </button>
                      {isOpen && (
                        <div
                          style={{
                            padding: "0 24px 22px 24px",
                            fontSize: "14px",
                            lineHeight: "1.8",
                            color: "#475569",
                            borderTop: "1px solid #f1f5f9",
                            background: "#f0f7ff",
                          }}
                        >
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ***** Contact & Quick Consultation Section ***** */}
      <section
        className="contact-us home-section-pattern home-pattern-six"
        id="contact-section"
        style={{ padding: "90px 0" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 mb-5 mb-lg-0">
              <div className="section-heading" style={{ textAlign: "left" }}>
                <h6>Get in Touch</h6>
                <h4>
                  Connect with Our <em>Admissions Hub</em>
                </h4>
              </div>

              <div
                style={{
                  marginTop: "30px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <div
                  className="home-contact-item"
                  style={{ display: "flex", alignItems: "center", gap: "15px" }}
                >
                  <div
                    className="home-contact-icon"
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "12px",
                      background: "rgba(56, 189, 248, 0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#38bdf8",
                      fontSize: "20px",
                    }}
                  >
                    <i className="fa fa-envelope"></i>
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "12px",
                        color: "#94a3b8",
                        textTransform: "uppercase",
                        fontWeight: 700,
                      }}
                    >
                      Direct Email
                    </div>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      style={{
                        fontSize: "15px",
                        fontWeight: 600,
                        color: "#fff",
                        textDecoration: "none",
                      }}
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>

                <div
                  className="home-contact-item"
                  style={{ display: "flex", alignItems: "center", gap: "15px" }}
                >
                  <div
                    className="home-contact-icon"
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "12px",
                      background: "rgba(56, 189, 248, 0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#38bdf8",
                      fontSize: "20px",
                    }}
                  >
                    <i className="fa fa-phone"></i>
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "12px",
                        color: "#94a3b8",
                        textTransform: "uppercase",
                        fontWeight: 700,
                      }}
                    >
                      Call / WhatsApp
                    </div>
                    <a
                      href={`tel:${SITE_CONFIG.phone}`}
                      style={{
                        fontSize: "15px",
                        fontWeight: 600,
                        color: "#fff",
                        textDecoration: "none",
                      }}
                    >
                      {SITE_CONFIG.phone}
                    </a>
                  </div>
                </div>

                <div
                  className="home-contact-item"
                  style={{ display: "flex", alignItems: "center", gap: "15px" }}
                >
                  <div
                    className="home-contact-icon"
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "12px",
                      background: "rgba(56, 189, 248, 0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#38bdf8",
                      fontSize: "20px",
                    }}
                  >
                    <i className="fa fa-map-marker"></i>
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "12px",
                        color: "#94a3b8",
                        textTransform: "uppercase",
                        fontWeight: 700,
                      }}
                    >
                      Registered Office
                    </div>
                    <div
                      style={{
                        fontSize: "15px",
                        fontWeight: 600,
                        color: "#fff",
                      }}
                    >
                      {SITE_CONFIG.register_office.street},{" "}
                      {SITE_CONFIG.register_office.city},{" "}
                      {SITE_CONFIG.register_office.state}
                    </div>
                  </div>
                </div>
                <div
                  className="home-contact-item"
                  style={{ display: "flex", alignItems: "center", gap: "15px" }}
                >
                  <div
                    className="home-contact-icon"
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "12px",
                      background: "rgba(56, 189, 248, 0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#38bdf8",
                      fontSize: "20px",
                    }}
                  >
                    <i className="fa fa-map-marker"></i>
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "12px",
                        color: "#94a3b8",
                        textTransform: "uppercase",
                        fontWeight: 700,
                      }}
                    >
                      Corporate Office
                    </div>
                    <div
                      style={{
                        fontSize: "15px",
                        fontWeight: 600,
                        color: "#fff",
                      }}
                    >
                      {SITE_CONFIG.corporate_office.street},{" "}
                      {SITE_CONFIG.corporate_office.city},{" "}
                      {SITE_CONFIG.corporate_office.state}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <InquiryForm
                title="Request Free Counselling & Prospectus"
                subtitle="Start Your Educational Journey"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
