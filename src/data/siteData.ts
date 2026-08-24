import { DivisionInfo, ProgramItem, TestimonialItem, FAQItem } from '../types';

export const SITE_CONFIG = {
  name: 'Future Edu Group',
  siteUrl: 'https://futureedugroup.in',
  tagline: 'Empowering Education. Enabling Careers. Building Futures.',
  description: 'Future Edu Group is an integrated education ecosystem offering world-class Tourism & Hospitality training, Higher Education degree admissions & guidance, and cutting-edge K-12 STEM & AI Language Lab school solutions.',
  email: 'admission@futureedugroup.in',
  phone: '+91 96327 62017',
  whatsapp: '+91 96327 62017',
  address: {
    street: 'Unit No. TE-04, 3rd Floor, 38/17, #1678, SMART AVENUE, Nehru Road, Kammanahalli, HRBR Layout',
    city: 'Bangalore ',
    state: 'Karnataka',
    postalCode: '560043',
    country: 'India'
  },
  socialLinks: {
    facebook: 'https://facebook.com/futureedugroup',
    linkedin: 'https://linkedin.com/company/futureedugroup',
    twitter: 'https://twitter.com/futureedugroup',
    instagram: 'https://instagram.com/futureedugroup',
    youtube: 'https://youtube.com/@futureedugroup'
  }
};

export const DIVISIONS: DivisionInfo[] = [
  {
    id: 'tourism-hospitality',
    title: 'Future Academy of Tourism and Hospitality Management',
    shortName: 'Tourism & Hospitality',
    tagline: 'Learn. Experience. Explore. Build a Global Career.',
    description: 'Career-focused institution dedicated to preparing students for exciting opportunities in the rapidly growing hospitality, tourism and travel industries.',
    icon: '/assets/images/service-icon-01.png',
    path: '/tourism-hospitality',
    badge: 'Global Placements',
    color: '#0284c7',
    features: [
      'Practical Learning & Real-World Scenarios',
      'Professional Grooming & Workplace Etiquette',
      'English Communication & Personality Development',
      'Placement Support & Employer Connections'
    ]
  },
  {
    id: 'edu-solutions',
    title: 'Future Edu Solutions',
    shortName: 'Higher Education',
    tagline: 'Empowering Education. Enabling Careers. Building Futures.',
    description: 'Education guidance and student-support organization committed to helping students and working professionals achieve their academic and career aspirations.',
    icon: '/assets/images/service-icon-02.png',
    path: '/edu-solutions',
    badge: 'Higher Education',
    color: '#0284c7',
    features: [
      'Undergraduate Programs: BA, B.Com, B.Sc, BBA, BCA',
      'Postgraduate Programs: MA, M.Com, M.Sc, MBA, MCA',
      'Dedicated Support for Working Professionals',
      'Complete Admission & Documentation Assistance'
    ]
  },
  {
    id: 'gen-learning-solutions',
    title: 'Future Gen Learning Solutions',
    shortName: 'School Solutions',
    tagline: 'Empowering Schools. Enhancing Learning. Preparing Future-Ready Students.',
    description: 'Innovative education solutions provider focused on helping schools strengthen academic excellence, competitive-exam readiness, English communication, and technology-enabled learning.',
    icon: '/assets/images/service-icon-03.png',
    path: '/gen-learning-solutions',
    badge: 'School Innovations',
    color: '#0284c7',
    features: [
      'IIT Foundation Program & Books (Math, Physics, Chem, Bio)',
      'AI-Based English Language Lab with Speech Assessment',
      'Concept-Based Learning & Progressive Skill Development',
      'AI-Based Assessments & Spot Analysis for Schools'
    ]
  }
];

export const PROGRAMS: ProgramItem[] = [
  {
    id: 'hospitality-management',
    title: 'Professional Diploma in Tourism & Hospitality Management',
    division: 'tourism',
    duration: '1 Year / 6 Months Fast-Track',
    mode: 'Classroom + Practical Labs + Paid Internship',
    certification: 'Industry & Global Hospitality Certified',
    highlights: [
      'Front Office Operations & PMS Systems',
      'Food & Beverage Service & Mixology Basics',
      'Luxury Housekeeping & Property Management',
      'Guest Relations & Cross-Cultural Grooming'
    ],
    description: 'Designed to transform students into job-ready professionals equipped for 5-star hotel brands, luxury resorts, and high-end restaurant chains.',
    curriculum: [
      'Hospitality Fundamentals & Protocol',
      'Front Office Operations & Reservation Software',
      'Food & Beverage Service Techniques',
      'Beverage Knowledge & Banquet Operations',
      'Housekeeping Operations & Inventory Management',
      'Professional Grooming & Conversational Fluency'
    ],
    careerProspects: [
      'Front Desk Executive',
      'F&B Guest Service Associate',
      'Hospitality Supervisor',
      'Resort Operations Associate',
      'Guest Relations Executive'
    ],
    iconName: 'Hotel',
    image: '/assets/images/courses-01.jpg'
  },
  {
    id: 'cruise-aviation-careers',
    title: 'International Cruise & Aviation Hospitality',
    division: 'tourism',
    duration: '6 Months Intensive',
    mode: 'Simulation Lab + Interview Bootcamps',
    certification: 'Global Maritime & Airline Hospitality Prep',
    highlights: [
      'Cruise Line Onboard Services & Safety Basics',
      'Aviation In-Flight Service & Ground Operations',
      'International Passenger Handling & Etiquette',
      'Mock Assessment & Direct Placement Drives'
    ],
    description: 'Specialized intensive program for candidates aspiring to work aboard international cruise liners and aviation hospitality sectors worldwide.',
    curriculum: [
      'Cruise Ship Industry Overview & Onboard Roles',
      'Aviation Passenger Handling & Boarding Protocols',
      'Safety, Sanitation & Customer Care Standards',
      'International Accents & Customer Relations',
      'Maritime & Airline Interview Preparation'
    ],
    careerProspects: [
      'Cruise Line F&B Staff',
      'Cruise Hospitality Associate',
      'Airline Ground Staff',
      'Airport Lounge Host',
      'In-Flight Crew Support'
    ],
    iconName: 'Plane',
    image: '/assets/images/courses-02.jpg'
  },
  {
    id: 'ug-degrees',
    title: 'Undergraduate Degree Programs (UG)',
    division: 'higher-ed',
    duration: '3 Years (Flexible options available)',
    mode: 'Online / Blended / Distance / Regular',
    certification: 'UGC-DEB & NAAC Accredited Universities',
    highlights: [
      'BBA (Management, Marketing, Finance, HR)',
      'BCA (Computer Applications, Web Tech & Data)',
      'B.Com (General, Computer Applications, Accounts)',
      'B.Sc & BA (Various Disciplines)'
    ],
    description: 'Guaranteed admission assistance, credit recognition, and end-to-end guidance for premier university undergraduate degrees.',
    curriculum: [
      'Core Discipline Foundation & Electives',
      'Digital Learning Materials & Live Webinars',
      'Project Work & Continuous Assessments',
      'Semester Examinations Guidance & Support'
    ],
    careerProspects: [
      'Corporate Roles in Finance, HR & Marketing',
      'IT & Software Support Specialist',
      'Banking & Government Exam Eligibility',
      'Pathway to MBA / MCA / Masters'
    ],
    iconName: 'GraduationCap',
    image: '/assets/images/courses-03.jpg'
  },
  {
    id: 'pg-degrees',
    title: 'Postgraduate & Executive Degree Programs (PG)',
    division: 'higher-ed',
    duration: '2 Years',
    mode: 'Executive / Online / Weekend / Distance',
    certification: 'AICTE / UGC Approved Universities',
    highlights: [
      'MBA (Dual Specialization, Executive MBA)',
      'MCA (Cloud, AI & Software Engineering)',
      'M.Com & MA Programs',
      'Specially designed for working executives'
    ],
    description: 'Accelerate your career trajectory with recognized master degree credentials tailored around working professionals schedule.',
    curriculum: [
      'Strategic Management & Leadership',
      'Specialized Domain Deep Dives',
      'Real-world Case Studies & Capstones',
      'Industry Mentorship Sessions'
    ],
    careerProspects: [
      'Managerial & Departmental Head Roles',
      'Technical Architect / Senior Software Engineer',
      'Strategic Consultant & Business Analyst',
      'Entrepreneurship & Global Opportunities'
    ],
    iconName: 'Award',
    image: '/assets/images/courses-04.jpg'
  },
  {
    id: 'iit-foundation',
    title: 'IIT Foundation Program & Curriculum Books (Grades 6–10)',
    division: 'k12',
    duration: 'Academic Year Program',
    mode: 'School Integrated Curriculum + Printed Books + AI App',
    certification: 'Future Gen STEM Excellence Certificate',
    highlights: [
      'Comprehensive Mathematics, Physics, Chemistry & Biology',
      'Level 1 to Level 3 Graded Problem Sets',
      'AI Spot Diagnostic Assessments & Analytics',
      'Teacher Training Manuals & Classroom Slides'
    ],
    description: 'A scientifically designed foundation curriculum that strengthens conceptual logic early, laying the groundwork for JEE, NEET, Olympiads, and NTSE.',
    curriculum: [
      'Deep conceptual theory simplified with daily life examples',
      'Formula sheets & mind maps for rapid revision',
      'Analytical, assertion-reason, and application-based questions',
      'Diagnostic mock tests and comparative student scorecards'
    ],
    careerProspects: [
      'Top Rank Potential in JEE Main/Advanced & NEET',
      'Olympiad & NTSE Distinction',
      'Strong Analytical & Mathematical Aptitude'
    ],
    iconName: 'BookOpen',
    image: '/assets/images/team-member-01.jpg'
  },
  {
    id: 'ai-english-lab',
    title: 'AI-Based Interactive English Language Lab',
    division: 'k12',
    duration: 'Institutional Annual Lab License',
    mode: 'Digital Lab Software + Headsets + Cloud Dashboard',
    certification: 'CEFR-Aligned English Proficiency Levels',
    highlights: [
      'AI Real-Time Speech Recognition & Pronunciation Scoring',
      'Listening, Speaking, Reading & Grammar (LSRW) Modules',
      'Roleplay & Everyday Conversational Simulations',
      'Teacher Control Console & Performance Reports'
    ],
    description: 'Transform passive classrooms into vibrant language immersion environments where every student gains native-like confidence.',
    curriculum: [
      'Phonetics, Vowels, Consonants & Word Stress',
      'Interactive Dialogues & Real-life Situations',
      'Grammar in Context & Vocabulary Drills',
      'Debate, Extempore, and Group Discussion Simulations'
    ],
    careerProspects: [
      'Fluent Spoken English & Public Speaking Confidence',
      'High Band IELTS / TOEFL Readiness',
      'Excellent Campus Placement & Interview Readiness'
    ],
    iconName: 'Mic',
    image: '/assets/images/team-member-02.jpg'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '1',
    quote: 'The rigorous practical hospitality training, grooming sessions, and cruise line interview workshops gave me the exact skills to clear my interview. I am now working onboard an international luxury cruise liner!',
    name: 'Rahul Sharma',
    role: 'F&B Operations Associate',
    organization: 'International Cruise Line',
    rating: 5
  },
  {
    id: '2',
    quote: 'Future Edu Solutions made pursuing my Executive MBA completely hassle-free while managing a demanding full-time tech job. Transparent university guidance, timely exam alerts, and dedicated academic support.',
    name: 'Priyanka Sen',
    role: 'Senior Project Lead & MBA Graduate',
    organization: 'Leading IT Enterprise',
    rating: 5
  },
  {
    id: '3',
    quote: 'Implementing the Future Gen IIT Foundation books and the AI English Language Lab has been transformative for our school. Students show visible enthusiasm in science concepts and speak with genuine confidence.',
    name: 'Dr. K. S. Murthy',
    role: 'Principal & Academic Director',
    organization: 'Sri Chaitanya Public School',
    rating: 5
  },
  {
    id: '4',
    quote: 'From front office simulations to table setting protocols, Future Academy gave me hands-on confidence. I received placement offers from two 5-star hotel chains before graduation.',
    name: 'Ananya Varma',
    role: 'Front Desk Executive',
    organization: 'Taj Hotels & Resorts',
    rating: 5
  }
];

export const FAQS: FAQItem[] = [
  {
    category: 'General',
    question: 'What is Future Edu Group?',
    answer: 'Future Edu Group is a multi-disciplinary educational group operating across three specialized verticals: Future Academy of Tourism & Hospitality (vocational hospitality careers), Future Edu Solutions (higher education admissions and degree counselling), and Future Gen Learning Solutions (K-12 school STEM curriculum and AI English Language Labs).'
  },
  {
    category: 'Tourism & Hospitality',
    question: 'What are the career opportunities after completing the Tourism & Hospitality program?',
    answer: 'Graduates can pursue rewarding global careers in 5-Star Luxury Hotels, Resorts, International Cruise Liners, Commercial Airlines, Airport Ground Services, Event Management Companies, and Luxury F&B Chains. Our dedicated placement cell assists with résumé building, grooming, and direct recruitment interviews.'
  },
  {
    category: 'Tourism & Hospitality',
    question: 'What is the eligibility criteria for the Hospitality Academy?',
    answer: 'Candidates who have completed 10+2 (Intermediate / Higher Secondary) from any recognized board in any stream are eligible. Passion for guest service, basic English communication skills, and a positive mindset are the key qualifications.'
  },
  {
    category: 'Higher Education',
    question: 'Are the degrees offered through Future Edu Solutions officially recognized?',
    answer: 'Yes. All university programs we guide students and working professionals towards are from UGC-recognized, NAAC-accredited, and DEB-approved state, central, or deemed universities with full legal validity for government exams, higher studies, and corporate employment.'
  },
  {
    category: 'Higher Education',
    question: 'How do programs for working professionals work?',
    answer: 'We provide admissions into flexible, work-integrated degree formats (online, distance, weekend, or blended learning) with digitized study materials, recorded lectures, and flexible examination schedules designed specifically for working adults.'
  },
  {
    category: 'K-12 Solutions',
    question: 'How does the AI English Language Lab work in schools?',
    answer: 'The AI English Language Lab is a digital software system deployed in schools. Students wear headsets with microphones to interact with AI speech software that evaluates their pronunciation, intonation, fluency, and vocabulary in real time. Teachers receive comprehensive dashboard metrics to track individual student growth.'
  },
  {
    category: 'K-12 Solutions',
    question: 'Can schools order sample copies of the IIT Foundation books?',
    answer: 'Yes! School principals, trustees, and academic coordinators can request a complimentary sample set of our IIT Foundation Physics, Chemistry, Math, and Biology books along with a live demo of the AI English Lab by submitting our partnership inquiry form.'
  }
];
