// components/ServicesSection.js

const services = [
  {
    title: "🎯 Goal-Based Financial Planning",
    description: "Plan for children’s education, marriage, or retirement.",
  },
  {
    title: "📊 Mutual Fund Investments",
    description: "Curated SIPs and lump sum investments tailored to your goals.",
  },
  {
    title: "🧾 Tax Planning",
    description: "Maximize savings through tax-efficient strategies.",
  },
  {
    title: "📈 Portfolio Review & Rebalancing",
    description: "Periodic reviews to keep your investments on track.",
  },
];

const ServicesSection = () => (
  <section id="services" className="relative py-20 bg-gray-50 overflow-hidden">
    {/* Decorative Background Top Right */}
    

    {/* Decorative Wave Bottom Left (optional) */}
    {/* <img
      src="/bg-wave.png"
      alt="Decorative Wave"
      className="absolute bottom-0 left-0 w-48 md:w-64 opacity-60 pointer-events-none select-none"
    /> */}

    <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Our Services</h2>
      <p className="text-lg text-gray-600 mb-12">
        Tailored financial advice to help you grow and protect your wealth.
      </p>

      <div className="grid md:grid-cols-2 gap-6 text-left">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-2xl shadow hover:shadow-md transition-shadow border border-gray-200"
          >
            <h3 className="text-lg font-semibold mb-2 text-gray-800">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <button className="bg-purple-700 text-white px-6 py-3 rounded-xl text-base hover:bg-purple-800 transition">
          Not sure where to start? Let’s discuss your goals
        </button>
      </div>
    </div>
  </section>
);

export default ServicesSection;
