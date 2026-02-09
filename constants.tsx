
import { ContactData, ServiceInfo, BlogPost } from './types';

export const CONTACT_INFO: ContactData = {
  name: "Darshan N G",
  role: "Pest Management & Hygiene Specialist",
  location: "Bengaluru, India",
  phone: "+919876543210",
  whatsapp: "919876543210",
  email: "specialist@darshanng.com",
  bio: "Providing world-class pest elimination and bird-proofing solutions for Bengaluru's premier residential complexes and IT hubs. Authority in hygiene and safety."
};

export const TRUST_STATS = [
  { label: "Years Experience", value: "12+", icon: "🛡️" },
  { label: "Sites Serviced", value: "5000+", icon: "🏢" },
  { label: "Trained Staff", value: "25+", icon: "👷" },
  { label: "Safety Rating", value: "100%", icon: "🌿" }
];

export const CLIENT_CATEGORIES = [
  { name: "IT Parks & Hubs", icon: "💻" },
  { name: "Premium Apartments", icon: "🏢" },
  { name: "Warehouses", icon: "🏭" },
  { name: "Villas & Homes", icon: "🏡" }
];

export const SERVICES: ServiceInfo[] = [
  {
    id: "termite",
    title: "Termite Management",
    slug: "termite-treatment-bengaluru",
    description: "Industrial-grade sub-soil and wood injection protection.",
    problem: "Termites silently undermine your property value. Bengaluru's soil profile makes buildings vulnerable to subterranean termites.",
    inspection: "Comprehensive audit using moisture detection and thermal mapping.",
    method: "Non-repellent chemical barriers with Drill-Fill-Seal precision.",
    safety: "Certified non-toxic for indoor environments.",
    applications: ["New Constructions", "Renovated Villas", "Office Interiors"],
    faqs: [{ question: "Warranty?", answer: "We provide a 5-year post-construction warranty certificate." }],
    icon: "🐜"
  },
  {
    id: "bird",
    title: "Industrial Bird Netting",
    slug: "bird-netting-bengaluru",
    description: "Professional bird-proofing for balconies and high-rise ducts.",
    problem: "Pigeon infestations cause lung infections and foul aesthetics. Nests damage AC units and drainage.",
    inspection: "Height and area assessment for custom tensioning.",
    method: "UV-stabilized HDPE netting with SS304 rust-proof fixtures.",
    safety: "Child-safe and bird-friendly deterring system.",
    applications: ["Balconies", "Duct Areas", "Factory Roofs"],
    faqs: [{ question: "Is it visible?", answer: "Our nets are 90% translucent and practically invisible from distance." }],
    icon: "🐦"
  },
  {
    id: "cockroach",
    title: "Hygiene Pest Control",
    slug: "cockroach-control-bengaluru",
    description: "Targeted elimination for restaurants and modular kitchens.",
    problem: "German cockroaches are resistant to local sprays. They contaminate modular kitchen crevices.",
    inspection: "Identification of breeding pockets in appliances.",
    method: "Advanced gel baiting and insect growth regulators (IGR).",
    safety: "No need to vacate. No smell. Food-safe protocols.",
    applications: ["Modular Kitchens", "Hotels", "Cloud Kitchens"],
    faqs: [{ question: "Duration?", answer: "Result is visible in 48 hours with long-lasting residual effect." }],
    icon: "🪳"
  },
  {
    id: "rodent",
    title: "Integrated Rodent Control",
    slug: "rodent-control-bengaluru",
    description: "Electronic-safe rat control for homes and data centers.",
    problem: "Rats chew through networking cables causing massive business downtime.",
    inspection: "Entry-point mapping and structural audit.",
    method: "Integrated Pest Management (IPM) involving baiting and structural sealing.",
    safety: "Tamper-proof stations safe for pets and children.",
    applications: ["Server Rooms", "Basements", "Parking Lots"],
    faqs: [{ question: "How do you stop entry?", answer: "We provide structural 'proofing' recommendations to block entry points." }],
    icon: "🐀"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "signs-of-termite-infestation-bengaluru",
    category: "Termites",
    title: "5 Warning Signs of Termites in Bengaluru Apartments",
    date: "Oct 12, 2023",
    excerpt: "Termites thrive in Bengaluru's weather. Learn how to spot mud tubes and hollow wood.",
    content: "Full guide..."
  }
];
