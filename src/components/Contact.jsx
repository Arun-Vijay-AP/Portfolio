import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope } from "react-icons/fa6";

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_yvqskuq", "template_e3feph4", form.current, {
        publicKey: "RscfbJ3-qj_vgRFvM",
      })
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({ from_name: "", from_email: "", message: "" });
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error("EmailJS Error:", error.text);
        }
      );
  };

  return (
    <section className="bg-green-50 min-h-screen flex flex-col items-center px-4 py-16">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center gap-60">
        <img
          src="APimg.jpg"
          alt="Avatar"
          className="w-72 h-72 rounded-full border-4 border-black object-cover"
        />
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Contact Me</h2>
          <p className="text-slate-600 max-w-lg mb-6">
            I am available on social media. You can message me, I will reply
            within 24 hours. I can help you with React, ML, AI, Cloud and
            Opensource Development.
          </p>
          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-4 text-2xl mb-4">
            <a href="https://www.linkedin.com/in/arun-vijay-ap/" target="_blank" rel="noreferrer">
              <FaLinkedin className="hover:text-blue-700" />
            </a>
            <a href="https://github.com/Arun-Vijay-AP" target="_blank" rel="noreferrer">
              <FaGithub className="hover:text-black" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              <FaXTwitter className="hover:text-black" />
            </a>
            <a
              href="mailto:arunvijaypalanisamy@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope className="text-2xl text-gray-700 hover:text-red-500" />
            </a>
          </div>
          <a
            href="https://drive.google.com/file/d/1u1MtGfJl_TkmXHUZN18zHcksA139jD9P/view?usp=sharing"
            className="inline-block bg-blue-900 text-white font-semibold py-2 px-5 rounded hover:bg-blue-800"
          >
            See My Resume
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 w-full my-12 max-w-4xl" />

      {/* Contact Form */}
      <div className="bg-white shadow-lg rounded-2xl p-8 md:p-12 w-full max-w-3xl">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Send a Message</h3>
        <form ref={form} onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              required
              className="mt-1 w-full p-3 border border-gray-300 rounded-xl focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="from_email"
              value={formData.from_email}
              onChange={handleChange}
              required
              className="mt-1 w-full p-3 border border-gray-300 rounded-xl focus:ring-blue-500 focus:border-blue-500"
              placeholder="you@gmail.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="mt-1 w-full p-3 border border-gray-300 rounded-xl focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your message..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
