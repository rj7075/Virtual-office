// Hero.jsx
import { useState, useEffect } from "react";
import PopupForm from "./Form";

import toast from "react-hot-toast";

const Hero = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formTitle, setFormTitle] = useState("");

  const handleOpenForm = (title) => {
    setFormTitle(title);
    setIsFormOpen(true);
  };
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle form submission here
  //   console.log("Form submitted:", formData);
  //   alert("Thank you for your inquiry! We will contact you shortly.");
  // };

  // Floating label effect
  useEffect(() => {
    const inputs = document.querySelectorAll(".floating-input");

    inputs.forEach((input) => {
      input.addEventListener("focus", function () {
        this.nextElementSibling.classList.add("label-active");
      });

      input.addEventListener("blur", function () {
        if (!this.value) {
          this.nextElementSibling.classList.remove("label-active");
        }
      });
    });

    return () => {
      inputs.forEach((input) => {
        input.removeEventListener("focus", () => {});
        input.removeEventListener("blur", () => {});
      });
    };
  }, []);

  return (
    <section className="relative pt-12 pb-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          {/* Left Content */}
          <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
            <div className="mb-6">
              <span className="text-2xl font-bold text-white">
                Virtual Office in Mumbai{" "}
              </span>
              <span className="ml-2 text-blue-100 text-sm">
                -By Asset Sense
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Bring Your Business to Mumbai with a Virtual Office
            </h1>
            <p className="text-xl mb-8">
              Get Your Virtual Office for GST Registration in Mumbai
            </p>

            {/* Mobile Form */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-gray-800 mb-8 lg:hidden">
              <h3 className="text-xl font-bold mb-4">
                Know more about Virtual Office in Mumbai
              </h3>
              <p className="text-gray-600 mb-4">
                Stress free registrations guaranteed with Asset Sense
              </p>
              {/* <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="floating-label relative">
                  <input
                    type="text"
                    name="name"
                    placeholder=" "
                    className="floating-input w-full p-3 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-blue-500"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <label className="absolute left-0 top-3 text-gray-500 transition-all duration-200 pointer-events-none">
                    Name
                  </label>
                </div>
                <div className="floating-label relative">
                  <input
                    type="tel"
                    name="phone"
                    placeholder=" "
                    className="floating-input w-full p-3 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-blue-500"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                  <label className="absolute left-0 top-3 text-gray-500 transition-all duration-200 pointer-events-none">
                    Mobile number
                  </label>
                </div>
                <div className="floating-label relative">
                  <input
                    type="email"
                    name="email"
                    placeholder=" "
                    className="floating-input w-full p-3 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-blue-500"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <label className="absolute left-0 top-3 text-gray-500 transition-all duration-200 pointer-events-none">
                    Email
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition"
                >
                  Get Quote
                </button>
              </form> */}
              <div className="mt-4 text-center">
                <button
                  onClick={() => handleOpenForm("Reserve My Address")}
                  className="text-blue-600 font-semibold flex items-center justify-center w-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Request Callback
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => handleOpenForm("Reserve My Address")}
                className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition"
              >
                Get in Touch to Know More
              </button>
              <PopupForm
                isOpen={isFormOpen}
                onClose={() => setIsFormOpen(false)}
                formTitle={formTitle}
              />
              <button
                onClick={() => handleOpenForm("Reserve My Address")}
                className="border-2 border-white text-white font-bold py-3 px-6 rounded-lg hover:bg-white hover:text-blue-600 transition"
              >
                Request Callback
              </button>
            </div>

            {/* Additional Info */}
            <div className="mt-12 grid grid-cols-2 gap-6">
              <div className="bg-blue-500 bg-opacity-20 p-4 rounded-lg">
                <div className="text-3xl font-bold mb-2">10K+</div>
                <div className="text-blue-100">Virtual Office Clients</div>
              </div>
              <div className="bg-blue-500 bg-opacity-20 p-4 rounded-lg">
                <div className="text-3xl font-bold mb-2">100+</div>
                <div className="text-blue-100">Prime Locations</div>
              </div>
            </div>
          </div>

          {/* Right Form (Sticky) */}
          <div className="lg:w-1/2">
            <div className="sticky top-4 hidden lg:block">
              <div className="bg-white p-8 rounded-lg shadow-lg text-gray-800">
                <h3 className="text-2xl font-bold mb-2">
                  Know more about Virtual office in Mumbai
                </h3>
                <p className="text-gray-600 mb-6">
                  Stress free registrations guaranteed with Asset Sense
                </p>
                {/* <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="floating-label relative">
                    <input
                      type="text"
                      name="name"
                      placeholder=" "
                      className="floating-input w-full p-3 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-blue-500"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <label className="absolute left-0 top-3 text-gray-500 transition-all duration-200 pointer-events-none">
                      Name
                    </label>
                  </div>
                  <div className="floating-label relative">
                    <input
                      type="tel"
                      name="phone"
                      placeholder=" "
                      className="floating-input w-full p-3 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-blue-500"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                    <label className="absolute left-0 top-3 text-gray-500 transition-all duration-200 pointer-events-none">
                      Mobile number
                    </label>
                  </div>
                  <div className="floating-label relative">
                    <input
                      type="email"
                      name="email"
                      placeholder=" "
                      className="floating-input w-full p-3 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-blue-500"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <label className="absolute left-0 top-3 text-gray-500 transition-all duration-200 pointer-events-none">
                      Email
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition"
                  >
                    Get Quote
                  </button>
                </form> */}
                <button
                  onClick={() => handleOpenForm("Reserve My Address")}
                  className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition"
                >
                  Get Quote
                </button>
                <div className="mt-4 text-center">
                  <button
                    onClick={() => handleOpenForm("Reserve My Address")}
                    className="text-blue-600 font-semibold flex items-center justify-center w-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    Request Callback
                  </button>
                </div>
              </div>

              {/* Additional Form Info */}
              <div className="mt-6 bg-blue-500 bg-opacity-10 p-4 rounded-lg border border-blue-300 border-opacity-30">
                <div className="flex items-center text-blue-100 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  <span className="font-medium">Lowest Price Guarantee</span>
                </div>
                <div className="flex items-center text-blue-100 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="font-medium">1hr Average Response Time</span>
                </div>
                <div className="flex items-center text-blue-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="font-medium">Money Back Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating contact button for mobile */}
      <div className="fixed z-9 bottom-6 right-6 ">
        <button
          onClick={() => handleOpenForm("Reserve My Address")}
          className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center shadow-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
        </button>
      </div>

      <style jsx>{`
        .floating-input:focus + label,
        .floating-input:not(:placeholder-shown) + label,
        .label-active {
          top: -15px !important;
          font-size: 12px !important;
          color: #2563eb !important;
        }
      `}</style>
    </section>
  );
};

export default Hero;
