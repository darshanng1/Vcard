
export interface ServiceInfo {
  id: string;
  title: string;
  slug: string;
  description: string;
  problem: string;
  inspection: string;
  method: string;
  safety: string;
  applications: string[];
  faqs: { question: string; answer: string }[];
  icon: string;
}

export interface ContactData {
  name: string;
  role: string;
  location: string;
  phone: string;
  whatsapp: string;
  email: string;
  bio: string;
}
