const ResourcesSection = () => (
    <section id="resources" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Useful Tools & Insights for Smart Investing
        </h2>
  
        {/* Live Stock Market Updates */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-2">📈 Live Stock Market Updates</h3>
          <div className="bg-white p-4 rounded shadow">
            {/* Replace with actual widget/embed */}
            <p className="text-gray-600 italic">[Auto-updating ticker widget placeholder]</p>
          </div>
        </div>
  
        {/* Latest Finance News */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-2">📰 Latest Finance News</h3>
          <div className="bg-white p-4 rounded shadow h-40 overflow-y-auto">
            {/* Replace with actual RSS feed */}
            <p className="text-gray-600 italic">[Auto-updating RSS feed placeholder]</p>
          </div>
        </div>
  
        {/* Financial Calculators */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-2">🧮 Financial Calculators</h3>
          <p className="text-gray-700 mb-4">
            Plan your SIPs, calculate EMIs — use our quick tools anytime.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <a className="block bg-purple-700 text-white text-center py-3 rounded hover:bg-purple-800" href="#">
              SIP Calculator
            </a>
            <a className="block bg-purple-700 text-white text-center py-3 rounded hover:bg-purple-800" href="#">
              EMI Calculator
            </a>
          </div>
        </div>
  
        {/* Downloads */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-2">📥 Download Free Tools</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li><a href="#" className="text-blue-600 underline">Goal Planner PDF</a></li>
            <li><a href="#" className="text-blue-600 underline">Expense Tracker Excel</a></li>
            <li><a href="#" className="text-blue-600 underline">Simple SIP Planner Sheet</a></li>
          </ul>
        </div>
  
        {/* Newsletter */}
        <div className="bg-white p-6 rounded shadow text-center">
          <p className="text-gray-800 font-medium mb-2">
            📬 Subscribe to get a monthly tip from me
          </p>
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 border rounded w-full max-w-sm mx-auto mb-4"
          />
          <button className="bg-purple-700 text-white px-6 py-2 rounded hover:bg-purple-800">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
  
  export default ResourcesSection;
  