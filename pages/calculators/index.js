"use client";
import Link from "next/link";

const calculators = [
  {
    title: "SIP Calculator",
    description: "Estimate future returns based on your monthly investments.",
    link: "/calculators/sip",
    image: "/assets/sip1.png",
  },
  {
    title: "EMI Calculator",
    description: "Calculate monthly payments and total interest on loans.",
    link: "/calculators/emi",
    image: "/assets/emi.png",
  },
];

export default function CalculatorsList() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-10 text-yellow-600">Tools & Calculators</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {calculators.map((calc) => (
          <Link href={calc.link} key={calc.title}>
            <div className="border border-yellow-300 rounded-lg p-4 bg-white shadow-md hover:shadow-lg transition cursor-pointer max-w-[320px] mx-auto">
              <img src={calc.image} alt={calc.title} className="h-48 max-w-full object-contain" />
              <div className="pt-2 pb-4">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{calc.title}</h2>
                <p className="text-base text-gray-600">{calc.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
