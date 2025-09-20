import React, { useState } from "react";
import PopupForm from "./Form";

const Plans = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formTitle, setFormTitle] = useState("");

  const handleOpenForm = (title) => {
    setFormTitle(title);
    setIsFormOpen(true);
  };
  const plans = [
    {
      title: "Starter Plan",
      description: "Perfect for freelancers and small businesses",
      features: [
        "Virtual Office Address for GST/MCA Reg",
        "Professional Business Address",
        "Mail Handling & Forwarding",
        "Courier Handling",
        "Email Support",
      ],
      price: "Get Started from ₹9499",
    },
    {
      title: "Professional Plan",
      description: "Ideal for growing businesses and startups",
      features: [
        "Everything in Starter",
        "Online Submission of GST Application (worth ₹5000 )",
        "Representative for Signing on Behalf of Client (GST/Current Account in Bank).",
        " Get 10 hrs Free Access to Meeting Room worth ₹500/hour",
        "Priority support",
        "Business Registration Assistance",
      ],
      price: "Get Started from ₹14499",
    },

    {
      title: "Enterprise Plan",
      description: "Complete solution for established companies",
      features: [
        "Everything in Professional",
        "Multiple Location Addresses PPOB/APOB",
        "Unlimited Meeting Room Access",
        "Dedicated Account Manager",
        "Phone Support",
        "Virtual Office in Grade A Building",
        "Legal Compliance Consulting",
      ],
      price: "Get Started from ₹19499",
    },
  ];

  const customSolutions = {
    title: "Looking for a customised solution?",
    description: "Connect with our experts now.",
    options: [
      "Meeting & Conference Room ",
      "Fixed Seat",
      "Day Pass",
      "Meeting Room hours",
    ],
    buttonText: "Request Callback",
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-12">
          Choose a Virtual Office based on your needs
        </h2>

        {/* Plans Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-md border-t-4 border-blue-600 flex flex-col bg-[#E9E9F7]"
            >
              <h3 className="text-xl font-bold mb-4">{plan.title}</h3>
              <p className="text-gray-600 mb-4">{plan.description}</p>
              <ul className="mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start mb-2">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              {/* Button pushed to bottom */}
              <button
                onClick={() => handleOpenForm("Reserve My Address")}
                className="mt-auto w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition"
              >
                {plan.price}
              </button>
              <PopupForm
                isOpen={isFormOpen}
                onClose={() => setIsFormOpen(false)}
                formTitle={formTitle}
              />
            </div>
          ))}
        </div>

        {/* Custom Solution Section */}
        <div className="mt-16 bg-[#CEECD1] p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">{customSolutions.title}</h3>
          <p className="mb-6">{customSolutions.description}</p>

          <div className="flex justify-center">
            <ul className="mb-6 list-disc list-inside space-y-2 text-left">
              {customSolutions.options.map((option, i) => (
                <li key={i}>{option}</li>
              ))}
            </ul>
          </div>
          <a
            href="https://wa.me/919907800600?text=Hello%2C%20I%20am%20interested%20in%20your%20Virtual%20Office%20Services.%20Please%20call%20me%20back."
            target="_blank"
          >
            <button className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition">
              {customSolutions.buttonText}
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Plans;
