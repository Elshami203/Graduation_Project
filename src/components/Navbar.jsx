import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState("");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: "Log In", href: "/login" },
        { name: "Translate", href: "/translate" },
        { name: "About Us", href: "/about" },
        { name: "Browse Books", href: "/browse" },
    ];

    useEffect(() => {
        const currentPath = location.pathname;
        const activeNavLink = navLinks.find(link => link.href === currentPath);
        if (activeNavLink) {
            setActiveLink(activeNavLink.name.toLowerCase());
        } else {
            setActiveLink("");
        }
    }, [location]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-blue-600 shadow-lg">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-7">
                        <div>
                            <Link to="/" className="flex items-center py-4 px-2">
                                <span className="font-semibold text-white text-lg">
                                    Book Translator
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className={`py-4 px-2 text-sm font-semibold ${
                                    activeLink === link.name.toLowerCase()
                                        ? "text-white bg-blue-700"
                                        : "text-blue-200 hover:text-white hover:bg-blue-700"
                                } transition duration-300`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    <div className="md:hidden flex items-center">
                        <button 
                            className="outline-none mobile-menu-button"
                            onClick={toggleMobileMenu}
                        >
                            <svg
                                className="w-6 h-6 text-blue-200 hover:text-white"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        to={link.href}
                        className={`block py-2 px-4 text-sm ${
                            activeLink === link.name.toLowerCase()
                                ? "text-white bg-blue-700"
                                : "text-blue-200 hover:text-white hover:bg-blue-700"
                        } transition duration-300`}
                        onClick={() => {
                            setActiveLink(link.name.toLowerCase());
                            setIsMobileMenuOpen(false);
                        }}
                    >
                        {link.name}
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;