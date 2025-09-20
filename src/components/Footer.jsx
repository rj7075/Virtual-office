import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import PopupForm from "./Form";

const Footer = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formTitle, setFormTitle] = useState("");

  const handleOpenForm = (title) => {
    setFormTitle(title);
    setIsFormOpen(true);
  };
  const services = [
    { name: "Virtual Office for Business Registration", link: "/services" },
    { name: "Virtual Office for Company Registration", link: "/contact" },
    { name: "Virtual Address", link: "/contact" },
    { name: "GST Registration", link: "/contact" },
    { name: "Premium Business Address", link: "/contact" },
    { name: "Mailing Address and Courier Handling", link: "/contact" },
  ];

  const officeLocations = [
    { name: "Virtual Office in Nashik", link: "/virtual-office" },
    { name: "Virtual Office in Amravati", link: "/about-us" },
    { name: "Virtual Office in Kolhapur", link: "/about-us" },
    { name: "Virtual Office in Jalgaon", link: "/about-us" },
    { name: "Virtual Office in Ch. Sambhajinagar", link: "/services" },
    { name: "Virtual Office in Satara", link: "/contact" },
  ];

  return (
    <div>
      <footer className="bg-gray-600 text-gray-700 py-12">
        <div className="container mx-auto px-4">
          {/* Top Section: Four Columns */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Column 1: Logo & Info */}
            <div>
              <div className="text-2xl font-bold mb-2">
                <a href="/virtual-office">
                  <img className="w-35 h-20" src="/logo.png" alt="logo" />
                </a>
              </div>
              <p className="text-gray-200">Virtual Office Solutions</p>
              <p className="text-gray-200">
                Office Suite: 02-007, 2nd Floor, Emaar The Palm Square, Golf
                Course Road Extn. Sector 66, Gurgaon, Haryana (INDIA)
              </p>
            </div>

            {/* Column 2: Quick Links 1 */}
            <div>
              <h3 className="text-white text-2xl font-semibold mb-3">
                Quick Links
              </h3>
              <ul className="space-y-2 text-gray-200">
                {officeLocations.map((office, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleOpenForm("Reserve My Address")}
                      className="hover:text-blue-500 underline"
                    >
                      {office.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Quick Links 2 */}
            <div>
              <h3 className="text-white text-2xl font-semibold mb-3">
                Services
              </h3>
              <ul className="space-y-2 text-gray-200">
                {services.map((service, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleOpenForm("Reserve My Address")}
                      className="hover:text-blue-500 underline"
                    >
                      {service.name}
                    </button>
                    <PopupForm
                      isOpen={isFormOpen}
                      onClose={() => setIsFormOpen(false)}
                      formTitle={formTitle}
                    />
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Social Icons */}
            <div>
              <h3 className="text-white text-2xl font-semibold mb-3">
                Follow Us
              </h3>
              <div className="flex space-x-4 mb-4">
                <a
                  href="https://www.facebook.com/AssetSenseIndia"
                  className="text-gray-400 hover:text-white"
                >
                  <FaFacebookF size={20} />
                </a>
                <a
                  href="https://x.com/mohan_skills"
                  className="text-gray-400 hover:text-white"
                >
                  <FaTwitter size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/company/asset-sense-pvt-ltd"
                  className="text-gray-400 hover:text-white"
                >
                  <FaLinkedinIn size={20} />
                </a>
                <a
                  href="https://www.instagram.com/assetsense1/#"
                  className="text-gray-400 hover:text-white"
                >
                  <FaInstagram size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section: Policies & Copyright */}
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 space-y-2">
            <div className="flex justify-center gap-4 mb-2">
              <a
                href="/privacy-policy"
                className="hover:text-white transition-colors text-blue-600 underline"
              >
                Privacy Policy
              </a>
              <span>|</span>
              <a
                href="/refund-policy"
                className="hover:text-white transition-colors text-blue-600 underline"
              >
                Refund Policy
              </a>
              <span>|</span>
              <a
                href="/terms&conditions"
                className="hover:text-white transition-colors text-blue-600 underline"
              >
                Terms & Conditions
              </a>
            </div>
            <p className="text-gray-200">
              © 2025 Asset Sense. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
