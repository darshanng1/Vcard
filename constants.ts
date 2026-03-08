
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
  established: "2002",
  address: "SIG Building, No 16/11, Dooravani Nagar, Bengaluru – 560016",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.828230752495!2d77.68065477587841!3d12.982855114631608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae110996841367%3A0xc39f82d1f67f0896!2sSecure%20India%20Pest%20Control%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1716123456789!5m2!1sen!2sin",
  mission: "We are dedicated to providing a pest-free environment using safe, and harmless treatment with lasting effects. We keep our technical know-how upgraded to the latest technologies.",
  vision: "To become a leading trustworthy pest control service provider meeting International Standards and making our services reachable to every common man at an affordable rate.",
  values: ["Integrity", "Quality Services", "Sustainability", "Team Work"],
  about: [
    "Professional pest management company established in 2002.",
    "The only reputed firm in India organized by Agricultural Science Graduates & populated by Entomologists.",
    "Trained, certified, and background-verified workforce of 400+ employees.",
    "Systematic process-driven approach following ERDM (Elimination, Reduction, Destroying, Monitoring) principles."
  ],
  presence: ["Delhi NCR", "Jaipur", "Lucknow", "Patna", "Kolkata", "Ahmedabad", "Mumbai", "Pune", "Hyderabad", "Bangalore", "Mysore", "Chennai", "Coimbatore", "Cochin", "Trivandrum"],
  accreditations: ["AIB", "BRC", "FSSAI", "ISO 9001:2015", "BIFMA", "EMS"],
  industries: ["Hospitality", "Facility Services", "Food", "Pharma", "IT/ITES", "Retail", "Manufacturing"]
};

export const SERVICES: ServiceInfo[] = [
  {
    id: "cockroach",
    title: "Cockroach Management",
    slug: "cockroach-Management-bengaluru",
    description: "Integrated baiting and gel treatment for kitchens and dining areas.",
    problem: "Roaches spread E. coli and Salmonella.",
    inspection: "Detection of egg cases in pantry crevices.",
    method: "Advanced gel baiting technology, granular treatment, and drainage management.",
    safety: "100% kitchen safe and WHO approved.",
    applications: ["Kitchens", "Pantry", "Cafeterias"],
    faqs: [{ question: "Do I need to leave?", answer: "No, this is an odorless spot treatment." }],
    icon: "🪳"
  },
  {
    id: "rodent",
    title: "Rodent Management",
    slug: "rodent-Management",
    description: "Strategic baiting and entry proofing for rats and mice.",
    problem: "Rats contaminate food and cause electrical fires.",
    inspection: "Smudge marks and droppings indicate activity.",
    method: "Tamper-proof bait stations, glue boards, and structural entry proofing with wire mesh/metal plates.",
    safety: "Safe for pets and children with locked stations.",
    applications: ["Basements", "Warehouses", "Kitchens"],
    faqs: [{ question: "Will they die inside?", answer: "We use baits that cause rodents to seek water outdoors." }],
    icon: "🐀"
  },

    {
  id: "bird-netting",
  title: "Bird Netting in Bangalore – Pigeon Safety Net Installation",
  slug: "bird-netting-bangalore",
  description: "Professional balcony and pigeon safety net installation in Bangalore using high-tensile UV-stabilized invisible netting.",

  problem:
    "Pigeons create hygiene problems, droppings, foul smell, and nesting issues in balconies and AC ledges across Bangalore apartments.",

  inspection:
    "Site inspection identifies nesting zones, entry points, balcony gaps, and structural fixing positions before installation.",

  method:
    "Installation of premium translucent HDPE bird netting with strong edge anchoring, stainless steel hooks, and non-damaging fixing system for long-term protection.",

  safety:
    "100% non-lethal, bird-friendly, child-safe and aesthetic solution that does not block airflow or visibility.",

  applications: [
    "Balcony Bird Netting",
    "Window Safety Net",
    "AC Outdoor Unit Protection",
    "Terrace Bird Control",
    "Apartment Facades"
  ],

  faqs: [
    {
      question: "Will bird netting block my balcony view?",
      answer:
        "No. The net is translucent and nearly invisible from distance while effectively preventing pigeons from entering."
    },
    {
      question: "How long does bird netting last?",
      answer:
        "UV-stabilized HDPE bird nets typically last several years in Bangalore weather conditions."
    }
  ],

  icon: "🐦"
},

  {
    id: "termite",
    title: "Termite Management",
    slug: "termite-Management-bengaluru",
    description: "Specialized drill-fill-seal barrier protection.",
    problem: "Termites are silent destroyers feeding on cellulose.",
    inspection: "Mud tubes and hollow-sounding wood.",
    method: "Pre and Post construction Anti Termite Soil Treatment as per IS 6313 Codes.",
    safety: "Green Pro Certification products; odorless and includes warranty.",
    applications: ["Woodwork", "Foundations", "Wardrobes"],
    faqs: [{ question: "Is it permanent?", answer: "Creates a long-lasting barrier; periodic audits recommended." }],
    icon: "🐜"
  },
  {
    id: "wood-borer",
    title: "Wood Borer Management",
    slug: "wood-borer Management",
    description: "Injection treatment for powder-post beetles.",
    problem: "Wood borers turn solid wood into powder.",
    inspection: "Presence of fine frass and tiny exit holes.",
    method: "Pressure injection of specialized preservatives through bored holes.",
    safety: "Odorless oil-based treatment.",
    applications: ["Wardrobes", "Beds", "Antique furniture"],
    faqs: [{ question: "Does it kill larvae?", answer: "Targets both active larvae and future eggs." }],
    icon: "🪵"
  },
  {
    id: "bedbug",
    title: "Bedbug Management",
    slug: "bedbug-Management",
    description: "Intensive chemical misting and steam treatment.",
    problem: "Bedbugs feed on human blood causing welts.",
    inspection: "Blood spots on sheets and mattress seams.",
    method: "Double-round residual spray and spot insecticide application.",
    safety: "Odorless application; 4-6 hour drying time.",
    applications: ["Mattresses", "Sofas", "Curtains"],
    faqs: [{ question: "One visit enough?", answer: "We recommend a follow-up visit after 15 days." }],
    icon: "🛌"
  },
  {
    id: "ants",
    title: "Ant Management",
    slug: "ant-Management",
    description: "Perimeter treatment and gel baiting.",
    problem: "Ants contaminate food and damage components.",
    inspection: "Tracking worker trails back to mounds.",
    method: "Conforms to International Food Safety norms using residual sprays and gel baiting.",
    safety: "Low toxicity targeted treatment.",
    applications: ["Patios", "Kitchens", "Windowsills"],
    faqs: [{ question: "Is it permanent?", answer: "Baiting eliminates the queen to collapse the colony." }],
    icon: "🐜"
  },
  {
    id: "mosquito",
    title: "Mosquito Management",
    slug: "mosquito-Management",
    description: "Indoor and outdoor misting prevention.",
    problem: "Spread Dengue and Malaria.",
    inspection: "Identification of stagnant water sites.",
    method: "Larvae control, residual sprays, thermal fogging, and ULV misting.",
    safety: "Government approved chemicals.",
    applications: ["Gardens", "Basements", "Residential Blocks"],
    faqs: [{ question: "How long does it last?", answer: "Residual spray lasts up to 6 weeks." }],
    icon: "🦟"
  },
  {
    id: "flies",
    title: "Flies Management",
    slug: "flies-Management",
    description: "Baiting and trap systems for food units.",
    problem: "Houseflies carry over 60 diseases.",
    inspection: "Locating breeding sites near waste bins.",
    method: "Fly maggot control, residual sprays, and UV light trap monitoring.",
    safety: "Non-toxic mechanical systems and shatter-proof bulbs.",
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
    method: "Application of specialized chemical deterrents and proofing.",
    safety: "Ethical and non-toxic prevention.",
    applications: ["Perimeter Walls", "Basements", "Gardens"],
    faqs: [{ question: "Is it a rescue service?", answer: "No, this is proactive entry management." }],
    icon: "🐍"
  }
];
export const BLOG_POSTS: BlogPost[] = [

{
id: "1",
slug: "complete-guide-pigeon-netting-bengaluru",
category: "Corporate Insight",
title: "Complete Guide to Pigeon Netting in Bengaluru Apartments & Commercial Buildings",
date: "Feb 21, 2026",
excerpt:
"In-depth analysis of pigeon infestation risks in Bengaluru high-rises and why professional netting systems are the most effective long-term solution.",
content: `Complete guide explaining pigeon infestation problems, structural damage risks, hygiene concerns and why professional bird netting systems are recommended for Bengaluru apartments and commercial buildings.`
},

{
id: "2",
slug: "bird-netting-bangalore",
category: "Bird Control",
title: "Bird Netting in Bangalore - Balcony & Pigeon Safety Net Guide",
date: "Feb 19, 2026",
excerpt:
"Complete guide to bird netting installation in Bangalore for balconies and apartments.",
content: `Bird netting in Bangalore is one of the most effective solutions to protect balconies and apartments from pigeon infestation. Benefits include hygiene protection, prevention of nesting and long-term balcony protection.`
},

{
id: "3",
slug: "pigeon-netting-bangalore-complete-guide",
category: "Bird Control",
title: "Pigeon Netting in Bangalore – Complete Guide (2026)",
date: "Feb 21, 2026",
excerpt:
"Professional pigeon netting solutions for Bangalore apartments and commercial buildings.",
content: `Pigeon netting prevents structural damage, protects balconies and stops nesting permanently. Professional installation includes site inspection, hook fixing, tensioned net placement and final inspection.`
},

{
id: "4",
slug: "professional-bird-control-solutions-bangalore",
category: "Bird Control",
title: "Professional Bird Control Solutions in Bangalore",
date: "Feb 21, 2026",
excerpt:
"Structured inspection, pigeon netting systems and bird spike installation for Bangalore apartments and commercial buildings.",
content: `Professional bird control solutions include inspection, pigeon netting installation, bird spike placement and structural proofing to prevent nesting in residential and commercial buildings.`
},

{
id: "5",
slug: "balcony-bird-net-installation-bangalore",
category: "Bird Control",
title: "Balcony Bird Net Installation in Bangalore – Complete Pigeon Prevention Guide",
date: "Feb 21, 2026",
excerpt:
"Expert guide explaining balcony bird net installation, materials used, installation process and prevention benefits.",
content: `Balcony bird net installation is the most effective prevention method against pigeon nesting in Bangalore apartments. Proper installation blocks entry points and protects balconies from droppings, odor and structural damage.`
}

];
