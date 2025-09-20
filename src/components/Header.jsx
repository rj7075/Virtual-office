// components/Header.jsx
const Header = () => {
  return (
    <header className="bg-gray-600 shadow-md py-4 px-6 sticky top-0 overflow-hidden z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center w-30 h-10">
          <img src="/logo.png" alt="Logo" />
        </div>

        <div className="flex items-center">
          <a
            href="https://wa.me/919907800600?text=Hello%2C%20I%20want%20to%20know%20more%20about%20your%20Virtual%20Office%20Services.%20Please%20call%20me%20back."
            target="_blank"
          >
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg font-medium  transition">
              WhatsApp
            </button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
