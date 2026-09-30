"use client";

import React from "react";
import { SEO } from "../components/SEO";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { InquiryForm } from "../components/InquiryForm";
import { getBreadcrumbSchema, getCourseSchema } from "../utils/schemaGenerator";
import { useInquiry } from "../contexts/InquiryContext";

interface EduSolutionsPageProps {
  onOpenInquiry?: (division?: string) => void;
}

export const EduSolutionsPage: React.FC<EduSolutionsPageProps> = () => {
  const onOpenInquiry = useInquiry();
  const breadcrumbs = [
    { name: "Future Edu Solutions", path: "/edu-solutions" },
  ];

  const pageSchema = [
    getBreadcrumbSchema(breadcrumbs),
    getCourseSchema(
      "Undergraduate & Postgraduate Admission Guidance",
      "Personalized educational guidance and admission assistance for students and working professionals.",
      "Future Edu Solutions",
    ),
  ];

  const missionPoints = [
    "Provide reliable and transparent educational guidance.",
    "Help students choose programs aligned with their career objectives.",
    "Support working professionals in continuing and upgrading their education.",
    "Simplify admission procedures through professional assistance.",
    "Connect eligible learners with recognized educational institutions and appropriate programs.",
    "Provide continuous support throughout the learner's educational journey.",
  ];

  const admissionSteps = [
    "Program selection",
    "Eligibility guidance",
    "Application assistance",
    "Documentation support",
    "Admission coordination",
    "Fee and academic-process guidance",
    "Student support and follow-up",
  ];

  return (
    <main>
      <SEO
        title="Future Edu Solutions | Empowering Education. Enabling Careers. Building Futures."
        description="Future Edu Solutions provides personalized educational guidance and admission assistance for undergraduate and postgraduate programs, supporting students and working professionals."
        canonicalPath="/edu-solutions"
        keywords={[
          "Future Edu Solutions",
          "Education Guidance",
          "Student Support Organization",
          "University Admission Guidance",
          "Working Professionals Degree Programs",
          "BBA BCA BCom Admission",
          "MBA MCA Admission Guidance",
        ]}
        schema={pageSchema}
      />

      <Breadcrumbs
        items={breadcrumbs}
        subtitle="Empowering Education. Enabling Careers. Building Futures."
        title="Future Edu Solutions"
      />

      {/* Main Intro */}
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
                Empowering Education. Enabling Careers. Building Futures.
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
                FUTURE EDU SOLUTIONS
              </h2>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "1.8",
                  color: "#475569",
                  marginBottom: "16px",
                }}
              >
                Future Edu Solutions is an education guidance and
                student-support organization committed to helping students and
                working professionals achieve their academic and career
                aspirations.
              </p>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "1.8",
                  color: "#475569",
                  marginBottom: "25px",
                }}
              >
                We believe that education should create opportunities,
                strengthen careers, and open doors to a better future. Through
                professional counselling, admission guidance, university
                coordination, and continuous student support, we help learners
                identify suitable educational pathways based on their
                qualifications, career goals, and individual circumstances.
              </p>
              <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
                <button
                  type="button"
                  onClick={() =>
                    onOpenInquiry && onOpenInquiry("Future Edu Solutions")
                  }
                  className="main-gradient-button"
                  style={{
                    border: "none",
                    padding: "12px 28px",
                    fontSize: "14px",
                    cursor: "pointer",
                  }}
                >
                  Request Admission Guidance
                </button>
              </div>
            </div>

            <div className="col-lg-6 text-center">
              <img
                src="/assets/images/team-member-02.jpg"
                alt="Future Edu Solutions Career & Degree Guidance"
                style={{
                  maxWidth: "100%",
                  maxHeight: "360px",
                  width: "auto",
                  display: "inline-block",
                  filter: "drop-shadow(0 15px 30px rgba(2, 132, 199, 0.15))",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Future Edu Solutions */}
      <section style={{ padding: "80px 0", background: "#f8fafc" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="section-heading">
                <h6>Who We Are</h6>
                <h4>
                  About <em>Future Edu Solutions</em>
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
                    marginBottom: "20px",
                  }}
                >
                  Choosing the right course and institution can have a
                  significant impact on a student&apos;s future. Future Edu
                  Solutions provides personalized educational guidance and
                  admission assistance to help students and professionals make
                  informed decisions.
                </p>
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.8",
                    color: "#475569",
                    marginBottom: "20px",
                  }}
                >
                  Our team supports learners at different stages of their
                  educational journey—from selecting an appropriate program and
                  institution to understanding admission procedures,
                  documentation, and academic requirements.
                </p>
                <div
                  style={{
                    padding: "20px",
                    background: "#f0f9ff",
                    borderRadius: "12px",
                    borderLeft: "4px solid #0284c7",
                  }}
                >
                  <p
                    style={{
                      fontSize: "15px",
                      color: "#0f172a",
                      fontWeight: 600,
                      margin: 0,
                    }}
                  >
                    We particularly support working professionals and
                    individuals who wish to continue or upgrade their education
                    while managing their professional and personal commitments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section style={{ padding: "80px 0", background: "#fff" }}>
        <div className="container">
          <div className="row">
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
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background: "#e0f2fe",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#0284c7",
                    fontSize: "22px",
                    marginBottom: "20px",
                  }}
                >
                  <i className="fa fa-eye"></i>
                </div>
                <h3
                  style={{
                    fontSize: "22px",
                    fontWeight: 700,
                    color: "#0f172a",
                    marginBottom: "16px",
                  }}
                >
                  Our Vision
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.8",
                    color: "#475569",
                    margin: 0,
                  }}
                >
                  To become a trusted education solutions organization that
                  empowers learners to achieve their academic ambitions and
                  build successful careers through accessible, transparent, and
                  career-oriented educational guidance.
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
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background: "#e0f2fe",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#0284c7",
                    fontSize: "22px",
                    marginBottom: "20px",
                  }}
                >
                  <i className="fa fa-bullseye"></i>
                </div>
                <h3
                  style={{
                    fontSize: "22px",
                    fontWeight: 700,
                    color: "#0f172a",
                    marginBottom: "16px",
                  }}
                >
                  Our Mission
                </h3>
                <p
                  style={{
                    fontSize: "14.5px",
                    color: "#475569",
                    marginBottom: "12px",
                    fontWeight: 600,
                  }}
                >
                  Our mission is to:
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  {missionPoints.map((point, mIdx) => (
                    <div
                      key={mIdx}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "10px",
                      }}
                    >
                      <i
                        className="fa fa-check-circle"
                        style={{
                          color: "#0284c7",
                          fontSize: "15px",
                          marginTop: "4px",
                          flexShrink: 0,
                        }}
                      ></i>
                      <span
                        style={{
                          fontSize: "14px",
                          color: "#334155",
                          lineHeight: 1.6,
                        }}
                      >
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section style={{ padding: "80px 0", background: "#f8fafc" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="section-heading">
                <h6>Educational Support</h6>
                <h4>
                  Our <em>Services</em>
                </h4>
              </div>
            </div>
          </div>

          <div className="row">
            {/* Service 1: Career & Education Counselling */}
            <div className="col-lg-6 mb-4">
              <div
                style={{
                  background: "#fff",
                  padding: "32px",
                  borderRadius: "16px",
                  border: "1px solid #e2e8f0",
                  height: "100%",
                  boxShadow: "0 4px 15px rgba(15, 23, 42, 0.03)",
                }}
              >
                <div
                  style={{
                    width: "45px",
                    height: "45px",
                    borderRadius: "10px",
                    background: "#f0f9ff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#0284c7",
                    fontSize: "20px",
                    marginBottom: "16px",
                  }}
                >
                  <i className="fa fa-comments"></i>
                </div>
                <h4
                  style={{
                    fontSize: "19px",
                    fontWeight: 700,
                    color: "#0f172a",
                    marginBottom: "12px",
                  }}
                >
                  Career &amp; Education Counselling
                </h4>
                <p
                  style={{
                    fontSize: "14.5px",
                    color: "#475569",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  Every learner has different ambitions, qualifications, and
                  circumstances. Our counselling process helps students
                  understand the educational opportunities available to them and
                  select an appropriate pathway.
                </p>
              </div>
            </div>

            {/* Service 2: University & College Admission Guidance */}
            <div className="col-lg-6 mb-4">
              <div
                style={{
                  background: "#fff",
                  padding: "32px",
                  borderRadius: "16px",
                  border: "1px solid #e2e8f0",
                  height: "100%",
                  boxShadow: "0 4px 15px rgba(15, 23, 42, 0.03)",
                }}
              >
                <div
                  style={{
                    width: "45px",
                    height: "45px",
                    borderRadius: "10px",
                    background: "#f0f9ff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#0284c7",
                    fontSize: "20px",
                    marginBottom: "16px",
                  }}
                >
                  <i className="fa fa-university"></i>
                </div>
                <h4
                  style={{
                    fontSize: "19px",
                    fontWeight: 700,
                    color: "#0f172a",
                    marginBottom: "12px",
                  }}
                >
                  University &amp; College Admission Guidance
                </h4>
                <p
                  style={{
                    fontSize: "14.5px",
                    color: "#475569",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  We assist eligible students in identifying suitable
                  universities, colleges, and educational programs based on
                  their academic background, preferred specialization, career
                  objectives, and applicable admission requirements.
                </p>
              </div>
            </div>

            {/* Service 3: Higher Education Opportunities */}
            <div className="col-lg-12 mb-4">
              <div
                style={{
                  background: "#fff",
                  padding: "36px",
                  borderRadius: "16px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 4px 15px rgba(15, 23, 42, 0.03)",
                }}
              >
                <div
                  style={{
                    width: "45px",
                    height: "45px",
                    borderRadius: "10px",
                    background: "#f0f9ff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#0284c7",
                    fontSize: "20px",
                    marginBottom: "16px",
                  }}
                >
                  <i className="fa fa-graduation-cap"></i>
                </div>
                <h4
                  style={{
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "#0f172a",
                    marginBottom: "12px",
                  }}
                >
                  Higher Education Opportunities
                </h4>
                <p
                  style={{
                    fontSize: "15px",
                    color: "#475569",
                    lineHeight: 1.7,
                    marginBottom: "20px",
                  }}
                >
                  We provide guidance for a range of higher-education programs,
                  subject to eligibility and availability, including:
                </p>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <div
                      style={{
                        background: "#f8fafc",
                        padding: "20px",
                        borderRadius: "12px",
                        border: "1px solid #e2e8f0",
                      }}
                    >
                      <h5
                        style={{
                          fontSize: "16px",
                          fontWeight: 700,
                          color: "#0284c7",
                          marginBottom: "8px",
                        }}
                      >
                        Undergraduate Programs
                      </h5>
                      <p
                        style={{
                          fontSize: "14.5px",
                          fontWeight: 600,
                          color: "#0f172a",
                          margin: 0,
                        }}
                      >
                        BA &nbsp;|&nbsp; B.Com &nbsp;|&nbsp; B.Sc &nbsp;|&nbsp;
                        BBA &nbsp;|&nbsp; BCA and other programs
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div
                      style={{
                        background: "#f8fafc",
                        padding: "20px",
                        borderRadius: "12px",
                        border: "1px solid #e2e8f0",
                      }}
                    >
                      <h5
                        style={{
                          fontSize: "16px",
                          fontWeight: 700,
                          color: "#0284c7",
                          marginBottom: "8px",
                        }}
                      >
                        Postgraduate Programs
                      </h5>
                      <p
                        style={{
                          fontSize: "14.5px",
                          fontWeight: 600,
                          color: "#0f172a",
                          margin: 0,
                        }}
                      >
                        MA &nbsp;|&nbsp; M.Com &nbsp;|&nbsp; M.Sc &nbsp;|&nbsp;
                        MBA &nbsp;|&nbsp; MCA and other programs
                      </p>
                    </div>
                  </div>
                </div>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#64748b",
                    marginTop: "12px",
                    margin: 0,
                  }}
                >
                  We also provide information and guidance regarding selected
                  professional, diploma, postgraduate diploma, and
                  skill-oriented programs.
                </p>
              </div>
            </div>

            {/* Service 4: Support for Working Professionals */}
            <div className="col-lg-6 mb-4">
              <div
                style={{
                  background: "#fff",
                  padding: "32px",
                  borderRadius: "16px",
                  border: "1px solid #e2e8f0",
                  height: "100%",
                  boxShadow: "0 4px 15px rgba(15, 23, 42, 0.03)",
                }}
              >
                <div
                  style={{
                    width: "45px",
                    height: "45px",
                    borderRadius: "10px",
                    background: "#f0f9ff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#0284c7",
                    fontSize: "20px",
                    marginBottom: "16px",
                  }}
                >
                  <i className="fa fa-briefcase"></i>
                </div>
                <h4
                  style={{
                    fontSize: "19px",
                    fontWeight: 700,
                    color: "#0f172a",
                    marginBottom: "12px",
                  }}
                >
                  Support for Working Professionals
                </h4>
                <div
                  style={{
                    padding: "8px 14px",
                    background: "#e0f2fe",
                    borderRadius: "8px",
                    color: "#0284c7",
                    fontWeight: 700,
                    fontSize: "13.5px",
                    marginBottom: "14px",
                    display: "inline-block",
                  }}
                >
                  Your career should not stop your educational growth.
                </div>
                <p
                  style={{
                    fontSize: "14.5px",
                    color: "#475569",
                    lineHeight: 1.7,
                    marginBottom: "14px",
                  }}
                >
                  Future Edu Solutions helps working professionals explore
                  suitable higher-education opportunities that can complement
                  their employment, business, or other responsibilities.
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#475569",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  Our counsellors help candidates understand available learning
                  formats, eligibility criteria, program requirements, and
                  institutional regulations before enrolment.
                </p>
              </div>
            </div>

            {/* Service 5: Admission & Documentation Assistance */}
            <div className="col-lg-6 mb-4">
              <div
                style={{
                  background: "#fff",
                  padding: "32px",
                  borderRadius: "16px",
                  border: "1px solid #e2e8f0",
                  height: "100%",
                  boxShadow: "0 4px 15px rgba(15, 23, 42, 0.03)",
                }}
              >
                <div
                  style={{
                    width: "45px",
                    height: "45px",
                    borderRadius: "10px",
                    background: "#f0f9ff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#0284c7",
                    fontSize: "20px",
                    marginBottom: "16px",
                  }}
                >
                  <i className="fa fa-file-text-o"></i>
                </div>
                <h4
                  style={{
                    fontSize: "19px",
                    fontWeight: 700,
                    color: "#0f172a",
                    marginBottom: "12px",
                  }}
                >
                  Admission &amp; Documentation Assistance
                </h4>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#475569",
                    marginBottom: "14px",
                  }}
                >
                  Our team assists students with the admission process,
                  including:
                </p>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: "8px",
                  }}
                >
                  {admissionSteps.map((step, sIdx) => (
                    <div
                      key={sIdx}
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
                          fontSize: "13.5px",
                          color: "#334155",
                          fontWeight: 600,
                        }}
                      >
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Future Edu Solutions? */}
      <section style={{ padding: "80px 0", background: "#fff" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="section-heading">
                <h6>Key Highlights</h6>
                <h4>
                  Why Choose <em>Future Edu Solutions?</em>
                </h4>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div
                style={{
                  background: "#f8fafc",
                  padding: "32px",
                  borderRadius: "16px",
                  border: "1px solid #e2e8f0",
                  height: "100%",
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
                    marginBottom: "16px",
                  }}
                >
                  <i className="fa fa-user-circle-o"></i>
                </div>
                <h4
                  style={{
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "#0f172a",
                    marginBottom: "10px",
                  }}
                >
                  Personalized Guidance
                </h4>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#475569",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  We understand each student&apos;s educational background and
                  career aspirations before recommending suitable options.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div
                style={{
                  background: "#f8fafc",
                  padding: "32px",
                  borderRadius: "16px",
                  border: "1px solid #e2e8f0",
                  height: "100%",
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
                    marginBottom: "16px",
                  }}
                >
                  <i className="fa fa-users"></i>
                </div>
                <h4
                  style={{
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "#0f172a",
                    marginBottom: "10px",
                  }}
                >
                  Support for Students &amp; Professionals
                </h4>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#475569",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  Our services are designed for fresh students as well as
                  working professionals seeking further education.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div
                style={{
                  background: "#f8fafc",
                  padding: "32px",
                  borderRadius: "16px",
                  border: "1px solid #e2e8f0",
                  height: "100%",
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
                    marginBottom: "16px",
                  }}
                >
                  <i className="fa fa-compass"></i>
                </div>
                <h4
                  style={{
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "#0f172a",
                    marginBottom: "10px",
                  }}
                >
                  Multiple Educational Opportunities
                </h4>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#475569",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  We help learners explore undergraduate, postgraduate, diploma,
                  professional, and career-oriented educational pathways.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section style={{ padding: "80px 0", background: "#f8fafc" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 mb-4 mb-lg-0">
              <div className="section-heading" style={{ textAlign: "left" }}>
                <h6>Get in Touch</h6>
                <h4>
                  Admission <em>Guidance</em>
                </h4>
                <p>
                  Connect with our education advisors for personalized
                  counseling, course eligibility checks, and university options.
                </p>
              </div>
              <div
                style={{
                  background: "#fff",
                  padding: "25px",
                  borderRadius: "14px",
                  border: "1px solid #e2e8f0",
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
                  Transparent &amp; Reliable Guidance:
                </h5>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#475569",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  We support learners at every stage of their journey, ensuring
                  clear documentation, timely admissions, and complete academic
                  process guidance.
                </p>
              </div>
            </div>

            <div className="col-lg-7">
              <InquiryForm
                initialDivision="Future Edu Solutions"
                title="Connect with Future Edu Solutions"
                subtitle="Higher Education Admission Guidance"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
