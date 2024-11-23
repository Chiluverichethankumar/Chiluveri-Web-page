import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="pt-20 -mt-20">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Get in Touch</h2>
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800">Contact Information</h3>
            <div className="space-y-4">
              <a
                href="mailto:chiluverichethankumar@gmail.com"
                className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
                chiluverichethankumar@gmail.com
              </a>
              <a
                href="tel:+919182419079"
                className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Phone className="w-5 h-5" />
                +91 91824 19079
              </a>
              <a
                href="https://www.linkedin.com/in/chiluverichethankumar-844a05274/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn Profile
              </a>
              <a
                href="https://github.com/chiluverichethankumar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Github className="w-5 h-5" />
                GitHub Profile
              </a>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800">Send a Message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}