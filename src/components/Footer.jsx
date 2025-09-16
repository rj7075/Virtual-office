// components/Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">myHQ</h3>
            <p className="text-gray-400">-by ANAROCK-</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Virtual Office
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Meeting Rooms
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Day Pass
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Fixed Desk
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Cities</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Gurgaon
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Noida
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Delhi
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Bangalore
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Mumbai
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <p className="text-gray-400 mb-2">+91 1234567890</p>
            <p className="text-gray-400 mb-4">info@myhq.com</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Request Callback
            </button>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2023 myHQ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
