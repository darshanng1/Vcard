
import { ContactData, ServiceInfo, BlogPost } from './types';

export const CONTACT_INFO: ContactData = {
  name: "Darshan N G",
  role: "Business Specialist • Pest & Bird Control",
  location: "Bengaluru, India",
  phone: "+919876543210",
  whatsapp: "919876543210",
  email: "specialist@darshanng.com",
  bio: "The single point of responsibility for your property's protection. I combine technical expertise with business accountability to ensure fast, permanent, and safe pest elimination."
};

export const TRUST_POINTS = [
  { label: "Accountability", icon: "🤝", desc: "No call centers. Direct coordination with the specialist responsible for the result." },
  { label: "Speed of Action", icon: "🚀", desc: "Immediate dispatch and inspection across Bengaluru's busy neighborhoods." },
  { label: "Scientific Quality", icon: "🔬", desc: "Using targeted, low-toxicity protocols that prioritize resident safety." }
];

export const PROCESS_STEPS = [
  { title: "Smart Inspection", desc: "Thermal and moisture mapping to find hidden colonies.", icon: "🔍" },
  { title: "Execution Plan", icon: "📋", desc: "Custom treatment protocols based on infestation severity." },
  { title: "Validation", icon: "✅", desc: "Follow-up verification to ensure complete eradication." }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "signs-of-termite-infestation-bengaluru",
    category: "Termites",
    title: "5 Warning Signs of Termites in Bengaluru Apartments",
    date: "Oct 12, 2023",
    excerpt: "Termites thrive in Bengaluru's weather. Learn how to spot mud tubes and hollow wood before the damage becomes irreversible.",
    content: "Full guide on spotting termites in local construction..."
  },
  {
    id: "2",
    slug: "pigeon-health-risks",
    category: "Bird Netting",
    title: "Why Pigeon Droppings are a Serious Health Risk",
    date: "Oct 05, 2023",
    excerpt: "Pigeon droppings carry over 60 diseases. We discuss the importance of professional-grade bird netting for high-rise balconies.",
    content: "Detailed health analysis and solution comparison..."
  }
];

export const SERVICES: ServiceInfo[] = [
  {
    id: "termite",
    title: "Termite Treatment Bengaluru",
    slug: "termite-treatment-bengaluru",
    description: "Industrial-grade protection for your high-value interiors.",
    problem: "Termites cause silent structural damage. In Bengaluru, high humidity often leads to rapid colony growth within false ceilings and cabinetry.",
    inspection: "Specialized thermal scanning to locate moisture pockets and galleries without drilling first.",
    method: "Drill-Fill-Seal using Bayer's Premise or equivalent high-end non-repellent termiticides.",
    safety: "Eco-certified chemicals. Odorless and non-volatile for indoor safety.",
    applications: ["Villas", "Apartments", "Commercial Hubs", "IT Parks"],
    faqs: [
      { question: "Is the treatment guaranteed?", answer: "Yes, our post-construction termite treatments come with a 5-year accountability warranty." }
    ],
    icon: "🐜"
  },
  {
    id: "bird",
    title: "Bird Netting Bengaluru",
    slug: "bird-netting-bengaluru",
    description: "Permanent bird-proofing with translucent invisible aesthetics.",
    problem: "Pigeons contaminate balconies and AC units. They are a primary source of respiratory allergens in urban Bengaluru.",
    inspection: "Structural audit of balcony tension points and bird entry paths.",
    method: "HDPE UV-stabilized 0.7mm to 1mm translucent nets with SS304 rust-proof fixtures.",
    safety: "No sharp edges. Safe for children and pets on high-rise balconies.",
    applications: ["Apartment Balconies", "Duct Areas", "Factory Sheds"],
    faqs: [
      { question: "How long does the net last?", answer: "Our high-grade HDPE nets typically last 8-10 years under direct Bengaluru sunlight." }
    ],
    icon: "🐦"
  },
  {
    id: "cockroach",
    title: "Cockroach Control Bengaluru",
    slug: "cockroach-control-bengaluru",
    description: "Surgical gel-based elimination for commercial & home kitchens.",
    problem: "German cockroaches are resistant to standard sprays. They infest electronics and food prep areas.",
    inspection: "Mapping 'hotspots' in kitchens, drainages, and appliances.",
    method: "Advion/Fipronil gel application combined with growth regulators (IGR).",
    safety: "Kitchen remains functional. No need to empty cabinets.",
    applications: ["Restaurants", "Modular Kitchens", "Pantries"],
    faqs: [
      { question: "Will they come back?", answer: "Our service includes a 3-month follow-up to catch the hatching cycle." }
    ],
    icon: "🪳"
  },
  {
    id: "rodent",
    title: "Rodent Control Bengaluru",
    slug: "rodent-control-bengaluru",
    description: "Electronic-safe rat control for homes and IT offices.",
    problem: "Rats chew expensive wiring. Common in Bengaluru's older buildings and busy areas like Indiranagar.",
    inspection: "Identification of entry holes and nesting runways.",
    method: "Tamper-proof bait stations and structural sealing (Rat-proofing).",
    safety: "Bait stations are locked and safe from children/pets.",
    applications: ["Basement Parking", "IT Servers", "Independent Homes"],
    faqs: [
      { question: "Do you use poison?", answer: "We use professional anti-coagulant baits that cause mummification, reducing odors." }
    ],
    icon: "🐀"
  }
];
