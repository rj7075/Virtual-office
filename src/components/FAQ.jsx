import { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is a Virtual Office and who needs it?",
      answer:
        "A virtual office allows you to have an office space without physically owning or paying for one. It is a cost-effective solution for those looking to rent an office space to start/expand their business in a new city, running a remote business, manage stocks and supply in different states across India.",
    },
    {
      question: "What are the types or uses of a Virtual Office?",
      answer:
        "Virtual offices can be used for business registration, GST registration, mail handling, and providing a professional business address without the need for physical space.",
    },
    {
      question: "Which documents do I need to own a virtual office?",
      answer:
        "Typically you need identity proof, address proof, and business registration documents if applicable.",
    },
    {
      question: "Is it legal/safe to have a virtual office?",
      answer:
        "Yes, virtual offices are completely legal and recognized by the Indian government for business registration and GST purposes.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full bg-white p-4 rounded-lg shadow-md text-left font-bold"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span className="text-xl">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              {activeIndex === index && (
                <div className="bg-white p-4 rounded-b-lg shadow-md mt-1">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
