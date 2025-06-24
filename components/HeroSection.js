// components/HeroSection.js

const HeroSection = ({ ifaData }) => (
  <section className="relative bg-[#050a1e] text-white py-20 px-4 md:px-12 overflow-hidden">
    {/* Decorative SVG Wave Bottom */}
    <svg
      className="absolute bottom-0 left-0 w-full text-white"
      viewBox="0 0 1440 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#fff"
        fillOpacity="0.05"
        d="M0,160L60,165.3C120,171,240,181,360,186.7C480,192,600,192,720,186.7C840,181,960,171,1080,181.3C1200,192,1320,224,1380,240L1440,256V320H1380C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320H0V160Z"
      />
    </svg>

    <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl mx-auto">
      {/* Left Content */}
      <div className="md:w-1/2 text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
          <span className="text-white">{ifaData.name},</span>
          <br />
          <span className="text-yellow-400">Your Trusted Financial Advisor</span>
        </h1>
        <p className="text-gray-300 text-lg mb-4">
          Helping you plan, grow, and protect your wealth — with honest advice and proven solutions.
        </p>
        <p className="text-gray-400 mb-6">
          Hi, I’m {ifaData.name}, an AMFI-registered Mutual Fund Distributor with {ifaData.experience} years of experience in guiding families and professionals toward their financial goals.
        </p>
        <button className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-medium hover:bg-yellow-500 transition shadow-lg">
          Book a Free Consultation
        </button>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center">
        <img
          src="/assets/hero.png"
          alt="Financial Advisor"
          className="w-full max-w-sm object-contain"
        />
      </div>
    </div>
  </section>
);

export default HeroSection;
