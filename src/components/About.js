import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { MapPin, Mail, Phone, Linkedin, Github } from 'lucide-react';
import img1 from './Images/Chethan.jpg';
export default function About() {
    return (_jsx("section", { id: "about", className: "pt-20 -mt-20", children: _jsxs("div", { className: "bg-white rounded-2xl shadow-xl overflow-hidden", children: [_jsx("div", { className: "relative h-48 bg-gradient-to-r from-blue-500 to-indigo-600", children: _jsx("img", { src: "https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?auto=format&fit=crop&q=80&w=2048", alt: "Header background", className: "w-full h-full object-cover opacity-20" }) }), _jsxs("div", { className: "relative px-6 pb-8", children: [_jsxs("div", { className: "flex flex-col items-center -mt-20", children: [_jsx("img", { src: img1, alt: "Profile", className: "w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover" }), _jsx("h2", { className: "mt-4 text-3xl font-bold text-gray-800", children: "Chiluveri ChethanKumar" }), _jsx("p", { className: "text-gray-600 mt-1", children: "Trainee Decision Scientist, Java, Web Developer, Problem Solver" }), _jsx("p", { className: "text-gray-600 mt-1", children: "Computer Science and Engineering" }), _jsxs("div", { className: "mt-6 space-y-4 text-gray-600", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(MapPin, { className: "w-5 h-5 text-blue-600" }), _jsx("span", { children: "1-9-64/65, Bheem Nagar, Gadwal, Telangana 509125" })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Mail, { className: "w-5 h-5 text-blue-600" }), _jsx("a", { href: "mailto:chiluverichethankumar@gmail.com", className: "hover:text-blue-600", children: "chiluverichethankumar@gmail.com" })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Phone, { className: "w-5 h-5 text-blue-600" }), _jsx("a", { href: "tel:+919182419079", className: "hover:text-blue-600", children: "+91 91824 19079" })] })] }), _jsxs("div", { className: "flex gap-4 mt-6", children: [_jsx("a", { href: "https://www.linkedin.com/in/chiluverichethankumar-844a05274/", target: "_blank", rel: "noopener noreferrer", className: "p-2 bg-blue-100 rounded-full text-blue-600 hover:bg-blue-200 transition-colors", children: _jsx(Linkedin, { className: "w-6 h-6" }) }), _jsx("a", { href: "https://github.com/chiluverichethankumar", target: "_blank", rel: "noopener noreferrer", className: "p-2 bg-gray-100 rounded-full text-gray-600 hover:bg-gray-200 transition-colors", children: _jsx(Github, { className: "w-6 h-6" }) })] })] }), _jsxs("div", { className: "mt-8", children: [_jsx("h3", { className: "text-xl font-semibold text-gray-800", children: "Career Objective" }), _jsx("p", { className: "mt-2 text-gray-600 leading-relaxed", children: "To seek and maintain a full-time position that offers professional challenges utilizing interpersonal skills, excellent time management, and problem-solving skills. Dedicated Java and Web Developer with a strong foundation in problem-solving." })] })] })] }) }));
}