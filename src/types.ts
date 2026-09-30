export interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  canonicalPath?: string;
  ogType?: "website" | "article";
  ogImage?: string;
  schema?: object | object[];
}

export interface DivisionInfo {
  id: string;
  title: string;
  shortName: string;
  tagline: string;
  description: string;
  icon: string;
  path: string;
  features: string[];
  badge: string;
  color: string;
}

export interface ProgramItem {
  id: string;
  title: string;
  division: "tourism" | "higher-ed" | "k12";
  duration: string;
  mode: string;
  certification: string;
  highlights: string[];
  description: string;
  curriculum: string[];
  careerProspects: string[];
  iconName: string;
  image: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  role: string;
  organization: string;
  avatar?: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface InquiryFormData {
  name: string;
  email: string;
  phone: string;
  division: string;
  program?: string;
  userType:
    "student" | "working-professional" | "school-administrator" | "parent";
  message: string;
}
