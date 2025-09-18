function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"></div>
                <span className="text-2xl font-bold text-gray-900">App DEV</span>
              </div>
              <p className="text-gray-600 mb-4">
                We build sleek, modern apps that help businesses and individuals achieve their tech goals. Let’s innovate together!
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors" aria-label="Twitter">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 ..."/>
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors" aria-label="Facebook">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69 ..."/>
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors" aria-label="LinkedIn">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-..."/>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-gray-900">Our Services</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-purple-600 transition-colors">Mobile App Development</a></li>
                <li><a href="#" className="hover:text-purple-600 transition-colors">Web App Development</a></li>
                <li><a href="#" className="hover:text-purple-600 transition-colors">UI/UX Design</a></li>
                <li><a href="#" className="hover:text-purple-600 transition-colors">AI & Automation</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-gray-900">Company</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-purple-600 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-purple-600 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-purple-600 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-purple-600 transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-gray-900">Contact Us</h3>
              <div className="space-y-2 text-gray-600">
                <p><span className="font-semibold">Email:</span> hello@appdev.com</p>
                <p><span className="font-semibold">Phone:</span> +91 9876543210</p>
                <p>
                  <span className="font-semibold">Address:</span><br />
                  456 Innovation Blvd<br />
                  Lucknow, India
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500 text-sm sm:text-base">
            <p>
              &copy; 2025 App DEV. Built with ❤️ by App DEV Team.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
