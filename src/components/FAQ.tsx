import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How much can I save with solar panels?',
      answer: 'Savings vary based on your location, energy usage, and local utility rates. Most customers save 50-90% on their electricity bills. Our team provides a detailed savings analysis during your free consultation.'
    },
    {
      question: 'How long do solar panels last?',
      answer: 'Solar panels typically last 25-30 years with minimal maintenance. Most manufacturers offer 20-25 year warranties, and panels often continue producing electricity well beyond the warranty period.'
    },
    {
      question: 'What incentives are available for solar installation?',
      answer: 'The federal solar tax credit allows you to deduct 30% of solar costs from your taxes. Many states and utilities offer additional rebates and incentives. We help you maximize all available savings.'
    },
    {
      question: 'How long does installation take?',
      answer: 'Most residential installations are completed in 1-3 days, depending on system size and complexity. The entire process from contract to activation typically takes 4-8 weeks, including permits and utility approvals.'
    },
    {
      question: 'Do solar panels work during cloudy days?',
      answer: 'Yes! Solar panels still generate electricity on cloudy days, though at reduced efficiency. Modern panels can produce 10-25% of their rated capacity even on overcast days.'
    },
    {
      question: 'What maintenance do solar panels require?',
      answer: 'Solar panels require minimal maintenance. Occasional cleaning and annual inspections are typically sufficient. We offer comprehensive maintenance packages to ensure optimal performance.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about solar energy, installation, 
            and what to expect when you choose SolarTech.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl mb-4 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Still have questions? We're here to help!
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-sky-500 text-white px-8 py-3 rounded-lg hover:bg-sky-600 transition-colors font-semibold"
          >
            Contact Our Experts
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;