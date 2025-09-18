function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-snug">
                 Book Your Appointment Online <span className="text-purple-600">Instantly</span>
              </h2>       
              <p className="text-gray-700 text-lg mb-8">
                 Select your preferred doctor and time slot, and receive immediate confirmation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors shadow-lg">
                    Book Now
                </button>
                <button className="border border-purple-600 text-purple-600 px-6 py-3 rounded-lg font-medium hover:bg-purple-50 transition-colors shadow-sm">
                  Learn About Our Experts
                </button>
              </div>
            </div>

            {/* Right Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">99%</div>
                <div className="text-gray-700">Sanitized & Safe Services</div>
              </div>
              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">24/7</div>
                <div className="text-gray-700">Emergency Support</div>
              </div>
              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
                <div className="text-gray-700">Expert Solutions Available</div>
              </div>
              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">10x</div>
                <div className="text-gray-700">Faster Response Time</div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;
