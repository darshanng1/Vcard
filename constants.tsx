
import { ContactData, ServiceInfo, BlogPost } from './types';

export const CONTACT_INFO: ContactData = {
  name: "Darshan N G",
  role: "Sr. Business Development",
  location: "Bengaluru, India",
  phone: "+919686407061",
  whatsapp: "919686407061",
  email: "darshan.ng@sipc.in",
  bio: "Facilitating high-scale hygiene infrastructure and pest-free environments for India's leading corporate estates."
};

export const COMPANY_INFO = {
  name: "Secure India Pest Control Pvt Ltd",
  shortName: "SIPC India",
  website: "www.sipc.in",
  address: "SIG Building, No 16/11, Bangalore Co-Operative Industrial Estate, BSNL Office Road, Tin Factory Road, Dooravani Nagar, Bengaluru – 560016"
};

export const TRUST_STATS = [
  { label: "Sites Protected", value: "10,000+", icon: "🏢" },
  { label: "Certified Ops", value: "ISO 9001", icon: "🏆" },
  { label: "Field Experts", value: "250+", icon: "🛡️" },
  { label: "Success Rate", value: "99.9%", icon: "📈" }
];

export const SERVICES: ServiceInfo[] = [
  {
    id: "industrial-pest",
    title: "Commercial Pest Management",
    slug: "pest-control-bengaluru",
    description: "Multi-site integrated hygiene protocols for IT parks and industrial clusters.",
    problem: "Pest infestations in large-scale estates threaten audit compliance and structural safety.",
    inspection: "Structural audit using precision IR mapping and vulnerability assessment.",
    method: "Integrated Pest Management (IPM) using high-grade industrial molecules.",
    safety: "Zero-odor, eco-certified, and compliant with international food safety standards.",
    applications: ["IT Parks", "Data Centers", "Manufacturing Units"],
    faqs: [{ question: "Audit Support?", answer: "We provide full documentation and compliance reporting for ISO/HACCP audits." }],
    icon: "🔬"
  },
  {
    id: "termite-protection",
    title: "Post-Construction Termite Tech",
    slug: "termite-treatment-bengaluru",
    description: "Deep-injection non-repellent barrier technology for structural integrity.",
    problem: "Silent termite damage can depreciate asset value by 30% in Bengaluru's tropical profile.",
    inspection: "Ground-radar mapping to locate subterranean colonies.",
    method: "Precision drilling and high-pressure chemical barriers using non-repellent agents.",
    safety: "Targeted sub-soil injection minimizes surface exposure.",
    applications: ["Luxury Villas", "Corporate HQ", "Retail Spaces"],
    faqs: [{ question: "Warranty?", answer: "SIPC provides a corporate 10-year accountability guarantee." }],
    icon: "🐜"
  },
  {
    id: "bird-netting",
    title: "Invisible Bird Netting",
    slug: "bird-netting-bengaluru",
    description: "High-tensile HDPE translucent barriers for high-rise aesthetics.",
    problem: "Pigeon nests cause significant respiratory health risks and facade degradation.",
    inspection: "Aerial balcony and duct assessment for tension points.",
    method: "UV-stabilized HDPE nets with SS304 rust-proof fixtures.",
    safety: "Translucent finish preserves architectural beauty while ensuring hygiene.",
    applications: ["Premium Apartments", "Hospital Facades", "Warehouses"],
    faqs: [{ question: "Longevity?", answer: "Our industrial-grade HDPE is rated for 8-10 years of direct sunlight exposure." }],
    icon: "🐦"
  },
  {
    id: "rodent-prevention",
    title: "Advanced Rodent Mitigation",
    slug: "rodent-control-bengaluru",
    description: "Electronic-safe prevention systems for server rooms and data hubs.",
    problem: "Rodents cause catastrophic cable damage and data center downtime.",
    inspection: "Entry point identification and structural proofing audit.",
    method: "Tamper-proof bait stations combined with electronic ultrasound deterrents.",
    safety: "Closed-loop system safe for IT infrastructure and humans.",
    applications: ["Server Rooms", "Control Centers", "Basement Parking"],
    faqs: [{ question: "Immediate fix?", answer: "Our rodent-proofing seals entry points immediately while trapping clears internal population." }],
    icon: "🐀"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "corporate-hygiene-benchmarks",
    category: "Corporate",
    title: "The 2024 Benchmarks for Industrial Pest Management",
    date: "Dec 05, 2023",
    excerpt: "How top-tier IT parks in Bengaluru are shifting to technology-led prevention over traditional spraying.",
    content: "Full analysis..."
  }
];
