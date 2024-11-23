import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Menu, X } from 'lucide-react';
export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const navItems = ['About', 'Experience', 'Skills', 'Projects', 'Contact'];
    return (_jsx("header", { className: "sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm", children: _jsxs("nav", { className: "container mx-auto px-4 py-4", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("h1", { className: "text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent", children: "Chiluveri ChethanKumar" }), _jsx("div", { className: "hidden md:flex space-x-8", children: navItems.map((item) => (_jsx("a", { href: `#${item.toLowerCase()}`, className: "text-gray-600 hover:text-blue-600 transition-colors", children: item }, item))) }), _jsx("button", { className: "md:hidden", onClick: () => setIsMenuOpen(!isMenuOpen), "aria-label": "Toggle menu", children: isMenuOpen ? _jsx(X, { size: 24 }) : _jsx(Menu, { size: 24 }) })] }), isMenuOpen && (_jsx("div", { className: "md:hidden pt-4 pb-2", children: navItems.map((item) => (_jsx("a", { href: `#${item.toLowerCase()}`, className: "block py-2 text-gray-600 hover:text-blue-600 transition-colors", onClick: () => setIsMenuOpen(false), children: item }, item))) }))] }) }));
}
