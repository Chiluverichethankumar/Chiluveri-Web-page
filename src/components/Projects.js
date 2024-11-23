import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsxs("section", { id: "projects", className: "pt-20 -mt-20", children: [_jsx("h2", { className: "text-3xl font-bold text-gray-800 mb-8", children: "Featured Projects" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: projects.map((project, index) => (_jsx("div", { className: "bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow", children: _jsxs("div", { className: "p-6", children: [_jsxs("div", { className: "flex items-center justify-between mb-4", children: [_jsx("h3", { className: "text-xl font-semibold text-gray-800", children: project.title }), _jsx("a", { href: project.link, target: "_blank", rel: "noopener noreferrer", className: "text-blue-600 hover:text-blue-700", children: _jsx(ExternalLink, { className: "w-5 h-5" }) })] }), _jsx("p", { className: "text-gray-600 mb-4", children: project.description }), _jsx("div", { className: "flex flex-wrap gap-2", children: project.technologies.map((tech, i) => (_jsx("span", { className: "px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm", children: tech }, i))) })] }) }, index))) })] }));
}
