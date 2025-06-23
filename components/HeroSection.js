const HeroSection = ({ ifaData }) => (
  <section
    id="home"
    className="py-16 px-4 md:px-12 bg-white text-center flex flex-col-reverse md:flex-row items-center justify-between"
  >
    <div className="md:w-1/2 text-left">
      <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800">
        {ifaData.name}, Your Trusted Financial Advisor
      </h1>
      <p className="text-lg text-gray-600 mb-4">
        Helping you plan, grow, and protect your wealth — with honest advice and proven solutions.
      </p>
      <p className="text-gray-500 mb-6">
        Hi, I’m {ifaData.name}, an AMFI-registered Mutual Fund Distributor with {ifaData.experience} years of experience in guiding families and professionals toward their financial goals.
      </p>
      <button className="bg-purple-700 text-white px-6 py-3 rounded hover:bg-purple-800 transition">
        Book a Free Consultation
      </button>
    </div>

    <div className="md:w-1/2 mb-8 md:mb-0">
      <img
        src="https://cdni.iconscout.com/illustration/premium/thumb/financial-advisor-3121234-2603892.png"
        alt="Financial Advisor Illustration"
        className="w-full max-w-md mx-auto"
      />
    </div>
  </section>
);

export default HeroSection;
