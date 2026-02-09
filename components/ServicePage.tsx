
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ServiceInfo } from '../types';
import { CONTACT_INFO } from '../constants';

interface Props {
  service: ServiceInfo;
}

const ServicePage: React.FC<Props> = ({ service }) => {
  // Smooth scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [service]);

  return (
    <article className="max-w-3xl mx-auto px-6 pt-12 pb-24">
      {/* Navigation */}
      <nav className="mb-10">
        <Link 
          to="/" 
          className="inline-flex items-center text-blue-600 font-semibold hover:underline"
        >
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          Back to Profile
        </Link>
      </nav>

      {/* Header */}
      <header className="mb-12">
        <div className="text-5xl mb-4">{service.icon}</div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
          {service.title}
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed font-medium">
          {service.description}
        </p>
      </header>

      {/* Main Content Sections */}
      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-blue-600 pl-4">The Problem</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            {service.problem}
          </p>
        </section>

        <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Expert Inspection</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            {service.inspection}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-blue-600 pl-4">Treatment Method</h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-4">
            {service.method}
          </p>
          <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
            <h3 className="font-bold text-blue-800 mb-2">Safety & Quality</h3>
            <p className="text-blue-700">{service.safety}</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Common Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {service.applications.map((app, i) => (
              <div key={i} className="flex items-center space-x-2 bg-gray-100 p-3 rounded-xl text-gray-700 font-medium">
                <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                <span>{app}</span>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {service.faqs.map((faq, i) => (
              <div key={i} className="border-b border-gray-100 pb-6 last:border-0">
                <h3 className="font-bold text-gray-900 text-lg mb-2">Q: {faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">A: {faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Conversion / Call to Action */}
      <div className="mt-16 bg-gray-900 text-white rounded-[2.5rem] p-10 text-center relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-4">Need Urgent Help?</h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Talk directly with a technician for a quick estimate and inspection in Bengaluru.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a 
              href={`tel:${CONTACT_INFO.phone}`}
              className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              <span>Call Technician</span>
            </a>
            <a 
              href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Hi%20Darshan,%20I%20need%20help%20with%20${service.title}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-colors flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              <span>WhatsApp Inquiry</span>
            </a>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full -ml-16 -mb-16 blur-3xl"></div>
      </div>
    </article>
  );
};

export default ServicePage;
