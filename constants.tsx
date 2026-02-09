
import { ContactData, ServiceInfo } from './types';

export const CONTACT_INFO: ContactData = {
  name: "Darshan N G",
  role: "Pest & Bird Protection Specialist",
  location: "Bengaluru, India",
  phone: "+919876543210", // Placeholder
  whatsapp: "919876543210", // Placeholder
  email: "contact@darshanng.com",
  bio: "Direct technician-to-client coordination. I eliminate pests and pigeons with surgical precision, focusing on safety and long-term prevention for Bengaluru homes."
};

export const TRUST_POINTS = [
  { label: "Execution Specialist", icon: "🛠️", desc: "No sales agents. Deal directly with the execution expert." },
  { label: "Rapid Dispatch", icon: "⚡", desc: "Prompt response across all zones of Bengaluru." },
  { label: "Eco-Certified", icon: "🌿", desc: "Safe, low-toxicity chemicals for family and pets." }
];

export const PROCESS_STEPS = [
  { title: "Smart Inspection", desc: "Detecting hidden colonies using moisture and heat signatures.", icon: "🔍" },
  { title: "Targeted Treatment", icon: "🎯", desc: "Scientific application based on the specific biology of the pest." },
  { title: "Seal & Protect", icon: "🛡️", desc: "Closing entry points and applying residual barriers." }
];

export const SERVICES: ServiceInfo[] = [
  {
    id: "termite",
    title: "Advanced Termite Protection",
    slug: "termite-treatment-bengaluru",
    description: "Anti-termite solutions for Bengaluru's high-value wooden interiors.",
    problem: "Termites (white ants) can silently destroy wooden furniture, door frames, and structural components. In Bengaluru's climate, they thrive year-round.",
    inspection: "I perform a thorough site inspection to identify termite galleries, mud tubes, and moisture points using thermal imaging and moisture meters.",
    method: "Advanced Drill-Fill-Seal technique. We use eco-friendly termiticides injected into 12mm holes spaced at 1-foot intervals along walls.",
    safety: "Odourless and safe for children/pets. No need to vacate the house.",
    applications: ["Independent Villas", "Apartments", "Office Spaces", "Pre-construction Sites"],
    faqs: [
      { question: "How long does the termite treatment last?", answer: "Our standard treatment comes with a 5-year warranty for post-construction drill-fill methods." },
      { question: "Is the chemical smelly?", answer: "No, we use premium odourless chemicals that don't disrupt your daily routine." }
    ],
    icon: "🐜"
  },
  {
    id: "bird",
    title: "Premium Bird Netting",
    slug: "bird-netting-bengaluru",
    description: "Surgical bird-proofing for balconies and high-rise apartments.",
    problem: "Pigeon droppings carry over 60 diseases and damage building aesthetics. Nests in balconies cause hygiene issues.",
    inspection: "Assessment of balcony area, duct spaces, and potential entry points for birds.",
    method: "High-density polyethylene (HDPE) netting (UV stabilized). We use stainless steel hooks or wire ropes for tensioning, ensuring the net is invisible from a distance.",
    safety: "No sharp edges. Safe for birds (they don't get trapped, just deterred) and safe for children near balconies.",
    applications: ["High-rise Apartments", "Hotel Kitchens", "Industrial Sheds", "Air Condition Units"],
    faqs: [
      { question: "Will the net rust?", answer: "We use UV-stabilized HDPE nets and stainless steel fixtures which are completely rust-proof." },
      { question: "Does it block the view?", answer: "Our translucent or thin black nets are 90% transparent and barely visible from 10 feet away." }
    ],
    icon: "🐦"
  },
  {
    id: "cockroach",
    title: "Kitchen Cockroach Control",
    slug: "cockroach-control-bengaluru",
    description: "Targeted gel and spray treatments for cockroach-free kitchens.",
    problem: "Cockroaches contaminate food and spread allergies. Common species in Bengaluru include German and American cockroaches.",
    inspection: "Locating hiding spots in kitchen cabinets, sink areas, and drainage pipes.",
    method: "Advion Gel application in hidden spots plus professional residual spray in drainage and skirting areas.",
    safety: "Targeted gel application means you don't need to empty your kitchen cabinets in most cases.",
    applications: ["Residential Kitchens", "Restaurants", "Food Warehouses", "Corporate Pantries"],
    faqs: [
      { question: "Do I need to clean my kitchen after treatment?", answer: "No major cleaning is required. The gel stays active for weeks to catch recurring pests." },
      { question: "When will I see results?", answer: "You will notice a 90% reduction within the first 48-72 hours." }
    ],
    icon: "🪳"
  },
  {
    id: "rodent",
    title: "Integrated Rodent Control",
    slug: "rodent-control-bengaluru",
    description: "Effective rat and mouse control for urban residential and commercial premises.",
    problem: "Rats chew through electrical wires and spread diseases like Leptospirosis. Common in Bengaluru's bustling urban areas.",
    inspection: "Identifying runways, gnaw marks, and entry holes in the building perimeter.",
    method: "Integrated Pest Management (IPM) involving baiting stations, glue traps, and physical sealing of entry points.",
    safety: "Bait stations are tamper-proof and kept away from children and pets.",
    applications: ["IT Parks", "Parking Lots", "Supermarkets", "Residential Societies"],
    faqs: [
      { question: "Will the rats die inside my house?", answer: "We use specific baits that make rodents seek water and open air, reducing the chance of them dying in hidden indoor corners." },
      { question: "How do you stop them from coming back?", answer: "We provide professional advice on 'Rat-Proofing' your entry points." }
    ],
    icon: "🐀"
  }
];
