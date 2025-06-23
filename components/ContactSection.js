import React from "react";

const ContactSection = ({ ifaData }) => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Let’s Connect</h2>
        <p className="text-center text-gray-600 mb-10">
          I’d love to help you get started on your investment journey. Reach out anytime — I’m just a message away.
        </p>

        {/* Contact Info */}
        <div className="grid md:grid-cols-2 gap-8 mb-10 text-center md:text-left">
          <div>
            <p className="text-lg mb-2">📞 <strong>Phone:</strong> {ifaData.phone}</p>
            <p className="text-lg mb-2">📧 <strong>Email:</strong> {ifaData.email}</p>
            {ifaData.location && (
              <p className="text-lg mb-2">📍 <strong>Location:</strong> {ifaData.location}</p>
            )}
          </div>

          {/* Contact Form */}
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border rounded"
              required
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-2 border rounded"
              required
            />
            <button
              type="submit"
              className="bg-purple-700 text-white px-6 py-2 rounded hover:bg-purple-800"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* WhatsApp Button */}
        <div className="text-center">
          <a
            href={`https://wa.me/${ifaData.phone.replace(/\D/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600"
          >
            💬 Chat with me instantly on WhatsApp!
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
