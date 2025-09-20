// OfficeLocations.jsx
import { useState, useRef } from "react";
import PopupForm from "./Form";

const OfficeLocations = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formTitle, setFormTitle] = useState("");

  const handleOpenForm = (title) => {
    setFormTitle(title);
    setIsFormOpen(true);
  };
  const scrollContainerRef = useRef(null);

  const [offices, setOffices] = useState([
    {
      id: 1,
      name: "Virtual Office in Mumbai",
      startingPrice: 790,
      image:
        "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&w=500&q=60",
      description: "Get your virtual office for GST registration in Mumbai.",
    },
    {
      id: 2,
      name: "Virtual Office in Navi Mumbai",
      startingPrice: 790,
      image:
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=500&q=60",
      description: "Find the perfect virtual office space near you today.",
    },
    {
      id: 3,
      name: "Virtual Office in Thane",
      startingPrice: 790,
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=500&q=60",
      description:
        "Our virtual office services offer a prestigious business address.",
    },
    {
      id: 4,
      name: "Virtual Office in Pune",
      startingPrice: 790,
      image:
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=500&q=60",
      description:
        "A flexible virtual workspace solution for your growing business.",
    },
    {
      id: 5,
      name: "Virtual Office in Nagpur",
      startingPrice: 625,
      image:
        "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=500&q=60",
      description:
        "Secure a professional registered office for your esteemed company.",
    },
    {
      id: 6,
      name: "Virtual Office in Aurangabad",
      startingPrice: 625,
      image:
        "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=500&q=60",
      description:
        "Explore our premium virtual office space options right now.",
    },
  ]);

  // Scroll functions
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  // Function to add a new office (demo)
  const addOffice = () => {
    const newOffice = {
      id: offices.length + 1,
      name: `New Location ${offices.length + 1}`,
      startingPrice: Math.floor(Math.random() * 200) + 700,
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=500&q=60",
      description: "New premium office location",
    };
    setOffices([...offices, newOffice]);
  };

  return (
    <section className="py-16 bg-gray-50 relative">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Pick your new office address, anywhere in Mumbai
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose an office address that best represents your business and
            enjoy a fully-serviced, real office experience.
          </p>
        </div>

        {/* Carousel wrapper (relative for buttons) */}
        <div className="relative">
          {/* Left button */}
          <button
            onClick={scrollLeft}
            className="hidden md:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 z-8 w-12 h-12 rounded-full bg-transparent shadow-lg hover:bg-gray-100 transition"
            aria-label="Scroll left"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Right button */}
          <button
            onClick={scrollRight}
            className="hidden md:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 z-8 w-12 h-12 rounded-full bg-transparent shadow-lg hover:bg-gray-100 transition"
            aria-label="Scroll right"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Office cards - scrollable */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-6 scrollbar-hide space-x-6"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {offices.map((office) => (
              <div
                key={office.id}
                className="flex-shrink-0 w-80 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={office.image}
                    alt={office.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {office.name}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {office.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-500">Starting at</p>
                      <p className="text-2xl font-bold text-blue-600">
                        ₹{office.startingPrice}/month
                      </p>
                    </div>
                    <button
                      onClick={() => handleOpenForm("Reserve My Address")}
                      className="bg-blue-600 text-white px-2 py-2 rounded-lg hover:bg-blue-700 transition flex items-center"
                    >
                      Book Now
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </button>
                    <PopupForm
                      isOpen={isFormOpen}
                      onClose={() => setIsFormOpen(false)}
                      formTitle={formTitle}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Extra info */}
        <div className="text-center mt-8">
          <p className="text-gray-600 text-lg">
            + {20} more virtual office locations in Mumbai
          </p>
        </div>

        {/* Stats */}
        <div className="bg-white rounded-xl shadow-md p-8 max-w-4xl mx-auto mt-8">
          <div className="flex flex-col md:flex-row justify-around items-center">
            <div className="text-center mb-6 md:mb-0">
              <div className="text-4xl font-bold text-blue-600">10,000+</div>
              <div className="text-gray-600">Virtual Office clients</div>
            </div>
            <div className="text-center mb-6 md:mb-0">
              <div className="text-4xl font-bold text-blue-600">100+</div>
              <div className="text-gray-600">Prime locations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">24/7</div>
              <div className="text-gray-600">Support available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom styles */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default OfficeLocations;
