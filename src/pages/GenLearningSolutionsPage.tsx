import React from 'react';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { InquiryForm } from '../components/InquiryForm';
import { AILabSimulator } from '../components/AILabSimulator';
import { getBreadcrumbSchema, getCourseSchema } from '../utils/schemaGenerator';

interface GenLearningSolutionsPageProps {
  onOpenInquiry?: (division?: string) => void;
}

export const GenLearningSolutionsPage: React.FC<GenLearningSolutionsPageProps> = ({ onOpenInquiry }) => {
  const breadcrumbs = [{ name: 'Future Gen Learning Solutions', path: '/gen-learning-solutions' }];

  const pageSchema = [
    getBreadcrumbSchema(breadcrumbs),
    getCourseSchema(
      'IIT Foundation Program & Books',
      'Strong Foundations Today. Competitive Success Tomorrow. Comprehensive academic foundation for Mathematics, Physics, Chemistry, and Biology.',
      'Future Gen Learning Solutions'
    ),
    getCourseSchema(
      'AI-Based English Language Lab',
      'Learn English. Speak Confidently. Communicate Globally. Interactive AI-powered speech recognition, pronunciation, and language practice.',
      'Future Gen Learning Solutions'
    )
  ];

  const studentBenefits = [
    'Strong conceptual understanding',
    'Mathematical ability',
    'Scientific thinking',
    'Problem-solving skills',
    'Analytical ability',
    'Examination confidence',
    'Competitive-exam awareness',
    'Consistent academic performance'
  ];

  const iitFeatures = [
    {
      title: 'Concept-Based Learning',
      desc: 'Students are encouraged to understand why and how, rather than simply memorizing formulas and answers.'
    },
    {
      title: 'Competitive Exam Orientation',
      desc: 'The program introduces students to structured problem-solving and competitive-style questions at an appropriate school level.'
    },
    {
      title: 'Practice & Assessment',
      desc: "Regular exercises and assessments help identify students' strengths and areas requiring improvement."
    },
    {
      title: 'AI-Based Assessments & Spot Analysis',
      desc: 'Technology-enabled assessment can help schools and teachers understand student performance and identify learning gaps for more focused academic support.'
    },
    {
      title: 'Progressive Learning',
      desc: 'Concepts and difficulty levels are structured progressively so that students can build their abilities year after year.'
    }
  ];

  return (
    <main>
      <SEO
        title="Future Gen Learning Solutions | Empowering Schools. Enhancing Learning. Preparing Future-Ready Students."
        description="Future Gen Learning Solutions provides K-12 school solutions: IIT Foundation Program & Books and AI-Based English Language Lab."
        canonicalPath="/gen-learning-solutions"
        keywords={[
          'Future Gen Learning Solutions',
          'IIT Foundation Program and Books',
          'AI-Based English Language Lab',
          'School Educational Solutions',
          'Competitive Exam Foundation',
          'English Communication for Schools'
        ]}
        schema={pageSchema}
      />

      <Breadcrumbs
        items={breadcrumbs}
        subtitle="Empowering Schools. Enhancing Learning. Preparing Future-Ready Students."
        title="Future Gen Learning Solutions"
      />

      {/* Intro Hero for Schools */}
      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <span style={{ fontSize: '13px', color: '#0284c7', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>
                Empowering Schools. Enhancing Learning. Preparing Future-Ready Students.
              </span>
              <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#0f172a', marginTop: '8px', marginBottom: '20px', lineHeight: 1.3 }}>
                FUTURE GEN LEARNING SOLUTIONS
              </h2>
              <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#475569', marginBottom: '16px' }}>
                Future Gen Learning Solutions is an innovative education solutions provider focused on helping schools strengthen academic excellence, competitive-exam readiness, English communication, and technology-enabled learning.
              </p>
              <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#475569', marginBottom: '25px' }}>
                We combine expert-designed academic content with AI-powered learning solutions to help schools prepare students for the demands of higher education and the future.
              </p>
              <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                <button
                  type="button"
                  onClick={() => onOpenInquiry && onOpenInquiry('Future Gen Learning Solutions - School Demo')}
                  className="main-gradient-button"
                  style={{ border: 'none', padding: '12px 28px', fontSize: '14px', cursor: 'pointer' }}
                >
                  Book School Demo / Request Info
                </button>
              </div>
            </div>

            <div className="col-lg-6">
              <div style={{ background: '#f0f9ff', padding: '35px', borderRadius: '20px', border: '1px solid #bfdbfe' }}>
                <h4 style={{ fontSize: '20px', fontWeight: 700, color: '#0f172a', marginBottom: '20px' }}>
                  Our Flagship School Solutions
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  <div style={{ background: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 10px rgba(15, 23, 42, 0.04)', display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                    <div style={{ width: '45px', height: '45px', borderRadius: '10px', background: 'rgba(2, 132, 199, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0284c7', fontSize: '20px', flexShrink: 0 }}>
                      <i className="fa fa-book"></i>
                    </div>
                    <div>
                      <h5 style={{ fontSize: '16px', fontWeight: 700, margin: 0, color: '#0f172a' }}>1. IIT Foundation Program &amp; Books</h5>
                      <p style={{ fontSize: '13px', color: '#0284c7', fontWeight: 600, margin: '3px 0 0 0' }}>Strong Foundations Today. Competitive Success Tomorrow.</p>
                    </div>
                  </div>

                  <div style={{ background: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 10px rgba(15, 23, 42, 0.04)', display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                    <div style={{ width: '45px', height: '45px', borderRadius: '10px', background: 'rgba(2, 132, 199, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0284c7', fontSize: '20px', flexShrink: 0 }}>
                      <i className="fa fa-microphone"></i>
                    </div>
                    <div>
                      <h5 style={{ fontSize: '16px', fontWeight: 700, margin: 0, color: '#0f172a' }}>2. AI-Based English Language Lab</h5>
                      <p style={{ fontSize: '13px', color: '#0284c7', fontWeight: 600, margin: '3px 0 0 0' }}>Learn English. Speak Confidently. Communicate Globally.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT FUTURE GEN LEARNING SOLUTIONS */}
      <section style={{ padding: '80px 0', background: '#f8fafc' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="section-heading">
                <h6>Core Philosophy</h6>
                <h4>ABOUT <em>FUTURE GEN LEARNING SOLUTIONS</em></h4>
              </div>
            </div>
            <div className="col-lg-10 offset-lg-1">
              <div style={{ background: '#fff', borderRadius: '20px', padding: '40px', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(15, 23, 42, 0.05)' }}>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#334155', marginBottom: '16px' }}>
                  Today&apos;s students require more than conventional classroom learning.
                </p>
                <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
                  They need strong concepts, analytical abilities, problem-solving skills, effective communication, confidence, and familiarity with technology.
                </p>
                <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#475569', marginBottom: '24px' }}>
                  Future Gen Learning Solutions works with schools to provide structured academic and technology-based learning solutions that complement classroom education.
                </p>
                <div style={{ padding: '20px', background: '#f0f9ff', borderRadius: '12px', borderLeft: '4px solid #0284c7' }}>
                  <h5 style={{ fontSize: '15px', fontWeight: 700, color: '#0284c7', marginBottom: '6px' }}>Our objective is simple:</h5>
                  <p style={{ fontSize: '15px', color: '#0f172a', fontWeight: 600, margin: 0 }}>
                    To help schools develop academically strong, confident and future-ready students.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FLAGSHIP SOLUTION 1: IIT FOUNDATION PROGRAM & BOOKS */}
      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-lg-12">
              <div className="section-heading text-center">
                <h6>Flagship Solution 1</h6>
                <h4>1. IIT FOUNDATION PROGRAM &amp; <em>BOOKS</em></h4>
                <p>Strong Foundations Today. Competitive Success Tomorrow.</p>
              </div>
            </div>

            <div className="col-lg-6 mb-4 mb-lg-0">
              <div style={{ display: 'inline-flex', padding: '8px 16px', background: '#e0f2fe', color: '#0284c7', borderRadius: '30px', fontWeight: 700, fontSize: '13px', marginBottom: '16px' }}>
                Build the Foundation Before the Competition Begins
              </div>
              <h3 style={{ fontSize: '26px', fontWeight: 800, color: '#0f172a', marginBottom: '16px' }}>
                Success in competitive examinations starts with strong fundamentals.
              </h3>
              <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#475569', marginBottom: '16px' }}>
                Our IIT Foundation Program is designed to strengthen students&apos; conceptual understanding in important subjects from the school level itself.
              </p>
              <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#475569', marginBottom: '24px' }}>
                The program helps students gradually develop the academic foundation and problem-solving approach required for future competitive examinations.
              </p>
              
              <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '14px', border: '1px solid #e2e8f0' }}>
                <h5 style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Core Subjects</h5>
                <p style={{ fontSize: '16px', fontWeight: 700, color: '#0284c7', margin: 0 }}>
                  Mathematics &nbsp;|&nbsp; Physics &nbsp;|&nbsp; Chemistry &nbsp;|&nbsp; Biology
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div style={{ background: '#f8fafc', padding: '30px', borderRadius: '18px', border: '1px solid #e2e8f0' }}>
                <h5 style={{ fontSize: '17px', fontWeight: 700, color: '#0f172a', marginBottom: '14px' }}>
                  Senior Subject Expert Curriculum:
                </h5>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.7, marginBottom: '20px' }}>
                  Our learning material is designed by senior subject experts with a strong focus on conceptual clarity, application-based learning and progressive skill development.
                </p>

                <h5 style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', marginBottom: '14px' }}>Key Features:</h5>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {iitFeatures.map((feat, fIdx) => (
                    <div key={fIdx} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                      <i className="fa fa-check-circle" style={{ color: '#0284c7', fontSize: '15px', marginTop: '4px', flexShrink: 0 }}></i>
                      <div>
                        <strong style={{ fontSize: '14px', color: '#0f172a' }}>{feat.title}: </strong>
                        <span style={{ fontSize: '13.5px', color: '#475569', lineHeight: 1.6 }}>{feat.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Benefits for Students & Preparing for Future */}
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div style={{ background: '#f0f9ff', padding: '32px', borderRadius: '18px', border: '1px solid #bfdbfe', height: '100%' }}>
                <h4 style={{ fontSize: '20px', fontWeight: 700, color: '#0f172a', marginBottom: '16px' }}>
                  Benefits for Students
                </h4>
                <p style={{ fontSize: '14px', color: '#475569', marginBottom: '16px' }}>
                  The IIT Foundation Program aims to develop:
                </p>
                <div className="row">
                  {studentBenefits.map((benefit, bIdx) => (
                    <div key={bIdx} className="col-sm-6 mb-2">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <i className="fa fa-check" style={{ color: '#0284c7', fontSize: '13px' }}></i>
                        <span style={{ fontSize: '14px', color: '#0f172a', fontWeight: 600 }}>{benefit}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-lg-6 mb-4">
              <div style={{ background: '#f8fafc', padding: '32px', borderRadius: '18px', border: '1px solid #e2e8f0', height: '100%' }}>
                <h4 style={{ fontSize: '20px', fontWeight: 700, color: '#0f172a', marginBottom: '16px' }}>
                  Preparing Students for Future Competitive Education
                </h4>
                <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#475569', margin: 0 }}>
                  Early foundation learning can help students become better prepared for future pathways involving examinations such as IIT-JEE, NEET and other competitive entrance examinations, while strengthening their regular school academics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FLAGSHIP SOLUTION 2: AI-BASED ENGLISH LANGUAGE LAB */}
      <section style={{ padding: '80px 0', background: '#f8fafc' }}>
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-lg-12 text-center">
              <div className="section-heading">
                <h6>Flagship Solution 2</h6>
                <h4>2. AI-BASED ENGLISH <em>LANGUAGE LAB</em></h4>
                <p>Learn English. Speak Confidently. Communicate Globally.</p>
              </div>
            </div>

            <div className="col-lg-6 mb-4 mb-lg-0">
              <div style={{ display: 'inline-flex', padding: '8px 16px', background: '#e0f2fe', color: '#0284c7', borderRadius: '30px', fontWeight: 700, fontSize: '13px', marginBottom: '16px' }}>
                From Learning English to Speaking English
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#0f172a', marginBottom: '16px' }}>
                English is no longer only a school subject.
              </h3>
              <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#475569', marginBottom: '16px' }}>
                It is an important communication, education, career and global-connectivity skill.
              </p>
              <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
                Future Gen Learning Solutions offers an AI-Based English Language Lab for schools designed to provide students with structured opportunities to listen, speak, practise and improve their English communication.
              </p>
              
              <div style={{ background: '#fff', padding: '20px', borderRadius: '14px', border: '1px solid #e2e8f0', marginBottom: '20px' }}>
                <h5 style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>Designed for School Students</h5>
                <p style={{ fontSize: '13.5px', color: '#475569', margin: 0, lineHeight: 1.6 }}>
                  The platform can support progressive English-language development across school grades, allowing learners to practise according to their level and learning needs.
                </p>
              </div>

              <div style={{ background: '#fff', padding: '20px', borderRadius: '14px', border: '1px solid #e2e8f0' }}>
                <h5 style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Key Learning Areas</h5>
                <p style={{ fontSize: '15px', fontWeight: 700, color: '#0284c7', margin: 0 }}>
                  Listening &nbsp;|&nbsp; Speaking &nbsp;|&nbsp; Reading &nbsp;|&nbsp; Pronunciation &nbsp;|&nbsp; Vocabulary &nbsp;|&nbsp; Grammar &nbsp;|&nbsp; Communication
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div style={{ background: '#fff', padding: '36px', borderRadius: '20px', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(15, 23, 42, 0.05)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <div style={{ width: '45px', height: '45px', borderRadius: '10px', background: '#e0f2fe', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0284c7', fontSize: '20px' }}>
                    <i className="fa fa-microphone"></i>
                  </div>
                  <h4 style={{ fontSize: '20px', fontWeight: 700, color: '#0f172a', margin: 0 }}>HOW AI ENHANCES ENGLISH LEARNING</h4>
                </div>
                <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#475569', marginBottom: '16px' }}>
                  Traditional classrooms may provide limited opportunities for every student to practise speaking individually.
                </p>
                <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
                  Our AI-Based English Language Lab provides interactive speech analysis, pronunciation scoring, real-time voice feedback, and structured conversational simulations so students can build genuine speaking confidence at their own pace.
                </p>
                <div style={{ padding: '16px', background: '#f0f9ff', borderRadius: '12px', borderLeft: '4px solid #0284c7' }}>
                  <p style={{ margin: 0, fontSize: '14px', color: '#0f172a', fontWeight: 600 }}>
                    Experience our interactive simulator below to test live speech scoring and pronunciation feedback!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive AI Lab Simulator Component */}
          <div className="row">
            <div className="col-lg-12">
              <AILabSimulator />
            </div>
          </div>
        </div>
      </section>

      {/* School Inquiry Form */}
      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 mb-4 mb-lg-0">
              <div className="section-heading" style={{ textAlign: 'left' }}>
                <h6>Partner With Us</h6>
                <h4>Transform Your <em>School</em></h4>
                <p>
                  Schedule a personalized demonstration of our IIT Foundation curriculum books and AI-Based English Language Lab software for your school.
                </p>
              </div>
              <div style={{ background: '#f8fafc', padding: '25px', borderRadius: '14px', border: '1px solid #e2e8f0' }}>
                <h5 style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>
                  Complete Implementation Support:
                </h5>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.7, margin: 0 }}>
                  We provide academic materials, curriculum blueprints, teacher training workshops, diagnostic test series, and continuous technical support for schools.
                </p>
              </div>
            </div>

            <div className="col-lg-7">
              <InquiryForm
                initialDivision="Future Gen Learning Solutions"
                title="Request School Partnership & Demo"
                subtitle="Future Gen Learning Solutions"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
