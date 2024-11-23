import React from 'react';
import { MapPin, Mail, Phone, Linkedin, Github } from 'lucide-react';
import img1 from './Images/Chethan.jpg';


export default function About() {
  return (
    <section id="about" className="pt-20 -mt-20">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="relative h-48 bg-gradient-to-r from-blue-500 to-indigo-600">
          <img
            src="https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?auto=format&fit=crop&q=80&w=2048"
            alt="Header background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative px-6 pb-8">
          <div className="flex flex-col items-center -mt-20">
            <img
              src={img1}
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
            />
            <h2 className="mt-4 text-3xl font-bold text-gray-800">Chiluveri ChethanKumar</h2>
            <p className="text-gray-600 mt-1">Trainee Decision Scientist, Java, Web Developer, Problem Solver</p>
            <p className="text-gray-600 mt-1">Computer Science and Engineering</p>
            
            <div className="mt-6 space-y-4 text-gray-600">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span>1-9-64/65, Bheem Nagar, Gadwal, Telangana 509125</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-blue-600" />
                <a href="mailto:chiluverichethankumar@gmail.com" className="hover:text-blue-600">
                  chiluverichethankumar@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-blue-600" />
                <a href="tel:+919182419079" className="hover:text-blue-600">
                  +91 91824 19079
                </a>
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <a
                href="https://www.linkedin.com/in/chiluverichethankumar-844a05274/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-blue-100 rounded-full text-blue-600 hover:bg-blue-200 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/chiluverichethankumar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-100 rounded-full text-gray-600 hover:bg-gray-200 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800">Career Objective</h3>
            <p className="mt-2 text-gray-600 leading-relaxed">
              To seek and maintain a full-time position that offers professional challenges utilizing interpersonal skills,
              excellent time management, and problem-solving skills. Dedicated Java and Web Developer with a strong
              foundation in problem-solving.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}