import Image from "next/image";

const HeroSection = () => (
  <section className="bg-[#050a1e] text-white py-16 px-4 md:px-12">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
         Ravi Shah,<br />
          <span className="text-yellow-400">Your Trusted Financial Advisor</span>
        </h1>
        <p className="text-lg text-gray-300 mb-4">
          Helping you plan, grow, and protect your wealth — with honest advice and proven solutions.
        </p>
        <p className="text-md text-gray-400 mb-6">
          Hi, I’m Ravi Shah, an AMFI-registered Mutual Fund Distributor with 12 years of experience in guiding families and professionals toward their financial goals.
        </p>
        <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded hover:bg-yellow-300 transition">
          Book a Free Consultation
        </button>
      </div>

      <div className="flex justify-center">
        <div className="bg-white p-4 rounded-xl shadow-lg">
          <Image
            src="/assets/hero.png"
            alt="Hero Illustration"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
