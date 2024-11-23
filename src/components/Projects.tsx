import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Online Voting System Using Blockchain',
      description: 'Developed a secure voting system using blockchain technology with SHA-256 encryption, face recognition, and OTP authentication.',
      technologies: ['Blockchain', 'SHA-256', 'Face Recognition', 'OTP', 'Web Development'],
      link: 'https://github.com/Chiluverichethankumar/Major-project-online-voting-System-using-Blockchain-.git'
    },
    {
      title: 'Password Generator',
      description: 'Created a user-friendly password generator with strength evaluation and customizable parameters.',
      technologies: ['JavaScript', 'Security Best Practices', 'UI/UX'],
      link: 'https://github.com/Chiluverichethankumar/Projects-on-java.git'
    },
    {
      title: 'E-Commerce Session Tracking',
      description: 'Built a system to track and analyze user sessions on e-commerce websites.',
      technologies: ['PHP', 'MySQL', 'JavaScript', 'Session Management'],
      link: 'https://github.com/Chiluverichethankumar/Chiluverichethankumar-MinProject-on-E-Commerce-website.git'
    }
  ];

  return (
    <section id="projects" className="pt-20 -mt-20">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}