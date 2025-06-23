const AboutSection = ({ ifaData }) => (
  <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
    <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-xl p-10 grid md:grid-cols-3 gap-10 items-center">
      
      {/* Left Profile Column */}
      <div className="text-center col-span-1">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt={`Photo of ${ifaData.name}`}
          className="w-40 h-40 mx-auto rounded-full shadow-lg border-4 border-purple-100 mb-4"
        />
        <h3 className="text-xl font-semibold text-gray-800">{ifaData.name}</h3>
        <p className="text-sm text-gray-500">AMFI ARN: <strong>{ifaData.arn}</strong></p>
      </div>

      {/* About Text Content */}
      <div className="col-span-2 space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-purple-800 mb-2">Meet {ifaData.name}</h2>
          <p className="text-gray-700 leading-relaxed">
            I’m {ifaData.name}, a passionate financial advisor with over <strong>{ifaData.experience}</strong> years helping individuals and families make smart money decisions. I believe in building trust through transparency and long-term relationships. Registered with AMFI <strong>{ifaData.arn}</strong>, I stay updated with the latest market trends to offer you the best possible guidance.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-gray-800">🎯 Mission</h4>
          <p className="text-gray-700 italic">
            Empower you to achieve financial freedom with simple, reliable investment solutions.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-gray-800">📜 Credentials</h4>
          <p className="text-gray-700">AMFI Registered Mutual Fund Distributor</p>
        </div>

        {ifaData.hobby && (
          <div>
            <h4 className="text-lg font-semibold text-gray-800">💬 Personal Note</h4>
            <p className="text-gray-700 italic">
              Outside work, I enjoy {ifaData.hobby}, and I love working with clients who value clear, honest advice.
            </p>
          </div>
        )}
      </div>
    </div>
  </section>
);


export default AboutSection;
