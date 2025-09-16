// components/Header.jsx
const Header = () => {
  return (
    <header className="bg-white shadow-md py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-blue-800">myHQ</span>
          <span className="ml-2 text-gray-600 text-sm">-by ANAROCK-</span>
        </div>

        <div className="flex items-center">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition">
            Call us
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
