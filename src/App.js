import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
function App() {
    return (_jsxs("div", { className: "min-h-screen bg-gradient-to-b from-gray-50 to-gray-100", children: [_jsx(Header, {}), _jsxs("main", { className: "container mx-auto px-4 py-8 space-y-20", children: [_jsx(About, {}), _jsx(Experience, {}), _jsx(Skills, {}), _jsx(Projects, {}), _jsx(Contact, {})] }), _jsx("footer", { className: "bg-gray-900 text-white py-8", children: _jsx("div", { className: "container mx-auto px-4 text-center", children: _jsx("p", { children: "\u00A9 2024 Chiluveri Chethan Kumar. All rights reserved." }) }) })] }));
}
export default App;
