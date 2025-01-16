import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { serviceId, templateId, userId } from "../config";
const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    emailjs
      .sendForm(serviceId, templateId, formRef.current, userId)
      .then(
        (result) => {
          console.log("SUCCESS:", result.text);
          setMessage("Thank you for reaching out! I'll get back to you soon.");
          formRef.current.reset(); // Clear the form
        },
        (error) => {
          console.error("ERROR:", error.text);
          setMessage("Oops! Something went wrong. Please try again later.");
          setError(true);
          setTimeout(() => {
            setMessage("");
            setError(false);
          }, 3000);
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section className="bg-gray-900 py-10" id="contact">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">
          Contact Me
        </h2>

        {/* Form & Info Container */}
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Contact Info (optional) */}
          <div className="flex-1 space-y-4 text-gray-200">
            <p>
              Got a question or proposal, or just want to say hello? Go ahead.
            </p>
            <p>
              You can also reach me at:
              <br />
              <a
                href="mailto:congphamba2005@gmail.com"
                className="text-blue-400 hover:underline"
              >
                congphamba2005@gmail.com
              </a>
            </p>
          </div>

          {/* Contact Form */}
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="flex-1 bg-gray-800 p-6 rounded-lg shadow-md space-y-4"
          >
            <div>
              <label htmlFor="user_name" className="block text-gray-300 mb-1">
                Name
              </label>
              <input
                type="text"
                name="user_name"
                id="user_name"
                required
                className="w-full border border-gray-600 bg-gray-700 text-white rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-gray-400"
              />
            </div>

            <div>
              <label htmlFor="user_email" className="block text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                name="user_email"
                id="user_email"
                required
                className="w-full border border-gray-600 bg-gray-700 text-white rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-gray-400"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-300 mb-1">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                rows="5"
                className="w-full border border-gray-600 bg-gray-700 text-white rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-gray-400"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`${
                isSubmitting ? "bg-gray-600" : "bg-blue-600 hover:bg-blue-700"
              } text-white font-semibold py-2 px-4 rounded cursor-pointer`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {/* Feedback Message */}
            {message && (
              <p
                className={`${
                  error ? "text-red-600" : "text-green-500"
                } mt-4 text-sm`}
              >
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
