"use client";

import React from "react";
import { SEO } from "../components/SEO";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { InquiryForm } from "../components/InquiryForm";
import { getBreadcrumbSchema, getCourseSchema } from "../utils/schemaGenerator";
import { useInquiry } from "../contexts/InquiryContext";

interface TourismHospitalityPageProps {
  onOpenInquiry?: (division?: string) => void;
}

export const TourismHospitalityPage: React.FC<
  TourismHospitalityPageProps
> = () => {
  const onOpenInquiry = useInquiry();
  const breadcrumbs = [
    { name: "Tourism & Hospitality Academy", path: "/tourism-hospitality" },
  ];

  const pageSchema = [
    getBreadcrumbSchema(breadcrumbs),
    getCourseSchema(
      "Future Academy of Tourism and Hospitality Management Programs",
      "Career-focused practical hospitality training for hotels, luxury cruise lines, airlines, and resort operations.",
      "Future Academy of Tourism and Hospitality Management",
    ),
  ];

  const careerSectors = [
    "Hotels & Resorts",
    "Cruise Lines",
    "Airlines & Aviation Hospitality",
    "Tourism Companies",
    "Travel Management Companies",
    "Restaurants & Food Service",
    "Event Management",
    "Guest Relations",
    "Front Office Operations",
    "Food & Beverage Services",
    "Housekeeping Operations",
    "Tour Operations & Destination Services",
  ];

  const whyChooseFeatures = [
    {
      title: "Career-Oriented Education",
      desc: "Our curriculum and training approach focus on developing skills relevant to the requirements of today's hospitality, tourism and travel industries.",
      icon: "fa-graduation-cap",
    },
    {
      title: "Practical Learning",
      desc: "Students are encouraged to learn through practical sessions, demonstrations, industry-oriented activities and real-world hospitality scenarios.",
      icon: "fa-cogs",
    },
    {
      title: "Professional Grooming",
      desc: "Hospitality is about creating exceptional experiences. We focus on communication, presentation, personality development, workplace etiquette and professional grooming.",
      icon: "fa-user-tie",
    },
    {
      title: "Communication Skills",
      desc: "Strong communication is essential for a successful hospitality career. Students receive support to improve their English communication, interpersonal and customer-service skills.",
      icon: "fa-comments-o",
    },
    {
      title: "Industry Exposure",
      desc: "We aim to provide students with exposure to professional hospitality and tourism environments so they can understand industry expectations before beginning their careers.",
      icon: "fa-briefcase",
    },
    {
      title: "Global Career Orientation",
      desc: "Our training helps students understand career opportunities in both Indian and international hospitality and tourism markets.",
      icon: "fa-globe",
    },
    {
      title: "Placement Support",
      desc: "Our career-support team assists eligible students in preparing for employment opportunities through interview preparation, résumé development, career counselling and employer connections.",
      icon: "fa-handshake-o",
    },
  ];

  return (
    <main>
      <SEO
        title="Future Academy of Tourism and Hospitality Management | Learn. Experience. Explore. Build a Global Career."
        description="Future Academy of Tourism and Hospitality Management is a career-focused institution dedicated to preparing students for exciting opportunities in hotels, cruise lines, airlines, and tourism."
        canonicalPath="/tourism-hospitality"
        keywords={[
          "Future Academy of Tourism and Hospitality Management",
          "Hospitality and Tourism Career",
          "Cruise Line Jobs Course",
          "Hotel Management Training",
          "Airlines Hospitality Career",
          "Front Office Operations",
          "Food and Beverage Service Training",
        ]}
        schema={pageSchema}
      />

      <Breadcrumbs
        items={breadcrumbs}
        subtitle="Learn. Experience. Explore. Build a Global Career."
        title="Future Academy of Tourism and Hospitality Management"
      />

      {/* Academy Overview Section */}
      <section style={{ padding: "80px 0", background: "#fff" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <span
                style={{
                  fontSize: "13px",
                  color: "#0284c7",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                Learn. Experience. Explore. Build a Global Career.
              </span>
              <h2
                style={{
                  fontSize: "32px",
                  fontWeight: 800,
                  color: "#0f172a",
                  marginTop: "8px",
                  marginBottom: "20px",
                  lineHeight: 1.3,
                }}
              >
                FUTURE ACADEMY OF TOURISM AND HOSPITALITY MANAGEMENT
              </h2>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "1.8",
                  color: "#475569",
                  marginBottom: "16px",
                }}
              >
                Future Academy of Tourism and Hospitality Management is a
                career-focused institution dedicated to preparing students for
                exciting opportunities in the rapidly growing hospitality,
                tourism and travel industries.
              </p>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "1.8",
                  color: "#475569",
                  marginBottom: "16px",
                }}
              >
                Our objective goes beyond classroom education. We focus on
                developing industry-ready professionals through practical
                learning, professional skills, industry exposure, career
                guidance, and placement support.
              </p>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "1.8",
                  color: "#475569",
                  marginBottom: "25px",
                }}
              >
                From luxury hotels and resorts to cruise lines, airlines, travel
                companies and tourism organizations, the hospitality and tourism
                industry offers diverse career opportunities across India and
                around the world.
              </p>
              <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
                <button
                  type="button"
                  onClick={() =>
                    onOpenInquiry &&
                    onOpenInquiry(
                      "Future Academy of Tourism and Hospitality Management",
                    )
                  }
                  className="main-gradient-button"
                  style={{
                    border: "none",
                    padding: "12px 28px",
                    fontSize: "14px",
                    cursor: "pointer",
                  }}
                >
                  Apply for Admission
                </button>
              </div>
            </div>

            <div className="col-lg-6">
              <div style={{ position: "relative", textAlign: "center" }}>
                <img
                  src="/assets/images/courses-02.jpg"
                  alt="Future Academy of Tourism and Hospitality Management"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    display: "inline-block",
                    filter: "drop-shadow(0 15px 30px rgba(2, 132, 199, 0.15))",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section style={{ padding: "80px 0", background: "#f8fafc" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div
                className="section-heading text-center"
                style={{ marginBottom: "40px" }}
              >
                <h6>About Us</h6>
                <h4>
                  Bridging Academic Learning and <em>Industry Expectations</em>
                </h4>
              </div>
            </div>
            <div className="col-lg-10 offset-lg-1">
              <div
                style={{
                  background: "#fff",
                  borderRadius: "20px",
                  padding: "40px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 10px 30px rgba(15, 23, 42, 0.05)",
                }}
              >
                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: "1.8",
                    color: "#334155",
                    marginBottom: "24px",
                    fontWeight: 500,
                  }}
                >
                  At Future Academy of Tourism and Hospitality Management, we
                  believe that the right combination of education, practical
                  skills, professional grooming and industry exposure can
                  transform a student&apos;s career.
                </p>
                <h5
                  style={{
                    fontSize: "17px",
                    fontWeight: 700,
                    color: "#0f172a",
                    marginBottom: "16px",
                  }}
                >
                  Our programs are designed for students who aspire to build
                  careers in:
                </h5>
                <div className="row">
                  {careerSectors.map((sector, index) => (
                    <div key={index} className="col-md-6 col-lg-4 mb-3">
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          background: "#f0f9ff",
                          padding: "12px 16px",
                          borderRadius: "10px",
                          border: "1px solid #e0f2fe",
                        }}
                      >
                        <i
                          className="fa fa-check-circle"
                          style={{
                            color: "#0284c7",
                            fontSize: "16px",
                            flexShrink: 0,
                          }}
                        ></i>
                        <span
                          style={{
                            fontSize: "14px",
                            fontWeight: 600,
                            color: "#0f172a",
                          }}
                        >
                          {sector}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <div
                  style={{
                    marginTop: "20px",
                    padding: "16px 20px",
                    background: "#f8fafc",
                    borderRadius: "12px",
                    borderLeft: "4px solid #0284c7",
                  }}
                >
                  <p
                    style={{
                      margin: 0,
                      fontSize: "15px",
                      color: "#0f172a",
                      fontWeight: 600,
                    }}
                  >
                    We aim to bridge the gap between academic learning and
                    industry expectations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY HOSPITALITY & TOURISM? Section */}
      <section style={{ padding: "80px 0", background: "#fff" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="section-heading">
                <h6>Global Horizons</h6>
                <h4>
                  WHY HOSPITALITY &amp; <em>TOURISM?</em>
                </h4>
              </div>
            </div>

            <div className="col-lg-6 mb-4">
              <div
                style={{
                  background: "#f8fafc",
                  padding: "36px",
                  borderRadius: "18px",
                  border: "1px solid #e2e8f0",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    padding: "8px 16px",
                    background: "#e0f2fe",
                    color: "#0284c7",
                    borderRadius: "30px",
                    fontWeight: 700,
                    fontSize: "13px",
                    marginBottom: "16px",
                  }}
                >
                  A Career Without Borders
                </div>
                <h3
                  style={{
                    fontSize: "22px",
                    fontWeight: 700,
                    color: "#0f172a",
                    marginBottom: "16px",
                  }}
                >
                  A Truly Global Industry
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.8",
                    color: "#475569",
                    marginBottom: "16px",
                  }}
                >
                  Hospitality and tourism is a truly global industry.
                </p>
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.8",
                    color: "#475569",
                    marginBottom: "16px",
                  }}
                >
                  Qualified and skilled professionals can explore career
                  opportunities across India and international destinations in
                  hotels, resorts, cruise lines, travel companies, airlines and
                  other service industries.
                </p>
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.8",
                    color: "#475569",
                    margin: 0,
                  }}
                >
                  The sector offers opportunities for young professionals to
                  develop their careers while gaining exposure to different
                  cultures, destinations and international service standards.
                </p>
              </div>
            </div>

            <div className="col-lg-6 mb-4">
              <div
                style={{
                  background: "#f8fafc",
                  padding: "36px",
                  borderRadius: "18px",
                  border: "1px solid #e2e8f0",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    padding: "8px 16px",
                    background: "#e0f2fe",
                    color: "#0284c7",
                    borderRadius: "30px",
                    fontWeight: 700,
                    fontSize: "13px",
                    marginBottom: "16px",
                  }}
                >
                  Diverse Avenues
                </div>
                <h3
                  style={{
                    fontSize: "22px",
                    fontWeight: 700,
                    color: "#0f172a",
                    marginBottom: "16px",
                  }}
                >
                  One Qualification. Multiple Career Pathways.
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.8",
                    color: "#475569",
                    marginBottom: "20px",
                  }}
                >
                  A hospitality and tourism education can prepare students for
                  careers in:
                </p>
                <div
                  style={{
                    background: "#fff",
                    padding: "20px",
                    borderRadius: "12px",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <p
                    style={{
                      fontSize: "15px",
                      fontWeight: 700,
                      color: "#0284c7",
                      lineHeight: "1.9",
                      margin: 0,
                      textAlign: "center",
                    }}
                  >
                    Luxury Hotels &nbsp;|&nbsp; International Resorts
                    &nbsp;|&nbsp; Cruise Ships &nbsp;|&nbsp; Airlines
                    &nbsp;|&nbsp; Travel Companies &nbsp;|&nbsp; Tourism
                    Organizations &nbsp;|&nbsp; Restaurants &nbsp;|&nbsp; Events
                    &nbsp;|&nbsp; Guest Relations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE FUTURE ACADEMY? */}
      <section style={{ padding: "80px 0", background: "#f8fafc" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="section-heading">
                <h6>Institutional Strengths</h6>
                <h4>
                  WHY CHOOSE <em>FUTURE ACADEMY?</em>
                </h4>
              </div>
            </div>
          </div>

          <div className="row">
            {whyChooseFeatures.map((item, idx) => (
              <div
                key={idx}
                className={
                  idx === whyChooseFeatures.length - 1
                    ? "col-lg-12 mb-4"
                    : "col-lg-6 mb-4"
                }
              >
                <div
                  style={{
                    background: "#fff",
                    borderRadius: "16px",
                    padding: "30px",
                    boxShadow: "0 4px 20px rgba(15, 23, 42, 0.04)",
                    height: "100%",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "16px",
                      alignItems: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "12px",
                        background: "#f0f9ff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#0284c7",
                        fontSize: "20px",
                        flexShrink: 0,
                      }}
                    >
                      <i className={`fa ${item.icon}`}></i>
                    </div>
                    <div>
                      <h4
                        style={{
                          fontSize: "18px",
                          fontWeight: 700,
                          marginBottom: "8px",
                          color: "#0f172a",
                        }}
                      >
                        {item.title}
                      </h4>
                      <p
                        style={{
                          fontSize: "14px",
                          color: "#475569",
                          lineHeight: 1.7,
                          margin: 0,
                        }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAREER OPPORTUNITIES */}
      <section style={{ padding: "80px 0", background: "#fff" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="section-heading">
                <h6>Career Pathways</h6>
                <h4>
                  CAREER <em>OPPORTUNITIES</em>
                </h4>
                <p>Where Can Your Hospitality Career Take You?</p>
              </div>
            </div>

            {/* Cruise Industry */}
            <div className="col-lg-6 mb-4">
              <div
                style={{
                  background: "#f8fafc",
                  borderRadius: "20px",
                  padding: "36px",
                  border: "1px solid #e2e8f0",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "16px",
                  }}
                >
                  <div
                    style={{
                      width: "45px",
                      height: "45px",
                      borderRadius: "10px",
                      background: "#e0f2fe",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#0284c7",
                      fontSize: "20px",
                    }}
                  >
                    <i className="fa fa-ship"></i>
                  </div>
                  <h3
                    style={{
                      fontSize: "22px",
                      fontWeight: 700,
                      color: "#0f172a",
                      margin: 0,
                    }}
                  >
                    Cruise Industry
                  </h3>
                </div>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#475569",
                    lineHeight: 1.7,
                    marginBottom: "16px",
                  }}
                >
                  Cruise lines require professionals across multiple hospitality
                  functions, including:
                </p>
                <div className="row mb-3">
                  {[
                    "Food & Beverage Services",
                    "Guest Services",
                    "Housekeeping",
                    "Culinary Operations",
                    "Front Office",
                    "Customer Relations",
                  ].map((role, rIdx) => (
                    <div key={rIdx} className="col-sm-6 mb-2">
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        <i
                          className="fa fa-check"
                          style={{ color: "#0284c7", fontSize: "13px" }}
                        ></i>
                        <span
                          style={{
                            fontSize: "14px",
                            color: "#334155",
                            fontWeight: 600,
                          }}
                        >
                          {role}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <div
                  style={{
                    background: "#fff",
                    padding: "16px",
                    borderRadius: "10px",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <p
                    style={{
                      fontSize: "13.5px",
                      color: "#0f172a",
                      margin: 0,
                      fontWeight: 500,
                    }}
                  >
                    A cruise career can provide valuable international work
                    exposure and experience in a multicultural environment.
                  </p>
                </div>
              </div>
            </div>

            {/* Hotels & Resorts */}
            <div className="col-lg-6 mb-4">
              <div
                style={{
                  background: "#f8fafc",
                  borderRadius: "20px",
                  padding: "36px",
                  border: "1px solid #e2e8f0",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "16px",
                  }}
                >
                  <div
                    style={{
                      width: "45px",
                      height: "45px",
                      borderRadius: "10px",
                      background: "#e0f2fe",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#0284c7",
                      fontSize: "20px",
                    }}
                  >
                    <i className="fa fa-building"></i>
                  </div>
                  <h3
                    style={{
                      fontSize: "22px",
                      fontWeight: 700,
                      color: "#0f172a",
                      margin: 0,
                    }}
                  >
                    Hotels &amp; Resorts
                  </h3>
                </div>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#475569",
                    lineHeight: 1.7,
                    marginBottom: "16px",
                  }}
                >
                  Students can explore opportunities with:
                </p>
                <div className="row mb-3">
                  {[
                    "Luxury Hotels",
                    "Five-Star Hotels",
                    "International Hotel Chains",
                    "Resorts",
                    "Boutique Hotels",
                    "Restaurants",
                  ].map((venue, vIdx) => (
                    <div key={vIdx} className="col-sm-6 mb-2">
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        <i
                          className="fa fa-check"
                          style={{ color: "#0284c7", fontSize: "13px" }}
                        ></i>
                        <span
                          style={{
                            fontSize: "14px",
                            color: "#334155",
                            fontWeight: 600,
                          }}
                        >
                          {venue}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <div
                  style={{
                    background: "#fff",
                    padding: "16px",
                    borderRadius: "10px",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <p
                    style={{
                      fontSize: "13.5px",
                      color: "#0f172a",
                      margin: 0,
                      fontWeight: 500,
                    }}
                  >
                    Potential career areas include front office, guest service,
                    food &amp; beverage operations, and management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Application Form */}
      <section style={{ padding: "80px 0", background: "#f8fafc" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 mb-4 mb-lg-0">
              <div className="section-heading" style={{ textAlign: "left" }}>
                <h6>Get in Touch</h6>
                <h4>
                  Admissions &amp; <em>Inquiries</em>
                </h4>
                <p>
                  Reach out to our academic counsellors for course details,
                  eligibility checks, and upcoming batch schedules.
                </p>
              </div>
              <div
                style={{
                  background: "#fff",
                  padding: "25px",
                  borderRadius: "14px",
                  border: "1px solid #e2e8f0",
                  marginBottom: "20px",
                }}
              >
                <h5
                  style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "#0f172a",
                    marginBottom: "10px",
                  }}
                >
                  Placement &amp; Career Guidance:
                </h5>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#475569",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  Our career-support team assists eligible students in preparing
                  for employment opportunities through interview preparation,
                  résumé development, career counselling and employer
                  connections.
                </p>
              </div>
            </div>

            <div className="col-lg-7">
              <InquiryForm
                initialDivision="Future Academy of Tourism and Hospitality Management"
                title="Apply to Future Academy"
                subtitle="Future Academy of Tourism and Hospitality Management"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
