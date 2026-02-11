
import { ContactData, ServiceInfo, BlogPost } from './types';

export const CONTACT_INFO: ContactData = {
  name: "Darshan N G",
  role: "Business Development Manager",
  location: "Bengaluru, India",
  phone: "+919686407061",
  whatsapp: "919686407061",
  email: "darshan.ng@sipc.in",
  bio: "Business Development Manager at Secure India Pest Control Pvt Ltd. Facilitating enterprise-grade pest management and structural bird proofing solutions for corporate and residential clients across Bengaluru."
};

export const COMPANY_INFO = {
  name: "Secure India Pest Control Pvt Ltd",
  shortName: "SIPC India",
  website: "sipc.in",
  fullUrl: "https://sipc.in/",
  address: "SIG Building, No 16/11, Dooravani Nagar, Bengaluru – 560016",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.828230752495!2d77.68065477587841!3d12.982855114631608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae110996841367%3A0xc39f82d1f67f0896!2sSecure%20India%20Pest%20Control%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1716123456789!5m2!1sen!2sin",
  about: [
    "Professional pest management company providing enterprise-grade solutions.",
    "Trained, certified, and background-verified field staff.",
    "Exclusive use of safe, government-approved, and odorless chemicals.",
    "Systematic, process-driven approach to structural protection."
  ]
};

export const SERVICES: ServiceInfo[] = [
  {
    id: "cockroach",
    title: "Cockroach Control",
    slug: "cockroach-control-bengaluru",
    description: "Integrated baiting and gel treatment for kitchens and dining areas.",
    problem: "Roaches spread E. coli and Salmonella.",
    inspection: "Detection of egg cases in pantry crevices.",
    method: "Advanced gel baiting technology.",
    safety: "100% kitchen safe and WHO approved.",
    applications: ["Kitchens", "Pantry", "Cafeterias"],
    faqs: [{ question: "Do I need to leave?", answer: "No, this is an odorless spot treatment." }],
    icon: "🪳"
  },
  {
    id: "rodent",
    title: "Rodent Control",
    slug: "rodent-control",
    description: "Strategic baiting and entry proofing for rats and mice.",
    problem: "Rats contaminate food and cause electrical fires.",
    inspection: "Smudge marks and droppings indicate activity.",
    method: "Tamper-proof bait stations and structural proofing.",
    safety: "Safe for pets and children with locked stations.",
    applications: ["Basements", "Warehouses", "Kitchens"],
    faqs: [{ question: "Will they die inside?", answer: "We use baits that cause rodents to seek water outdoors." }],
    icon: "🐀"
  },
  {
    id: "bird-netting",
    title: "Bird & Pigeon Netting",
    slug: "pigeon-netting-bengaluru",
    description: "High-tensile, UV-stabilized invisible netting.",
    problem: "Pigeon droppings carry over 60 diseases and damage facades.",
    inspection: "Nesting in balconies and AC ledges.",
    method: "Installation of translucent HDPE netting.",
    safety: "Non-lethal and aesthetic-friendly.",
    applications: ["Balconies", "Window Facades", "AC Ledges"],
    faqs: [{ question: "Will it block my view?", answer: "No, mesh is translucent and becomes almost invisible." }],
    icon: "🐦"
  },
  {
    id: "termite",
    title: "Termite Treatment",
    slug: "termite-treatment-bengaluru",
    description: "Specialized drill-fill-seal barrier protection.",
    problem: "Termites are silent destroyers feeding on cellulose.",
    inspection: "Mud tubes and hollow-sounding wood.",
    method: "Deep injection chemical barrier system.",
    safety: "Odorless and includes warranty.",
    applications: ["Woodwork", "Foundations", "Wardrobes"],
    faqs: [{ question: "Is it permanent?", answer: "Creates a long-lasting barrier; periodic audits recommended." }],
    icon: "🐜"
  },
  {
    id: "wood-borer",
    title: "Wood Borer Control",
    slug: "wood-borer",
    description: "Injection treatment for powder-post beetles.",
    problem: "Wood borers turn solid wood into powder.",
    inspection: "Presence of fine frass and tiny exit holes.",
    method: "Pressure injection of specialized preservatives.",
    safety: "Odorless oil-based treatment.",
    applications: ["Wardrobes", "Beds", "Antique furniture"],
    faqs: [{ question: "Does it kill larvae?", answer: "Targets both active larvae and future eggs." }],
    icon: "🪵"
  },
  {
    id: "bedbug",
    title: "Bedbug Treatment",
    slug: "bedbug-treatment",
    description: "Intensive chemical misting and steam treatment.",
    problem: "Bedbugs feed on human blood causing welts.",
    inspection: "Blood spots on sheets and mattress seams.",
    method: "Double-round spray and mist treatment.",
    safety: "Odorless application; 4-6 hour drying time.",
    applications: ["Mattresses", "Sofas", "Curtains"],
    faqs: [{ question: "One visit enough?", answer: "We recommend a follow-up visit after 15 days." }],
    icon: "🛌"
  },
  {
    id: "ants",
    title: "Ant Control",
    slug: "ant-control",
    description: "Perimeter treatment and gel baiting.",
    problem: "Ants contaminate food and damage components.",
    inspection: "Tracking worker trails back to mounds.",
    method: "Spot gel baiting and barrier spray.",
    safety: "Low toxicity targeted treatment.",
    applications: ["Patios", "Kitchens", "Windowsills"],
    faqs: [{ question: "Is it permanent?", answer: "Baiting eliminates the queen to collapse the colony." }],
    icon: "🐜"
  },
  {
    id: "mosquito",
    title: "Mosquito Control",
    slug: "mosquito-control",
    description: "Indoor and outdoor misting prevention.",
    problem: "Spread Dengue and Malaria.",
    inspection: "Identification of stagnant water sites.",
    method: "Residual wall spraying and thermal fogging.",
    safety: "Government approved chemicals.",
    applications: ["Gardens", "Basements", "Residential Blocks"],
    faqs: [{ question: "How long does it last?", answer: "Residual spray lasts up to 6 weeks." }],
    icon: "🦟"
  },
  {
    id: "flies",
    title: "Flies Control",
    slug: "flies-control",
    description: "Baiting and trap systems for food units.",
    problem: "Houseflies carry over 60 diseases.",
    inspection: "Locating breeding sites near waste bins.",
    method: "Pheromone-based baiting and ILT installation.",
    safety: "Non-toxic mechanical systems.",
    applications: ["Restaurants", "Food Processing"],
    faqs: [{ question: "Are lights safe?", answer: "Yes, shatter-proof bulbs for food safety." }],
    icon: "🪰"
  },
  {
    id: "snake-management",
    title: "Snake Management",
    slug: "snake-entry-management",
    description: "Specialized deterrent systems.",
    problem: "Snakes in residential areas pose risks.",
    inspection: "Audit of boundary gaps and dark corners.",
    method: "Application of specialized chemical deterrents.",
    safety: "Ethical and non-toxic prevention.",
    applications: ["Perimeter Walls", "Basements", "Gardens"],
    faqs: [{ question: "Is it a rescue service?", answer: "No, this is proactive entry management." }],
    icon: "🐍"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "why-pigeons-are-dangerous",
    category: "Corporate Insight",
    title: "Managing Avian Risks in Urban Commercial Spaces",
    date: "Jan 12, 2024",
    excerpt: "Technical analysis of the structural and health impact of pigeon presence in Bengaluru high-rises.",
    content: "Pigeons carry over 60 diseases. For businesses, this translates to health liability and maintenance costs..."
  }
];
