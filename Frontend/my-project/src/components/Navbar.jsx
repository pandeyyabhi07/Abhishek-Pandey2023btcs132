import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-violet-500 to-green-500 rounded"></div>
            <span className="text-xl font-bold">App DEV</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-purple-400 transition-colors">
              Home
            </Link>
            <Link to="/about" className="hover:text-purple-400 transition-colors">
              About
            </Link>
            <Link to="/services" className="hover:text-purple-400 transition-colors">
              Services
            </Link>
            <Link to="/contact" className="hover:text-purple-400 transition-colors">
              Contact
            </Link>
            <Link to="/login" className="hover:text-purple-400 transition-colors">
              Login
            </Link>
            <Link to="/signup" className="hover:text-purple-400 transition-colors">
              Signup
            </Link>
          </div>

          <button className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Cart
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
