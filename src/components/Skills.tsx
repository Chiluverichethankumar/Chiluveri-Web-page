import React from 'react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Java', 'Python', 'R', 'JavaScript']
    },
    {
      title: 'Web Technologies',
      skills: ['HTML', 'CSS', 'XML', 'JSON', 'PHP']
    },
    {
      title: 'Databases',
      skills: ['SQL', 'PHPMyAdmin']
    },
    {
      title: 'Cloud & Tools',
      skills: ['AWS', 'Git', 'Agile Frameworks']
    },
    {
      title: 'Languages',
      skills: ['English', 'Hindi', 'Telugu']
    },
    {
      title: 'Soft Skills',
      skills: [
        'Technical Analysis',
        'Problem Solving',
        'Time Management',
        'Leadership',
        'Adaptability'
      ]
    }
  ];

  return (
    <section id="skills" className="pt-20 -mt-20">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Skills & Expertise</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}