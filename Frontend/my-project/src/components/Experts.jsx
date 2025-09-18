function Experts() {
  const experts = [
    { name: "Dr. Ekloga Kaplin", img: "", role: "Senior Consultant" },
    { name: "Dr. Matt Johnson", img: "", role: "Neurologist" },
    { name: "Dr. Riya Taylor", img: "", role: "Cardiologist" },
    { name: "Dr. Raja Thomas", img: "", role: "Orthopedic" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Get To Know Our Experts
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Explore our team of highly skilled experts with dedication in their
          specialties. These experienced professionals are helping patients one
          step at a time.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white shadow rounded-lg overflow-hidden col-span-1 md:row-span-2">
            <div className="h-96 bg-gray-200"></div>
            <div className="bg-purple-600 text-white py-3 text-lg font-semibold">
              {experts[0].name}
            </div>
          </div>

          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="h-40 bg-gray-200"></div>
            <div className="bg-purple-600 text-white py-3 text-lg font-semibold">
              {experts[1].name}
            </div>
          </div>

          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="h-40 bg-gray-200"></div>
            <div className="bg-purple-600 text-white py-3 text-lg font-semibold">
              {experts[2].name}
            </div>
          </div>

          <div className="bg-white shadow rounded-lg overflow-hidden col-span-1 md:col-span-2">
            <div className="h-40 bg-gray-200"></div>
            <div className="bg-purple-600 text-white py-3 text-lg font-semibold">
              {experts[3].name}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experts;
