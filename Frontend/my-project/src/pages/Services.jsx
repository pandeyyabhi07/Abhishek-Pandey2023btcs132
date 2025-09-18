function Services() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-4 border rounded-lg shadow">
          <h3 className="font-bold text-lg">Web Development</h3>
          <p className="text-gray-600 mt-2">
            Build fast and modern websites using React and Tailwind.
          </p>
        </div>
        <div className="p-4 border rounded-lg shadow">
          <h3 className="font-bold text-lg">Backend APIs</h3>
          <p className="text-gray-600 mt-2">
            Scalable APIs with Node.js, Express, and MongoDB.
          </p>
        </div>
        <div className="p-4 border rounded-lg shadow">
          <h3 className="font-bold text-lg">Authentication</h3>
          <p className="text-gray-600 mt-2">
            Secure login & signup with JWT, bcrypt, and middleware.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
