import React from 'react';

export default function Experience() {
  const experiences = [
    {
      company: "Mu Sigma ",
      role: "Trainee decision scientist",
      duration: "Jul-2024 to Oct-2024",
      industry: "Travel – Energy Conservation team (NCLH)",
      problem_statement: "The Energy Conservation team at NCLH is focused on improving ship fleet efficiency through energy and fuel savings. The goal is to develop strategies that reduce fuel consumption, lower emissions, and ensure compliance with environmental regulations, while maintaining operational performance.",
      outcome: "The analysis will identify which factors most affect fuel consumption at a detailed level.",
      description: "Conducted fuel consumption analysis for NCLH fleet efficiency improvement, focusing on energy conservation and environmental compliance.",
      achievements: [
        "Developed strategies for reducing fuel consumption and emissions",
        "Analyzed key factors affecting fuel consumption at detailed levels",
        "Contributed to operational performance optimization"
      ]
    }
    ,
    {
      company: 'LearnWik',
      role: 'Intern',
      duration: 'Aug-2023 to Dec-2023',
      description: 'Developed a Secure Password Generator application using Java and Object-Oriented Programming (OOP).',
      achievements: [
        'Generated strong, random passwords with diverse character sets and security best practices',
        'Applied modular, well-structured code for easy maintenance and scalability',
        'Designed for seamless integration into various platforms for secure password generation'
      ]
    },
    {
      company: 'AWS Academy',
      role: 'Cloud Virtual Intern',
      duration: 'May-2023 to Jul-2023',
      description: 'Completed comprehensive training in AWS cloud services and architecture.',
      achievements: [
        'Mastered AWS core services and security concepts',
        'Studied cloud architecture and pricing models',
        'Gained practical insights into cloud computing'
      ]
    }
  ];

  return (
    <section id="experience" className="pt-20 -mt-20">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Professional Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{exp.company}</h3>
                <p className="text-blue-600">{exp.role}</p>
              </div>
              <span className="text-gray-500 mt-2 md:mt-0">{exp.duration}</span>
            </div>
            <p className="text-gray-600 mb-4">{exp.description}</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {exp.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}